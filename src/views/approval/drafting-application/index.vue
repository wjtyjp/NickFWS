<template>
  <div class="drafting-application">
    <!-- 调价方案查询 -->
    <section class="layer">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="box">
            <div class="box-header">
              <span class="box-title">查询条件</span>
            </div>
            <div class="box-body">
              <el-form ref="searchForm" :model="searchForm" label-width="100px">
                <el-row :gutter="16">
                  <el-col :span="7">
                    <el-form-item label="统筹区">
                      <el-select v-model="searchForm.poolarea" placeholder="请选择统筹区" style="width:100%;">
                        <el-option v-for="item in poolareaList" :key="item.value" :label="item.label" :value="item.value" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="7">
                    <el-form-item label="方案名称" prop="adjmprcSchmName">
                      <el-input v-model="searchForm.adjmprcSchmName" clearable placeholder="请输方案名称" style="width:100%;" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="制定日期范围" prop="">
                      <el-date-picker
                        v-model="searchForm.inputTime"
                        type="daterange"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="16">
                  <el-col :span="24" class="text-right">
                    <div>
                      <el-button type="primary" @click="search">
                        查询
                        <i class="el-icon-search el-icon--right" />
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
              <el-table :data="tableData" :height="tableHeight" row-key="rowKey" fit highlight-current-row>
                <el-table-column type="index" label="序号" align="center" />
                <!-- <el-table-column :reserve-selection="true" type="selection" width="55" align="center"/> -->
                <el-table-column label="操作" width="120" align="center">
                  <template slot-scope="scope">
                    <el-button type="text" @click.stop="checkRow(scope.row)">查看</el-button>
                    <el-button type="text" @click.stop="deleteRow(scope.row,0)">删除</el-button>
                  </template>
                </el-table-column>
                <!-- <el-table-column show-overflow-tooltip prop="name1" label="省份" align="center" /> -->
                <el-table-column show-overflow-tooltip prop="poolarea" label="统筹区" align="center" />
                <el-table-column show-overflow-tooltip prop="schmAdjmTypeName" label="方案类型" align="center" />
                <el-table-column show-overflow-tooltip prop="adjmprcSchmName" label="调价方案名称" align="center" />
                <el-table-column show-overflow-tooltip prop="adjmprcSumamt" label="调整总额度(万元)" align="center" />
                <el-table-column show-overflow-tooltip prop="adjmMajclsVal" label="调整项目大类数" align="center" />
                <el-table-column show-overflow-tooltip prop="adjmItemVal" label="调整项目数" align="center" />
                <el-table-column show-overflow-tooltip prop="schmDate" label="方案制定日期" align="center" />
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

    <cpi-dialog v-if="cpiObj.isShow" :show="cpiObj.isShow" :cpi-obj="cpiObj" @closeCpiDialog="closeCpiDialog" />
    <ser-dialog v-if="serObj.isShow" :show="serObj.isShow" :ser-obj="serObj" @closeSerDialog="closeSerDialog" />
    <pre-dialog v-if="preObj.isShow" :show="preObj.isShow" :pre-obj="preObj" @closePreDialog="closePreDialog" />
    <pcm-dialog v-if="pcmObj.isShow" :show="pcmObj.isShow" :pcm-obj="pcmObj" @closePcmDialog="closePcmDialog" />
    <cost-dialog v-if="costObj.isShow" :show="costObj.isShow" :cost-obj="costObj" @closeCostDialog="closeCostDialog" />

  </div>
</template>

<script>
import commonApi from '@/api/commonApi/commonApi'
import API from '@/api/adjustment-price-tool/adjust-price-scheme-query'

export default {
  name: 'DraftingApplication',
  components: {

  },
  mixins: [

  ],
  props: {

  },
  data() {
    return {
      searchForm: {
        poolarea: '',
        adjmprcSchmName: '',
        inputTime: ''
      },
      poolareaList: [],
      dropData: {},
      searchInfo: {},
      tableData: [],
      tableHeight: window.innerHeight - 485,
      total: 0, // 总条数
      pageSize: 10, // 每页多少条
      currentPage: 1, // 当前页
      cpiObj: {
        isShow: false,
        cpiData: {}
      },
      serObj: {
        isShow: false,
        serData: {}
      },
      preObj: {
        isShow: false,
        preData: {}
      },
      pcmObj: {
        isShow: false,
        pcmData: {}
      },
      costObj: {
        isShow: false,
        costData: {}
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    // this.getDrop()
    // this.search()
  },
  mounted() {

  },
  methods: {
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
        poolarea: this.searchForm.poolarea,
        adjmprcSchmName: this.searchForm.adjmprcSchmName,
        schmStartDate: this.searchForm.inputTime[0],
        schmEndDate: this.searchForm.inputTime[1],
        flag: '4'
      }
      API.listPricAdjmSchm(params).then(res => {
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
    // 重置
    restSearch() {
      this.searchForm.poolarea = ''
      this.searchForm.stdName = ''
      this.searchForm.startRecyRate = ''
      this.searchForm.endRecyRate = ''
    },
    // 查看
    checkRow(row) {
      // console.log(row)
      // this.cpiObj.isShow = true
      // this.serObj.isShow = true
      // this.preObj.isShow = true
      // this.pcmObj.isShow = true
      // this.costObj.isShow = true
      // let params = {
      //   schmId: row.schmId
      // }
      if (row.schmAdjmType === '101') {
        API.getPricAdjmSchmDetail(row.schmId).then(res => {
          if (res.data.code === 0) {
            this.cpiObj.isShow = true
            this.cpiObj.cpiData = res.data.data
          } else {
            this.$message.error(res.data.message)
          }
        })
      } else if (row.schmAdjmType === '102') {
        API.getPricAdjmSchmDetail(row.schmId).then(res => {
          if (res.data.code === 0) {
            this.serObj.isShow = true
            this.serObj.serData = res.data.data
          } else {
            this.$message.error(res.data.message)
          }
        })
      } else if (row.schmAdjmType === '103') {
        API.getPricAdjmSchmDetail(row.schmId).then(res => {
          if (res.data.code === 0) {
            this.preObj.isShow = true
            this.preObj.preData = res.data.data
          } else {
            this.$message.error(res.data.message)
          }
        })
      } else if (row.schmAdjmType === '104') {
        API.getPricAdjmSchmDetail(row.schmId).then(res => {
          if (res.data.code === 0) {
            this.pcmObj.isShow = true
            this.pcmObj.pcmData = res.data.data
          } else {
            this.$message.error(res.data.message)
          }
        })
      } else {
        API.getPricAdjmSchmDetail(row.schmId).then(res => {
          if (res.data.code === 0) {
            this.costObj.isShow = true
            this.costObj.costData = res.data.data
          } else {
            this.$message.error(res.data.message)
          }
        })
      }
    },
    // 作费
    deleteRow(row) {
      this.$confirm('您进行的是作废操作, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let params = {
          schmId: row.schmId
        }
        API.deletePricAdjmSchm(params).then(res => {
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
    closeCpiDialog() {
      this.cpiObj.isShow = false
    },
    closeSerDialog() {
      this.serObj.isShow = false
    },
    closePreDialog() {
      this.preObj.isShow = false
    },
    closePcmDialog() {
      this.pcmObj.isShow = false
    },
    closeCostDialog() {
      this.costObj.isShow = false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
