<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default{
  components:{Header,Footer}
}
</script>

<template>
  <Header/>
  <div class="container-fluid bg-light mb-5">
    <div class="row justify-content-center">
      <div class="col-md-3 offset-2 align-self-center">
        <h1 class="display-1">XAI System</h1>
        <p class="lead">通过可解释技术构建透明的、可信任的人工智能系统</p>
          <a href="/"><button type="button"  class="btn btn-primary btn-lg">
            开始了解
          </button></a>
          <a href="/task"><button type="button" to="/task" class="btn btn-primary btn-lg mx-2">
            开始任务
          </button></a>
      </div>
      <div class="col-md-7 banner-image pt-5">
        <img class="img-fluid" src="../assets/pic1.png">
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row pb-md-5">
      <div class="col-md-5">
        <h2 class="display-5 fw-normal pt-5">理解黑箱模型</h2>
        <p class="lead fw-normal mb-3">
          通过人工智能可解释技术，我们了解人工智能系统的决策机制，以此理解系统、学习系统
        </p>
        <p class="lh-lg">
          通过解释工智能系统的事实排序，我们了解什么特征对于系统来说是重要的,什么特征是不重要的甚至是有欺骗性的，
          人工智能模型多种可解释方案相结合：LIME、SHAP、Counterfactual
        </p>
      </div>
      <div class="col-md-7 mx-auto">
        <img fluid class="img-style img-fluid" src="../assets/blackBox.png">
      </div>
      <hr />
    </div>
    <div class="row pb-md-5">
      <div class="col-md-5">
        <h2 class="display-5 fw-normal pt-5">信任</h2>
        <p class="lead fw-normal">
          信任是人与人之间协作的重要组成部分，人与人之间通过事实与价值的一致达成信任，完成既定目标，
        </p>
        <p class="lh-lg">
          如果人类在
          合作中出现失误，合理解释能够弥合失误带来的信任危机。人机混合系统中机器产生的失误
          同样会给人机之间的信任带来灾难性的后果，机器带来的即时解释会对人机之间的信任产生影响
        </p>
      </div>
      <div class="col-md-7 mx-auto">
        <img fluid class="img-style img-fluid" src="../assets/trust.jpg">
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
body,
html {
  height: 100%;
}

.img-style{
  height: 500px;
  width: 700px;
}
</style>
