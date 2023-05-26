<script>
export default {
  props: {
    fields: Array,
    
  },
  data(){
    return {
      attributionMap:['交易时间','收藏房源','面积','起居室','书房','厨房','卧室','建造种类','建造时间','房屋状态',
      '建筑结构','梯户比','有无电梯','五年产权','有无地铁','所在小区均价','楼层数','距北京中心距离']
    }
  }
}
</script>

<template>

<div class="card">
    <div class="card-body">
      <h5 class="card-title">房源信息</h5>
      <p class="card-text">根据房源信息对房价进行估值</p>
      <p class="card-text"><small class="text-muted">建筑类型： 1-塔楼，2-平房，2-板楼与塔楼的组合，4-板楼</small></p>
      <p class="card-text"><small class="text-muted">房屋装修状态：1-其他 2-粗糙 3-简单 4-精装</small></p>
      <p class="card-text"><small class="text-muted">建筑结构：1-不确定2-混合3-砖木4-砖和混凝土5-钢 6-钢-混凝土复合材料</small></p>
    </div>
    <table class="table table-bordered table-stripped">
    <thead>
      <tr>
        <th v-for="field in fields" :key='field'>
          {{ field }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value,key,index) in this.$store.state.client" >
        <td>{{ attributionMap[index]}}</td><td>{{value}}</td>
      </tr>
    </tbody>
  </table>
  </div> 

</template>