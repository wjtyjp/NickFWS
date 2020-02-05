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
      <span slot="title">{{ title }}配置与导入项目点数</span>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" status-icon label-width="100px" class="demo-ruleForm">
        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="项目大类" prop="projectName">
              <el-input v-model="ruleForm.projectName" placeholder="请输入项目大类" class="form-input" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目编码" prop="projectName">
              <el-input v-model="ruleForm.projectName" placeholder="请输入项目编码" class="form-input" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="项目名称" prop="projectName">
              <el-input v-model="ruleForm.projectName" placeholder="请输入项目名称" class="form-input" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="点数" prop="projectName">
              <el-input v-model="ruleForm.projectName" placeholder="请输入点数" class="form-input" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="调整前点数" prop="projectName">
              <el-input v-model="ruleForm.projectName" placeholder="请输入调整前点数" class="form-input" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="调整点数" prop="projectName">
              <el-input v-model="ruleForm.projectName" placeholder="请输入调整点数" class="form-input" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="editShow" type="primary">保 存</el-button>
        <el-button @click="cancelDialog">取 消</el-button>
      </span>
    </el-dialog>
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
        projectName: '',
        tag: ''
      },
      rules: {
        projectName: [
          { required: true, message: '请输入项目名称', trigger: 'blur' }
        ],
        tag: [
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

  },
  mounted() {

  },
  methods: {
    cancelDialog() {
      this.$refs['ruleForm'].resetFields()
      this.$emit('closeItem')
    }
  }
}
</script>

<style scoped lang="scss">
.form-input{
  width: 100%;
}
</style>
