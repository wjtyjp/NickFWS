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
          <span class="box-title">服务量分配式调价</span>
        </div>
        <div class="box-body">
          <el-form ref="searchForm" :rules="rules" :model="searchForm" label-width="110px">
            <el-row :gutter="16">
              <el-col :span="24">
                <el-form-item label="调价方案名称" prop="adjmprcSchmName">
                  <el-input v-model="searchForm.adjmprcSchmName" placeholder="请输入方案名称" />
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
                <el-form-item label="调整总额度" prop="adjmprcSumamt">
                  <el-input v-model="searchForm.adjmprcSumamt" placeholder="请输入调整总额度">
                    <template slot="append">万元</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="调整总金额" prop="adjmAmt">
                  <el-input v-model="searchForm.adjmAmt" readonly placeholder="请输入调整金额">
                    <template slot="append">万元</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="制定日期" prop="schmDate">
                  <el-date-picker
                    v-model="searchForm.schmDate"
                    type="date"
                    value-format="yyyy-MM-dd"
                    placeholder="选择制定日期"
                    clearable
                    style="width:100%" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-form-item label="方案说明" prop="schmAbst">
                  <el-input v-model="searchForm.schmAbst" :autosize="{minRows: 3, maxRows: 3}" resize="none" type="textarea" placeholder="请输入方案说明" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10" style="text-align:right">
              <el-col :span="24">
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
      <price-table ref="xTable" :item-type-list="selectList.itemTypeList" @xtableData="getXtableData" />
    </section>
    <section class="layer">
      <adjustment-table ref="adjustTable" :table-info="tableInfo" @setRightTable="getRightTable" />
    </section>
  </div>
</template>

<script>
import API from '@/api/adjustment-price-tool/cost-calculate-adjustment-price-tool/cost-calculate-adjustment-price'
import upload from '@/components/UploadExcel/index'
import priceTable from './price-table'
import adjustmentTable from '../../components/AdjustmentTable/adjustment-table'
import commonApi from '@/api/commonApi/commonApi'
export default {
  name: 'PriceMechanismAdjustmentStart',
  components: {
    'upload-excel': upload, // 导入Excel
    'price-table': priceTable,
    'adjustment-table': adjustmentTable
  },
  props: {

  },
  data() {
    return {
      // 按钮状态，防止快速重复点击
      btnStatus: {
        submit: false
      },
      rightTable: {
        tableData: []
      },
      table: {
        loading: false,
        tableData: []
      },
      tableInfo: {
        title: '服务量分配式调价',
        searchTitle: '执行例数',
        show: true,
        CPIshow: false,
        url: API.listPricPoolItemFeeOfServ,
        exportUrl: API.exportPricPoolItemFeeOfServ
      },
      searchForm: {
        adjmprcSchmName: '', // 调价方案名称
        adjmprcSumamt: '', // 调价总额度
        adjmAmt: 0, // 调价总金额
        poolarea: '', // 统筹区
        schmAbst: '', // 方案说明
        schmDate: '' // 制定日期
      },
      searchInfo: {},
      rules: {
        adjmprcSchmName: [
          { required: true, message: '请输入调价方案名称', trigger: 'blur' }
        ],
        poolarea: [
          { required: true, message: '请选择统筹区', trigger: 'blur' }
        ],
        adjmprcSumamt: [
          { required: true, message: '请输入调价总额度', trigger: 'blur' }
        ],
        schmDate: [
          { required: true, message: '请输入制定日期', trigger: 'blur' }
        ]
      },
      selectList: {
        poolareaList: [],
        itemTypeList: []
      }
    }
  },
  computed: {

  },
  created() {
  },
  mounted() {
    this.getPoolareaList()
  },
  methods: {
    // 统筹区和项目大类
    getPoolareaList() {
      commonApi.getCodeValueListMultiple('aaa027').then(res => {
        if (res.data.code === 0) {
          this.selectList.poolareaList = res.data.data.aaa027
        }
      })
      commonApi.getCodeValueListMultiple('servitem_type').then(res => {
        if (res.data.code === 0) {
          this.selectList.itemTypeList = res.data.data.servitem_type
        }
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
          let params = {
            adjmSchm: this.searchForm,
            lstAdjmNotcMedins: [],
            lstAdjmSchmItem: [],
            lstAdjmSchmItemType: [],
            flag: 'server'
          }
          params.adjmSchm.schmAdjmType = '102' // 方案类别
          params.adjmSchm.notcStas = '2'
          this.rightTable.tableData.map(item => {
            let info = Object.assign({}, item)
            info.adjmprcCof /= 100
            params.lstAdjmSchmItem.push(info)
          })
          this.table.tableData.map(item => {
            delete item['_XID']
            params.lstAdjmSchmItemType.push(item)
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
    // 获取新增表格数据
    getXtableData(data) {
      this.table.tableData = data
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
    //  重置
    restSearch() {
      this.$refs.searchForm.resetFields()
      this.$refs.adjustTable.resetTable()
      this.$refs.xTable.resetTable()
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
.btn-custom-cancel {
  float: right;
  margin-left: 10px;
}
</style>
