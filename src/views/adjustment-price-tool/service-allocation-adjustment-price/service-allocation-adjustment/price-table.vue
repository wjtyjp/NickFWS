<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 16:45:02
 * @LastEditTime: 2019-09-27 13:56:32
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <div class="box">
      <div class="table-handle">
        <el-row>
          <el-col :span="6">
            <el-button type="primary" @click="xTableAdd(-1)">新增</el-button>
          </el-col>
          <el-col :span="18" />
        </el-row>
      </div>
      <vxe-table
        ref="xTable"
        :data="xTable.tableData"
        :edit-config="{trigger: 'manual', mode: 'row', autoClear: false, showStatus: true}"
        :edit-rules="validRules"
        resizable
        show-overflow>
        <vxe-table-column type="index" width="60" />
        <vxe-table-column :edit-render="{name: 'select', options: typeList}" field="servitemTypeName" title="调价项目大类" />
        <vxe-table-column :edit-render="{name: 'input'}" field="adjmCof" title="调价比例" />
        <vxe-table-column :edit-render="{name: 'input'}" field="adjmSumamt" title="调整额度(万元)" />
        <vxe-table-column :edit-render="{name: 'input'}" field="exeSumamt" title="调整金额(万元)" />
        <vxe-table-column title="操作">
          <template v-slot="scope">
            <template v-if="$refs.xTable.hasActiveRow(scope.row)">
              <span class="handle-text" @click="saveRowEvent(scope.row)">保存</span>
              <span class="handle-text" @click="cancelRowEvent(scope.row,scope.$rowIndex)">取消</span>
            </template>
            <template v-else>
              <span class="handle-text" @click="editRowEvent(scope.row)">编辑</span>
              <span class="handle-text" @click="deletRow(scope.row,scope.$rowIndex)">删除</span>
            </template>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  mixins: [

  ],
  props: {
    itemTypeList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    var validate = (rule, value, callback) => {
      if (value === '' || value < 0 || value > 1) {
        callback(new Error('请输入大于0小于等于1的数小数点后最多四位的数值'))
      } else {
        callback()
      }
    }
    return {
      xTable: {
        tableData: []
      },
      validRules: {
        servitemTypeName: [
          { required: true, message: '请选择调价项目大类' }
        ],
        adjmCof: [
          { required: true, message: '请输入调价比例' },
          { validator: validate }
        ],
        adjmSumamt: [
          { required: true, message: '请输入调整额度' }
        ],
        exeSumamt: [
          { required: true, message: '请输入调整金额' }
        ]
      }
    }
  },
  computed: {
    // 处理下拉框
    typeList() {
      let list = this.itemTypeList
      list.map(item => {
        item.label = item.dictValueName
        item.value = item.dictValueCode
      })
      list.unshift({
        label: '',
        value: ''
      })
      return list
    }
  },
  watch: {
  },
  created() {

  },
  mounted() {
  },
  methods: {
    // 新增调价
    xTableAdd(row) {
      this.$refs.xTable.validate(valid => {
        if (valid) {
          let record = {
            servitemTypeName: '',
            adjmCof: '',
            adjmSumamt: '',
            exeSumamt: ''
          }
          this.$refs.xTable.insertAt(record, row).then(({ row }) => {
            this.$refs.xTable.setActiveRow(row)
            this.xTable.tableData.push(row)
          })
        } else {
          return false
        }
      })
    },
    editRowEvent(row) {
      this.$refs.xTable.setActiveRow(row)
    },
    saveRowEvent(row) {
      this.$refs.xTable.validate(valid => {
        if (valid) {
          this.$refs.xTable.reloadRow(row)
          this.$refs.xTable.clearActived()
          this.$emit('xtableData', this.xTable.tableData)
        } else {
          return false
        }
      })
    },
    cancelRowEvent(row, index) {
      let flag = false
      for (let item in row) {
        if (row[item] && item !== '_XID') {
          flag = true
          break
        }
      }
      if (flag) {
        this.$refs.xTable.validate(valid => {
          if (valid) {
            this.$refs.xTable.clearActived()
          } else {
            return false
          }
        })
      } else {
        this.$refs.xTable.remove(this.xTable.tableData[index])
        this.xTable.tableData.splice(index, 1)
      }
    },
    deletRow(row, index) {
      this.$confirm(`确认删除?`, '提示', {
        cancelButtonClass: 'btn-custom-cancel',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$refs.xTable.remove(this.xTable.tableData[index])
        this.xTable.tableData.splice(index, 1)
      }).catch(error => error)
    },
    // 重置
    resetTable() {
      this.xTable.tableData = []
    }
  }
}
</script>

<style scoped lang="scss">
.btn-custom-cancel {
  float: right;
  margin-left: 10px;
}
</style>
