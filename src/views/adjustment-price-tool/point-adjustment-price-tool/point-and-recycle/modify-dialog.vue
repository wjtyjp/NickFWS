<template>
  <div>
    <el-dialog :close-on-click-modal="false" :visible.sync="modifyObj.isShow" title="修改点数与回收率" @close="cancelDialog">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" status-icon label-width="100px" class="demo-ruleForm">
        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="统筹区" prop="poolarea" >
              <el-select v-model="ruleForm.poolarea" clearable placeholder="请选择统筹区" style="width:100%;" >
                <el-option v-for="item in modifyObj.poolareaList" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目名称" prop="stdName">
              <el-input v-model="ruleForm.stdName" clearable placeholder="请输入项目名称" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="点数" prop="ptCnt">
              <el-input v-model="ruleForm.ptCnt" clearable placeholder="请输入点数" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="原点数" prop="initPtCnt">
              <el-input v-model="ruleForm.initPtCnt" clearable placeholder="请输入原点数" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="回收率" prop="recyRate">
              <el-input v-model="ruleForm.recyRate" clearable placeholder="请输入回收率(小数)" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="原回收率" prop="initRecyRate">
              <el-input v-model="ruleForm.initRecyRate" clearable placeholder="请输入原回收率(小数)" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item
              label="有效时间"
              prop="jbrq">
              <el-date-picker
                v-model="ruleForm.jbrq"
                :picker-options="pickerOptions"
                type="daterange"
                align="left"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" />
            </el-form-item>
          </el-col>
          <!-- <el-col :span="12">
            <el-form-item label="有效日期" prop="valiDate">
              <el-date-picker
                v-model="ruleForm.valiDate"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="选择有效日期"
                clearable
                style="width:100%;"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="失效日期" prop="invdDate">
              <el-date-picker
                v-model="ruleForm.invdDate"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="选择失效日期"
                clearable
                style="width:100%;"
              />
            </el-form-item>
          </el-col> -->
      </el-row></el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitDialog">确 定</el-button>
        <el-button @click="cancelDialog">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import API from '@/api/adjustment-price-tool/point-adjustment-price-tool/point-and-recycle'

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
        poolarea: '',
        stdName: '',
        ptCnt: '',
        initPtCnt: '',
        recyRate: '',
        initRecyRate: '',
        valiDate: '',
        invdDate: ''
      },
      rules: {
        poolarea: [{ required: true, message: '请选统筹区', trigger: 'change' }],
        stdName: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
        ptCnt: [{ required: true, message: '请输入点数', trigger: 'blur' }]
      },
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近半年',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 180)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    // this.$nextTick(() => {
    //   // console.log(this.modifyObj.modifyData)
    //   this.ruleForm = this.modifyObj.modifyData
    //   this.$set(this.ruleForm, 'jbrq', [this.ruleForm.valiDate, this.ruleForm.invdDate])
    // })

    this.$nextTick(() => {
      let params = {
        itemCostId: this.modifyObj.itemCostId
      }
      API.getPricServitemPt(params).then(res => {
        if (res.data.code === 0) {
          this.ruleForm = res.data.data
          this.$set(this.ruleForm, 'jbrq', [res.data.data.valiDate, res.data.data.invdDate])
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
    submitDialog() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          let params = {
            ...this.ruleForm
          }
          if (this.ruleForm.jbrq != null) {
            params.valiDate = this.ruleForm.jbrq[0]
            params.invdDate = this.ruleForm.jbrq[1]
          } else {
            params.valiDate = ''
            params.invdDate = ''
          }
          API.modifyPricServitemPt(params).then(res => {
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
