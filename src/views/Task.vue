<script>
import XAIHeader from "../components/Header.vue"
import SysPanel from "../components/SysPanel.vue"
import PerformPanel from "../components/PerformPanel.vue"
import DesionPanel from "../components/DecisionPanel.vue"
import ClientTable from "../components/ClientTable.vue"
import Map from "../components/Map.vue"
import ExplainImage from "../components/ExplainImage.vue"
import ExlainLevel from "../components/ExplainLevel.vue"
import { url } from "../script/url"


export default {
  components: { XAIHeader, SysPanel, PerformPanel, DesionPanel, ClientTable, Map, ExplainImage, ExlainLevel },
  mounted() {
    this.axios.post("/login/", { baseURL: url }).then((response) => {
      if (response.data.stateCode === 1) {
        this.usrName = response.data.usrName
        this.$store.state.loginState.isLogin = true
      }
      else {
        this.$router.push('/loginP/')
        alert("您需要先登录才能开始实验")
      }

    })
  },
  name: 'MainTask',
  data() {
    return {
      sysData: { mse: 3496.45, mae: 37.66, r2: 0.93 },
      clientData: {
        fields: ['特征', '值'],
      },
      imageUrl: "",
      AIScore: 0,
      historyAIDecision: [],
      historyCorrectDecision: [],
      historyUserDecision: [],
      longitude: 116.404,
      latitude: 39.915,
    }
  },
  methods: {
    complete: function () {
      // 对任务状态进行累加
      this.$store.commit('increment')
      // 请求房源信息
      var clientUrl = "/client/" + this.$store.state.currentClient
      this.axios.get(clientUrl, { baseURL: url }).then((response) => {

        // 存储总价格与房源数据
        this.historyCorrectDecision.push(response.data[0].fields.totalprice)
        this.$store.state.client = response.data[0].fields

        // 单独存储lng和lat数据
        this.longitude = response.data[0].fields.lng
        this.latitude = response.data[0].fields.lat

        // 去除不为用户显示的特征值
        delete this.$store.state.client.totalprice
        delete this.$store.state.client.floor_type
        delete this.$store.state.client.district
        delete this.$store.state.client.lng
        delete this.$store.state.client.lat

        //获取当前可解释图片路径
        this.imageUrl = "http://pyjac.work/images/Figure_" + this.$store.state.currentClient + ".png"
      })

      // 可解释人工智能系统给出的预测
      var AISystemUrl = "/AISys/" + this.$store.state.currentClient
      this.axios.get(AISystemUrl, { baseURL: url }).then((response) => {
        this.historyAIDecision.push(response.data[0].fields.predict_value)
        this.$store.state.AISystemDecision = response.data[0].fields.predict_value

      })

      // 反馈用户给出的预测
      if (this.$store.state.currentClient >= 1) {
        this.axios.post("/feedback/", {
          baseURL: url, refValue: this.$store.state.refValue, trustValue: this.$store.state.trustValue,
          userPredictPrice: this.$store.state.userPredictPrice, explainLevel: this.$store.state.explainLevel,houseId:this.$store.state.currentClient
        }).then((response) => {
        })

        // 记录用户历史预测进行计算
        this.historyUserDecision.push(this.$store.state.userPredictPrice)
        // 用户输入复位
        this.$store.state.userPredictPrice = 0
        this.$store.state.trustValue = 3
        this.$store.state.refValue = 3
      }
    },
  }

}
</script>

<template>
  <XAIHeader :taskActive="true"></XAIHeader>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <ClientTable :fields="clientData.fields"></ClientTable>
      </div>

      <div class="col-6">
        <ExlainLevel>
          <template #card-header>
            可解释层级选择模块
          </template>
        </ExlainLevel>
        <SysPanel v-if="this.$store.state.explainLevel >= 2" :data="sysData" class="mt-3">
          <template #card-header>
            系统性能模块
          </template>
        </SysPanel>

        <DesionPanel class="mt-3">
          <template #card-header>
            综合决策模块
          </template>
          <template #decisionButton>
            <div class="d-grid mx-auto">
              <button @click="complete" class="btn btn-primary">下一轮任务</button>
            </div>
          </template>
        </DesionPanel>

      </div>
    </div>
    <div class="row mt-3">
      <PerformPanel v-if="this.$store.state.explainLevel >= 2" :fields="['轮次', '系统决策', '准确值']"
        :historyAIDecision="historyAIDecision" :historyCorrectDecision="historyCorrectDecision"
        :historyUserDecision="historyUserDecision" class="mt-3">
        <template #card-header>
          综合表现模块
        </template>
      </PerformPanel>
    </div>

    <div class="row mt-3"><Map :longitude="longitude" :latitude="latitude"></Map></div>

    <div class="row mt-3">
      <ExplainImage :imageUrl="imageUrl"
        v-if="this.$store.state.explainLevel >= 3 && this.$store.state.currentClient >= 0" class="mt-2">
      </ExplainImage>
    </div>
  </div>
</template>



