<template>
  <div id="radar-echarts" ref="radarecharts" style="width: 100%;height: 100%">
    <!-- 雷达图 -->
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '../../mixins/resize'
// 引入提示框和标题组件
// 引入 雷达图
require('echarts/lib/chart/radar')
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
      this.chart = echarts.init(this.$refs.radarecharts)
      var option = {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          bottom: 10,
          itemWidth: 15,
          itemHeight: 15,
          data: ['A医院', 'B医院'],
          textStyle: {
            color: '#333'
          }
        },
        radar: {
          center: ['50%', '45%'],
          radius: '60%',
          splitNumber: 20,
          axisLine: {
            lineStyle: {
              color: '#999',
              opacity: 1
            }
          },
          name: {
            textStyle: {
              color: '#409EFF',
              backgroundColor: '#f1f1f1',
              borderRadius: 30,
              padding: [2, 8]
            }
          },
          splitLine: {
            lineStyle: {
              color: '#666',
              opacity: 1
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,0.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: '科室设置', max: 100 },
            { name: '人员配备', max: 100 },
            { name: '管理水平', max: 100 },
            { name: '技术水平', max: 100 },
            { name: '技术设施', max: 100 },
            { name: '工作质量', max: 100 }
          ]
        },
        series: [
          {
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
              }
            },
            data: [
              {
                value: [43, 50, 65, 46, 52, 80],
                name: 'A医院'
              },
              {
                value: [80, 35, 40, 70, 42, 35],
                name: 'B医院'
              }
            ]
          }
        ],
        color: ['#ef4b4c', '#b1eadb']
        // backgroundColor: '#fff'
      }
      this.chart.setOption(option)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
