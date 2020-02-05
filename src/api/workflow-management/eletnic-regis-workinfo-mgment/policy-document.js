import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'
// 修改政策文件信息
export function updatePolFile(params) {
  return request({
    url: APIUrl.policyDocument.updatePolFile,
    method: 'post',
    data: params
  })
}
// 删除政策文件信息
export function deletePolFile(params) {
  return request({
    url: APIUrl.policyDocument.deletePolFile,
    method: 'post',
    data: params
  })
}
// 【【点击接收/新增政策文件信息
export function savePolFile(params) {
  return request({
    url: APIUrl.policyDocument.savePolFile,
    method: 'post',
    data: params
  })
}
// 新接收【【点击接收/获取政策文件信息
export function getPolFile(params) {
  return request({
    url: APIUrl.policyDocument.getPolFile,
    method: 'post',
    data: params
  })
}
// 【评审通过/获取政策文件信息列表
export function listPolFile(params) {
  return request({
    url: APIUrl.policyDocument.listPolFile,
    method: 'post',
    data: params
  })
}
// 【评审通过/获取政策文件编号
export function getPolFiledId(params) {
  return request({
    url: APIUrl.policyDocument.getPolFiledId,
    method: 'post',
    data: params
  })
}
export default{
  getPolFiledId, listPolFile, getPolFile, savePolFile,
  deletePolFile, updatePolFile
}
