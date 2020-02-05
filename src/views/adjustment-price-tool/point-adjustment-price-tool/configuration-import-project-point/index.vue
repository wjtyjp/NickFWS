<template>
  <div>
    <section class="layer">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="box">
            <div class="box-header">
              <span class="box-title">配置与导入项目点数</span>
            </div>
            <div class="box-body">
              <el-form ref="searchForm" :model="searchForm" label-width="80px">
                <el-row :gutter="16">
                  <el-col :span="7">
                    <el-form-item label="项目大类" prop="projectName">
                      <el-input v-model="searchForm.projectName" clearable placeholder="请输入项目大类" style="width:100%;" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="7">
                    <el-form-item label="项目名称" prop="projectName">
                      <el-input v-model="searchForm.projectName" clearable placeholder="请输入项目名称" style="width:100%;" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="点数范围" prop="tag">
                      <el-col :span="11">
                        <el-input v-model="searchForm.projectName" clearable placeholder="请输入点数范围" style="width:100%;" />
                      </el-col>
                      <el-col :span="2" style="text-align:center">至</el-col>
                      <el-col :span="11">
                        <el-input v-model="searchForm.projectName" clearable placeholder="请输入点数范围" style="width:100%;" />
                      </el-col>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div style="float:right">
                      <el-button type="primary" >
                        查询
                        <i class="el-icon-search el-icon--right" />
                      </el-button>
                      <el-button type="primary" @click="open('新增')" >
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
                    <el-button type="text" @click="open('修改', scope.row)">修改</el-button>
                    <el-button type="text" @click="open('查看', scope.row)">查看</el-button>
                    <el-button type="text">删除</el-button>
                  </template>
                </el-table-column>
                <el-table-column prop="" label="项目编码" show-overflow-tooltip align="center" />
                <el-table-column prop="" label="项目名称" show-overflow-tooltip />
                <el-table-column prop="" label="项目内涵" show-overflow-tooltip />
                <el-table-column prop="" label="标签" show-overflow-tooltip />
                <el-table-column prop="" label="创建人" show-overflow-tooltip align="center" />
                <el-table-column prop="" label="创建时间" show-overflow-tooltip />
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
    <edit-item ref="openItem" :show="dialogShow" @closeItem="closeItem" />
  </div>
</template>

<script>
import commonApi from '@/api/commonApi/commonApi'
import editItem from './edit-item'
export default {
  name: 'ConfigurationImportProjectPoint',
  components: {
    'edit-item': editItem
  },
  data() {
    return {
      crtNodeList: [],
      searchForm: {
        poolarea: '',
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
        tableHeight: window.innerHeight - 485,
        loading: false
      },
      // 弹窗显示
      dialogShow: {
        poolareaList: [],
        openShow: false
      }
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
          this.dialogShow.poolareaList = res.data.data.aaa027
        }
      })
    },
    // 查询
    submitList() {
      // this.table.loading = true
      // let params = {
      //   taskType: '220',
      //   pageCrtNodeName: '价格机制性调价方案',
      //   crtNodeName: this.searchForm.crtNodeName,
      //   taskName: this.searchForm.taskName,
      //   pageNum: 1,
      //   pageSize: this.table.pageSize
      // }
      // this.searchInfo.taskName = this.searchForm.taskName
      // this.searchInfo.crtNodeName = this.searchForm.crtNodeName
      // ApiObj.listTask(params).then(res => {
      //   if (res.data.code === 0) {
      //     this.table.pageNum = 1
      //     this.table.total = res.data.data.pageInfo.recordCounts
      //     this.table.tableData = res.data.data.rows
      //   } else {
      //     this.$message.error(res.data.message)
      //   }
      //   this.table.loading = false
      // })
    },
    // 页码
    pageChange() {
      // this.table.loading = true
      // let params = {
      //   taskType: '220',
      //   pageCrtNodeName: '价格机制性调价方案',
      //   crtNodeName: this.searchInfo.crtNodeName,
      //   taskName: this.searchInfo.taskName,
      //   pageNum: this.table.pageNum,
      //   pageSize: this.table.pageSize
      // }
      // ApiObj.listTask(params).then(res => {
      //   if (res.data.code === 0) {
      //     this.table.total = res.data.data.pageInfo.recordCounts
      //     this.table.tableData = res.data.data.rows
      //   } else {
      //     this.$message.error(res.data.message)
      //   }
      //   this.table.loading = false
      // })
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
    open(title, row) {
      this.$refs.openItem.title = title
      if (title === '查看') {
        this.$refs.openItem.editShow = false
      } else {
        this.$refs.openItem.editShow = true
      }
      this.dialogShow.openShow = true
    },
    // 关闭
    closeItem() {
      this.dialogShow.openShow = false
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
