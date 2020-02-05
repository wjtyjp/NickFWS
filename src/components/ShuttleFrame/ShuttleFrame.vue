<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 18:59:24
 * @LastEditTime: 2019-09-27 13:45:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="box-body">
    <el-row :gutter="20">
      <el-col :span="11">
        <div class="box">
          <div class="box-header">
            <span class="box-title">未选择项目</span>
            <div class="table-btn">
              <el-form class="search-box" label-width="80px">
                <el-row :gutter="10">
                  <el-col :span="16">
                    <el-form-item label="">
                      <el-input v-model="searchProjectName" placeholder="请输入" style="width:100%" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-button type="primary" @click="search">搜索</el-button>
                  </el-col>
                  <el-col :span="4">
                    <el-button type="primary" @click="exportExcel" >导出</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
          <div class="box-body">
            <el-table
              v-loading="listLoading"
              id="leftTable"
              ref="staffTable"
              :key="tableKey"
              :row-key="rowKey"
              :data="staffList"
              :height="tableHeightLeft"
              size="mini"
              border
              fit
              highlight-current-row
              @selection-change="handleStaffChange">
              <!-- :selectable="isSelectable" -->
              <el-table-column :reserve-selection="true" type="selection" width="55" align="center" fixed/>
              <el-table-column label="项目类别" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.servitemType }}</span>
                </template>
              </el-table-column>

              <el-table-column label="项目名称" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.servitemName }}</span>
                </template>
              </el-table-column>
              <el-table-column label="计价单位" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.prcunt }}</span>
                </template>
              </el-table-column>
              <el-table-column label="项目内涵" show-overflow-tooltip align="center">
                <template slot-scope="{row}">
                  <span>{{ row.itemCont }}</span>
                </template>
              </el-table-column>
              <el-table-column label="除外内容" show-overflow-tooltip align="center">
                <template slot-scope="{row}">
                  <span>{{ row.exctCont }}</span>
                </template>
              </el-table-column>
              <el-table-column label="项目编码" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.servitemCode }}</span>
                </template>
              </el-table-column>
              <el-table-column label="有效日期" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.valiDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="失效日期" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.invdDate }}</span>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              :current-page="currentPageLeft"
              :page-sizes="[15, 30, 50, 100]"
              :page-size="pageSizeLeft"
              :total="totalLeft"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChangeLeft"
              @current-change="handleCurrentChangeleft"/></div>
      </div></el-col>
      <el-col :span="2" style="text-align:center;">
        <div style="margin-top:200px">
          <el-button :disabled="!staffData.length" type="primary" icon="el-icon-arrow-right" @click="addStaff" />
          <el-button
            :disabled="!selectedStaffData.length"
            type="primary"
            icon="el-icon-arrow-left"
            style="margin-left: 0;margin-top: 10px;"
            @click="removeStaff" />
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
              v-loading="listLoading"
              ref="selectedStaffTable"
              :key="tableKey"
              :row-key="rowKey"
              :data="selectedStaffList"
              height="395"
              size="mini"
              border
              fit
              highlight-current-row
              @selection-change="handleSelectedStaffChange">
              <el-table-column :reserve-selection="true" type="selection" width="55" fixed align="center"/>
              <el-table-column label="项目类别" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.servitemType }}</span>
                </template>
              </el-table-column>

              <el-table-column label="项目名称" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.servitemName }}</span>
                </template>
              </el-table-column>
              <el-table-column label="计价单位" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.prcunt }}</span>
                </template>
              </el-table-column>
              <el-table-column label="项目内涵" show-overflow-tooltip align="center">
                <template slot-scope="{row}">
                  <span>{{ row.itemCont }}</span>
                </template>
              </el-table-column>
              <el-table-column label="除外内容" show-overflow-tooltip align="center">
                <template slot-scope="{row}">
                  <span>{{ row.exctCont }}</span>
                </template>
              </el-table-column>
              <el-table-column label="项目编码" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.servitemCode }}</span>
                </template>
              </el-table-column>
              <el-table-column label="有效日期" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.valiDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="失效日期" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.invdDate }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>

      </div></el-col>
    </el-row>
  </div>
