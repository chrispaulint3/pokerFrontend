<script>
export default {
  data() {
    return {
      usrDecision: null,
      refValue: 0,
      trustValue: 0,
      taskNum: 35,
    }
  },
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <slot name="card-header">卡片头</slot>
      任务进度 {{ this.$store.state.currentClient + 1 }}/{{ this.taskNum }}
    </div>
    <div class="card-body">
      <div class="mt-3">
        <label class="form-label">系统的决策为：{{ this.$store.state.AISystemDecision }}</label>
      </div>
      <div class="mt-3">
        <label class="form-label">请输入您的估值，单位（万元）</label>
        <input class="form-control" v-model="this.$store.state.userPredictPrice" type="text" placeholder="请输入您的估值">
      </div>

      <div class="mt-3">
        <label class="form-label">系统对您有多大程度上的参考价值：{{ this.$store.state.refValue }}</label>
        <input v-model="this.$store.state.refValue" type="range" class="form-range" min="1" max="5" id="customRange1">
      </div>

      <div class="mt-3">
        <label class="form-label">您有多大程度上信任该系统：{{ this.$store.state.trustValue }}</label>
        <input v-model="this.$store.state.trustValue" type="range" class="form-range" min="1" max="5" id="customRange2">
      </div>

      <div class="mt-3">
        <div v-if="this.$store.state.currentClient == -1" class="alert alert-success" role="alert">
          点击下一轮任务，开始预实验
        </div>
        <div v-if="this.$store.state.currentClient == 5" class="alert alert-warning" role="alert">
          您已经正式开始实验，请切换可解释层级为1
        </div>
        <div v-if="this.$store.state.currentClient == 15" class="alert alert-warning" role="alert">
          请切换可解释层级为2，继续进行实验
        </div>
        <div v-if="this.$store.state.currentClient == 25" class="alert alert-warning" role="alert">
          请切换可解释层级为3，继续进行实验
        </div>
        <div v-if="this.$store.state.currentClient == 35" class="alert alert-success" role="alert">
          您已经完成实验，请填写剩余量表
        </div>
      </div>

      
      <div class=" mt-3">
        <slot name="decisionButton">下一任务触发按钮</slot>
      </div>


    </div>
  </div>
</template>