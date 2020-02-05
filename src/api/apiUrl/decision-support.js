// 决策辅助
export default {
  // 评估分析
  evaluateAnalyze: {
    diseaseCorrelationAnalyze: {
      ListDiseaseRelevance: '/web/DecisionSupport/AssessmentAnalysis/ListDiseaseRelevance', // 病种相关性分析点击查询按钮获取树状图
      ListDiseaseRelevanceData: '/web/DecisionSupport/AssessmentAnalysis/ListDiseaseRelevanceData' // 病种相关性分析点击查看数据按钮获取病种相关性数据
    }
  },
  //  基础分析
  basicAnalysis: {
    // 成本回收率分析
    costRecoveryAnalysis: {
      // 基础分析子菜单医疗服务成本回收率分析(成本回收率最高的服务项排名)
      ListServiceCostRecoveryRateRank: '/web/DecisionSupport/BaseAnalysis/ListServiceCostRecoveryRateRank',
      // 基础分析子菜单医疗服务成本回收率分析(柱状图)
      ListServiceCostRecoveryRate: '/web/DecisionSupport/BaseAnalysis/ListServiceCostRecoveryRate',
      // ListServiceParityRelation（比价关系分析）
      ListServiceParityRelation: '/web/DecisionSupport/BaseAnalysis/ListServiceParityRelation',
      // 左侧树形结构
      // ListServitemTree: '/web/DecisionSupport/AssessmentAnalysis/ListServitemTree'
      ListServitemTree: '/web/itemmanage/itemaccept/queryServitemTypeTreeData'
    }
  },
  // 指数分析
  indexAnalysis: {
    // 指数分析子菜单价格要素的成本构成
    costStructure: {
      // 指数分析子菜单价格要素的成本构成
      ListPriceElementCost: '/web/DecisionSupport/IndexAnalysis/ListPriceElementCost'
    }
  }
}
