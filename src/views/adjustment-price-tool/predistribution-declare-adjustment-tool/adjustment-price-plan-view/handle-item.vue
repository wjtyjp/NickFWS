<template>
  <div>
    <el-dialog
      :visible.sync="show.handleShow"
      :close-on-click-modal="false"
      lock-scroll
      destroy-on-close
      width="65%"
      @close="closeItem" >
      <span slot="title">{{ title }}</span>
      <section class="layer">
        <div class="box">
          <div class="box-header">
            <span class="box-title">预分配申报调价工具</span>
          </div>
          <div class="box-body">
            <el-form ref="handleForm" :model="handleForm" label-width="110px">
              <el-row :gutter="8">
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="应报申报机构数" prop="notcMedinsVal">
                    <el-input v-model="handleForm.notcMedinsVal" readonly placeholder="请输入" class="form-input" />
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="申报机构数" prop="dclaMedinsVal" class="form-input">
                    <el-input v-model="handleForm.dclaMedinsVal" readonly placeholder="请输入" />
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="有效申报机构数" prop="valiDclaVal">
                    <el-input v-model="handleForm.valiDclaVal" readonly placeholder="请输入" class="form-input" />
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="有效申报机构占比" prop="vailDclaProp" label-width="130px">
                    <el-input v-model="handleForm.vailDclaProp" readonly placeholder="请输入" class="form-input" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="申报上调机构数" prop="incrDclaVal">
                    <el-input v-model="handleForm.incrDclaVal" readonly placeholder="请输入" class="form-input" />
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="申报下调机构数" prop="redcDclaVal" class="form-input">
                    <el-input v-model="handleForm.redcDclaVal" readonly placeholder="请输入" />
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="申报上调项目数" prop="incrItemVal">
                    <el-input v-model="handleForm.incrItemVal" readonly placeholder="请输入" class="form-input" />
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between">
                  <el-form-item label="申报下调项目数" prop="redcItemVal" label-width="130px">
                    <el-input v-model="handleForm.redcItemVal" readonly placeholder="请输入" class="form-input" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="调价总额度" prop="adjmprcSumamt">
                    <el-input v-model="handleForm.adjmprcSumamt" readonly placeholder="请输入" class="form-input">
                      <template slot="append">万元</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="调整总金额" prop="adjmAmt" class="form-input">
                    <el-input v-model="handleForm.adjmAmt" readonly placeholder="请输入">
                      <template slot="append">万元</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="申报上调金额" prop="incrDclaSumamt">
                    <el-input v-model="handleForm.incrDclaSumamt" readonly placeholder="请输入">
                      <template slot="append">万元</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="申报下调金额" prop="redcDclaSumamt" label-width="130px">
                    <el-input v-model="handleForm.redcDclaSumamt" readonly placeholder="请输入">
                      <template slot="append">万元</template>
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="上调总金额" prop="incrSumamt">
                    <el-input v-model="handleForm.incrSumamt" readonly placeholder="请输入">
                      <template slot="append">万元</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="下调总金额" prop="redcSumamt" class="form-input">
                    <el-input v-model="handleForm.redcSumamt" readonly placeholder="请输入">
                      <template slot="append">万元</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="调整大类数" prop="adjmMajclsVal">
                    <el-input v-model="handleForm.adjmMajclsVal" readonly placeholder="请输入" class="form-input" />
                  </el-form-item>
                </el-col>
                <el-col :span="6" type="flex" justify="space-between" >
                  <el-form-item label="调整项目数" prop="adjmItemVal" label-width="130px">
                    <el-input v-model="handleForm.adjmItemVal" readonly placeholder="请输入" class="form-input" />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </section>
      <section class="layer">
        <el-row :gutter="10">
          <el-col :span="24">
            <div class="box box-bottom">
              <div class="box-header">
                <span class="box-title">符合调价的项目信息(申请调价医疗机构数占开展医疗机构数比超过1/3)</span>
              </div>
              <div class="box-body">
                <el-row>
                  <el-table
                    v-loading="table.loading"
                    ref="infoTable"
                    :data="table.tableData"
                    height="28vh"
                    row-key="stdCode"
                    fit
                    highlight-current-row
                    @selection-change="selectRow">
                    <!-- <el-table-column :reserve-selection="true" type="selection" fix width="55" align="center"/> -->
                    <el-table-column prop="servitemCode" label="项目编码" align="center" show-overflow-tooltip />
                    <el-table-column prop="servitemType" label="项目大类" show-overflow-tooltip align="center"/>
                    <el-table-column prop="servitemName" label="项目名称" show-overflow-tooltip align="center" />
                    <el-table-column prop="exeVal" label="服务数量" show-overflow-tooltip align="center" />
                    <el-table-column prop="adjmprcSumamt" label="调价总金额(万元)" width="130" show-overflow-tooltip align="center" />
                    <el-table-column prop="totlsco" label="总评分" show-overflow-tooltip align="center" />
                    <el-table-column label="调价信息">
                      <el-table-column prop="stdSco" label="标准评分" show-overflow-tooltip align="center" />
                      <el-table-column prop="incrSbitSco" label="加分项得分" width="100" show-overflow-tooltip align="center" />
                      <el-table-column prop="incrSbitName" label="加分项标签" width="100" show-overflow-tooltip align="center" />
                    </el-table-column>
                    <el-table-column label="申报医院数占比">
                      <el-table-column prop="medinsValiVal" label="开展数" show-overflow-tooltip align="center" />
                      <el-table-column prop="medinsIncrVal" label="上调数" show-overflow-tooltip align="center" />
                      <el-table-column prop="medinsRedcVal" label="下调数" show-overflow-tooltip align="center" />
                      <el-table-column prop="incrScale" label="上调比例" show-overflow-tooltip align="center" />
                      <el-table-column prop="reduceScale" label="下调比例" show-overflow-tooltip align="center" />
                    </el-table-column>
                    <el-table-column label="申报医院数占比">
                      <el-table-column prop="initPric" label="当前价格" show-overflow-tooltip align="center" />
                      <el-table-column prop="nwPric" label="调价后加权价" width="100" show-overflow-tooltip align="center" />
                      <el-table-column prop="gain" label="本次涨幅%" width="100" show-overflow-tooltip align="center" />
                      <el-table-column prop="maxGain" label="最高涨幅%" width="100" show-overflow-tooltip align="center" />
                      <el-table-column prop="minGain" label="最低涨幅%" width="100" show-overflow-tooltip align="center" />
                    </el-table-column>
                  </el-table>
                </el-row>
                <el-pagination
                  :current-page="table.pageNum"
                  :page-sizes="[5, 10, 25, 50, 100]"
                  :page-size="table.pageSize"
                  :total="table.total"
                  layout="total, sizes, prev, pager, next, jumper"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange" />
              </div>
            </div>
          </el-col>
        </el-row>
      </section>
      <span slot="footer" class="dialog-footer" >
        <!-- <el-button v-if="editShow" type="primary">导 出</el-button> -->
        <el-button @click="closeItem">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import API from '@/api/adjustment-price-tool/adjust-price-scheme-query'
