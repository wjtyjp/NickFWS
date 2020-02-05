import commonApi from '@/api/commonApi/commonApi.js'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export async function getDropList(params) {
  let result = await commonApi.getCodeValueListMultiple(params).then(res => {
    console.log(res)
    let result1
    if (res.data.code === 0) {
      result1 = res.data.data
    } else {
      result1 = {}
    }
    return result1
  })
  return result
}
// 批量下载
export function downLoadMaterial(serviceName, objType, objInstId) {
  let params = {
    serviceName: serviceName,
    bizParam: {
      objType: objType,
      objInstId: objInstId
    }
  }
  commonApi.batchDownload(params).then(res => {
    let fileName = res.headers['content-disposition'].split(';')[1].split('filename=')[1]
    let fileNameUnicode = res.headers['content-disposition'].split('filename*=')[1]
    if (fileNameUnicode) { // 当存在 filename* 时，取filename* 并进行解码（为了解决中文乱码问题）
      fileName = decodeURIComponent(fileNameUnicode.split("''")[1])
    }

    console.log(fileName)
    const url = window.URL.createObjectURL(new Blob([res.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
  })
}
// 下载
export function downLoadFile(row) {
  let params = { fileId: row.fileId }
  commonApi.download(params).then(res => {
    let fileName = res.headers['content-disposition'].split(';')[1].split('filename=')[1]
    let fileNameUnicode = res.headers['content-disposition'].split('filename*=')[1]
    if (fileNameUnicode) { // 当存在 filename* 时，取filename* 并进行解码（为了解决中文乱码问题）
      fileName = decodeURIComponent(fileNameUnicode.split("''")[1])
    }
    // console.log(res.headers.content-disposition)
    const url = window.URL.createObjectURL(new Blob([res.data]), { type: 'application/octet-stream' })
    const link = document.createElement('a')
    link.href = url
    // link.setAttribute('download', `${row.response.fileName}.${row.response.fileSufx}`)
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    // }
  })
}
// 导出
export function exportExcel() {
  this.IDShow = true
  this.$nextTick(function() {
    let wb
    let fix = document.querySelector('.el-table__fixed')
    if (fix) { // 判断要导出的节点中是否有fixed的表格，如果有，转换excel时先将该dom移除，然后append回去
      wb = XLSX.utils.table_to_book(document.querySelector('#leftTable').removeChild(fix))
      document.querySelector('#leftTable').appendChild(fix)
    } else {
      wb = XLSX.utils.table_to_book(document.querySelector('#leftTable'))
    }
    let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
    try {
      FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'data.xlsx')
    } catch (e) {
      if (typeof console !== 'undefined') console.log(e, wbout)
    }
    this.IDShow = false
    return wbout
  })
}
