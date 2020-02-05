<template>
  <div class="PointAdjustmentPrice">
    <!-- 点数法调价 -->
    <section class="layer">
      <div class="box">
        <div class="box-header">
          <span class="box-title">点数法调价</span>
        </div>
        <div class="box-body">
          <el-form ref="searchForm" :rules="rules" :model="searchForm" label-width="110px">
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item label="方案名称" prop="adjmprcSchmName">
                  <el-input v-model="searchForm.adjmprcSchmName" placeholder="请输入方案名称" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="调整总金额" prop="adjmAmt">
                  <el-input v-model="searchForm.adjmAmt" readonly placeholder="请输入调整总金额">
                    <template slot="append">万元</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="调整总额度" prop="adjmprcSumamt">
                  <el-input v-model="searchForm.adjmprcSumamt" placeholder="请输入调整总额度">
                    <template slot="append">万元</template>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="16">
              <el-col :span="6">
                <el-form-item label="统筹区" prop="poolarea">
                  <el-select v-model="searchForm.poolarea" placeholder="请选择统筹区" style="width:100%">
                    <el-option v-for="item in poolareaList" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="调整总点数" prop="adjmPtVal">
                  <el-input v-model="searchForm.adjmPtVal" readonly placeholder="请输入调整总点数" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抽样时间段" prop="inputTime">
                  <el-date-picker
                    v-model="searchForm.inputTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    style="width:100%" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="16">
              <el-col :span="24">
                <el-form-item label="方案说明" prop="schmAbst">
                  <el-input v-model="searchForm.schmAbst" :autosize="{minRows: 2, maxRows: 2}" resize="none" type="textarea" placeholder="请输入方案说明" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="16" style="text-align:right">
              <el-col :span="24">
                <el-button :loading="btnStatus.submit" type="primary" @click="submit">
                  提交
                  <i class="el-icon-check el-icon--right" />
                </el-button>
                <el-button type="primary" @click="restSearch">
                  重置
                  <i class="el-icon-refresh el-icon--right" />
                </el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer">
      <adjustment-table ref="adjustTable" :table-info="tableInfo" @setRightTable="getRightTable" />
    </section>
  </div>
</template>

<script>
import commonApi from '@/api/commonApi/commonApi'
import API from '@/api/adjustment-price-tool/point-adjustment-price-tool/point-adjustment-price'
import APII from '@/api/adjustment-price-tool/cost-calculate-adjustment-price-tool/cost-calculate-adjustment-price'
import adjustmentTable from '../../components/AdjustmentTable/adjustment-table'
import upload from '@/components/UploadExcel/index'
// import FileSaver from 'file-saver'
// import XLSX from 'xlsx'

export default {
  name: 'PointAdjustmentPrice',
  components: {
    'adjustment-table': adjustmentTable,
    'upload-excel': upload // 导入Excel
  },
  props: {

  },
  data() {
    return {
      // 按钮状态，防止快速重复点击
      btnStatus: {
        submit: false
      },
      searchForm: {
        adjmprcSchmName: '',
        adjmAmt: '',
        adjmprcSumamt: '',
        poolarea: '',
        adjmPtVal: '',
        inputTime: '',
        schmAbst: ''
      },
      rules: {
        adjmprcSchmName: [{ required: true, message: '请输入方案名称', trigger: 'blur' }],
        adjmprcSumamt: [{ required: true, message: '请输入调整总额度', trigger: 'blur' }],
        poolarea: [{ required: true, message: '请选择统筹区', trigger: 'change' }]
      },
      // 调价表格组件参数
      tableInfo: {
        title: '点数法调价',
        searchTitle: '点数',
        show: false,
        CPIshow: false,
        url: API.listPricServitemPtOfAdjust, // 左表搜索API
        exportUrl: API.exportPricSerPtInfoOfAdjust // 左表导出API
      },
      poolareaList: [],
      rightTable: {
        tableData: []
      }
    }
  },
  computed: {

  },
  created() {
  },
  mounted() {
    this.getDrop()
  },
  methods: {
    // 获取下拉数据
    getDrop() {
      let params = 'aaa027'
      commonApi.getCodeValueListMultiple(params).then(res => {
        if (res.data.code === 0) {
          this.dropData = res.data.data
          this.poolareaList = this.dropData.aaa027.map(item => {
            return {
              value: item.dictValueCode,
              label: item.dictValueName
            }
          })
        }
      })
    },
    // 获取右表数据计算价格
    getRightTable(data) {
      this.rightTable.tableData = data
      this.searchForm.adjmAmt = 0
      this.searchForm.adjmPtVal = 0
      data.map(item => {
        this.searchForm.adjmAmt += (item.appySumamt || 0)
        this.searchForm.adjmPtVal += (item.ptCnt || 0)
      })
    },
    // 提交
    submit() {
      this.$refs['searchForm'].validate((valid) => {
        if (valid) {
          if (this.rightTable.tableData.length === 0) {
            this.$message.error('未选择项目！')
            return
          }
          this.btnStatus.submit = true
          this.searchForm.smplBegntime = this.searchForm.inputTime[0]
          this.searchForm.smplEndtime = this.searchForm.inputTime[1]
          delete this.searchForm.inputTime
          let params = {
            adjmSchm: this.searchForm,
            lstAdjmNotcMedins: [],
            lstAdjmSchmItem: [
              ...this.rightTable.tableData
            ],
            lstAdjmSchmItemType: []
          }
          params.adjmSchm.notcStas = '2'
          params.adjmSchm.schmAdjmType = '104'
          APII.savePricAdjmSchmDetail(params).then(res => {
            if (res.data.code === 0) {
              this.$message.success(res.data.message)
              this.restSearch()
            } else {
              this.$message.error(res.data.message)
            }
            this.btnStatus.submit = false
          }).catch(() => {
            this.btnStatus.submit = false
          })
        }
      })
    },
    //  重置
    restSearch() {
      this.$refs.searchForm.resetFields()
      this.$refs.adjustTable.resetTable()
    }
  }
}
</script>

<style scoped lang="scss">
.box{
  padding-bottom: 16px;
  .table-input{
    margin-bottom: 0;
  }
}
</style>
