<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 21:19:03
 * @LastEditTime: 2019-09-25 07:16:01
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <el-dialog
      :close-on-click-modal="false"
      :visible.sync="show.openShow"
      width="40%"
      @close="cancelDialog">
      <span slot="title">{{ title }}</span>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" status-icon label-width="100px" class="demo-ruleForm">
        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="项目名称" prop="stdName">
              <el-input v-model="ruleForm.stdName" :disabled="title === '修改'?true:false" placeholder="请输入项目名称" />
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="标签" prop="lablId">
              <el-select v-model="ruleForm.lablId" placeholder="请选择标签" style="width:100%;">
                <el-option
                  v-for="item in tagList"
                  :key="item.lablId"
                  :label="item.labl"
                  :value="item.lablId"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="editShow" type="primary" @click="saveServitemTagRelation">确 定</el-button>
        <el-button @click="cancelDialog">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import API from '@/api/adjustment-price-tool/according-cpi-adjustment/project-tag'

export default {
  name: '',
  components: {

  },
  mixins: [

  ],
  props: {
    show: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      title: '',
      editShow: true,
      tagList: [],
      ruleForm: {
        stdName: '',
        lablId: '',
        lablRltsId: ''
      },
      rules: {
        stdName: [
          { required: true, message: '请输入项目名称', trigger: 'blur' }
        ],
        lablId: [
          { required: true, message: '请选择标签', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.getTagList()
  },
  mounted() {

  },
  methods: {
    cancelDialog() {
      this.$refs['ruleForm'].resetFields()
      this.ruleForm.lablRltsId = ''
      this.$emit('closeItem')
    },
    // 获取标签下拉框
    getTagList() {
      let params = {
        pageSize: 0,
        pageNum: 0
      }
      API.listTagManage(params).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data.rows)
          this.tagList = res.data.data.rows
        }
      }
      )
    },
    // 保存
    saveServitemTagRelation() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          let obj = Object.assign({}, this.ruleForm)

          let params = obj
          API.saveServitemTagRelation(params).then(res => {
            if (res.data.code === 0) {
              this.$message({
                type: 'success',
                message: res.data.message
              })
              this.cancelDialog()
            } else {
              this.$message({
                type: 'error',
                message: res.data.message
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
