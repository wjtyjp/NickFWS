<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 08:41:55
 * @LastEditTime: 2019-09-27 13:48:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <section class="layer">
      <div class="box">
        <div class="box-header">
          <span class="box-title">CPI调价方案</span>
        </div>
        <div class="box-body">
          <el-form ref="searchForm" :rules="rules" :model="searchForm" label-width="100px">
            <el-row :gutter="16">
              <el-col :span="6">
                <el-form-item label="方案名称" prop="adjmprcSchmName">
                  <el-input v-model="searchForm.adjmprcSchmName" placeholder="请输入方案名称" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="统筹区" prop="poolarea">
                  <el-select v-model="searchForm.poolarea" placeholder="请选择统筹区" style="width:100%">
                    <el-option
                      v-for="item in selectList.poolareaList"
                      :key="item.dictValueCode"
                      :label="item.dictValueName"
                      :value="item.dictValueCode" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抽样时间段" prop="timeSlot">
                  <el-date-picker
                    v-model="searchForm.timeSlot"
                    type="monthrange"
                    range-separator="至"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份"
                    style="width:100%" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="16">
              <el-col :span="6">
                <el-form-item label="参考值" prop="refCof">
                  <el-input v-model="searchForm.refCof" placeholder="请输入参考值">
                    <template slot="append">(CPI)</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="调整系数" prop="adjmprcCof">
                  <el-input v-model="searchForm.adjmprcCof" placeholder="请输入调整系数">
                    <template slot="append">%</template>
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
              <el-col :span="6">
                <el-form-item label="调整金额" prop="adjmAmt">
                  <el-input v-model="searchForm.adjmAmt" readonly placeholder="请输入调整金额">
                    <template slot="append">万元</template>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="18">
                <el-form-item label="方案说明" prop="taskName">
                  <el-input v-model="searchForm.taskName" :autosize="{minRows: 3, maxRows: 3}" resize="none" type="textarea" placeholder="请输入方案说明" />
                </el-form-item>
              </el-col>
              <el-col :span="6" class="text-right" style="text-align:right">
                <el-button :loading="btnStatus.submit" type="primary" @click="submit">
                  提交
                  <i class="el-icon-plus el-icon--right" />
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
import ApiObjCpi from '@/api/adjustment-price-tool/according-cpi-adjustment/cpi-adjustment-price-plan'
import API from '@/api/adjustment-price-tool/cost-calculate-adjustment-price-tool/cost-calculate-adjustment-price'
import upload from '@/components/UploadExcel/index'
import adjustmentTable from '../../components/AdjustmentTable/adjustment-table'
// import FileSaver from 'file-saver'
// import XLSX from 'xlsx'
import commonApi from '@/api/commonApi/commonApi'
export default {
  name: 'CostCalculateAdjustmentPrice',
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
      tableInfo: {
        title: '服务量分配式调价',
        searchTitle: '标签类别',
        show: true,
        CPIshow: true,
        url: ApiObjCpi.listPricPoolareaItemFeeOfCpi,
        exportUrl: API.exportPricPoolItemFeeOfServ
      },
      rightTable: {
        tableData: []
      },
      searchForm: {
        adjmprcSchmName: '', // 调价方案名称
        adjmprcSumamt: '', // 调价总额度
        adjmAmt: 0, // 调价总金额
        adjmItemVal: '', // 调整项目数
        poolarea: '',
        smplBegntime: '',
        smplEndtime: '',
        schmAbst: '',
        timeSlot: ''
      },
      searchInfo: {},
      rules: {
        adjmprcSchmName: [
          { required: true, message: '请输入方案名称', trigger: 'blur' }
        ],
        adjmprcSumamt: [
          { required: true, message: '请输入调价总额度', trigger: 'blur' }
        ],
        poolarea: [
          { required: true, message: '请选择统筹区', trigger: 'blur' }
        ],
        smplBegntime: [
          { required: true, message: '请选择抽样时间', trigger: 'blur' }
        ]
      },
      selectList: {
        poolareaList: [],
        itemTypeList: []
      },
      timeShow: ''
    }
  },
  computed: {

  },
  watch: {
  },
  created() {
  },
  mounted() {
    this.getPoolareaList()
  },
  methods: {
    // 统筹区数据
    getPoolareaList() {
      commonApi.getCodeValueListMultiple('aaa027').then(res => {
        if (res.data.code === 0) {
          this.selectList.poolareaList = res.data.data.aaa027
        }
      })
    },
    // 获取右表数据计算价格
    getRightTable(data) {
      this.rightTable.tableData = data
      this.searchForm.adjmAmt = 0
      data.map(item => {
        this.searchForm.adjmAmt += (item.appySumamt || 0)
      })
      this.searchForm.adjmAmt
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
          this.dataPick(this.searchForm.timeSlot)
          let params = {
            adjmSchm: this.searchForm,
            lstAdjmNotcMedins: [],
            lstAdjmSchmItem: [],
            lstAdjmSchmItemType: []
          }
          params.adjmSchm.schmAdjmType = '102' // 方案类别
          params.adjmSchm.notcStas = '2'
          this.rightTable.tableData.map(item => {
            params.lstAdjmSchmItem.push(item)
          })
          API.savePricAdjmSchmDetail(params).then(res => {
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
    // 日期选择格式
    dataPick(row) {
      this.searchForm.smplBegntime = row[0]
      this.searchForm.smplEndtime = row[1]
    },
    //  重置
    restSearch() {
      this.$refs.searchForm.resetFields()
      this.timeShow = ''
      this.searchForm.smplBegntime = ''
      this.searchForm.smplEndtime = ''
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
