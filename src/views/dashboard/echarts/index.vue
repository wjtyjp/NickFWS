<template>
  <div class="dashboard-container">
    <div class="item-wrap">
      <el-row :gutter="24">
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <div class="item" @click="getData(1)">
            <i class="el-icon-star-off" />
            <span>省级医院</span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <div class="item" @click="getData(2)">
            <i class="el-icon-star-off" />
            <span>市级医院</span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <div class="item" @click="getData(3)">
            <i class="el-icon-star-off" />
            <span>县级医院</span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <div class="item" @click="getData(4)">
            <i class="el-icon-star-off" />
            <span>诊所医院</span>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- echarts折线图表 -->
    <div class="echarts-box">
      <line-chart ref="mychart" :person="person" />
    </div>
    <!-- echarts雷达、柱状、饼状 -->
    <div class="echart-list">
      <el-row :gutter="24">
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="echart-list-item">
            <keep-alive>
              <radar-chart />
            </keep-alive>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="echart-list-item">
            <keep-alive>
              <pies-chart />
            </keep-alive>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="echart-list-item">
            <keep-alive>
              <bar-chart />
            </keep-alive>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
// 引入折线线图
require('echarts/lib/chart/line')
import LineChart from './components/LineChart'
import RadarChart from './components/RadarChart'
import PiesChart from './components/PiesChart'
import BarChart from './components/BarChart'
export default {
  name: 'DashboardAdmin',
  components: {
    LineChart,
    RadarChart,
    PiesChart,
    BarChart
  },
  data() {
    return {
      chart: '',
      personData: {
        hospital1: [
          [300, 999, 322, 888, 600, 1100, 535],
          [1000, 400, 822, 423, 920, 501, 1005]
        ],
        hospital2: [
          [400, 800, 500, 888, 400, 1200, 500],
          [888, 222, 900, 444, 920, 322, 1005]
        ],
        hospital3: [
          [300, 999, 322, 888, 600, 1100, 535],
          [733, 400, 1152, 333, 920, 666, 1005]
        ],
        hospital4: [
          [100, 500, 322, 888, 600, 200, 535],
          [522, 80, 822, 200, 455, 501, 100]
        ]
      },
      person: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData(val) {
      switch (val) {
        case 1:
          this.person = this.personData.hospital1
          break
        case 2:
          this.person = this.personData.hospital2
          break
        case 3:
          this.person = this.personData.hospital3
          break
        case 4:
          this.person = this.personData.hospital4
          break
        default:
          this.person = this.personData.hospital1
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.echarts-box {
  width: 100%;
  height: 400px;
  background-color: #fff;
}
.item-wrap {
  margin-bottom: 10px;
  box-sizing: border-box;
  & .el-row .el-col {
    padding: 10px 20px;
    box-sizing: border-box;
    & .item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 70px;
      padding: 0 20px;
      box-sizing: border-box;
      background-color: #fff;
      color: #666;
      box-shadow: 0 0 10px rgba(10, 10, 10, 0.1);
      cursor: pointer;
      & > i {
        color: rgb(12, 212, 226);
        font-size: 30px;
        transition: 0.5s;
      }
      & > span {
        font-size: 16px;
        font-weight: 700;
      }
    }
    & .item:hover {
      background-color: rgb(236, 246, 255);
    }
  }
}
.echart-list {
  margin-top: 20px;
  & .el-col {
    margin-bottom: 15px;
    & .echart-list-item {
      height: 300px;
      background-color: #fff;
    }
  }
}
</style>
