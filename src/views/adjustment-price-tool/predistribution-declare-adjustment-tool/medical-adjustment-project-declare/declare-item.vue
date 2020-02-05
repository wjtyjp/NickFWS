<template>
  <div>
    <el-dialog
      :visible.sync="dialogShow.declareShow"
      :close-on-click-modal="false"
      lock-scroll
      destroy-on-close
      width="70%"
      @close="closeItem" >
      <span slot="title">申报</span>
      <section class="layer">
        <div class="box">
          <div class="box-header">
            <span class="box-title">价格机制性调整任务</span>
            <div class="box-tools">
              <el-button :disabled="isdisabled" type="primary" size="mini" @click="save">保存</el-button>
              <el-button :disabled="isdisabled" type="primary" size="mini" @click="declare">申报</el-button>
              <el-button :disabled="!isdisabled" type="primary" size="mini" @click="cancelDeclare">取消申报</el-button>
            </div>
          </div>
          <div class="box-body">
            <el-form ref="declareForm" :model="declareForm" label-width="120px">
              <el-row :gutter="10">
                <el-col :span="6">
                  <el-form-item label="调价额度上限" prop="pricAdjmLimit">
                    <el-input v-model="declareForm.pricAdjmLimit" readonly placeholder="" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="申报期限" prop="dclaTime">
                    <el-input v-model="declareForm.dclaTime" readonly placeholder="" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="抽样日期从" prop="smplBegntime">
                    <el-date-picker
                      v-model="declareForm.smplBegntime"
                      type="date"
                      readonly
                      value-format="yyyy-MM-dd"
                      placeholder="选择结束日期"
                      clearable
                      class="form-input" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="抽样结束日期至" prop="smplEndtime">
                    <el-date-picker
                      v-model="declareForm.smplEndtime"
                      type="date"
                      readonly
                      value-format="yyyy-MM-dd"
                      placeholder="选择结束日期"
                      clearable
                      class="form-input" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="6">
                  <el-form-item label="调价幅度上限" prop="pricAdjmUplmt">
                    <el-input v-model="declareForm.pricAdjmUplmt" readonly placeholder="" type="text" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="调价项目数下限" prop="adjmItemLowlmt">
                    <el-input v-model="declareForm.adjmItemLowlmt" readonly placeholder="" type="text" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="可调价总金额" prop="adjmprcAmt">
                    <el-input v-model="declareForm.adjmprcAmt" readonly placeholder="" type="text">
                      <template slot="append">万元</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="已调价总金额" prop="adjmprcSumamt">
                    <el-input v-model="declareForm.adjmprcSumamt" readonly placeholder="" type="text">
                      <template slot="append">万元</template>
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </section>
      <section class="layer">
        <div class="box">
          <el-row>
            <div class="box-body">
              <el-row :gutter="20">
                <el-col :span="11">
                  <div class="box">
                    <div class="box-header">
                      <span class="box-title">未参与调价项目</span>
                      <div class="table-btn">
                        <el-form class="search-box" label-width="80px">
                          <el-row :gutter="10">
                            <el-col :span="16" :offset="4">
                              <el-form-item label="关键词">
                                <el-input v-model="keyWords" placeholder="请输入项目编码或项目名称" style="width:100%" />
                              </el-form-item>
                            </el-col>
                            <el-col :span="4">
                              <el-button type="primary" @click="getLeftTableData(leftTable.currentPage, leftTable.pageSize)">搜索</el-button>
                            </el-col>
                          </el-row>
                        </el-form>
                      </div>
                    </div>
                    <div class="box-body">
                      <el-table
                        v-loading="leftTable.loading"
                        id="leftTable"
                        ref="leftTable"
                        key="tableKey"
                        :data="leftTable.tableData"
                        :height="leftTable.tableHeight"
                        row-key="rowKey"
                        fit
                        highlight-current-row
                        @selection-change="leftHandlChange">
                        <el-table-column :reserve-selection="true" type="selection" width="50" align="center" fixed />
                        <el-table-column prop="itemCode" label="项目编码" show-overflow-tooltip/>
                        <el-table-column prop="itemName" label="项目名称" show-overflow-tooltip align="center"/>
                        <el-table-column prop="initPric" label="价格" align="center"/>
                        <el-table-column prop="exeVal" label="服务数量" width="100" align="center"/>
                        <el-table-column prop="sumAmt" label="总额" align="center"/>
                      </el-table>
                      <el-pagination
                        :current-page="leftTable.currentPage"
                        :page-sizes="[5, 10, 30, 50, 100]"
                        :page-size="leftTable.pageSize"
                        :total="leftTable.total"
                        layout="total, sizes, prev, pager, next, jumper"
                        @size-change="handleSizeChangeLeft"
                        @current-change="handleCurrentChangeleft"/>
                    </div>
                  </div>
                </el-col>
                <el-col :span="2" :style="{height:rightTable.tableHeight+'px'}" class="center-table" style="text-align:center;padding-left:0;padding-right:0;" >
                  <div class="center-btn-group">
                    <el-button
                      :disabled="!leftTable.selectRow.length"
                      type="primary"
                      icon="el-icon-arrow-right"
                      @click="addStaff" />
                    <el-button
                      :disabled="!rightTable.selectRow.length"
                      type="primary"
                      icon="el-icon-arrow-left"
                      @click="removeStaff" />
                    <el-button
                      :disabled="!leftTable.tableData.length"
                      type="primary"
                      icon="el-icon-d-arrow-right"
                      @click="addALLStaff" />
                    <el-button
                      :disabled="!rightTable.tableData.length"
                      type="primary"
                      icon="el-icon-d-arrow-left"
                      @click="removeAllStaff" />
                  </div>
                </el-col>
                <el-col :span="11">
                  <div class="box">
                    <div class="box-header">
                      <span class="box-title">参与调价项目</span>
                    </div>
                    <div class="box-body">
                      <el-table
                        v-loading="rightTable.loading"
                        ref="rightTable"
                        key="tableKey"
                        :data="rightTable.tableData"
                        :height="rightTable.tableHeight"
                        row-key="rowKey"
                        fit
                        highlight-current-row
                        @selection-change="rightHandlChange">
                        <el-table-column :reserve-selection="true" type="selection" width="55" align="center" fixed/>
                        <el-table-column prop="itemCode" label="项目编码" show-overflow-tooltip/>
                        <el-table-column prop="itemName" label="项目名称" show-overflow-tooltip align="center"/>
                        <el-table-column prop="exeVal" label="服务量总数" width="100" align="center"/>
                        <el-table-column prop="sumAmt" label="总收入(万元)" width="100" align="center"/>
                        <el-table-column label="调价信息" align="center">
                          <el-table-column prop="initPric" label="调前价格" align="center"/>
                          <el-table-column label="比例(%)" show-overflow-tooltip align="center">
                            <template slot-scope="{row}">
                              <el-input v-model.number="row.adjmAmt" @keyup.native="getTotle(row)" />
                            </template>
                          </el-table-column>
                          <el-table-column prop="nwPric" label="调后价格" show-overflow-tooltip align="center"/>
                        </el-table-column>
                        <el-table-column prop="adjmSumamt" label="调价金额(万元)" show-overflow-tooltip align="center"/>
                      </el-table>
                      <el-pagination
                        :current-page="rightTable.currentPage"
                        :page-sizes="[5, 10, 30, 50, 100]"
                        :page-size="rightTable.pageSize"
                        :total="rightTable.total"
                        layout="total, sizes, prev, pager, next, jumper"
                        @size-change="handleSizeChangeright"
                        @current-change="handleCurrentChangeright"/>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-row>
        </div>
      </section>
      <span slot="footer" class="dialog-footer" >
        <el-button @click="closeItem">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import API from '@/api/adjustment-price-tool/predistribution-declare-adjustment-tool/medical-adjustment-project-declare'
