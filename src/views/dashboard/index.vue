<template>
  <div class="dashboard">
    index
    <!-- <component :is="myEcharts" /> -->
  </div>
</template>

<script>
import DashboardAdmin from './echarts'
export default {
  name: 'Dashboard',
  components: {
    DashboardAdmin
  },
  data() {
    return {
      myEcharts: DashboardAdmin
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
