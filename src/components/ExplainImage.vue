<script>
export default{

  props:{'imageUrl':String}
  
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">SHAP value 解释器</h5>
      <p class="card-text">我们利用可解释人工智能系统SHAP对人工智能系统内部的决策机制进行解释，其中横轴代表房屋价格，房屋的平均价格在横轴上标注出来，
        人工智能模型的预测值在虚线上方标注出来。纵轴代表特征，特征对应的红色/蓝色柱状体的长度代表特征的重要程度，柱状体越长，则特征越重要，红色的意思是
        人工智能系统认为该特征的值有利于提高房屋估价，蓝色的意义与红色相反。</p>
    </div>
    <img :src="this.imageUrl" class="img-fluid" alt="SHAP VALUE">
  </div> 
</template>