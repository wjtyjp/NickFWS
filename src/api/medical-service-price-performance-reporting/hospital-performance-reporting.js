import request from '../../utils/request'
import APIUrl from '../apiUrl/medical-service-price-performance-reporting'

// 查询医疗服务价格绩效评估
export function listIntegratedMonitor(params) {
  return request({
    url: APIUrl.hopitalPerformanceReporting.listIntegratedMonitor,
    method: 'post',
    data: params
  })
}

// 查询投诉举报绩效评估
export function listPricRptCmpaB(params) {
  return request({
    url: APIUrl.hopitalPerformanceReporting.listPricRptCmpaB,
    method: 'post',
    data: params
  })
}

// 查询专项监督检查
export function listSpecialSupervisionInspection(params) {
  return request({
    url: APIUrl.hopitalPerformanceReporting.listSpecialSupervisionInspection,
    method: 'post',
    data: params
  })
}

// 查询失信记录
export function listDishonestyRecord(params) {
  return request({
    url: APIUrl.hopitalPerformanceReporting.listDishonestyRecord,
    method: 'post',
    data: params
  })
}

// 查询预警分析和处理
export function listEarlyWarningAnalysisAndProcess(params) {
  return request({
    url: APIUrl.hopitalPerformanceReporting.listEarlyWarningAnalysisAndProcess,
    method: 'post',
    data: params
  })
}

export default{
  listIntegratedMonitor,
  listPricRptCmpaB,
  listSpecialSupervisionInspection,
  listDishonestyRecord,
  listEarlyWarningAnalysisAndProcess
}
