<template>
  <div>
    <el-dialog :close-on-click-modal="false" :visible.sync="checkObj.isShow" title="查看标签管理信息" @close="cancelDialog">
      <el-form ref="ruleForm" :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
        <el-row :gutter="16">
          <el-col :span="8">
            <el-form-item label="标签类型" prop="lablType">
              <el-select v-model="ruleForm.lablType" disabled placeholder="请选择标签类型" style="width:100%;">
                <el-option v-for="item in checkObj.lablTypeList" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="标签名称" prop="labl">
              <el-input v-model="ruleForm.labl" disabled placeholder="请输入标签名称" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="标签分值" prop="lablSco">
              <el-input v-model.number="ruleForm.lablSco" disabled placeholder="请输入标签分值" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cancelDialog">确 定</el-button>
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
    checkObj: {
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
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$nextTick(() => {
      let params = {
        lablId: this.checkObj.lablId
      }
      API.getTagManage(params).then(res => {
        if (res.data.code === 0) {
          this.ruleForm = res.data.data
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      })
    })
  },
  mounted() {

  },
  methods: {
    cancelDialog() {
      this.$emit('closeCheckDialog')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
