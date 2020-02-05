<template>
  <div class="PointAndRecycle">
    <!-- 点数与回收率 -->
    <section class="layer">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="box">
            <div class="box-header">
              <span class="box-title">点数与回收率</span>
            </div>
            <div class="box-body">
              <el-form ref="searchForm" :model="searchForm" label-width="80px">
                <el-row :gutter="16">
                  <el-col :span="6">
                    <el-form-item label="统筹区">
                      <el-select v-model="searchForm.poolarea" placeholder="请选择统筹区" style="width:100%;">
                        <el-option v-for="item in poolareaList" :key="item.value" :label="item.label" :value="item.value" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="项目名称">
                      <el-input v-model="searchForm.stdName" clearable placeholder="请输入项目名称" style="width:100%;" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="回收率范围">
                      <el-col :span="11">
                        <el-input v-model="searchForm.startRecyRate" clearable placeholder="请输入回收率" style="width:100%;" />
                      </el-col>
                      <el-col :span="2" style="text-align:center">至</el-col>
                      <el-col :span="11">
                        <el-input v-model="searchForm.endRecyRate" clearable placeholder="请输入回收率" style="width:100%;" />
                      </el-col>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div style="float:right">
                      <el-button type="primary" @click="search">
                        查询
                        <i class="el-icon-search el-icon--right" />
                      </el-button>
                      <el-button type="primary" @click="addrow" >
                        新增
                        <i class="el-icon-plus el-icon--right" />
                      </el-button>
                      <el-button type="primary" @click="restSearch" >
                        重置
                        <i class="el-icon-refresh el-icon--right" />
                      </el-button>
                      <!-- <el-button type="primary" @click="search">

                        <i class="el-icon-upload2 el-icon--right" />
                      </el-button> -->
                      <el-button type="primary" @click="exportData">
                        导出
                        <i class="el-icon-download el-icon--right" />
                      </el-button>
                      <upload-excel class="table-btn" @getData="importExcel"/>

                    </div>
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
          <div class="box">
            <div class="box-header">
              <span class="box-title">信息列表</span>
            </div>
            <div class="box-body">
              <el-table
                ref="infoTable"
                :data="tableData"
                :height="tableHeight"
                row-key="rowKey"
                fit
                highlight-current-row>
                <el-table-column type="index" label="序号" width="50" align="center" />
                <!-- <el-table-column :reserve-selection="true" type="selection" width="55" align="center"/> -->
                <el-table-column label="操作" width="180" align="center">
                  <template slot-scope="scope">
                    <el-button type="text" @click.stop="modifyRow(scope.row)">修改</el-button>
                    <el-button type="text" @click.stop="checkRow(scope.row)">查看</el-button>
                    <el-button type="text" @click.stop="deleteRow(scope.row,0)">作废</el-button>
                  </template>
                </el-table-column>
                <el-table-column show-overflow-tooltip prop="poolarea" label="统筹区" align="center" />
                <el-table-column show-overflow-tooltip prop="stdCode" label="项目编码" align="center" />
                <el-table-column show-overflow-tooltip prop="stdName" label="项目名称" align="center" />
                <el-table-column show-overflow-tooltip prop="ptCnt" label="点数" align="center" />
                <el-table-column show-overflow-tooltip prop="recyRate" label="回收率(%)" align="center" />

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
            </div>
          </div>
        </el-col>
      </el-row>
    </section>

    <edit-dialog v-if="editObj.isShow" :show="editObj.isShow" :edit-obj="editObj" @closeEditDialog="closeEditDialog" />
    <modify-dialog v-if="modifyObj.isShow" :show="modifyObj.isShow" :modify-obj="modifyObj" @closeModifyDialog="closeModifyDialog" />
    <check-dialog v-if="checkObj.isShow" :show="checkObj.isShow" :check-obj="checkObj" @closeCheckDialog="closeCheckDialog" />

  </div>
</template>

<script>
import commonApi from '@/api/commonApi/commonApi'
import upload from '@/components/UploadExcel/index'
import API from '@/api/adjustment-price-tool/point-adjustment-price-tool/point-and-recycle'

import EditDialog from './edit-dialog'
import ModifyDialog from './modify-dialog'
import CheckDialog from './check-dialog'

