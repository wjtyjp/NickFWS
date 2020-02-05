<template>
  <div>
    <el-upload
      ref="upload"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-change="uploadChange"
      :before-upload="beforeUpload"
      :on-success="uploadSuccess"
      :show-file-list="true"
      :data="uploadData"
      :action="actionURL"
      :file-list="fileList"
      :on-progress="upLoadProgress"
      class="upload-demo">
      <el-button slot="trigger" size="small" type="text">选取文件</el-button>
    </el-upload>
  </div>
</template>

<script>
import commonApi from '@/api/commonApi/commonApi'
export default {
  name: '',
  components: {

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
      actionURL: `${process.env.BASE_API}web/file/upload`,
      uploadData: {},
      fileResList: [],
      fileList: []
    }
  },
  computed: {

  },
  watch: {
    dataObj: {
      handler(newdata, olddata) {
        this.uploadData = newdata.uploadData
        this.fileList = this.dataObj.fileList
        this.fileList.forEach(element => {
          element.name = element.fileName + '.' + element.fileSufx
        })
      },
      deep: true
    }
  },
  created() {
    this.uploadData = this.dataObj.uploadData
    this.fileList = this.dataObj.fileList
    this.fileList.forEach(element => {
      element.name = element.fileName + '.' + element.fileSufx
    })
  },
  mounted() {

  },
  methods: {
    resetFileList() {
      this.fileList = []
    },
    // 上传成功
    uploadSuccess(response, file, fileList) {
      if (response.code === 0) {
        // this.searchForm.fileName = response.data.fileName
        // this.detailForm.fileInfo = response.data
        this.$emit('getData', response.data)
        this.fileResList.push(response.data)
        this.$message.success(response.message)
      } else {
        this.$message.error(response.message)
      }
      console.log(fileList)
    },
    upLoadProgress(event, res, fileList) {
      console.log(event, res, fileList)
    },
    // 上传之前
    beforeUpload(file) {
    },
    handleRemove(file, fileList) {
      console.log(file)
      let params
      if (this.dataObj.fileList.length > 0) {
        params = { fileId: file.fileId, serviceName: 'fileDealService' }
      } else {
        params = { fileId: file.response.data.fileId, serviceName: 'fileDealService' }
      }
      // let params = { fileId: file.response.data.fileId, serviceName: file.response.data.serviceName }

      commonApi.del(params).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          this.$message({
            type: 'success',
            message: res.data.message
          })
        } else {
          this.$message.error(res.data.message)
        }
      })
      // console.log(file)
    },
    uploadChange(file) {
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
