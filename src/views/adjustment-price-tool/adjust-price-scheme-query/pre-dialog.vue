<template>
  <div class="">
    <el-dialog :close-on-click-modal="false" :visible.sync="preObj.isShow" title="预分配申报调价工具" width="60%" @close="cancelDialog">
      <el-form ref="ruleForm" :model="ruleForm" status-icon label-width="130px" class="demo-ruleForm">
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="应报申报机构数">
              <el-input v-model="ruleForm.notcMedinsVal" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="申报机构数">
              <el-input v-model="ruleForm.dclaMedinsVal" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="有效申报机构数">
              <el-input v-model="ruleForm.valiDclaVal" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="有效申报机构占比">
              <el-input v-model="ruleForm.vailDclaProp" readonly />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="申报上调机构数">
              <el-input v-model="ruleForm.incrDclaVal" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="申报下调机构数">
              <el-input v-model="ruleForm.redcDclaVal" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="申报上调项目数">
              <el-input v-model.number="ruleForm.incrItemVal" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="申报下调项目数">
              <el-input v-model.number="ruleForm.redcItemVal" readonly />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="调价总额度">
              <el-input v-model="ruleForm.adjmprcSumamt" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="调整总金额">
              <el-input v-model="ruleForm.adjmAmt" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="申报上调金额">
              <el-input v-model.number="ruleForm.incrDclaSumamt" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="申报下调金额">
              <el-input v-model.number="ruleForm.redcDclaSumamt" readonly />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="上调总金额">
              <el-input v-model="ruleForm.incrSumamt" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="下调总金额">
              <el-input v-model="ruleForm.redcSumamt" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="调整大类数">
              <el-input v-model.number="ruleForm.adjmMajclsVal" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="调整项目数">
              <el-input v-model.number="ruleForm.adjmItemVal" readonly />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table :data="tableData" :height="300" highlight-current-row>
        <el-table-column type="index" label="序号" align="center" />
        <el-table-column show-overflow-tooltip prop="servitemCode" label="项目编码" align="center" />
        <el-table-column show-overflow-tooltip prop="servitemType" label="项目大类" align="center" />
        <el-table-column show-overflow-tooltip prop="servitemName" label="项目名称" align="center" />
        <el-table-column show-overflow-tooltip prop="exeVal" label="服务数量" align="center" />
        <el-table-column show-overflow-tooltip prop="adjmprcSumamt" label="调价总金额(万元)" align="center" width="150" />
        <el-table-column show-overflow-tooltip prop="totlsco" label="总评分" align="center" />
        <el-table-column label="调价信息" align="center">
          <el-table-column show-overflow-tooltip prop="stdSco" label="标准评分" align="center" />
          <el-table-column show-overflow-tooltip prop="incrSbitSco" label="加分项得分" align="center" width="90" />
          <el-table-column show-overflow-tooltip prop="incrSbitName" label="加分项标签" align="center" width="90" />
        </el-table-column>
        <el-table-column label="申报医院数占比" align="center">
          <el-table-column show-overflow-tooltip prop="medinsValiVal" label="开展数" align="center" />
          <el-table-column show-overflow-tooltip prop="medinsIncrVal" label="上调数" align="center" />
          <el-table-column show-overflow-tooltip prop="medinsRedcVal" label="下调数" align="center" />
          <el-table-column show-overflow-tooltip prop="incrScale" label="上调比例" align="center" />
          <el-table-column show-overflow-tooltip prop="reduceScale" label="下调比例" align="center" />
        </el-table-column>
        <el-table-column label="申报医院数占比" align="center">
          <el-table-column show-overflow-tooltip prop="initPric" label="当前价格" align="center" />
          <el-table-column show-overflow-tooltip prop="nwPric" label="调价后加权价" align="center" width="100" />
          <el-table-column show-overflow-tooltip prop="gain" label="本次涨幅%" align="center" width="90" />
          <el-table-column show-overflow-tooltip prop="maxGain" label="最高涨幅%" align="center" width="90" />
          <el-table-column show-overflow-tooltip prop="minGain" label="最低涨幅%" align="center" width="90" />
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
    preObj: {
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
      this.ruleForm = this.preObj.preData.adjmSchm
      this.tableData = this.preObj.preData.lstAdjmSchmItem
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
      this.$emit('closePreDialog')
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
