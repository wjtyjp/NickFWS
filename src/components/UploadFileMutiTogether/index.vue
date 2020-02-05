<template>
  <div>
    <el-upload
      ref="upload"
      :limit="5"
      :on-exceed="uploadExceed"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-change="uploadChange"
      :before-upload="beforeUpload"
      :on-success="uploadSuccess"
      :show-file-list="true"
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
    dataObjUploadtrg: {
      type: Object,
      default: function() {
        return {
          fileList: []
        }
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
    dataObjUploadtrg: {
      handler(newdata, olddata) {
        this.fileList = newdata.fileList
        this.fileList.forEach(element => {
          element.name = element.fileName + '.' + element.fileSufx
        })
      },
      deep: true
    }
  },
  created() {
    if (this.dataObjUploadtrg.fileList.length > 0) {
      this.fileList = this.dataObjUploadtrg.fileList
      this.fileList.forEach(element => {
        element.name = element.fileName + '.' + element.fileSufx
      })
    } else {
      this.fileList = []
    }
  },
  mounted() {

  },
  methods: {
    // 编辑时获取列表中的文件列表信息
    getFileListFromFa(data) {
      this.fileList = data
      this.fileList.forEach(element => {
        element.name = element.fileName + '.' + element.fileSufx
      })
    },
    // 清空文件列表
    restFileList() {
      this.fileList = []
    },
    // 上传成功
    uploadSuccess(response, file, fileList) {
      if (response.code === 0) {
        // 上传成功后传参数到父组件中

        let arr = []
        fileList.forEach(item => {
          // arr.push()
          if (item.response) {
            arr.push(item.response.data)
          } else {
            arr.push(item)
          }
        })
        console.log(arr)
        this.$emit('getData', arr)
        this.fileList = fileList
        this.$message.success(response.message)
      } else {
        this.$message.error(response.message)
      }
    },
    upLoadProgress(event, res, fileList) {
      console.log(event, res, fileList)
    },
    // 上传之前
    beforeUpload(file) {
    },
    handleRemove(file, fileList) {
      let params
      if (file.fileId) {
        params = { fileId: file.fileId, serviceName: 'fileDealService' }
      } else {
        params = { fileId: file.response.data.fileId, serviceName: 'fileDealService' }
      }
      commonApi.del(params).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          this.$message({
            type: 'success',
            message: res.data.message
          })
          this.$emit('getDataAfterDele', fileList)
        } else {
          this.$message.error(res.data.message)
        }
      })
    },
    uploadChange(file) {
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    uploadExceed() {
      return this.$message.error(`最多上传五个文件,请删除后在上传`)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
