<template>
  <div class="TagManagement">
    <!-- 标签管理 -->
    <section class="layer">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="box">
            <div class="box-header">
              <span class="box-title">标签管理</span>
            </div>
            <div class="box-body">
              <el-form ref="searchForm" :model="searchForm" label-width="80px">
                <el-row :gutter="16">
                  <el-col :span="6">
                    <el-form-item label="标签类型" prop="lablType">
                      <el-select v-model="searchForm.lablType" clearable placeholder="请选择标签类型" style="width:100%;">
                        <el-option v-for="item in lablTypeList" :key="item.value" :label="item.label" :value="item.value" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="标签名称" prop="labl">
                      <el-input v-model="searchForm.labl" clearable placeholder="请输标签名称" style="width:100%;" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div>
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
                <el-table-column type="index" label=" " align="center" />
                <!-- <el-table-column :reserve-selection="true" type="selection" width="55" align="center"/> -->
                <el-table-column label="操作" width="180" align="center">
                  <template slot-scope="scope">
                    <el-button type="text" @click.stop="modifyRow(scope.row)">修改</el-button>
                    <!-- <el-button type="text" @click.stop="checkRow(scope.row)">查看</el-button> -->
                    <el-button type="text" @click.stop="deleteRow(scope.row,0)">作废</el-button>
                  </template>
                </el-table-column>
                <el-table-column show-overflow-tooltip prop="lablType" label="标签类型" align="center" />
                <el-table-column show-overflow-tooltip prop="labl" label="标签名称" align="center" />
                <el-table-column show-overflow-tooltip prop="crterName" label="创建人" align="center" />
                <el-table-column show-overflow-tooltip prop="crteTime" label="创建日期" align="center" />
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
import API from '@/api/adjustment-price-tool/according-cpi-adjustment/tag-management'

import EditDialog from './edit-dialog'
import ModifyDialog from './modify-dialog'
import CheckDialog from './check-dialog'

export default {
  name: 'TagManagement',
  components: {
    EditDialog,
    ModifyDialog,
    CheckDialog
  },
  data() {
    return {
      searchForm: {
        lablType: '',
        labl: ''
      },
      lablTypeList: [],
      dropData: {},
      searchInfo: {},
      tableData: [],
      total: 0, // 总条数
      pageSize: 10, // 每页多少条
      currentPage: 1, // 当前页
      editObj: {
        isShow: false,
        lablTypeList: ''
      },
      modifyObj: {
        isShow: false,
        lablTypeList: '',
        modifyData: {}
      },
      checkObj: {
        isShow: false,
        lablId: '',
        lablTypeList: ''
      },
      tableHeight: window.innerHeight - 435
    }
  },
  created() {
    this.getDrop()
    this.search()
  },
  mounted() {

  },
  methods: {
    // 获取下拉数据
    getDrop() {
      let params = 'labl_type'
      commonApi.getCodeValueListMultiple(params).then(res => {
        if (res.data.code === 0) {
          this.dropData = res.data.data
          this.lablTypeList = this.dropData.labl_type.map(item => {
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
      API.listTagManage(params).then(res => {
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
      this.editObj.lablTypeList = this.lablTypeList
    },
    // 重置
    restSearch() {
      this.$refs.searchForm.resetFields()
    },
    // 修改
    modifyRow(row) {
      this.modifyObj.isShow = true
      this.modifyObj.lablTypeList = this.lablTypeList
      this.modifyObj.modifyData = row
    },
    // 查看
    checkRow(row) {
      this.checkObj.isShow = true
      this.checkObj.lablId = row.lablId
      this.checkObj.lablTypeList = this.lablTypeList
    },
    // 作费
    deleteRow(row) {
      this.$confirm('您进行的是作废操作, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let params = [{
          lablId: row.lablId
        }]
        API.deleteTagManage(params).then(res => {
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
</style>
