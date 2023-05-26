<script>
export default {
  props:{
    data:{
      mse:Number,
      mae:Number,
      r2:Number,
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
    <ol>MSE(均方根误差,误差越小表明性能越好)：{{data.mse}}</ol>
    <ol>MAE(平均绝对误差，误差越小表明性能越好)：{{data.mae}}</ol>
    <ol>r2 score(该指标在0-1的范围内，值越大性能越好):{{ data.r2 }}</ol>
  </div>
</div>
</template>