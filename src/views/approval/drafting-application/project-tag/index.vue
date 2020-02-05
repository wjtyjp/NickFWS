<template>
  <div>
    <section class="layer">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="box">
            <div class="box-header">
              <span class="box-title">项目标签</span>
            </div>
            <div class="box-body">
              <el-form ref="searchForm" :model="searchForm" label-width="80px">
                <el-row :gutter="16">
                  <el-col :span="6">
                    <el-form-item label="项目名称" prop="stdName">
                      <el-input v-model="searchForm.stdName" clearable placeholder="请输入项目名称" style="width:100%;" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="标签名称" prop="labl">
                      <el-input v-model="searchForm.labl" clearable placeholder="请输标签名称" style="width:100%;" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div>
                      <el-button type="primary" @click="submitList">
                        查询
                        <i class="el-icon-search el-icon--right" />
                      </el-button>
                      <el-button type="primary" @click="open('新增','new')" >
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
                v-loading="table.loading"
                ref="infoTable"
                :data="table.tableData"
                :height="table.tableHeight"
                row-key="rowKey"
                fit
                highlight-current-row>
                <el-table-column type="index" label=" " align="center" />
                <!-- <el-table-column :reserve-selection="true" type="selection" width="55" align="center"/> -->
                <el-table-column label="操作" width="180" align="center">
                  <template slot-scope="scope">
                    <el-button type="text" @click="open('修改','edit', scope.row)">修改</el-button>
                    <!-- <el-button type="text" @click="open('查看','show', scope.row)">查看</el-button> -->
                    <el-button type="text" @click="del(scope.row)">删除</el-button>
                  </template>
                </el-table-column>
                <el-table-column prop="stdCode" label="项目编码" show-overflow-tooltip align="center" />
                <el-table-column prop="stdName" label="项目名称" show-overflow-tooltip />
                <el-table-column prop="servitemCont" label="项目内涵" show-overflow-tooltip />
                <el-table-column prop="labl" label="标签" show-overflow-tooltip />
                <el-table-column prop="crterName" label="创建人" show-overflow-tooltip align="center" />
                <el-table-column prop="crteTime" label="创建时间" show-overflow-tooltip />
              </el-table>
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
    <edit-item ref="openItem" :show="diagShow" @closeItem="closeItem" />
  </div>
</template>

<script>
import editItem from './edit-item'
import API from '@/api/adjustment-price-tool/according-cpi-adjustment/project-tag'

export default {
  name: 'ProjectTag',
  components: {
    'edit-item': editItem
  },
  data() {
    return {
      crtNodeList: [],
      searchForm: {
        projectName: '',
        tag: ''
      },
      searchInfo: {},
      table: {
        tableData: [{}],
        pageNum: 1,
        pageSize: 10,
        total: 0,
        editRow: {},
        tableHeight: window.innerHeight - 440,
        loading: false
      },
      // 弹窗显示
      diagShow: {
        openShow: false
      }
    }
  },
  created() {

  },
  mounted() {
    this.submitList()
  },
  methods: {
    // 查询
    submitList() {
      this.table.loading = true
      let params = {
        stdName: this.searchForm.stdName,
        labl: this.searchForm.labl,
        pageNum: 1,
        pageSize: this.table.pageSize
      }
      this.searchInfo.stdName = this.searchForm.stdName
      this.searchInfo.labl = this.searchForm.labl
      API.listServitemTagRelation(params).then(res => {
        if (res.data.code === 0) {
          this.table.pageNum = 1
          this.table.total = res.data.data.pageInfo.recordCounts
          this.table.tableData = res.data.data.rows
        } else {
          this.$message.error(res.data.message)
        }
        this.table.loading = false
      })
    },
    // 页码
    pageChange() {
      this.table.loading = true
      let params = {
        stdName: this.searchInfo.stdName,
        labl: this.searchInfo.labl,
        pageNum: this.table.pageNum,
        pageSize: this.table.pageSize
      }
      API.listServitemTagRelation(params).then(res => {
        if (res.data.code === 0) {
          this.table.total = res.data.data.pageInfo.recordCounts
          this.table.tableData = res.data.data.rows
        } else {
          this.$message.error(res.data.message)
        }
        this.table.loading = false
      })
    },
    // 重置
    restSearch() {
      this.$refs['searchForm'].resetFields()
    },
    // 分页导航
    handleSizeChange(size) {
      this.table.pageSize = size
      this.pageChange()
    },
    // 分页选择
    handleCurrentChange(currentPage) {
      this.table.pageNum = currentPage
      this.pageChange()
    },
    // 弹窗
    open(title, status, row) {
      this.$refs.openItem.title = title
      if (status !== 'new') {
        let params = {
          lablRltsId: row.lablRltsId
        }
        API.getServitemTagRelation(params).then(res => {
          if (res.data.code === 0) {
            this.$refs.openItem.ruleForm = res.data.data
          } else {
            this.$message.error(res.data.message)
          }
        })
      }

      if (status === 'show') {
        this.$refs.openItem.editShow = false
      } else {
        this.$refs.openItem.editShow = true
      }

      this.diagShow.openShow = true
    },
    // 关闭
    closeItem() {
      this.diagShow.openShow = false
      this.submitList()
    },
    // 删除
    del(row) {
      console.log(row)
      let params = [{
        lablRltsId: row.lablRltsId
      }]
      API.deleteServitemTagRelation(params).then(res => {
        if (res.data.code === 0) {
          this.$message.success(res.data.message)
        } else {
          this.$message.error(res.data.message)
        }
        this.submitList()
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
