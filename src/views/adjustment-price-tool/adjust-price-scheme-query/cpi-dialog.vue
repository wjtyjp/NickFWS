<template>
  <div class="">
    <el-dialog :close-on-click-modal="false" :visible.sync="cpiObj.isShow" title="CPI调价方案" width="60%" @close="cancelDialog">
      <el-form ref="ruleForm" :model="ruleForm" status-icon label-width="120px" class="demo-ruleForm">
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="方案名称" prop="adjmprcSchmName">
              <!-- <el-select v-model="ruleForm.lablType" readonly="" placeholder="请选择标签类型" style="width:100%;">
                <el-option v-for="item in cpiObj.lablTypeList" :key="item.value" :label="item.label" :value="item.value" />
              </el-select> -->
              <el-input v-model="ruleForm.adjmprcSchmName" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="统筹区" prop="poolarea">
              <el-input v-model="ruleForm.poolarea" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="抽样时间段">
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
          <el-col :span="6">
            <el-form-item label="参考值(CPI)">
              <el-input v-model="ruleForm.refCof" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="调整系数(%)">
              <el-input v-model="ruleForm.adjmCof" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="调整总额度(万元)">
              <el-input v-model.number="ruleForm.adjmprcSumamt" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="调整金额(万元)">
              <el-input v-model.number="ruleForm.adjmAmt" readonly />
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
          <el-table-column show-overflow-tooltip prop="servitemCode" label="项目编码" align="center" />
          <el-table-column show-overflow-tooltip prop="servitemName" label="项目名称" align="center" />
          <el-table-column show-overflow-tooltip prop="exeVal" label="执行例数" align="center" />
          <el-table-column show-overflow-tooltip prop="exeSumamt" label="总收费金额(万元)" align="center" />
        </el-table-column>
        <el-table-column label="调价情况" align="center">
          <el-table-column show-overflow-tooltip prop="initPric" label="调整前价格(元)" align="center" />
          <el-table-column show-overflow-tooltip prop="adjmCof" label="调整系数(%)" align="center" />
          <el-table-column show-overflow-tooltip prop="nwPric" label="调整后价格(元)" align="center" />
          <el-table-column show-overflow-tooltip prop="appySumamt" label="调整金额(万元)" align="center" />
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
    cpiObj: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      ruleForm: {
        adjmprcSchmName: '',
        poolarea: '',
        smplBegntime: '',
        smplEndtime: '',
        refCof: '',
        adjmCof: '',
        adjmprcSumamt: '',
        adjmAmt: '',
        schmAbst: ''
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
      this.ruleForm = this.cpiObj.cpiData.adjmSchm
      this.tableData = this.cpiObj.cpiData.lstAdjmSchmItem
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
      this.$emit('closeCpiDialog')
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
