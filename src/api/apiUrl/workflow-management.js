// 工作流程管理
export default {
  // 地方清单配置
// 清单管理
  listManintenance: {
    listMaterrialBillType: '/web/flowmanage/materrialbill/listMaterrialBillType', // 获取清单类型列表
    saveMaterrialBillType: '/web/flowmanage/materrialbill/saveMaterrialBillType', // 保存清单类型信息
    deleteMaterrialBillType: '/web/flowmanage/materrialbill/deleteMaterrialBillType', // 批量删除清单类型信息
    updateMaterrialBillType: '/web/flowmanage/materrialbill/updateMaterrialBillType', // 更新清单类型信息
    listMaterrialBill: '/web/flowmanage/materrialbill/listMaterrialBill', // 获取清单信息列表
    saveMaterrialBill: '/web/flowmanage/materrialbill/saveMaterrialBill', // 保存清单信息
    updateMaterrialBill: '/web/flowmanage/materrialbill/updateMaterrialBill', // 更新清单信息
    deleteMaterrialBill: '/web/flowmanage/materrialbill/deleteMaterrialBill', // 批量删除清单信息
    listMaterrialBillConfig: '/web/flowmanage/materrialbillconfig/listMaterrialBillConfig', // 获取清单配置列表
    saveMaterrialBillConfig: '/web/flowmanage/materrialbillconfig/saveMaterrialBillConfig', // 保存清单配置信息
    deleteMaterrialBillConfig: '/web/flowmanage/materrialbillconfig/deleteMaterrialBillConfig', // 批量删除清单配置信息
    updateMaterrialBillConfig: '/web/flowmanage/materrialbillconfig/updateMaterrialBillConfig' // 更新清单配置信息
  },
  // 风险库管理
  riskAssessmentManagement: {
    deleteRiskItem: '/web/flowmanage/riskItem/deleteRiskItem', // 删除风险信息
    updateRiskptGrp: '/web/flowmanage/riskItem/updateRiskptGrp', // 修改分组信息
    updatePricRiskptGrpRlts: '/web/flowmanage/riskItem/updatePricRiskptGrpRlts', // 分组修改风险点成员
    savePricRiskptGrpRlts: '/web/flowmanage/riskItem/savePricRiskptGrpRlts', // 分组增加风险点成员
    deleteRiskptGrp: '/web/flowmanage/riskItem/deleteRiskptGrp', // 删除分组信息
    deletePricRiskptGrpRlts: '/web/flowmanage/riskItem/deletePricRiskptGrpRlts', // 删除分组风险点成员
    updateRiskItem: '/web/flowmanage/riskItem/updateRiskItem', // 修改风险信息
    saveRiskItem: '/web/flowmanage/riskItem/saveRiskItem', // 新增风险信息
    saveRiskptGrp: '/web/flowmanage/riskItem/saveRiskptGrp', // 新增风险分组
    getRiskptGrp: '/web/flowmanage/riskItem/getRiskptGrp', // 获取分组信息
    listRiskptGrp: '/web/flowmanage/riskItem/listRiskptGrp', // 获取分组列表
    listRiskItem: '/web/flowmanage/riskItem/listRiskItem', // 获取风险信息列表
    getRiskItem: '/web/flowmanage/riskItem/getRiskItem', // 获取风险详细信息
    listPricRiskptGrpRlts: '/web/flowmanage/riskItem/listPricRiskptGrpRlts' // 查询分组成员信息

  },
  // 风险库识别
  riskDatabaseIdentification: {
    getRiskPresentationId: '/web/flowmanage/riskPresentation/getRiskPresentationId', // 获取识别项主键
    updateRiskPresentation: '/web/flowmanage/riskPresentation/updateRiskPresentation', // 修改识别项目
    deleteRiskAssessment: '/web/flowmanage/riskAssessment/deleteRiskAssessment', // 删除风险识别
    deleteRiskPresentation: '/web/flowmanage/riskPresentation/deleteRiskPresentation', // 删除风险识别项目
    saveRiskPresentation: '/web/flowmanage/riskPresentation/saveRiskPresentation', // 新增识别项目
    saveRiskAssessment: '/web/flowmanage/riskAssessment/saveRiskAssessment', // 新增风险识别
    updateRiskAssessment: '/web/flowmanage/riskAssessment/updateRiskAssessment', // 修改风险识别信息
    getRiskAssessmentId: '/web/flowmanage/riskAssessment/getRiskAssessmentId', // 获取风险识别主键
    getRiskAssessment: '/web/flowmanage/riskAssessment/getRiskAssessment', // 获取风险识别信息
    listRiskAssessment: '/web/flowmanage/riskAssessment/listRiskAssessment', // 获取风险识别列表
    getRiskPresentation: '/web/flowmanage/riskPresentation/getRiskPresentation', // 获取风险识别项信息
    listRiskPresentation: '/web/flowmanage/riskPresentation/listRiskPresentation', // 获取风险识别项列表
    updateRiskAssessmentSb: '/web/flowmanage/riskAssessment/updateRiskAssessmentSb', // 识别
    updateRiskAssessmentBg: '/web/flowmanage/riskAssessment/updateRiskAssessmentBg', // 评估
    saveRiskPresentations: '/web/flowmanage/riskPresentation/saveRiskPresentations'// 批量保存风险点
  },
  // 论证审核管理
  demonstrationAuditManagement: {
    queryDemonstrationStartTaskList: '/web/flowmanage/demonstrationstart/queryDemonstrationStartTaskList', // 【主页面加载/查询按钮】获取发起评审任务信息列表
    saveDemonstrationStartContent: '/web/flowmanage/demonstrationstart/saveDemonstrationStartContent', // 【点击发起评审按钮】保存发起评审信息并发起评审
    getDemonstrationStartContent: '/web/flowmanage/demonstrationstart/getDemonstrationStartContent', // 【点击发起评审链接】获取评审任务详细信息
    listExpertByPublicService: '/web/flowmanage/demonstrationstart/listExpertByPublicService', // 【点击随机选择专家按钮】获取评审专家信息通过公共接口
    queryExpertAssessInfos: '/web/flowmanage/demonstrationCheck/queryExpertAssessInfos', // 【点击评审复核】获取专家评审信息
    saveDemonstrationCheckContent: '/web/flowmanage/demonstrationCheck/saveDemonstrationCheckContent' // 【审核通过/审核不通过】保存评审复核信息
  },
  // 专家线上评审
  expertOnlineReview: {
    saveExpertAcceptAdvice: '/web/flowmanage/expertAssess/saveExpertAcceptAdvice', // 【接收/拒绝】保存专家接收意见
    listTaskAccessories: '/web/flowmanage/expertAssess/listTaskAccessories', // 【点击专家评审加载任务附件清单】获取任务附件清单
    getExpertTask: '/web/flowmanage/expertAssess/getExpertTask', // 【点击接收/专家评审加载详情】获取专家评审任务详情
    saveExpertAssess: '/web/flowmanage/expertAssess/saveExpertAssess', // 【评审通过/评审不通过】保存专家评审信息
    queryExpertTasks: '/web/flowmanage/expertAssess/queryExpertTasks', // 【页面加载显示专家评审信息】查询专家评审任务信息
    queryExpertAssessInfos: '/web/flowmanage/demonstrationCheck/queryExpertAssessInfos'// 获取专家评审信息，判断是否已完成
    // /web/flowmanage/demonstrationstart/getDemonstrationStartContent
  },
  // 意见征求
  consultationManagement: {

    querySeekOpinionTaskList: '/web/flowmanage/seekOpinion/querySeekOpinionTaskList', // 【页面加载】获取需要发起意见征求的任务信息
    getSeekOpinionInfo: '/web/flowmanage/seekOpinion/getSeekOpinionInfo', // 【选择一个任务信息点击发起意见征求】获取意见征求详细信息
    saveSeekOpinionInfo: '/web/flowmanage/seekOpinion/saveSeekOpinionInfo', // 【点击保存】保存意见征求信息
    startSeekOpinion: '/web/flowmanage/seekOpinion/startSeekOpinion', // 【点击发布】发布意见征求
    saveAdviseInfo: '/web/flowmanage/seekOpinion/saveAdviseInfo', // 【保存意见征求建议信息】保存意见征求建议信息
    // 意见征求-建议处理
    getDviseInfo: '/web/flowmanage/handleAdvise/getDviseInfo', // 【双击建议列表中回复信息】获取意见征求建议详细信息
    saveReplyInfo: '/web/flowmanage/handleAdvise/saveReplyInfo', // 【点击保存】保存回复信息
    queryaDviseInfos: '/web/flowmanage/handleAdvise/queryaDviseInfos', // 【点击回复链接】查询回复信息列表
    submitReplyInfo: '/web/flowmanage/handleAdvise/submitReplyInfo', // 【点击提交】提交回复信息
    saveOpinionSummaryInfo: '/web/flowmanage/handleAdvise/saveOpinionSummaryInfo', // 【点击通过/不通过】保存意见征求建议汇总信息

    // 意见征求-建议信息保存
    querySeekOpinionAdviseTaskList: '/web/flowmanage/seekOpinion/querySeekOpinionAdviseTaskList'// 【获取意见征求建议任务】获取可建议任务信息
  },
  // 签批管理
  signManagements: {
    listSignTask: '/web/flowmanage/signTask/listSignTask', // 获取签批信息列表
    getSignTask: '/web/flowmanage/signTask/getSignTask', // 获取签批信息
    saveSignInfo: '/web/flowmanage/signTask/saveSignInfo', // 保存签批信息
    sumbitSignTask: '/web/flowmanage/signTask/sumbitSignTask', // 签批
    sumbitSignTasks: '/web/flowmanage/signTask/sumbitSignTasks', // 签批
    backTaskFlow: '/web/flowmanage/pricTaskManage/backTaskFlow', // 驳回
    bhSignTask: '/web/flowmanage/signTask/bhSignTask'
  },
  // 发布管理
  issueManagements: {
    listIssueTask: '/web/flowmanage/issueTask/listIssueTask', // 获取发布信息列表
    getIssueTask: '/web/flowmanage/issueTask/getIssueTask', // 获取发布信息
    saveIssueTask: '/web/flowmanage/issueTask/saveIssueTask', // 保存发布信息
    sumbitIssueTask: '/web/flowmanage/issueTask/sumbitIssueTask' // 发布
  },
  // 工作信息电子登记
  eletnicRegisWorkinfo: {
    saveDynamic: '/web/flowmanage/dynamic/saveDynamic', // 【保存】保存工作信息电子登记
    deleteDynamic: '/web/flowmanage/dynamic/deleteDynamic', // 【删除】删除工作信息电子登记
    updateDynamic: '/web/flowmanage/dynamic/updateDynamic', // 【更新】更新工作信息电子登记
    getDynamic: '/web/flowmanage/dynamic/getDynamic', // 【查询】获取工作信息电子登记详细信息
    listDynamic: '/web/flowmanage/dynamic/listDynamic', // 【查询】获取工作信息电子登记列表
    getDynamicRegId: '/web/flowmanage/dynamic/getDynamicRegId'// 查询id
  },
  // 工作动态日志
  workDynamicLog: {
    saveDynamicLog: '/web/flowmanage/dynamicLog/saveDynamicLog', // 【保存】保存工作动态日志信息
    deleteDynamicLog: '/web/flowmanage/dynamicLog/deleteDynamicLog', // 【删除】删除工作动态日志信息
    listDynamicLog: '/web/flowmanage/dynamicLog/listDynamicLog', // 【查询】获取工作动态日志列表
    getDynamicLog: '/web/flowmanage/dynamicLog/getDynamicLog' // 【查询】获取工作动态日志详细信息
  },
  // 任务管理
  taskManagements: {
    listTaskByPage: '/web/flowmanage/pricTaskManage/listTaskByPage', // 查询流程信息列表
    backTaskFlow: '/web/flowmanage/pricTaskManage/backTaskFlow', // 回退流程
    endTaskFlow: '/web/flowmanage/pricTaskManage/endTaskFlow' // 终止流程
  },
  // 任务代办管理
  taskTodoManagements: {
    listToDoTask: '/web/flowmanage/pricTaskManage/listToDoTask' // 获取待办任务信息
  },
  // 政策文件
  policyDocument: {
    updatePolFile: '/web/flowmanage/polfile/updatePolFile', // 修改政策文件信息
    deletePolFile: '/web/flowmanage/polfile/deletePolFile', // 删除政策文件信息
    savePolFile: '/web/flowmanage/polfile/savePolFile', // 新增政策文件信息
    getPolFile: '/web/flowmanage/polfile/getPolFile', // 获取政策文件信息
    listPolFile: '/web/flowmanage/polfile/listPolFile', // 获取政策文件信息列表
    getPolFiledId: '/web/flowmanage/polfile/getPolFiledId' // 获取政策文件编号
  },
  // 举报评审
  reportComplaintManagement: {
    pricRptCmpaTs: '/web/flowmanage/pricRptCmpa/pricRptCmpaTs', // 举报投诉（投诉、受理、处理、回访）
    pricRptCmpaDspoId: '/web/flowmanage/pricRptCmpa/pricRptCmpaDspoId', // 获取处理编号
    queryPricRptCmpas: '/web/flowmanage/pricRptCmpa/queryPricRptCmpas', // 获取待办列表
    queryPricRptCmpaByTaskId: '/web/flowmanage/pricRptCmpa/queryPricRptCmpaByTaskId', // 获获取投诉信息
    pricRptCmpaTsId: '/web/flowmanage/pricRptCmpa/pricRptCmpaTsId' // 获获取投诉编号
  },
  // 模拟运行界面
  simulationRunPage: {
    ListServItemUseSituation: '/web/flowmanage/SimulatedOperation/ListServItemUseSituation', // 基本情况(医疗服务项目使用情况表格)
    ListAgeUsed: '/web/flowmanage/SimulatedOperation/ListAgeUsed', // 病人使用情况(不同年龄段使用情况表格)
    ListMedinsCenterArea: '/web/flowmanage/SimulatedOperation/ListMedinsCenterArea', // 医保中心使用情况(根据行政区分类表格)
    ListMedinsCenterInsutype: '/web/flowmanage/SimulatedOperation/ListMedinsCenterInsutype', // 医保中心使用情况(根据险种分类表格)
    ListMedinsLvUsed: '/web/flowmanage/SimulatedOperation/ListMedinsLvUsed', // 医疗机构使用情况(不同医院级别使用情况)
    ListPricSchmServItemDExtend: '/web/flowmanage/SimulatedOperation/ListPricSchmServItemDExtend', // 配置测算任务弹出框中项目相关表格参数
    ListServItemHospRank: '/web/flowmanage/SimulatedOperation/ListServItemHospRank', // 医疗机构使用情况(医疗服务项目段医院TOP20表格)
    ListServItemRelationDiseaseRank: '/web/flowmanage/SimulatedOperation/ListServItemRelationDiseaseRank', // 病人使用情况(住院病种中含医疗服务项目关联疾病Top20表格)
    ListAgeUsedPsnTIme: '/web/flowmanage/SimulatedOperation/ListAgeUsedPsnTIme', // 病人使用情况(不同年龄段使用人数柱状图)
    ListServItemUseTrend: '/web/flowmanage/SimulatedOperation/ListServItemUseTrend', // 基本情况(医疗服务项目使用趋势柱状图)
    ListTreatmentTypeUse: '/web/flowmanage/SimulatedOperation/ListTreatmentTypeUse', // 基本情况功能(待遇类型使用饼图)
    getRunParameter: '/web/flowmanage/SimulatedOperation/getRunParameter', // 点击查看测算结果下拉框获取基本情况页面只读参数
    getSmltRunRcJe: '/web/flowmanage/SimulatedOperation/getSmltRunRcJe', // 医保中心使用情况和病人使用情况文字描述
    saveCalculationServItemRelevant: '/web/flowmanage/SimulatedOperation/saveCalculationServItemRelevant', // 配置测算任务下方表格参数保存
    saveCalculationTaskRelevant: '/web/flowmanage/SimulatedOperation/saveCalculationTaskRelevant', // 配置测算任务弹出框表格上方(保存批处理相关参数)
    updateDataStudioTask: '/web/flowmanage/SimulatedOperation/updateDataStudioTask', // 生成测算任务（调用阿里云手动流程）
    updateCalculationConclusion: '/web/flowmanage/SimulatedOperation/updateCalculationConclusion' // 点击填写测算结论弹出框保存结论按钮
  },
  // 全网项目比对
  projectCompare: {
    listPricServiIemCompareResult: '/web/pricemanage/pricServItemCompare/listPricServiIemCompareResult', // 全网项目比对查询
    savePricServItemCompare: '/web/pricemanage/pricServItemCompare/savePricServItemCompare', // 全网项目比对保存
    savePricServItemComparePass: '/web/pricemanage/pricServItemCompare/savePricServItemComparePass', // 全网项目比对通过
    savePricServItemCompareFail: '/web/pricemanage/pricServItemCompare/savePricServItemCompareFail' // 全网项目比对不通过
  }
}

