<template>
  <div>
    <!-- 统筹区调价项目评分 -->
    <section class="layer">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="box">
            <div class="box-header">
              <span class="box-title">查询条件</span>
            </div>
            <div class="box-body">
              <el-form ref="searchForm" :model="searchForm" label-width="80px">
                <el-row :gutter="16">
                  <el-col :span="6">
                    <el-form-item label="统筹区" prop="poolarea">
                      <el-select v-model="searchForm.poolarea" clearable placeholder="请选择统筹区" style="width:100%">
                        <el-option
                          v-for="item in dialogShow.poolareaList"
                          :key="item.dictValueCode"
                          :label="item.dictValueName"
                          :value="item.dictValueCode" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="开始日期" prop="schmStartDate" class="date-input">
                      <el-date-picker
                        v-model="searchForm.schmStartDate"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择开始日期"
                        clearable
                        class="date-input" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="结束日期" prop="schmEndDate">
                      <el-date-picker
                        v-model="searchForm.schmEndDate"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择结束日期"
                        clearable
                        class="date-input" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="6" class="text-right">
                    <el-button type="primary" @click="search" >
                      查询
                      <i class="el-icon-search el-icon--right" />
                    </el-button>
                    <el-button type="primary" @click="reset" >
                      重置
                      <i class="el-icon-refresh el-icon--right" />
                    </el-button>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
    <section class="layer">
      <el-row>
        <div class="box-body">
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="box">
                <div class="box-header">
                  <span class="box-title">预分配动态调价通知</span>
                </div>
                <div class="box-body">
                  <el-table v-loading="table.loading" ref="table" :data="table.tableData" :height="table.tableHeight" row-key="taskId" style="width: 100%" fit>
                    <el-table-column type="index" label=" " align="center" />
                    <!-- <el-table-column :reserve-selection="true" type="selection" fix width="55" align="center"/> -->
                    <el-table-column label="操作" width="120" align="center">
                      <template slot-scope="scope">
                        <el-button type="text" @click="handle(scope.row)">处理</el-button>
                      </template>
                    </el-table-column>
                    <el-table-column prop="poolarea" label="统筹区" show-overflow-tooltip align="center" />
                    <el-table-column prop="adjmprcSumamt" label="调价总金额(万元)" show-overflow-tooltip align="center" />
                    <el-table-column prop="adjmprcUplmt" label="调价幅度上限" show-overflow-tooltip align="center" />
                    <el-table-column prop="adjmprcItemLowlmt" label="调价项目数下限" show-overflow-tooltip align="center" />
                    <el-table-column prop="dclaBegntime" label="开始时间" show-overflow-tooltip align="center" />
                    <el-table-column prop="dclaEndtime" label="结束时间" show-overflow-tooltip align="center" />
                    <el-table-column prop="smplBegntime" label="抽样开始时间" show-overflow-tooltip align="center" />
                    <el-table-column prop="smplEndtime" label="抽样结束时间" show-overflow-tooltip align="center" />
                    <el-table-column prop="notcStasName" label="状态" show-overflow-tooltip align="center" />
                  </el-table>
                  <el-pagination
                    :current-page="table.pageNum"
                    :page-sizes="[5, 10, 20, 50, 100]"
                    :page-size="table.pageSize"
                    :total="table.total"
                    layout="total, sizes, prev, pager, next, jumper"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"/>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-row>
    </section>
    <handle-item ref="handleItems" :show="dialogShow" @closeHandle="closeHandle" @refresh="pageChange" />
  </div>
</template>

<script>
import API from '@/api/adjustment-price-tool/adjust-price-scheme-query'
// import APIS from '@/api/adjustment-price-tool/predistribution-declare-adjustment-tool/poolarea-adjustment-project-score'
import handleItem from './handle-item'
import commonApi from '@/api/commonApi/commonApi'
export default {
  name: 'AdjustmentParameterSet',
  components: {
    'handle-item': handleItem
  },
  data() {
    return {
      searchForm: {
        poolarea: '',
        schmStartDate: '',
        schmEndDate: '',
        flag: '2'
      },
      searchInfo: {},
      table: {
        loading: false,
        tableData: [],
        pageSize: 10,
        pageNum: 1,
        total: 0,
        tableHeight: window.innerHeight - 435
      },
      dialogShow: {
        poolareaList: [],
        handleShow: false
      }
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
    this.search()
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
    // 搜索
    search() {
      this.table.loading = true
      let params = this.searchForm
      this.searchInfo = JSON.parse(JSON.stringify(params))
      params.pageSize = this.table.pageSize
      params.pageNum = 1
      params.flag = '2'
      API.listPricAdjmSchm(params).then(res => {
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
      let params = this.searchInfo
      params.pageSize = this.table.pageSize
      params.pageNum = this.table.pageNum
      params.flag = '2'
      API.listPricAdjmSchm(params).then(res => {
        if (res.data.code === 0) {
          this.table.total = res.data.data.pageInfo.recordCounts
          this.table.tableData = res.data.data.rows
        }
        this.table.loading = false
      }).catch(() => {
        this.table.loading = false
      })
    },
    // 切换pageSize
    handleSizeChange(val) {
      this.table.pageSize = val
      this.pageChange()
    },
    // 切换页码
    handleCurrentChange(val) {
      this.table.pageNum = val
      this.pageChange()
    },
    // 处理
    handle(row) {
      this.$refs.handleItems.getPricAdjmSchmDetail(row.schmId)
      this.dialogShow.handleShow = true
    },
    // 关闭
    closeHandle() {
      this.dialogShow.handleShow = false
    },
    // 重置
    reset() {
      this.$refs.searchForm.resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.date-input{
  width: 100%;
}
</style>