export default {
  name: 'PointAndRecycle',
  components: {
    'upload-excel': upload, // 导入Excel
    EditDialog,
    ModifyDialog,
    CheckDialog
  },
  data() {
    return {
      searchForm: {
        poolarea: '',
        stdName: '',
        startRecyRate: '',
        endRecyRate: ''
      },
      poolareaList: [],
      tableData: [],
      tableHeight: window.innerHeight - 485,
      total: 0, // 总条数
      pageSize: 10, // 每页多少条
      currentPage: 1, // 当前页
      editObj: {
        isShow: false,
        poolareaList: ''
      },
      modifyObj: {
        isShow: false,
        poolareaList: '',
        modifyData: {}
      },
      checkObj: {
        isShow: false,
        itemCostId: '',
        poolareaList: ''
      }
    }
  },
  created() {

  },
  mounted() {
    this.getDrop()
    this.search()
  },
  methods: {
    importExcel(data) {
      console.log(data, '///')
      let arr = []
      data.map(v => {
        let obj = {}
        obj.servitemType = v.项目类别
        obj.stdName = v.项目名称
        obj.ptCnt = v.点数
        obj.initPtCnt = v.原点数
        obj.recyRate = v.回收率
        obj.initRecyRate = v.原回收率
        obj.valiDate = v.有效日期
        obj.invdDate = v.失效日期
        arr.push(obj)
      })
      console.log(arr, '///')
      let params = arr
      // console.log(1)
      API.saveBatchPricServitemPt(params).then(res => {
        if (res.data.code === 0) {
          this.$message({
            type: 'success',
            message: res.data.message
          })
          // this.cancelDialog()
          this.search()
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      })
    },
    exportData() {
      let params = {
        ...this.searchForm,
        pageNum: this.currentPage,
        pageSize: this.pageSize
      }
      API.exportPricSerPtInfo(params).then(res => {
        // console.log(res)
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        // link.setAttribute('download', `${row.response.fileName}.${row.response.fileSufx}`)
        link.setAttribute('download', '项目点数.xls')
        document.body.appendChild(link)
        link.click()
      })
    },
    // 获取下拉数据
    getDrop() {
      let params = 'aaa027'
      commonApi.getCodeValueListMultiple(params).then(res => {
        if (res.data.code === 0) {
          this.poolareaList = res.data.data.aaa027.map(item => {
            return {
              value: item.dictValueCode,
              label: item.dictValueName
            }
          })
        }
      })
    },
    // 获取表格数据
    getTableDate(currentPage, pageSize) {
      let params = {
        pageNum: currentPage,
        pageSize: pageSize,
        ...this.searchForm
      }
      API.listPricServitemPt(params).then(res => {
        if (res.data.code === 0) {
          this.total = res.data.data.pageInfo.recordCounts
          this.currentPage = res.data.data.pageInfo.pageNum
          this.pageSize = res.data.data.pageInfo.pageSize
          this.tableData = res.data.data.rows
        } else {
          this.$message.error(res.data.message)
        }
      })
    },
    // 查询
    search() {
      this.getTableDate(this.currentPage, this.pageSize)
    },
    // 新增
    addrow() {
      this.editObj.isShow = true
      this.editObj.poolareaList = this.poolareaList
    },
    // 重置
    restSearch() {
      this.searchForm.poolarea = ''
      this.searchForm.stdName = ''
      this.searchForm.startRecyRate = ''
      this.searchForm.endRecyRate = ''
    },
    // 修改
    modifyRow(row) {
      this.modifyObj.isShow = true
      this.modifyObj.poolareaList = this.poolareaList
      this.modifyObj.itemCostId = row.itemCostId
      // this.modifyObj.modifyData = row
    },
    // 查看
    checkRow(row) {
      this.checkObj.isShow = true
      this.checkObj.itemCostId = row.itemCostId
      this.checkObj.poolareaList = this.poolareaList
    },
    // 作费
    deleteRow(row) {
      this.$confirm('您进行的是作废操作, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let params = {
          itemCostId: row.itemCostId
        }
        API.deletePricServitemPt(params).then(res => {
          if (res.data.code === 0) {
            this.$message({
              type: 'success',
              message: res.data.message
            })
            this.getTableDate(this.currentPage, this.pageSize)
          } else {
            this.$message({
              type: 'error',
              message: res.data.message
            })
          }
        }).catch(err => {
          console.log(err)
        })
      }).catch(_ => {})
    },
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
    // 关闭
    closeEditDialog() {
      this.editObj.isShow = false
      this.getTableDate(this.currentPage, this.pageSize)
    },
    closeModifyDialog() {
      this.modifyObj.isShow = false
      this.getTableDate(this.currentPage, this.pageSize)
    },
    closeCheckDialog() {
      this.checkObj.isShow = false
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.table-btn{
  display: inline-block;
  margin-left: 10px;
}
</style>