</template>

<script>
// import FileSaver from 'file-saver'
// import XLSX from 'xlsx'
import upload from '@/components/UploadExcel/index'
import ApiObj from '@/api/adjustment-price-standard/regional-price-coordination/regional-price-coordination-start.js'
export default {
  name: '',
  components: {
    'upload-excel': upload // 导入Excel
  },
  mixins: [

  ],
  props: {
    dataObj: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      noServitemIds: '',
      searchProjectName: '',
      tableHeightLeft: 330,
      currentPageLeft: 1,
      pageSizeLeft: 15,
      totalLeft: 0,
      // 穿梭表格
      listLoading: true,
      staffTemp: {
        phone: '',
        nickName: '',
        staffTypeId: ''
      },
      multipleSelection: [],
      staffList: [],
      selectedStaffList: [],
      staffData: [],
      selectedStaffData: [],
      tableKey: 0,
      rowKey: 'rowKey',
      staffOptions: [{
        key: 28,
        display_name: '补货员'
      },
      {
        key: 29,
        display_name: '测试员'
      }
      ]
    }
  },
  computed: {

  },
  watch: {
    selectedStaffList: {
      handler(newData, oldData) {
        let arr = []
        newData.forEach(item => {
          arr.push(item.servitemId)
        })
        this.noServitemIds = arr.join(',')
        this.getStaffList()
        this.$emit('getDataFromSon', newData)
      },
      deep: true
    }
  },
  created() {
    console.log(this.dataObj)
    this.getStaffList()
  },
  mounted() {

  },
  methods: {

    importExcel(data) {
      console.log(data)
      let arr = []
      data.map(v => {
        let obj = {}
        obj.servitemType = v.项目类别
        obj.servitemName = v.项目名称
        obj.prcunt = v.计价单位
        obj.itemCont = v.项目内涵
        obj.exctCont = v.除外内容
        obj.servitemCode = v.项目编码
        obj.valiDate = v.有效日期
        obj.invdDate = v.失效日期
        obj.invdDate = v.失效日期
        obj.servitemId = v.医疗服务项目ID
        arr.push(obj)
      })
      let newaRR = [...arr, ...this.selectedStaffList]
      let repeat = false
      this.selectedStaffList.forEach(item => {
        if (newaRR[0] && item.servitemId === newaRR[0].servitemId) {
          repeat = true
          this.$message.error('该文件中有已添加项请勿提交重复项')
          return
        }
      })
      if (repeat === false) {
        this.selectedStaffList = newaRR
        console.log(newaRR)
      }
    },
    // 左表格搜索
    search() {
      this.getStaffList()
    },
    exportExcel() {
      let params = {
        areaPriceAdjustList: this.staffData
      }
      ApiObj.exportItemInfo(params).then(res => {
        // console.log(res)
        // let fileName = res.headers['content-disposition'].split(';')[1].split('filename=')[1]
        // let fileNameUnicode = res.headers['content-disposition'].split('filename*=')[1]
        // if (fileNameUnicode) { // 当存在 filename* 时，取filename* 并进行解码（为了解决中文乱码问题）
        //   fileName = decodeURIComponent(fileNameUnicode.split("''")[1])
        // }

        // console.log(fileName)
        // console.log(res.headers.content-disposition)
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        // link.setAttribute('download', `${row.response.fileName}.${row.response.fileSufx}`)
        link.setAttribute('download', '区域价格协调未选择项目.xls')
        document.body.appendChild(link)
        link.click()
        // }
      })
    },
    // 穿梭表格
    // 从后台获取左边表格的数据
    // 从后台获取左边表格的数据
    getStaffList() {
      let params = {
        pageNum: this.currentPageLeft,
        pageSize: this.pageSizeLeft,
        poolarea: '',
        noServitemIds: this.noServitemIds,
        keywords: this.searchProjectName
      }
      ApiObj.queryServItemList(params).then(res => {
        if (res.data.code === 0) {
          this.$refs['selectedStaffTable'].clearSelection()
          this.$refs['staffTable'].clearSelection()
          let arr = res.data.data.rows
          setTimeout(() => {
            this.staffList = arr
            this.staffList.forEach(row => {
              this.selectedStaffList
              if (this.selectedStaffList.indexOf(row.servitemId) >= 0) {
                console.log(1111)
                row.itemCont = 'jfakdjk'
              }
            })
            this.listLoading = false
            this.totalLeft = res.data.data.pageInfo.recordCounts
          }, 100)
        }
      })
    },
    // 将左边表格选择项存入staffData中
    handleStaffChange(rows) {
      this.staffData = []
      if (rows) {
        rows.forEach(row => {
          if (row) {
            this.staffData.push(row)
          }
        })
      }
    },
    // 左边表格选择项移到右边
    addStaff() {
      setTimeout(() => {
        this.$refs['staffTable'].clearSelection()
        this.$refs['selectedStaffTable'].clearSelection()
      }, 0)
      let repeat = false
      this.selectedStaffList.forEach(item => {
        if (this.staffData[0] && item.servitemId === this.staffData[0].servitemId) {
          repeat = true
          this.$message.error('此项目已添加')
          return
        }
      })
      if (repeat === false) {
        this.staffData.forEach(item => {
          this.selectedStaffList.push(item)
        })
        this.$emit('getDataFromSon', this.selectedStaffList)
        for (let i = 0; i < this.staffList.length; i++) {
          for (let j = 0; j < this.staffData.length; j++) {
            if (
              this.staffList[i] &&
                this.staffData[j] &&
                this.staffList[i].servitemId === this.staffData[j].servitemId
            ) {
              this.staffList.splice(i, 1)
            }
          }
        }
      }
    },
    // 右边表格选择项移到左边
    removeStaff() {
      setTimeout(() => {
        this.$refs['staffTable'].clearSelection()
        this.$refs['selectedStaffTable'].clearSelection()
      }, 0)
      this.selectedStaffData.forEach(item => {
        this.staffList.push(item)
      })
      for (let i = 0; i < this.selectedStaffList.length; i++) {
        for (let j = 0; j < this.selectedStaffData.length; j++) {
          if (
            this.selectedStaffList[i] &&
              this.selectedStaffData[j] &&
              this.selectedStaffList[i].phone === this.selectedStaffData[j].phone
          ) {
            this.selectedStaffList.splice(i, 1)
          }
        }
      }
    },
    // 将右边表格选择项存入selectedStaffData中
    handleSelectedStaffChange(rows) {
      this.selectedStaffData = []
      if (rows) {
        rows.forEach(row => {
          if (row) {
            this.selectedStaffData.push(row)
          }
        })
      }
    },
    handleSizeChangeLeft(val) {
      console.log(val)
      this.currentPageLeft = 1
      this.pageSizeLeft = val
      this.getStaffList()
    },
    handleCurrentChangeleft(val) {
      this.currentPageLeft = val
      this.getStaffList()
    }
    // 提交
    // modifyStaff() {
    //   let isEmpty = false
    //   this.selectedStaffList.forEach(item => {
    //     if (!item.staffTypeId) {
    //       alert('请选择类型')
    //       isEmpty = true
    //       return
    //     }
    //   })
    //   if (isEmpty === false) {
    //     editStaff(this.selectedStaffList, this.deviceQuery.id).then(res => {
    //       this.staffListVisible = false
    //       this.$notify({
    //         title: '成功',
    //         message: '修改成功',
    //         type: 'success',
    //         duration: 2000
    //       })
    //     })
    //   }
    // }
  }
}
</script>

<style scoped lang="scss">
     .table-box{
      border: 1px solid #eee;
      padding: 15px;
    }
    .search-box{
  padding-bottom: 10px
}
.table-btn{
  position:absolute;
  right:10px;
  top:-10px
}
.table-search{
  position:absolute;
  margin-left: 20px;
}
</style>