export default {
  name: '',
  props: {
    dialogShow: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      declareForm: {
        pricAdjmUplmt: '', // 价格调整幅度上限
        dclaTime: '', // 申报时间
        adjmItemLowlmt: '', // 调整项目数下限
        asgnAdjmprcAmt: '', // 分配调价额度
        adjmprcSumamt: '' // 调价总金额
      },
      isdisabled: true,
      appyMedinsId: '',
      schmId: '',
      schmNotcId: '',
      searchInfo: {},
      keyWords: '',
      leftTable: {
        loading: false,
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        total: 0,
        selectRow: [],
        tableHeight: 300
      },
      rightTable: {
        loading: false,
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        total: 0,
        selectRow: [],
        tableHeight: 300
      },
      newTable: [],
      adjmSumamt: ''
      // rules: {
      //   taskName: [
      //     { required: true, message: '请输入任务名称', trigger: 'blur' }
      //   ]
      // }
    }
  },
  created() {
    this.$nextTick(() => {
      // console.log(this.dialogShow)
      if (this.dialogShow.schmNotcId) {
        this.getPricAdjmNotcMedinsDetail(this.dialogShow.schmNotcId)
        this.getLeftTableData(this.leftTable.currentPage, this.leftTable.pageSize)
        this.getRightTableData(this.rightTable.currentPage, this.rightTable.pageSize)
      }
    })
  },
  mounted() {

  },
  methods: {
    // 详情
    getPricAdjmNotcMedinsDetail(schmNotcId) {
      API.getPricAdjmNotcMedinsDetail(schmNotcId).then(res => {
        if (res.data.code === 0) {
          // console.log(res.data.data.adjmNotcMedins)
          this.declareForm = res.data.data.adjmNotcMedins
          this.appyMedinsId = res.data.data.adjmNotcMedins.appyMedinsId
          this.schmId = res.data.data.adjmNotcMedins.schmId
          this.schmNotcId = res.data.data.adjmNotcMedins.schmNotcId
        }
      }).catch(error => error)
    },
    // 左边表格
    getLeftTableData(currentPage, pageSize) {
      this.leftTable.tableData = []
      this.leftTable.loading = true
      let params = {
        pageSize: pageSize,
        pageNum: currentPage,
        keyWords: this.keyWords
      }
      this.searchInfo = this.keyWords
      API.listPricMedinsItemFee(params).then(res => {
        if (res.data.code === 0) {
          this.leftTable.total = res.data.data.pageInfo.recordCounts
          this.leftTable.currentPage = res.data.data.pageInfo.pageNum
          this.leftTable.pageSize = res.data.data.pageInfo.pageSize
          this.leftTable.tableData = res.data.data.rows
        }
        this.leftTable.loading = false
      }).catch(() => {
        this.leftTable.loading = false
      })
    },
    // 右边表格
    getRightTableData(currentPage, pageSize) {
      this.rightTable.tableData = []
      this.rightTable.loading = true
      let params = {
        pageSize: pageSize,
        pageNum: currentPage,
        appyMedinsId: this.dialogShow.appyMedinsId,
        schmId: this.dialogShow.schmId,
        schmNotcId: this.dialogShow.schmNotcId
      }
      this.searchInfo = this.keyWords
      API.listPricAdjmMedinsItem(params).then(res => {
        if (res.data.code === 0) {
          this.rightTable.total = res.data.data.pageInfo.recordCounts
          this.rightTable.currentPage = res.data.data.pageInfo.pageNum
          this.rightTable.pageSize = res.data.data.pageInfo.pageSize
          this.rightTable.tableData = res.data.data.rows
        }
        this.rightTable.loading = false
      }).catch(() => {
        this.rightTable.loading = false
      })
    },
    // 保存
    save() {
      let params = {
        addFlag: 1,
        adjmNotcMedins: {
          appyMedinsId: this.declareForm.appyMedinsId,
          schmId: this.declareForm.schmId,
          schmNotcId: this.declareForm.schmNotcId
        },
        lstAdjmMedinsItem: [
          ...this.rightTable.tableData
        ],
        pageNum: this.rightTable.currentPage,
        pageSize: this.rightTable.pageSize
      }
      API.saveMedinsDeclareItemInfo(params).then(res => {
        if (res.data.code === 0) {
          this.$message.success(res.data.message)
          // this.closeItem()
        } else {
          this.$message.error(res.data.message)
        }
      }).catch(error => error)
    },
    // 申报
    declare() {
      let params = {
        unadjustedFlag: 1,
        adjmNotcMedins: {
          appyMedinsId: this.declareForm.appyMedinsId,
          schmId: this.declareForm.schmId,
          schmNotcId: this.declareForm.schmNotcId,
          dclaStas: '1'
        },
        lstAdjmMedinsItem: [
          ...this.newTable
        ],
        // adjmNotcMedins: {
        //   appyMedinsId: '20191024001',
        //   schmId: '20191024001',
        //   schmNotcId: '20191024001'
        // },
        // lstAdjmMedinsItem: [
        //   ...this.rightTable.tableData
        // ],
        pageNum: this.rightTable.currentPage,
        pageSize: this.rightTable.pageSize
      }
      API.saveMedinsDeclareInfo(params).then(res => {
        if (res.data.code === 0) {
          this.$message.success(res.data.message)
          // this.closeItem()
        } else {
          this.$message.error(res.data.message)
        }
      }).catch(error => error)
    },
    // 取消申报
    cancelDeclare() {
      let params = {
        appyMedinsId: this.appyMedinsId,
        schmId: this.schmId,
        schmNotcId: this.schmNotcId
      }
      API.saveMedinsCancelDeclare(params).then(res => {
        if (res.data.code === 0) {
          this.$message.success(res.data.message)
          this.isdisabled = false
        } else {
          this.$message.error(res.data.message)
        }
      }).catch(error => error)
    },

    // 左表Size
    handleSizeChangeLeft(val) {
      this.leftTable.pageSize = val
      this.getLeftTableData(this.leftTable.currentPage, this.leftTable.pageSize)
    },
    // 左表页码
    handleCurrentChangeleft(num) {
      this.leftTable.pageNum = num
      this.getLeftTableData(this.leftTable.currentPage, this.leftTable.pageSize)
    },
    // 右表Size
    handleSizeChangeright(val) {
      this.rightTable.pageSize = val
      this.getRightTableData(this.rightTable.currentPage, this.rightTable.pageSize)
    },
    // 右表页码
    handleCurrentChangeright(num) {
      this.rightTable.pageNum = num
      this.getRightTableData(this.rightTable.currentPage, this.rightTable.pageSize)
    },
    // 穿梭表格
    // 将左边表格选择项存入staffData中
    leftHandlChange(rows) {
      this.leftTable.selectRow = []
      if (rows) {
        rows.forEach(row => {
          if (row) {
            this.leftTable.selectRow.push(row)
          }
        })
      }
    },
    // 左边表格选择项移到右边
    addStaff() {
      setTimeout(() => {
        this.$refs['leftTable'].clearSelection()
        this.$refs['rightTable'].clearSelection()
      }, 0)
      let repeat = false
      this.rightTable.tableData.forEach(item => {
        this.leftTable.selectRow.every(x => {
          if (item.servitemId === x.servitemId) {
            this.$message.error('项目已添加')
            repeat = true
            return false
          }
        })
      })
      if (repeat === false) {
        this.leftTable.selectRow.forEach(item => {
          this.rightTable.tableData.push(item)
        })
        for (let i = 0; i < this.leftTable.tableData.length; i++) {
          for (let j = 0; j < this.leftTable.selectRow.length; j++) {
            if (this.leftTable.tableData[i].servitemId === this.leftTable.selectRow[j].servitemId) {
              this.leftTable.tableData.splice(i, 1)
            }
          }
        }
        this.rightTable.total = this.rightTable.tableData.length
        this.leftTable.total = this.leftTable.tableData.length
      }
      this.getTableItme(1)
    },
    // 左表全部右移
    addALLStaff() {
      setTimeout(() => {
        this.$refs['leftTable'].clearSelection()
        this.$refs['rightTable'].clearSelection()
      }, 0)
      let repeat = false
      this.rightTable.tableData.forEach(item => {
        this.leftTable.selectRow.every(x => {
          if (item.servitemId === x.servitemId) {
            this.$message.error('项目已添加')
            repeat = true
            return false
          }
        })
      })
      if (repeat === false) {
        this.leftTable.tableData.forEach(item => {
          this.rightTable.tableData.push(item)
          this.leftTable.tableData = []
        })
        this.rightTable.total = this.rightTable.tableData.length
        this.leftTable.total = 0
      }
      this.getTableItme(1)
    },
    // 将右边表格选择项存入selectedStaffData中
    rightHandlChange(rows) {
      this.rightTable.selectRow = []
      if (rows) {
        rows.forEach(row => {
          if (row) {
            this.rightTable.selectRow.push(row)
          }
        })
      }
    },
    // 右边表格选择项移到左边
    removeStaff() {
      setTimeout(() => {
        this.$refs['leftTable'].clearSelection()
        this.$refs['rightTable'].clearSelection()
      }, 0)
      let repeat = false
      this.leftTable.tableData.forEach(item => {
        this.rightTable.selectRow.every(x => {
          if (item.servitemId === x.servitemId) {
            this.$message.error('项目已添加')
            repeat = true
            return false
          }
        })
      })
      if (repeat === false) {
        this.rightTable.selectRow.forEach(item => {
          item.adjmAmt = ''
          item.nwPric = ''
          item.adjmSumamt = ''
          this.leftTable.tableData.push(item)
        })
        for (let i = 0; i < this.rightTable.tableData.length; i++) {
          for (let j = 0; j < this.rightTable.selectRow.length; j++) {
            if (this.rightTable.tableData[i].servitemId === this.rightTable.selectRow[j].servitemId) {
              this.rightTable.tableData.splice(i, 1)
            }
          }
        }
        this.leftTable.total = this.leftTable.tableData.length
        this.rightTable.total = this.rightTable.tableData.length
      }
      this.getTableItme(0)
    },
    // 右表全部左移
    removeAllStaff() {
      setTimeout(() => {
        this.$refs['leftTable'].clearSelection()
        this.$refs['rightTable'].clearSelection()
      }, 0)
      let repeat = false
      this.leftTable.tableData.forEach(item => {
        this.rightTable.tableData.every(x => {
          if (item.servitemId === x.servitemId) {
            this.$message.error('项目已添加')
            repeat = true
            return false
          }
        })
      })
      if (repeat === false) {
        this.rightTable.tableData.forEach(item => {
          item.adjmAmt = ''
          item.nwPric = ''
          item.adjmSumamt = ''
          this.leftTable.tableData.push(item)
          this.rightTable.tableData = []
        })
        this.leftTable.total = this.leftTable.tableData.length
        this.rightTable.total = 0
      }
      this.getTableItme(0)
    },
    getTableItme(val) {
      let params = {
        addFlag: val,
        lstAdjmMedinsItem: [
          ...this.rightTable.tableData
        ],
        adjmNotcMedins: {
          appyMedinsId: this.declareForm.appyMedinsId,
          // appyMedinsLv: this.declareForm.appyMedinsLv,
          // appyMedinsName: this.declareForm.appyMedinsName,
          schmId: this.declareForm.schmId,
          schmNotcId: this.declareForm.schmNotcId
        },
        pageNum: this.rightTable.currentPage,
        pageSize: this.rightTable.pageSize
      }
      API.saveMedinsDeclareItemInfo(params).then(res => {
        if (res.data.code === 0) {
          // this.$message.success(res.data.message)
          // this.closeItem()
        } else {
          this.$message.error(res.data.message)
        }
      }).catch(error => error)
    },
    getTotle(row) {
      row.nwPric = row.initPric * (1 + row.adjmAmt * 0.01)
      // console.log(typeof row.nwPric)
      // console.log(row.initPric)
      // console.log(row.nwPric)
      if (row.adjmAmt > 0) {
        row.adjmSumamt = row.exeVal * (row.initPric * row.adjmAmt * 0.01) / 10000
      } else {
        row.adjmSumamt = row.exeVal * (-row.initPric * row.adjmAmt * 0.01) / 10000
      }
      this.rightTable.tableData.map(item => {
        this.declareForm.adjmprcAmt += item.adjmSumamt
      })
      // console.log(this.declareForm.adjmprcAmt)
    },
    // 关闭弹窗
    closeItem() {
      this.$refs['declareForm'].resetFields()
      this.$emit('closeDeclare')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.box{
  padding-bottom: 16px;
  .form-input{
    width: 100%;
  }
  .el-pagination{
    padding-bottom: 0;
  }
  .search-box{
    padding-bottom: 10px
  }
  .table-btn{
    position:absolute;
    right:8px;
    top:-12px
  }
  .center-table{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .center-btn-group{
      button{
        margin-left: 0;
        margin-top: 10px;
      }
    }
  }
}
</style>
