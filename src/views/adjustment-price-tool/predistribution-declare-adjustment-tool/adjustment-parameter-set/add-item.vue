<template>
  <div>
    <el-dialog
      :visible.sync="show.addShow"
      :close-on-click-modal="false"
      lock-scroll
      destroy-on-close
      width="65%"
      @close="closeItem" >
      <span slot="title">{{ title }}</span>
      <section class="layer">
        <el-row :gutter="10">
          <el-col :span="24">
            <div class="box">
              <div class="box-header">
                <span class="box-title">调价金额分配信息</span>
              </div>
              <div class="box-body">
                <el-form ref="addForm" :rules="rules" :model="addForm">
                  <el-row :gutter="8">
                    <el-col :span="8">
                      <el-form-item label="统筹区" prop="poolarea" label-width="100px">
                        <el-select v-model="addForm.poolarea" :disabled="!editShow" clearable placeholder="请选择统筹区" class="form-input">
                          <el-option
                            v-for="item in show.poolareaList"
                            :key="item.dictValueCode"
                            :label="item.dictValueName"
                            :value="item.dictValueCode" />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="申报开始时间" prop="dclaBegntime" label-width="150px">
                        <el-date-picker
                          v-model="addForm.dclaBegntime"
                          :readonly="!editShow"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择开始日期"
                          clearable
                          class="form-input" />
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="申报结束时间" prop="dclaEndtime" label-width="120px">
                        <el-date-picker
                          v-model="addForm.dclaEndtime"
                          :readonly="!editShow"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择开始日期"
                          clearable
                          class="form-input" />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="8">
                    <el-col :span="8" type="flex" justify="space-between" >
                      <el-form-item label="调价总金额" prop="adjmprcSumamt" label-width="100px">
                        <el-input v-model="addForm.adjmprcSumamt" :readonly="!editShow" placeholder="请输入" class="form-input">
                          <template slot="append">万元</template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8" type="flex" justify="space-between" >
                      <el-form-item label="调价项目数比例下限" prop="adjmprcItemLowlmt" label-width="150px" class="form-input">
                        <el-input v-model="addForm.adjmprcItemLowlmt" :readonly="!editShow" type="number" min="0" max="100" placeholder="请输入">
                          <template slot="append">%</template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8" type="flex" justify="space-between" >
                      <el-form-item label="调价幅度上限" prop="adjmprcUplmt" label-width="120px">
                        <el-input v-model="addForm.adjmprcUplmt" :readonly="!editShow" type="number" min="0" max="100" placeholder="请输入" class="form-input">
                          <template slot="append">%</template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </div>
          </el-col>
        </el-row>
      </section>
      <section class="layer">
        <el-row :gutter="10">
          <el-col :span="24">
            <div class="box box-bottom">
              <div class="box-header">
                <span class="box-title">参与调价医疗机构</span>
                <div class="table-btn">
                  <el-form ref="searchForm" :model="searchForm" :rules="rules" class="search-box" label-width="15px">
                    <el-col :offset="4" :span="6">
                      <el-form-item label="" prop="medinsLv">
                        <el-select v-model="searchForm.medinsLv" placeholder="请选择医疗机构等级" clearable style="width:100%;">
                          <el-option
                            v-for="item in medinsLvList"
                            :key="item.dictValueCode"
                            :label="item.dictValueName"
                            :value="item.dictValueCode" />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="" prop="smplBegntime">
                        <el-date-picker
                          v-model="searchForm.smplBegntime"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="抽样开始时间"
                          clearable
                          class="form-input" />
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="" prop="smplEndtime">
                        <el-date-picker
                          v-model="searchForm.smplEndtime"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="抽样结束时间"
                          clearable
                          class="form-input" />
                      </el-form-item>
                    </el-col>
                    <el-col :span="2" style="text-align:right">
                      <el-button type="primary" @click="getList">
                        查询
                      </el-button>
                    </el-col>
                  </el-form>
                </div>
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
                    <el-table-column :reserve-selection="true" type="selection" fix width="55" align="center"/>
                    <el-table-column prop="medinsName" label="医疗机构名称" align="center" show-overflow-tooltip />
                    <el-table-column prop="medinsLvName" label="医疗机构等级" show-overflow-tooltip align="center"/>
                    <el-table-column prop="sumItem" label="项目总数" show-overflow-tooltip align="center" />
                    <el-table-column prop="sumIncome" label="收入(万元)" align="center" />
                    <el-table-column prop="adjmScale" label="调价比例(%)" align="center" />
                    <el-table-column prop="adjmPric" label="调价金额(万元)" width="120" align="center" />
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
        <el-button v-if="editShow" :loading="btnStatus.save" type="primary" @click="save">保 存</el-button>
        <el-button @click="closeItem">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import commonApi from '@/api/commonApi/commonApi'
