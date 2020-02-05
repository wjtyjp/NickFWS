// 动态调整价格标准
export default {
  // 价格机制性调整启动
  priceMechanismAdjustmentStart: {
    getMechanismsAdjustPrice: '/web/pricemanage/mechanismsadjustpricestart/getMechanismsAdjustPrice', // 获取任务页面详情（页面初始化）
    saveMechanismsAdjustPriceStart: '/web/pricemanage/mechanismsadjustpricestart/saveMechanismsAdjustPriceStart', // 保存
    selectAllServiceItem: '/web/pricemanage/mechanismsadjustpricestart/selectAllServiceItem', // 所有数据右选按钮（数据没分页都需要加载）
    submitMechanismsAdjustPriceStart: '/web/pricemanage/mechanismsadjustpricestart/submitMechanismsAdjustPriceStart', // 提交
    listServiceItem: '/web/pricemanage/mechanismsadjustpricestart/listServiceItem' // 查询
  },
  // 价格机制性调价方案
  priceMechanismAdjustmentPlan: {
    listTask: '/web/pricemanage/mechanismsadjustpricestart/listTask', // 查询列表
    saveMechanismsAdjustPricePlan: '/web/pricemanage/mechanismsadjustpriceplan/saveMechanismsAdjustPricePlan', // 调价方案保存（方案）
    submitMechanismsAdjustPricePlan: '/web/pricemanage/mechanismsadjustpriceplan/submitMechanismsAdjustPricePlan', // 提交（方案）
    listSchmServiceItem: '/web/pricemanage/mechanismsadjustpriceplan/listSchmServiceItem', // 查询（调价弹出框）
    updateAdjustPrice: '/web/pricemanage/mechanismsadjustpriceplan/updateAdjustPrice', // 保存（调价弹出框）
    getMechanismsAdjustPrice: '/web/pricemanage/mechanismsadjustpricestart/getMechanismsAdjustPrice' // 处理弹窗(获取机制性任务详情)
  },
  // 价格机制性成本调查
  priceMechanismCostSurvey: {
    getMechanismsCostInvestigate: '/web/pricemanage/mechanismscostinvestigate/getMechanismsCostInvestigate', // 页面初始化（获取价格机制性成本调查详情）
    saveMechanismsCostInvestigate: '/web/pricemanage/mechanismscostinvestigate/saveMechanismsCostInvestigate', // 保存按钮
    submitMechanismsCostInvestigate: '/web/pricemanage/mechanismscostinvestigate/submitMechanismsCostInvestigate' // 提交
  },
  // 区域价格协调启动
  regionalPriceCoordinationStart: {
    exportItemInfo: '/web/pricemanage/areaprice/exportItemInfo', // 一项目列表导出
    saveAreaPriceStartInfo: '/web/pricemanage/areaprice/saveAreaPriceStartInfo', // 区域价格协调启动信息提交
    queryServItemList: '/web/pricemanage/areaprice/queryServItemList' // 成本计算内容删除按钮
  },
  // 区域交割协调方案
  regionalPriceCoordinationPlan: {
    queryTaskForAreaPrice: '/web/pricemanage/areaprice/queryTaskForAreaPrice', // 获取工作流中某一环节的任务信息列表
    queryAreaPriceInfo: '/web/pricemanage/areaprice/queryAreaPriceInfo', // 获取区域价格协调方案环节的任务详情
    saveNewPriceInfo: '/web/pricemanage/areaprice/saveNewPriceInfo', // 提交区域价格协调调价信息
    saveSchemeInfo: '/web/pricemanage/areaprice/saveSchemeInfo' // 提交区域价格协调方案信息
  },
  // 牵头单位与参与单位确认
  leadingUnitParticipatingUnit: {
    queryTaskForAreaPrice: '/web/pricemanage/areaprice/queryTaskForAreaPrice', // 查询】获取工作流中某一环节的任务信息列表
    queryAreaPriceInfo: '/web/pricemanage/areaprice/queryAreaPriceInfo', // 详情】获取牵头单位与参与单位确认环节的任务详情
    saveCorpInfo: '/web/pricemanage/areaprice/saveCorpInfo'// 提交】保存牵头单位与参与单位信息
  },
  // 定价任务申请 wjt added
  pricingTaskApplication: {
    queryItemForPricSet: '/web/pricemanage/priceset/queryItemForPricSet', // 初始化查询
    savePriceSetStartInfo: '/web/pricemanage/priceset/savePriceSetStartInfo' // 提交
  },
  // 定价任务查询 wjt added
  pricingTaskQuery: {
    queryTaskForPriceSet: '/web/pricemanage/priceset/queryTaskForPriceSet', // 查询任务信息列表
    queryPriceSetTaskInfo: '/web/pricemanage/priceset/queryPriceSetTaskInfo' // 查询任务详情
  },
  // 市场价格调整申请 wjt added
  marketPriceAdjustmentApplication: {
    listServiceItem: '/web/pricemanage/priceRecordApply/listServiceItem', // 按关键词查找
    listMedInsByPoolArea: '/web/pricemanage/priceRecordApply/listMedInsByPoolArea', // 查询医疗机构
    savePriceRecordApply: '/web/pricemanage/priceRecordApply/savePriceRecordApply', // 保存
    submitPriceRecordApply: '/web/pricemanage/priceRecordApply/submitPriceRecordApply', // 提交
    exportItemInfo: '/web/pricemanage/priceRecordApply/exportItemInfo', // 导出
    listPricSchmServItemBySchmId: '/web/pricemanage/priceRecordQuery/listPricSchmServItemBySchmId', // 右表查询
    listTaskAttBySchmId: '/web/pricemanage/priceRecordApply/listTaskAttBySchmId' // 查询附件列表

  },
  // 市场价格调整查询 wjt added
  marketPriceAdjustmentQuery: {
    listApply: '/web/pricemanage/priceRecordQuery/listApply', // 查询
    getTaskDetail: '/web/pricemanage/priceRecordQuery/getTaskDetail', // 详情
    listPricSchmServItemBySchmId: '/web/pricemanage/priceRecordQuery/listPricSchmServItemBySchmId' // 根据方案id查询项目
  },
  // 市场价格调整受理 wjt added
  marketPriceAdjustmentAcceptance: {
    saveCheckFail: '/web/pricemanage/priceRecordAudit/saveCheckFail', // 审核不通过
    saveCheckPass: '/web/pricemanage/priceRecordAudit/saveCheckPass', // 审核通过
    listTask: '/web/pricemanage/priceRecordAudit/listTask', // 查询
    getTaskDetail: '/web/pricemanage/priceRecordAudit/getTaskDetail', // 详情
    listMedInsByPoolArea: '/web/pricemanage/priceRecordAudit/listMedInsByPoolArea' // 查询医疗机构
  },
  // 市场价格调整全网比对 wjt added
  marketPriceAdjustmentComparison: {
    saveCompareFail: '/web/pricemanage/priceRecordCompare/saveCompareFail', // 全网项目比对不通过
    savePricServItemCompare: '/web/pricemanage/pricServItemCompare/savePricServItemCompare', // 全网项目比对保存
    saveComparePass: '/web/pricemanage/priceRecordCompare/saveComparePass', // 全网项目比对通过
    listCompareResult: '/web/pricemanage/priceRecordCompare/listCompareResult', // 弹窗查询
    listTask: '/web/pricemanage/priceRecordCompare/listTask', // 主页查询
    getTaskDetail: '/web/pricemanage/priceRecordCompare/getTaskDetail' // 详情
  },
  // 市场价格调整登记 wjt added
  marketPriceAdjustmentRegister: {
    saveRegistration: '/web/pricemanage/priceRecordRegistration/saveRegistration', // 点击【备案登记】
    listMedInsByPoolArea: '/web/pricemanage/priceRecordRegistration/listMedInsByPoolArea', // 查询医疗机构
    getTaskDetail: '/web/pricemanage/priceRecordRegistration/getTaskDetail', // 详情
    listTask: '/web/pricemanage/priceRecordRegistration/listTask' // 查询
  },
  // 设置启动条件 wjt added
  setStartupConditions: {
    stopStartupConditionSet: '/web/pricemanage/startupConditionSet/stopStartupConditionSet', // 停止启动条件
    deleteStartupConditionSet: '/web/pricemanage/startupConditionSet/deleteStartupConditionSet', // 删除启动条件
    releaseStartupConditionSet: '/web/pricemanage/startupConditionSet/releaseStartupConditionSet', // 发布启动条件
    saveStartupConditionSet: '/web/pricemanage/startupConditionSet/saveStartupConditionSet', // 新增保存
    getStartupConditionSetDetail: '/web/pricemanage/startupConditionSet/getStartupConditionSetDetail', // 查看详情
    listStartupConditionSet: '/web/pricemanage/startupConditionSet/listStartupConditionSet', // 查询
    listServiceItem: '/web/pricemanage/startupConditionSet/listServiceItem', // 新增查询项目列表信息
    listPoolAreaByProv: '/web/pricemanage/startupConditionSet/listPoolAreaByProv', // 根据省级编码查询统筹区
    updateStartupConditionSet: '/web/pricemanage/startupConditionSet/updateStartupConditionSet' // 修改保存
  },
  // 设置提醒条件 wjt added
  setReminderConditions: {
    stopRemindConditionSet: '/web/pricemanage/remindConditionSet/stopRemindConditionSet', // 停止启动条件
    deleteRemindConditionSet: '/web/pricemanage/remindConditionSet/deleteRemindConditionSet', // 删除启动条件
    releaseRemindConditionSet: '/web/pricemanage/remindConditionSet/releaseRemindConditionSet', // 发布启动条件
    saveRemindConditionSet: '/web/pricemanage/remindConditionSet/saveRemindConditionSet', // 新增保存
    getRemindConditionSetDetail: '/web/pricemanage/remindConditionSet/getRemindConditionSetDetail', // 查看详情
    listRemindConditionSet: '/web/pricemanage/remindConditionSet/listRemindConditionSet', // 查询
    listServiceItem: '/web/pricemanage/remindConditionSet/listServiceItem', // 新增查询项目列表信息
    listPoolAreaByProv: '/web/pricemanage/remindConditionSet/listPoolAreaByProv', // 根据省级编码查询统筹区
    updateRemindConditionSet: '/web/pricemanage/remindConditionSet/updateRemindConditionSet' // 修改保存
  },
  // 市场价格统计管理
  marketPriceInfoManagement: {
    listTask: '/web/pricemanage/priceRecordCompare/listTask', // 获取市场价格调整全网比对任务列表
    listMedInsByPoolArea: '/web/pricemanage/priceRecordCompare/listMedInsByPoolArea', // 查询医疗机构
    getTaskDetail: '/web/pricemanage/priceRecordCompare/getTaskDetail', // 获取市场价格调整任务详情
    listCompareResult: '/web/pricemanage/priceRecordCompare/listCompareResult', // 全网比对查询
    saveComparePass: '/web/pricemanage/priceRecordCompare/saveComparePass', // 全网比对通过
    saveCompareFail: '/web/pricemanage/priceRecordCompare/saveCompareFail' // 全网比对不通过
  },
  // 特定任务调价启动
  specificTaskAdjustmentStart: {
    saveSpecialTaskStart: '/web/pricemanage/SpecialTaskStart/saveSpecialTaskStart', // 保存按钮
    submitSpecialTaskStart: '/web/pricemanage/SpecialTaskStart/submitSpecialTaskStart' // 提交按钮
  },
  // 特定任务调价方案
  specificTaskAdjusementPlan: {
    submitSpecialTaskPlan: '/web/pricemanage/SpecialTaskplan/submitSpecialTaskPlan', // 提交（方案）
    saveSpecialTaskPlan: '/web/pricemanage/SpecialTaskplan/saveSpecialTaskPlan' // 保存（方案）
  },
  // 特定项目价格听证
  specificProjectPriceAdjustmentHearing: {
    saveSpecialItemHear: '/web/pricemanage/specialitemhear/saveSpecialItemHear', // 保存
    submitSpecialItemHear: '/web/pricemanage/specialitemhear/submitSpecialItemHear', // 提交
    getSpecialItemHear: '/web/pricemanage/specialitemhear/getSpecialItemHear' // 获取价格听证信息（页面初始化）
  },
  // 特定项目启动
  specificProjectPriceAdjustmentStart: {
    saveSpecialItemStart: '/web/pricemanage/specialItemStart/saveSpecialItemStart', // 保存
    submitSpecialItemStart: '/web/pricemanage/specialItemStart/submitSpecialItemStart', // 提交
    getSpecialItemStart: '/web/pricemanage/specialItemStart/getSpecialItemStart' // 获取特定项目启动详情（新增按钮）
  },
  // 特定项目审核
  specificProjectPriceAdjustmentAccept: {
    saveSpecialItemCheckFail: '/web/pricemanage/specialItemAudit/saveSpecialItemCheckFail', // 审核不通过
    saveSpecialItemCheckPass: '/web/pricemanage/specialItemAudit/saveSpecialItemCheckPass', // 审核通过
    getSpecialItemTaskDetail: '/web/pricemanage/specialItemAudit/getSpecialItemTaskDetail' // 获取详情页面初始化
  },
  // 特定项目全网比对
  specificProjectPriceCompare: {
    getPriceCompareTaskDetail: '/web/pricemanage/pricecompare/getPriceCompareTaskDetail', // 获取详情
    listCompareResult: '/web/pricemanage/pricecompare/listCompareResult', // 查询
    saveComparePass: '/web/pricemanage/pricecompare/saveComparePass', // 比对通过
    saveCompareFail: '/web/pricemanage/pricecompare/saveCompareFail' // 比对不通过
  }
}

