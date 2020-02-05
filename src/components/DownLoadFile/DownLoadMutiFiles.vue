<template>
  <div>
    <!-- <el-input v-model="fileName" placeholder="文件名" readonly>
      <template slot="append">  <el-button size="small" type="text" @click="downLoadSource">下载</el-button></template>
    </el-input> -->
    <!-- <el-link v-for="fileList" type="primary">主要链接</el-link> -->
    <el-row>
      <el-col>
        <div >
          <el-link v-for="(item,index) in fileList" :key="index" style="margin-right:10px;" icon="el-icon-download" @click="downLoadSource(item.fileId, item.fileName)">{{ item.fileName }}.{{ item.fileSufx }}</el-link>
        </div>
      </el-col>
    </el-row>
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
    dataObjDownload: {
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
      fileList: [],
      fileName: ''
    }
  },
  computed: {

  },
  watch: {
    dataObjDownload: {
      handler: function(newdata, olddata) {
        this.fileList = newdata.fileList
        console.log(this.fileList, '////')
      },
      deep: true
    }
  },
  created() {

  },
  mounted() {
    // setTimeout(() => {
    //   // console.log(this.dataObjDownload)
    //   this.fileList = this.dataObjDownload.fileList
    // }, 1000)
  },
  methods: {
    getFileList(data) {
      this.fileList = data
    },
    downLoadSource(fileId, fileName) {
      let params = {
        fileId: fileId
      }
      commonApi.download(params).then(res => {
        console.log(res)
        // let fileName = res.headers['content-disposition'].split(';')[1].split('=')[1]
        // let fileNameUnicode = res.headers['content-disposition'].split('filename*=')[1]
        // if (fileNameUnicode) { // 当存在 filename* 时，取filename* 并进行解码（为了解决中文乱码问题）
        //   fileName = decodeURIComponent(fileNameUnicode.split("''")[1])
        // }
        let type = JSON.parse(res.config.data).fileId.split('.')[1]
        console.log(`${fileName}.${type}`)
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${fileName}.${type}`)
        document.body.appendChild(link)
        link.click()
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
