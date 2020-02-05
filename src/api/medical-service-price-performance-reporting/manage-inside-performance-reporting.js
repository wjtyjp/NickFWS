import request from '../../utils/request'
import APIUrl from '../apiUrl/medical-service-price-performance-reporting'

// 查询工作动态绩效评估
export function listPricJobRegB(params) {
  return request({
    url: APIUrl.workTrendsPerformanceReporting.listPricJobRegB,
    method: 'post',
    data: params
  })
}

// 查询政策文件绩效评估
export function listPricPolFileB(params) {
  return request({
    url: APIUrl.workTrendsPerformanceReporting.listPricPolFileB,
    method: 'post',
    data: params
  })
}

// 查询医疗服务项目绩效评估
export function listServitemMnitE(params) {
  return request({
    url: APIUrl.workTrendsPerformanceReporting.listServitemMnitE,
    method: 'post',
    data: params
  })
}

// 查询医疗服务价格绩效评估
export function listServitemPricMnitE(params) {
  return request({
    url: APIUrl.workTrendsPerformanceReporting.listServitemPricMnitE,
    method: 'post',
    data: params
  })
}

export default{
  listPricJobRegB,
  listPricPolFileB,
  listServitemMnitE,
  listServitemPricMnitE
}
