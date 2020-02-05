<template>
  <div id="line-chart" ref="linechart" style="width: 100%;height: 100%">
    <!-- 饼状图 -->
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '../../mixins/resize'
// 引入提示框和标题组件
// 引入 折线图
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
  components: {},
  mixins: [resize],
  props: {
    // eslint-disable-next-line vue/require-default-prop
    person: Array
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    person() {
      this.echartsInit()
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
      this.chart = echarts.init(this.$refs.linechart)
      var option = {
        // backgroundColor: '#fff',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#02D2D9'
            }
          }
        },
        legend: {
          data: ['门诊人数', '住院人数'],
          orient: 'horizontal',
          align: 'left',
          x: 'center',
          y: '20px'
        },
        // 图表距边框的距离
        grid: {
          top: '70px',
          left: '30px',
          right: '40px',
          bottom: '25px',
          containLabel: true
        },
        // x轴
        xAxis: {
          type: 'category',
          data: [
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
            '星期日'
          ],
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: 'rgb(49, 192, 228)' // 设置x轴的颜色
            }
          },
          // 刻度线
          axisTick: {
            show: false
          }
        },
        // y轴
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: '#87CEFA'
            }
          },
          // 刻度线
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '门诊人数',
            symbolSize: 8,
            data: this.person[0],
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                color: '#0dd'
              }
            }
          },
          {
            name: '住院人数',
            symbolSize: 8,
            data: this.person[1],
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                color: '#f44'
              }
            }
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
