<template>
  <div id="bar-chart" ref="barchart" style="width: 100%;height: 100%">
    <!-- 饼状图 -->
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '../../mixins/resize'
// 引入提示框和标题组件
// 引入 柱状图
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
  components: {},
  mixins: [resize],
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.echartsInit()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    echartsInit() {
      this.chart = echarts.init(this.$refs.barchart)
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          bottom: 10,
          itemWidth: 15,
          itemHeight: 15,
          data: ['门诊1', '门诊2', '门诊3']
        },
        grid: {
          top: '30px',
          left: '20px',
          right: '20px',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        series: [
          {
            name: '门诊1',
            barWidth: '50%',
            type: 'bar',
            stack: '总量',
            color: 'rgb(50,200,200)',
            data: [200, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '门诊2',
            barWidth: '50%',
            type: 'bar',
            stack: '总量',
            color: 'rgb(200,180,240)',
            data: [143, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '门诊3',
            barWidth: '50%',
            type: 'bar',
            stack: '总量',
            color: 'rgb(110,200,250)',
            data: [220, 182, 191, 234, 290, 330, 100]
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
