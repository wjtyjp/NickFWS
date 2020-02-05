import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'

// 【保存】保存工作信息电子登记
export function saveDynamic(params) {
  return request({
    url: APIUrl.eletnicRegisWorkinfo.saveDynamic,
    method: 'post',
    data: params
  })
}

// 【删除】删除工作信息电子登记
export function deleteDynamic(params) {
  return request({
    url: APIUrl.eletnicRegisWorkinfo.deleteDynamic,
    method: 'post',
    data: params
  })
}

// 【更新】更新工作信息电子登记
export function updateDynamic(params) {
  return request({
    url: APIUrl.eletnicRegisWorkinfo.updateDynamic,
    method: 'post',
    data: params
  })
}
// 【查询】获取工作信息电子登记详细信息
export function getDynamic(params) {
  return request({
    url: APIUrl.eletnicRegisWorkinfo.getDynamic,
    method: 'post',
    data: params
  })
}
// 【查询】获取工作信息电子登记列表
export function listDynamic(params) {
  return request({
    url: APIUrl.eletnicRegisWorkinfo.listDynamic,
    method: 'post',
    data: params
  })
}
// 【查询】获取getDynamicRegId
export function getDynamicRegId(params) {
  return request({
    url: APIUrl.eletnicRegisWorkinfo.getDynamicRegId,
    method: 'post',
    data: params
  })
}

export default{
  listDynamic,
  getDynamic,
  updateDynamic,
  deleteDynamic,
  saveDynamic,
  getDynamicRegId
}
