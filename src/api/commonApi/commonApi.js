import request from '../../utils/request'
import { serviceDownLoad } from '../../utils/request'
import APIUrl from '../index'
// 公共下拉请求
export function getCodeValueListMultiple(params) {
  return request({
    url: APIUrl.commonApiUrl.getCodeValueListMultiple,
    method: 'post',
    data: params
  })
}
// 下载
export function download(params) {
  return serviceDownLoad({
    url: APIUrl.commonApiUrl.download,
    method: 'post',
    data: params
  })
}
// 删除
export function del(params) {
  return request({
    url: APIUrl.commonApiUrl.del,
    method: 'post',
    data: params
  })
}
// 批量删除
export function batchDownload(params) {
  return serviceDownLoad({
    url: APIUrl.commonApiUrl.batchDownload,
    method: 'post',
    data: params
  })
}
// // 服务项目级联选择
export function queryServitemTypeTreeData(params) {
  return request({
    url: APIUrl.commonApiUrl.queryServitemTypeTreeData,
    method: 'post',
    data: params
  })
}
export default{
  getCodeValueListMultiple, download, del, batchDownload, queryServitemTypeTreeData

}
