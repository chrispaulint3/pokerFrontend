<script>
export default{

  props:{
    chartData:Array,
  },

  computed:{
    chartOptions(){
      return {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '房价预测曲线',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', '#545454'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          title: {
            text: '实验轮次'
          }
        },
        yaxis: {
          title: {
            text: '房屋价格(万元)'
          },
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    }
  }
}

</script>

<template>

<apexchart type="line" height="350" :options="chartOptions" :series="chartData"></apexchart>

</template>