<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 08:41:55
 * @LastEditTime: 2019-09-27 13:48:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="box">
    <div class="box-body">
      <el-row :gutter="20">
        <el-col :span="11">
          <div class="box">
            <div class="box-header">
              <div class="table-btn">
                <el-form class="search-box" label-width="0">
                  <el-row :gutter="5">
                    <el-col :span="5">
                      <el-form-item label=" ">
                        <el-select v-model="tableForm.itemTypeCode" placeholder="项目大类" clearable style="width:100%">
                          <el-option
                            v-for="item in selectList.itemTypeList"
                            :key="item.dictValueCode"
                            :label="item.dictValueName"
                            :value="item.dictValueCode" />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="4">
                      <el-form-item label=" ">
                        <el-input v-model="tableForm.keyWords" placeholder="项目编码或项目名称关键字" style="width:100%" />
                      </el-form-item>
                    </el-col>
                    <el-col v-if="!tableInfo.CPIshow" :span="10">
                      <el-form-item label="" prop="startExeVal">
                        <el-col :span="11">
                          <el-input v-model="tableForm.startExeVal" :placeholder="tableInfo.searchTitle" clearable style="width:100%;" />
                        </el-col>
                        <el-col :span="2" style="text-align:center">至</el-col>
                        <el-col :span="11">
                          <el-input v-model="tableForm.endExeVal" clearable placeholder="范围" style="width:100%;" />
                        </el-col>
                      </el-form-item>
                    </el-col>
                    <el-col v-if="tableInfo.CPIshow" :span="10">
                      <el-col :span="12">
                        <el-form-item label="" prop="lablType">
                          <el-select v-model="tableForm.lablType" :placeholder="tableInfo.searchTitle" clearable style="width:100%">
                            <el-option
                              v-for="item in selectList.tagList"
                              :key="item.dictValueCode"
                              :label="item.dictValueName"
                              :value="item.dictValueCode"/>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="" prop="labl">
                          <el-input v-model="tableForm.labl" placeholder="标签名" clearable style="width:100%;" />
                        </el-form-item>
                      </el-col>
                    </el-col>
                    <el-col :span="3">
                      <el-button type="primary" @click="search">搜索</el-button>
                    </el-col>
                    <el-col :span="2">
                      <el-button type="primary" @click="exportExcel" >导出</el-button>
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
                size="mini"
                fit
                highlight-current-row
                @selection-change="leftHandlChange">
                <el-table-column key="index" :reserve-selection="true" type="selection" width="50" align="center" fixed />
                <el-table-column v-if="tableInfo.CPIshow" key="itemCode" label="项目编码" width="120" align="center" show-overflow-tooltip>
                  <template slot-scope="{row}">
                    <span>{{ row.itemCode }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="!tableInfo.show" key="servitemTypeName" prop="servitemTypeName" label="大类名称" show-overflow-tooltip/>
                <el-table-column v-if="!tableInfo.show" key="stdName" prop="stdName" label="项目名称" width="150" show-overflow-tooltip align="center"/>
                <el-table-column v-if="tableInfo.show" key="itemTypeName" label="大类名称" width="150" align="center" show-overflow-tooltip>
                  <template slot-scope="{row}">
                    <span>{{ row.itemTypeName }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="tableInfo.show" key="itemName" label="项目名称" show-overflow-tooltip align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.itemName }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="tableInfo.CPIshow" key="labl" label="标签" align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.labl }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="!tableInfo.CPIshow" key="prcunt" label="计价单位" align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.prcunt }}</span>
                  </template>
                </el-table-column>
                <el-table-column key="exeVal" label="执行例数" align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.exeVal }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="!tableInfo.CPIshow" key="initPric" label="价格" width="90" show-overflow-tooltip align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.initPric }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="!tableInfo.CPIshow" key="recyRate" label="收益率(%)" width="110" show-overflow-tooltip align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.recyRate }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="!tableInfo.CPIshow" key="servitemCont" label="项目内涵" width="180" show-overflow-tooltip align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.servitemCont }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="tableInfo.CPIshow" key="exeSumamt" label="执行金额(万元)" width="110" show-overflow-tooltip align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.exeSumamt }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="tableInfo.CPIshow" key="nwPric" label="最近调价(元)" width="110" show-overflow-tooltip align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.nwPric }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="tableInfo.CPIshow" key="recentDate" label="最近调价日期" width="100" show-overflow-tooltip align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.recentDate }}</span>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                :current-page="leftTable.pageNum"
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
              <span class="box-title">已添加项目</span>
              <upload-excel class="table-btn" @getData="importExcel" />
            </div>
            <div class="box-body">
              <el-table
                v-loading="rightTable.loading"
                key="rightTable"
                ref="rightTable"
                :data="rightTable.tableData"
                :height="rightTable.tableHeight"
                row-key="rowKey"
                size="mini"
                fit
                highlight-current-row
                @selection-change="rightHandlChange">
                <el-table-column key="selection" :reserve-selection="true" type="selection" width="55" align="center" fixed/>
                <el-table-column v-if="!tableInfo.show" key="servitemTypeName" prop="servitemTypeName" label="大类名称" width="150" show-overflow-tooltip/>
                <el-table-column v-if="!tableInfo.show" key="stdName" prop="stdName" label="项目名称" width="150" show-overflow-tooltip align="center"/>
                <el-table-column v-if="tableInfo.show" key="itemTypeName" label="大类名称" width="150" show-overflow-tooltip>
                  <template slot-scope="{row}">
                    <span>{{ row.itemTypeName }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="tableInfo.show" key="itemName" label="项目名称" width="150" show-overflow-tooltip align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.itemName }}</span>
                  </template>
                </el-table-column>
                <el-table-column v-if="!tableInfo.CPIshow" key="prcunt" label="计价单位" show-overflow-tooltip align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.prcunt }}</span>
                  </template>
                </el-table-column>
                <!-- 点数法调价显示 -->
                <el-table-column v-if="!tableInfo.show" key="ptCnt" label="项目点数" width="100" show-overflow-tooltip align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.ptCnt }}</span>
                  </template>
                </el-table-column>
                <el-table-column key="exeVal" label="执行数量" align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.exeVal }}</span>
                  </template>
                </el-table-column>
                <el-table-column key="exeSumamt" label="总收费金额(万元)" width="100" align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.exeSumamt }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="调价情况" align="center">
                  <el-table-column key="initPric" label="调整前价格(元)" width="110" align="center">
                    <template slot-scope="{row}">
                      <span>{{ row.initPric }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column key="adjmprcCof" label="调整系数(%)" width="110" show-overflow-tooltip align="center">
                    <template slot-scope="{row}">
                      <el-input v-model.number="row.adjmprcCof" type="number" min="-100" max="100" step="1" @change="priceChange(row)" />
                    </template>
                  </el-table-column>
                  <!-- <el-table-column key="adjmprcCof" label="调整系数(%)" width="110" show-overflow-tooltip align="center">
                    <template slot-scope="scope">
                      <el-input v-model.number="scope.row.adjmprcCof" type="number" min="-100" max="100" step="1" @change="priceChange(scope.row, scope.$index)" @blur="priceChange(scope.row, scope.$index)" />
                    </template>
                  </el-table-column> -->
                  <el-table-column key="nwPric" label="调整后(元)" width="110" show-overflow-tooltip align="center">
                    <template slot-scope="{row}">
                      <span>{{ row.nwPric }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column key="appySumamt" label="调整金额(万元)" width="110" show-overflow-tooltip align="center">
                    <template slot-scope="{row}">
                      <span>{{ row.appySumamt }}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import upload from '@/components/UploadExcel/index'
import commonApi from '@/api/commonApi/commonApi'
export default {
  name: '',
  components: {
    'upload-excel': upload // 导入Excel
  },
  props: {
    // 传入API和相关信息
    tableInfo: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      leftTable: {
        loading: false,
        tableData: [],
        pageNum: 1,
        pageSize: 10,
        total: 0,
        selectRow: [],
        tableHeight: window.innerHeight - 575
      },
      rightTable: {
        loading: false,
        tableData: [],
        total: 0,
        selectRow: [],
        tableHeight: window.innerHeight - 525
      },
      // 左边查询
      tableForm: {
        itemTypeCode: '',
        keyWords: '',
        startExeVal: '',
        endExeVal: '',
        labl: '', // 标签名
        lablType: ''
      },
      searchInfo: {},
      selectList: {
        itemTypeList: [],
        tagList: []
      }
    }
  },
  computed: {

  },
  watch: {
    'leftTable.tableData': function(val) {
      this.leftTable.total = val.length
    }
  },
  created() {
  },
  mounted() {
    this.getPoolareaList()
    this.search()
  },
  methods: {
    // 项目大类
    getPoolareaList() {
      commonApi.getCodeValueListMultiple('servitem_type').then(res => {
        if (res.data.code === 0) {
          this.selectList.itemTypeList = res.data.data.servitem_type
        }
      })
    },
    // 搜索
    search() {
      this.leftTable.loading = true
      let params = Object.assign({}, this.tableForm)
      this.searchInfo = params
      params.pageSize = this.leftTable.pageSize
      params.pageNum = 1
      this.tableInfo.url(params).then(res => {
        if (res.data.code === 0) {
          this.leftTable.pageNum = 1
          this.leftTable.total = res.data.data.pageInfo.recordCounts
          this.leftTable.tableData = res.data.data.rows
        }
        this.leftTable.loading = false
      }).catch(() => {
        this.leftTable.loading = false
      })
    },
    // 页码
    pageChange() {
      this.leftTable.loading = true
      let params = this.searchInfo
      params.pageSize = this.leftTable.pageSize
      params.pageNum = this.leftTable.pageNum
      this.tableInfo.url(params).then(res => {
        if (res.data.code === 0) {
          this.leftTable.total = res.data.data.pageInfo.recordCounts
          this.leftTable.tableData = res.data.data.rows
        }
        this.leftTable.loading = false
      }).catch(() => {
        this.leftTable.loading = false
      })
    },
    // 左表Size
    handleSizeChangeLeft(val) {
      this.leftTable.pageSize = val
      this.pageChange()
    },
    // 左表页码
    handleCurrentChangeleft(num) {
      this.leftTable.pageNum = num
      this.pageChange()
    },
    // 价格计算
    priceChange(row) {
      row.nwPric = row.initPric + row.initPric * row.adjmprcCof / 100 // 调整后价格=调整前价格+调整前价格*调整幅度
      row.appySumamt = row.initPric * row.adjmprcCof * row.exeVal / 1000000 // 调价金额= 调整前价格*调整幅度*执行数量
      this.$emit('setRightTable', this.rightTable.tableData)
    },

    // 穿梭表格
    // 将左边表格选择项存入select中
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
          this.$set(item, 'nwPric', null)
          this.$set(item, 'appySumamt', null)
          this.$set(item, 'adjmprcCof', null)
          this.rightTable.tableData.push(item)
        })
        for (let i = 0; i < this.leftTable.tableData.length; i++) {
          for (let j = 0; j < this.leftTable.selectRow.length; j++) {
            if (this.leftTable.tableData[i].servitemId === this.leftTable.selectRow[j].servitemId) {
              this.leftTable.tableData.splice(i, 1)
            }
          }
        }
        this.$emit('setRightTable', this.rightTable.tableData)
      }
    },
    // 左表全部右移
    addALLStaff() {
      this.leftTable.loading = true
      this.rightTable.loading = true
      setTimeout(() => {
        this.$refs['leftTable'].clearSelection()
        this.$refs['rightTable'].clearSelection()
      }, 0)
      let repeat = false
      this.rightTable.tableData.forEach(item => {
        this.leftTable.tableData.every(x => {
          if (item.servitemId === x.servitemId) {
            this.$message.error('项目已添加')
            repeat = true
            return false
          }
        })
      })
      if (repeat === false) {
        this.rightTable.total += this.leftTable.tableData.length
        this.leftTable.tableData.forEach(item => {
          this.$set(item, 'nwPric', null)
          this.$set(item, 'appySumamt', null)
          this.$set(item, 'adjmprcCof', null)
          // item.nwPric = null
          // item.appySumamt = null
          this.rightTable.tableData.push(item)
        })
        this.leftTable.tableData = []
        this.$emit('setRightTable', this.rightTable.tableData)
      }
      this.leftTable.loading = false
      this.rightTable.loading = false
    },

    // 将右边表格选择项存入select中
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
          this.leftTable.tableData.push(item)
        })
        for (let i = 0; i < this.rightTable.tableData.length; i++) {
          for (let j = 0; j < this.rightTable.selectRow.length; j++) {
            if (this.rightTable.tableData[i].servitemId === this.rightTable.selectRow[j].servitemId) {
              this.rightTable.tableData.splice(i, 1)
            }
          }
        }
        this.$emit('setRightTable', this.rightTable.tableData)
      }
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
        this.leftTable.total += this.rightTable.tableData.length
        this.rightTable.tableData.forEach(item => {
          this.leftTable.tableData.push(item)
          this.rightTable.tableData = []
        })
        this.$emit('setRightTable', this.rightTable.tableData)
      }
    },

    // 导入
    importExcel(data) {
      this.rightTable.loading = true
      if (data) {
        let titleMap = new Map([
          ['大类名称', 'itemTypeName'],
          ['服务项目ID', 'servitemId'],
          ['项目编码', 'itemCode'],
          ['项目名称', 'itemName'],
          ['总收费金额', 'exeSumamt'],
          ['执行例数', 'exeVal'],
          ['执行数量', 'exeVal'],
          ['调整前价格', 'initPric'],
          ['价格', 'initPric'],
          ['调整系数', 'adjmprcCof'],
          ['调整后(元)', 'nwPric'],
          ['调整金额(万元)', 'appySumamt']
        ])
        let rowInfo = {}
        data.forEach((item, index) => {
          Object.keys(item).map(x => {
            if (titleMap.get(x)) {
              rowInfo[titleMap.get(x)] = item[x]
            } else {
              rowInfo[x] = item[x]
            }
          })
          this.$set(rowInfo, 'nwPric', null)
          this.$set(rowInfo, 'appySumamt', null)
          this.$set(rowInfo, 'adjmprcCof', null)
          this.$set(this.rightTable.tableData, index, rowInfo)
          rowInfo = {}
        })
        this.$message.success('导入成功！')
      }
      this.rightTable.loading = false
    },
    // 导出
    exportExcel() {
      let params = Object.assign({}, this.tableForm)
      params.pageNum = 0
      params.pageSize = 0
      this.tableInfo.exportUrl(params).then(res => {
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${this.tableInfo.title}.xls`)
        document.body.appendChild(link)
        link.click()
      })
    },
    // 重置
    resetTable() {
      this.$refs['leftTable'].clearSelection()
      this.$refs['rightTable'].clearSelection()
      this.rightTable.tableData = []
      this.search()
    }
  }
}
</script>

<style scoped lang="scss">
.box{
  padding-bottom: 16px;
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