export default {
  name: '',
  props: {
    show: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      title: '',
      editShow: true, // 可编辑
      handleForm: {
        dclaMedinsVal: '', // 申报医疗机构数
        valiDclaVal: '', // 有效申报医疗机构数
        incrDclaVal: '', // 上调医疗机构申报数
        redcDclaVal: '', // 下调医疗机构申报数
        incrItemVal: '', // 上调项目申报数
        redcItemVal: '', // 下调项目数
        adjmprcSumamt: '', // 调价总额度
        incrSumamt: '', // 上调总金额
        redcSumamt: '', // 下调总金额
        adjmMajclsVal: '', // 调整大类数
        adjmItemVal: '', // 调整项目数
        redcDclaSumamt: '', // 下调申请总金额
        incrDclaSumamt: '', // 上调申请总金额
        taskName: ''
      },
      table: {
        tableData: [],
        loading: false,
        pageNum: 1,
        pageSize: 5,
        total: 0,
        selectRows: []
      },
      searchForm: {
        medinsLv: ''
      },
      searchInfo: {}
    }
  },
  mounted() {
  },
  methods: {
    // 详情
    getPricAdjmSchmDetail(schmId) {
      API.getPricAdjmSchmDetail(schmId).then(res => {
        if (res.data.code === 0) {
          this.handleForm = res.data.data.adjmSchm
          this.table.tableData = res.data.data.lstAdjmSchmItem
          // if (res.data.data.lstAdjmSchmItem === null) {
          //   this.table.tableData = []
          // }
        }
      })
    },
    // 关闭弹窗
    closeItem() {
      this.$refs['handleForm'].resetFields()
      this.$emit('closeHandle')
    },
    // 页码
    pageChange() {
      // this.table.loading = true
      // let params = {
      //   pageNum: this.table.pageNum,
      //   pageSize: this.table.pageSize,
      //   medinsLv: this.searchInfo.medinsLv,
      //   startExeMon: this.searchInfo.startExeMon,
      //   endExeMon: this.searchInfo.endExeMon
      // }
      // API.listPricMedinsItemFeeE(params).then(res => {
      //   if (res.data.code === 0) {
      //     this.table.total = res.data.data.pageInfo.recordCounts
      //     this.table.tableData = res.data.data.rows
      //   }
      //   this.table.loading = false
      // })
    },
    // 分页Size
    handleSizeChange(size) {
      this.table.pageSize = size
      this.pageChange()
    },
    // 分页选择
    handleCurrentChange(currentPage) {
      this.table.pageNum = currentPage
      this.pageChange()
    },
    selectRow(rows) {
      this.table.selectRows = rows
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.form-input{
  width: 100%;
}
.box-bottom{
  padding-bottom: 0;
}
</style>
