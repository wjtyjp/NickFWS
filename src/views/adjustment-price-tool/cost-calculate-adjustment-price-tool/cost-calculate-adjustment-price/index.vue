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
          <span class="box-title">成本测算调价</span>
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
                <el-form-item label="调整总额度" prop="adjmprcSumamt">
                  <el-input v-model="searchForm.adjmprcSumamt" placeholder="请输入调整总额度">
                    <template slot="append">万元</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="调整总金额" prop="adjmAmt">
                  <el-input v-model="searchForm.adjmAmt" readonly placeholder="请输入调整总金额">
                    <template slot="append">万元</template>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="16">
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
              <el-col :span="6">
                <el-form-item label="调整项目数" prop="adjmItemVal">
                  <el-input v-model="searchForm.adjmItemVal" readonly placeholder="请输入调整项目数" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抽样时间段" prop="smplBegntime">
                  <el-date-picker
                    v-model="timeShow"
                    value-format="yyyy-MM-dd"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份"
                    style="width:100%"
                    @change="dataPick" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-form-item label="方案说明" prop="schmAbst">
                  <el-input v-model="searchForm.schmAbst" :autosize="{minRows: 2, maxRows: 2}" resize="none" type="textarea" placeholder="请输入方案说明" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10" style="text-align:right">
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
        title: '成本测算调价',
        searchTitle: '回收率',
        show: true,
        CPIshow: false,
        url: API.listPricPoolItemFeeOfServ,
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
        schmAbst: ''
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
        poolareaList: []
      },
      timeShow: ''
    }
  },
  computed: {

  },
  watch: {
    'rightTable.tableData': function(val) {
      this.searchForm.adjmItemVal = val.length
      this.adjmAmt = 0
      val.map(item => {
        this.adjmAmt += item.appySumamt
      })
    }
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
          let params = {
            adjmSchm: this.searchForm,
            lstAdjmNotcMedins: [],
            lstAdjmSchmItem: [],
            lstAdjmSchmItemType: []
          }
          params.adjmSchm.schmAdjmType = '105' // 方案类别
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