import API from '@/api/adjustment-price-tool/adjust-price-scheme-query'
import APIS from '@/api/adjustment-price-tool/predistribution-declare-adjustment-tool/adjustment-parameter-set'
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
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('此项为必填'))
      }
      if (value < 0 || value > 100) {
        return callback(new Error('请输入0-100内的数值'))
      }
      callback()
    }
    return {
      title: '',
      editShow: true, // 可编辑
      medinsLvList: [],
      addForm: {
        poolarea: '',
        dclaBegntime: '',
        dclaEndtime: '',
        adjmprcSumamt: '',
        adjmprcItemLowlmt: '',
        adjmprcUplmt: ''
      },
      rules: {
        adjmprcItemLowlmt: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        adjmprcUplmt: [
          { validator: validatePass, trigger: 'blur' }
        ],
        startExeMon: [
          { required: true, message: '请选择抽样开始时间', trigger: 'blur' }
        ],
        endExeMon: [
          { required: true, message: '请选择抽样结束时间', trigger: 'blur' }
        ]
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
        medinsLv: '',
        startExeMon: '',
        endExeMon: ''
      },
      searchInfo: {},
      projectName: '',
      // 按钮状态，防止快速重复点击
      btnStatus: {
        save: false
      }
    }
  },
  mounted() {
    // this.getList()
    this.getSelectList()
  },
  methods: {
    // 详情
    getPricAdjmSchmDetail(schmId) {
      API.getPricAdjmSchmDetail(schmId).then(res => {
        if (res.data.code === 0) {
          this.addForm = res.data.data.adjmSchm
          this.table.tableData = res.data.data.lstAdjmNotcMedins
        }
      })
    },
    // 下拉框
    getSelectList() {
      commonApi.getCodeValueListMultiple('medinsLv').then(res => {
        if (res.data.code === 0) {
          this.medinsLvList = res.data.data.medinsLv
        }
      })
    },
    // 查询
    getList() {
      this.table.loading = true
      let params = {
        pageNum: 1,
        pageSize: this.table.pageSize,
        medinsLv: this.searchForm.medinsLv,
        endExeMon: this.searchForm.endExeMon,
        startExeMon: this.searchForm.startExeMon
      }
      this.searchInfo.medinsLv = this.searchForm.medinsLv
      this.searchInfo.startExeMon = this.searchForm.startExeMon
      this.searchInfo.endExeMon = this.searchForm.endExeMon
      APIS.listPricMedinsInfo(params).then(res => {
        if (res.data.code === 0) {
          this.table.pageNum = 1
          this.table.total = res.data.data.pageInfo.recordCounts
          this.table.tableData = res.data.data.rows
        }
        this.table.loading = false
      }).catch(() => {
        this.table.loading = false
      })
    },
    // 页码
    pageChange() {
      this.table.loading = true
      let params = {
        pageNum: this.table.pageNum,
        pageSize: this.table.pageSize,
        medinsLv: this.searchInfo.medinsLv,
        startExeMon: this.searchInfo.startExeMon,
        endExeMon: this.searchInfo.endExeMon
      }
      APIS.listPricMedinsInfo(params).then(res => {
        if (res.data.code === 0) {
          this.table.total = res.data.data.pageInfo.recordCounts
          this.table.tableData = res.data.data.rows
        }
        this.table.loading = false
      }).catch(() => {
        this.table.loading = false
      })
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
    },
    // 保存
    save() {
      this.$refs['addForm'].validate((valid) => {
        if (valid) {
          this.$refs['searchForm'].validate((valids) => {
            if (valids) {
              this.btnStatus.save = true
              let params = {
                adjmSchm: Object.assign({}, this.addForm),
                lstAdjmNotcMedins: []
              }
              params.adjmSchm.smplBegntime = this.searchForm.smplBegntime
              params.adjmSchm.smplEndtime = this.searchForm.smplEndtime
              params.adjmSchm.adjmprcItemLowlmt /= 100
              params.adjmSchm.adjmprcUplmt /= 100
              params.adjmSchm.notcMedinsVal = this.table.selectRows.length
              // params.adjmSchm.valiDclaVal = this.table.selectRows.length
              params.adjmSchm.schmAdjmType = '103'
              params.adjmSchm.notcStas = '0'
              this.table.selectRows.map(item => {
                let data = {}
                data.appyMedinsId = item.medinsId
                data.appyMedinsLv = item.medinsLv
                data.appyMedinsName = item.medinsName
                data.poolarea = item.poolarea
                data.medinsActInc = item.sumIncome
                data.adjmItemCnt = item.sumItem
                data.asgnAdjmprcAmt = item.adjmPric
                data.adjmprcAmt = this.addForm.adjmprcSumamt
                data.dclaStas = '0'
                data.adjmItemLowlmt = this.addForm.adjmprcItemLowlmt / 100
                data.pricAdjmUplmt = this.addForm.adjmprcUplmt / 100
                params.lstAdjmNotcMedins.push(Object.assign({}, data))
              })
              APIS.savePricAdjmSchmDetail(params).then(res => {
                if (res.data.code === 0) {
                  this.refresh()
                  this.closeItem()
                  this.$message.success(res.data.message)
                } else {
                  this.$message.error(res.data.message)
                }
                this.btnStatus.save = false
              }).catch(() => {
                this.btnStatus.save = false
              })
            }
          })
        }
      })
    },
    // 关闭弹窗
    closeItem() {
      this.table.tableData = []
      this.$refs['addForm'].resetFields()
      this.$emit('closeAdd')
    },
    // 刷新父组件
    refresh() {
      this.$emit('refresh')
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
  .table-btn{
    position: relative;
    width: 85%;
    float: right;
    height: 40px;
    top: -10px;
    .search-box{
      padding-bottom: 10px;
    }
  }
}
</style>
