import request from '../../utils/request'
import APIUrl from '../apiUrl/decision-support'

// 病种相关性分析点击查询按钮获取树状图
export function ListDiseaseRelevance(params) {
  return request({
    url: APIUrl.evaluateAnalyze.diseaseCorrelationAnalyze.ListDiseaseRelevance,
    method: 'post',
    data: params
  })
}

// 病种相关性分析点击查看数据按钮获取病种相关性数据
export function ListDiseaseRelevanceData(params) {
  return request({
    url: APIUrl.evaluateAnalyze.diseaseCorrelationAnalyze.ListDiseaseRelevanceData,
    method: 'post',
    data: params
  })
}

export default{
  ListDiseaseRelevance,
  ListDiseaseRelevanceData
}
