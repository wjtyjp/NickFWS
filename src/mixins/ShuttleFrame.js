export default {
  name: '',
  components: {

  },
  mixins: [

  ],
  props: {
    dataObj: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      // 穿梭表格
      listLoading: true,
      staffData: [],
      selectedStaffData: [],
      tableKey: 0,
      rowKey: 'rowKey'
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
  },
  mounted() {

  },
  methods: {

    // 将左边表格选择项存入staffData中
    handleStaffChange(rows) {
      this.staffData = []
      if (rows) {
        rows.forEach(row => {
          if (row) {
            this.staffData.push(row)
          }
        })
      }
    },
    // 左边表格选择项移到右边
    addStaff() {
      setTimeout(() => {
        this.$refs['staffTable'].clearSelection()
        this.$refs['selectedStaffTable'].clearSelection()
      }, 0)
      let repeat = false
      if (repeat === false) {
        this.staffData.forEach(item => {
          this.selectedStaffList.push(item)
        })
        for (let i = 0; i < this.staffList.length; i++) {
          for (let j = 0; j < this.staffData.length; j++) {
            if (
              this.staffList[i] &&
                  this.staffData[j] &&
                  this.staffList[i].servitemId === this.staffData[j].servitemId) {
              this.staffList.splice(i, 1)
            }
          }
        }
      }
    },
    // 右边表格选择项移到左边
    removeStaff() {
      setTimeout(() => {
        this.$refs['staffTable'].clearSelection()
        this.$refs['selectedStaffTable'].clearSelection()
      }, 0)
      this.selectedStaffData.forEach(item => {
        this.staffList.push(item)
      })
      for (let i = 0; i < this.selectedStaffList.length; i++) {
        for (let j = 0; j < this.selectedStaffData.length; j++) {
          if (
            this.selectedStaffList[i] &&
                this.selectedStaffData[j] &&
                this.selectedStaffList[i].servitemId === this.selectedStaffData[j].servitemId
          ) {
            this.selectedStaffList.splice(i, 1)
          }
        }
      }
    },
    // 将右边表格选择项存入selectedStaffData中
    handleSelectedStaffChange(rows) {
      this.selectedStaffData = []
      if (rows) {
        rows.forEach(row => {
          if (row) {
            this.selectedStaffData.push(row)
          }
        })
      }
    }
  }
}
