<template>
  <div>
    <el-input v-model="fileName" placeholder="文件名" readonly>
      <template slot="append">  <el-button size="small" type="text" @click="downLoadSource">下载</el-button></template>
    </el-input>

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
        }
      }
    }
  },
  data() {
    return {
      fileName: ''
    }
  },
  computed: {

  },
  watch: {
    dataObjDownload: {
      handler: function(newdata, olddata) {
        if (newdata.fileInfo) {
          this.fileName = newdata.fileInfo.fileName
        }
      },
      deep: true,
      immediate: true
    }
  },
  created() {

  },
  mounted() {
  },
  methods: {
    downLoadSource() {
      let params = {
        fileId: this.dataObjDownload.fileId
      }
      commonApi.download(params).then(res => {
        console.log(res)
        let fileName = res.headers['content-disposition'].split(';')[1].split('=')[1]
        let fileNameUnicode = res.headers['content-disposition'].split('filename*=')[1]
        if (fileNameUnicode) { // 当存在 filename* 时，取filename* 并进行解码（为了解决中文乱码问题）
          fileName = decodeURIComponent(fileNameUnicode.split("''")[1])
        }

        console.log(fileName)
        // console.log(res.headers.content - disposition)
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        // link.setAttribute('download', `${this.dataObjDownload.fileInfo.fileName}.${this.dataObjDownload.fileInfo.fileSufx}`)
        link.setAttribute('download', fileName)
        // link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
