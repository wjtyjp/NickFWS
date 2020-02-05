<template>
  <div>
    <el-dialog :close-on-click-modal="false" :visible.sync="checkObj.isShow" title="查看点数与回收率" @close="cancelDialog">
      <el-form ref="ruleForm" :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="统筹区" prop="poolarea" >
              <el-select v-model="ruleForm.poolarea" disabled placeholder="请选择统筹区" style="width:100%;" >
                <el-option v-for="item in checkObj.poolareaList" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目名称" prop="stdName">
              <el-input v-model="ruleForm.stdName" disabled placeholder="请输入项目名称" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="点数" prop="ptCnt">
              <el-input v-model="ruleForm.ptCnt" disabled placeholder="请输入点数" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="原点数" prop="initPtCnt">
              <el-input v-model="ruleForm.initPtCnt" disabled placeholder="请输入原点数" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="回收率" prop="recyRate">
              <el-input v-model="ruleForm.recyRate" disabled placeholder="请输入回收率" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="原回收率" prop="initRecyRate">
              <el-input v-model="ruleForm.initRecyRate" disabled placeholder="请输入原回收率" />
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
                disabled
                type="daterange"
                align="right"
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
                disabled
                style="width:100%;"
              />
            </el-form-item>
          </el-col> -->
          <!-- <el-col :span="12">
            <el-form-item label="失效日期" prop="invdDate">
              <el-date-picker
                v-model="ruleForm.invdDate"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="选择失效日期"
                clearable
                disabled
                style="width:100%;"
              />
            </el-form-item>
          </el-col> -->
        </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cancelDialog">确 定</el-button>
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
        poolarea: '',
        stdName: '',
        ptCnt: '',
        initPtCnt: '',
        recyRate: '',
        initRecyRate: '',
        valiDate: '',
        invdDate: ''
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
        itemCostId: this.checkObj.itemCostId
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
    cancelDialog() {
      this.$emit('closeCheckDialog')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
