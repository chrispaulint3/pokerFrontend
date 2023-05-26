<script>
import PerfoemanceChart from './PerfoemanceChart.vue'

export default {
  props: {
    fields: Array,
    historyAIDecision: Array,
    historyCorrectDecision: Array,
    historyUserDecision: Array,

  },
  components: { PerfoemanceChart },
  data() {
    return {
      AIScore: 0,
      userScore: 0,
      historyRecordsLength: 7,
    }
  },
  methods: {
    reset() {
      this.AIScore = 0
      this.userScore = 0
    }
  },
  computed: {
    hindLatestAIDecision(){
      // 序列的长度小于显示数据项目数量
      var length = this.historyAIDecision.length
      if(length <= this.historyRecordsLength){
         return this.historyAIDecision.slice(0,length-1)
      }
      else{
        return this.historyAIDecision.slice(length-1-this.historyRecordsLength,length-1)
      }
    },

    hindeLatedCorrectResult(){
      var length = this.historyCorrectDecision.length
      if(length <= this.historyRecordsLength){
         return this.historyCorrectDecision.slice(0,length-1)
      }
      else{
        return this.historyCorrectDecision.slice(length-1-this.historyRecordsLength,length-1)
      }
    },
    
    AIError(){
      var length = this.historyAIDecision.length
      if(length >=2){
        this.AIScore += Math.abs(this.historyAIDecision[length-2]-this.historyCorrectDecision[length-2])
      }
      return this.AIScore
    },

    userError(){
      var userlength = this.historyUserDecision.length
      var correctLength = this.historyCorrectDecision.length
      if(userlength >=1 && correctLength>=2){
        this.userScore += Math.abs(this.historyUserDecision[userlength-1]-this.historyCorrectDecision[correctLength-2])
      }
      return this.userScore
    },

    dataSeries1(){
      return { name: 'AI history Decision', data: this.hindLatestAIDecision}
    },
    dataSeries2(){
      return { name: 'history correct result', data: this.hindeLatedCorrectResult}
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <slot name="card-header">卡片头</slot>
    </div>
    <div class="card-body">
      
      <p>当前系统误差：{{ AIError}}</p>
      <p>当前用户误差：{{userError }}</p>
      <div class="d-grid mx-auto">
        <button @click="reset" class="btn btn-primary">只保留上一轮得分</button>
      </div>

      <div>
        <label for="historyRecord" class="form-label">输入跟踪最近的AI预测值和真实值数量</label>
        <input type="number" class="form-control" id="historyRecord" v-model="historyRecordsLength">
      </div>

      <table class="table table-bordered table-stripped mt-3">
        <thead>
          <tr>
            <th v-for="field in fields" :key='field'>
              {{ field }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in hindLatestAIDecision">
            <td>{{ index + 1 }}</td>
            <td>{{ value }}</td>
            <td>{{ hindeLatedCorrectResult[index] }}</td>
          </tr>
        </tbody>
      </table>
      <PerfoemanceChart :chartData="[dataSeries1, dataSeries2]"></PerfoemanceChart>
    </div>
  </div>
</template>