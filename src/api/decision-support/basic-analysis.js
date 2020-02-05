import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/decision-support'

// 基础分析子菜单医疗服务成本回收率分析(成本回收率最高的服务项排名)
export function ListServiceCostRecoveryRateRank(params) {
  return request({
    url: APIUrl.basicAnalysis.costRecoveryAnalysis.ListServiceCostRecoveryRateRank,
    method: 'post',
    data: params
  })
}

// 基础分析子菜单医疗服务成本回收率分析(柱状图)
export function ListServiceCostRecoveryRate(params) {
  return request({
    url: APIUrl.basicAnalysis.costRecoveryAnalysis.ListServiceCostRecoveryRate,
    method: 'post',
    data: params
  })
}
// ListServiceParityRelation（比价关系分析）
export function ListServiceParityRelation(params) {
  return request({
    url: APIUrl.basicAnalysis.costRecoveryAnalysis.ListServiceParityRelation,
    method: 'post',
    data: params
  })
}
// 左侧属性结构
export function ListServitemTree(params) {
  return request({
    url: APIUrl.basicAnalysis.costRecoveryAnalysis.ListServitemTree,
    method: 'post',
    data: params
  })
}

export default{
  ListServiceCostRecoveryRateRank,
  ListServiceCostRecoveryRate,
  ListServiceParityRelation,
  ListServitemTree
}
