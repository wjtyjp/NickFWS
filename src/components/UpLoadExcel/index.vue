<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 15:52:00
 * @LastEditTime: 2019-08-26 18:04:55
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="index">
    <!-- <el-upload
      :on-change="importFile(this)"
      :auto-upload="true"
      class="upload-demo"

      action=""
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
    </el-upload> -->

    <input
      id="imFile"
      type="file"
      style="display: none"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      @change="importFile(this)">
    <el-button type="primary" @click="uploadFile">导入</el-button>
  </div>
</template>

<script>
// 引入xlsx
import XLSX from 'xlsx'
// var XLSX = require('xlsx')
export default {
  name: 'Index',
  data() {
    return {
      fullscreenLoading: false, // 加载中
      imFile: '', // 导入文件el
      errorMsg: '' // 错误信息内容
    }
  },
  mounted() {
    this.imFile = document.getElementById('imFile')
  },
  methods: {
    uploadFile: function() {
      // 点击导入按钮
      this.imFile.click()
    },

    importFile: function() {
      // 导入excel
      this.fullscreenLoading = true
      let obj = this.imFile
      console.log(obj)
      if (!obj.files) {
        // this.fullscreenLoading = false
        this.$message.error('请检查文件是否正确')
        return
      }

      var fileName = obj.files[0].name
      let formatName = fileName.substring(fileName.lastIndexOf('.'), fileName.length)
      formatName = formatName.toLowerCase()
      console.log(formatName)
      if (formatName === '.xls' || formatName === '.xlsx') {
        console.log('')
      } else {
        this.$message.error('只能上传excel文件')
        return
      }
      var f = obj.files[0]
      var reader = new FileReader()
      let $t = this
      reader.onload = function(e) {
        var data = e.target.result
        if ($t.rABS) {
          $t.wb = XLSX.read(btoa(this.fixdata(data)), {
            // 手动转化
            type: 'base64'
          })
        } else {
          $t.wb = XLSX.read(data, {
            type: 'binary'
          })
        }
        let json = XLSX.utils.sheet_to_json($t.wb.Sheets[$t.wb.SheetNames[0]])
        // console.log($t.wb.Sheets[$t.wb.SheetNames[0]], ';;;')
        // console.log(json, ';;;')
        $t.dealFile(json) // analyzeData: 解析导入数据
      }
      if (this.rABS) {
        reader.readAsArrayBuffer(f)
      } else {
        reader.readAsBinaryString(f)
      }
    },
    dealFile: function(data) {
      // 处理导入的数据
      //   this.imFile.value = ''
      //   this.fullscreenLoading = false
      if (data.length <= 0) {
        this.$message.error('请按照模板导入正确信息')
      } else {
        // 导入成功，处理数据
        this.$emit('getData', data)
      }
    },

    fixdata: function(data) {
      // 文件流转BinaryString
      var o = ''
      var l = 0
      var w = 10240
      for (; l < data.byteLength / w; ++l) {
        o += String.fromCharCode.apply(
          null,
          new Uint8Array(data.slice(l * w, l * w + w))
        )
      }
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
      return o
    }
  }
}
</script>
