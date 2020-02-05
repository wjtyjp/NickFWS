<template>
  <div>
    <el-dialog :close-on-click-modal="false" :visible.sync="modifyObj.isShow" title="修改标签管理信息" @close="cancelDialog">
      <el-form ref="ruleForm" :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
        <el-row :gutter="16">
          <el-col :span="8">
            <el-form-item label="标签类型" prop="lablType">
              <el-select v-model="ruleForm.lablType" placeholder="请选择标签类型" style="width:100%;">
                <el-option v-for="item in modifyObj.lablTypeList" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="标签名称" prop="labl">
              <el-input v-model="ruleForm.labl" placeholder="请输入标签名称" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="标签分值" prop="lablSco">
              <el-input v-model.number="ruleForm.lablSco" placeholder="请输入标签分值" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitDialog">确 定</el-button>
        <el-button type="primary" @click="cancelDialog">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import API from '@/api/adjustment-price-tool/according-cpi-adjustment/tag-management'

export default {
  name: '',
  components: {

  },
  mixins: [

  ],
  props: {
    modifyObj: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      ruleForm: {
        lablType: '',
        labl: '',
        lablSco: ''
      },
      rules: {
        lablType: [{ required: true, message: '请选择标签类型', trigger: 'change' }],
        labl: [{ required: true, message: '请输入标签名称', trigger: 'blur' }],
        lablSco: [{ required: true, message: '请输入标签分值', trigger: 'blur' }]
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$nextTick(() => {
      this.ruleForm = this.modifyObj.modifyData
    })
  },
  mounted() {

  },
  methods: {
    submitDialog() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          let params = {
            ...this.ruleForm
          }
          API.updateTagManage(params).then(res => {
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
    },
    cancelDialog() {
      this.$refs['ruleForm'].resetFields()
      this.$emit('closeModifyDialog')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
