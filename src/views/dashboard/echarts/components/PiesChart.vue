<template>
  <div id="pies-echarts" ref="piesecharts" style="width: 100%;height: 100%">
    <!-- 饼状图 -->
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '../../mixins/resize'
// 引入提示框和标题组件
// 引入 饼状图
require('echarts/lib/chart/pie')
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
    /**
     * hjkhkjhk
     */
    echartsInit() {
      this.chart = echarts.init(this.$refs.piesecharts)
      var option = {
        title: {
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        legend: {
          bottom: 10,
          itemWidth: 15,
          itemHeight: 15,
          data: ['口腔科', '神经科', '内科', '外科', '眼科', '耳科']
        },

        calculable: true,
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [10, 100],
            center: ['50%', '45%'],
            roseType: 'area',
            data: [
              { value: 10, name: '口腔科' },
              { value: 15, name: '神经科' },
              { value: 25, name: '内科' },
              { value: 20, name: '外科' },
              { value: 35, name: '眼科' },
              { value: 40, name: '耳科' }
            ]
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
