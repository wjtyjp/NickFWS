<template>
  <div class="">
    <el-dialog :close-on-click-modal="false" :visible.sync="pcmObj.isShow" title="点数法调价" width="60%" @close="cancelDialog">
      <el-form ref="ruleForm" :model="ruleForm" status-icon label-width="120px" class="demo-ruleForm">
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="方案名称">
              <el-input v-model.number="ruleForm.adjmprcSchmName" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="统筹区">
              <el-input v-model="ruleForm.poolarea" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="调价总额度(万元)">
              <el-input v-model="ruleForm.adjmprcSumamt" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="调价总金额(万元)">
              <el-input v-model="ruleForm.adjmAmt" readonly />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="调整总点数">
              <el-input v-model="ruleForm.adjmPtVal" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="抽样月份范围">
              <el-row>
                <el-col :span="11">
                  <el-input v-model.number="ruleForm.smplBegntime" readonly />
                </el-col>
                <el-col :span="2" style="text-align:center">至</el-col>
                <el-col :span="11">
                  <el-input v-model.number="ruleForm.smplEndtime" readonly />
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="16">
          <el-col :span="24">
            <el-form-item label="方案说明">
              <el-input v-model="ruleForm.schmAbst" readonly style="width:100%" type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table :data="tableData" :height="300" highlight-current-row>
        <el-table-column type="index" label="序号" align="center" />
        <!-- <el-table-column :reserve-selection="true" type="selection" width="55" align="center"/> -->
        <el-table-column label="基本情况" align="center">
          <el-table-column show-overflow-tooltip prop="servitemTypeName" label="大类名称" align="center" />
          <el-table-column show-overflow-tooltip prop="servitemName" label="项目名称" align="center" />
          <el-table-column show-overflow-tooltip prop="prcunt" label="单位" align="center" />
          <el-table-column show-overflow-tooltip prop="nwPt" label="项目点数" align="center" />
          <el-table-column show-overflow-tooltip prop="exeVal" label="执行数量" align="center" />
        </el-table-column>
        <el-table-column label="价格" align="center">
          <el-table-column show-overflow-tooltip prop="initPric" label="调整前(元)" align="center" />
          <el-table-column show-overflow-tooltip prop="adjmprcCof" label="调整幅度(%)" align="center" />
          <el-table-column show-overflow-tooltip prop="nwPric" label="调整后(元)" align="center" />
          <el-table-column show-overflow-tooltip prop="appySumamt" label="调价金额(万元)" align="center" width="120" />
        </el-table-column>
        <el-table-column label="" align="center">
          <el-table-column show-overflow-tooltip prop="servitemCont" label="项目内涵" align="center" />
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cancelDialog">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  mixins: [

  ],
  props: {
    pcmObj: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      ruleForm: {

      },
      tableData: [],
      total: 0, // 总条数
      pageSize: 10, // 每页多少条
      currentPage: 1 // 当前页
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$nextTick(() => {
      this.ruleForm = this.pcmObj.pcmData.adjmSchm
      this.tableData = this.pcmObj.pcmData.lstAdjmSchmItem
    })
  },
  mounted() {

  },
  methods: {
    // 切换pageSize
    handleSizeChange(val) {
      this.pageSize = val
      this.getTableDate(this.currentPage, this.pageSize)
    },
    // 切换页码
    handleCurrentChange(val) {
      this.currentPage = val
      this.getTableDate(this.currentPage, this.pageSize)
    },
    cancelDialog() {
      this.$emit('closePcmDialog')
    }
  }
}
</script>

<style scoped lang="scss">
  .el-table {
    margin-top: $const16;
  }
  .el-dialog__wrapper /deep/ .el-dialog__body {
    padding-bottom: 0;
  }
</style>
