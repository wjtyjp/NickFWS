// 价格项目调整
export default {
  // 价格项目新增
  priceProjectApplication: {
    queryServitemMcs: '/web/itemmanage/itemapply/queryServitemMcs', // 一次性耗材弹框信息查询
    saveCost: '/web/itemmanage/itemapply/saveCost', // 成本计算内容中保存按钮
    delCost: '/web/itemmanage/itemapply/delCost', // 成本计算内容删除按钮
    applyItem: '/web/itemmanage/itemapply/applyItem', // 申请内容右上角保存按钮
    queryInventory: '/web/itemmanage/itemapply/queryInventory', // 要上传附件列表信息查询
    queryExctCont: '/web/itemmanage/itemapply/queryExctCont', // 除外内容弹出框信息查询
    download: '/web/file/download ', // 下载
    del: '/web/file/del' // 删除
  },
  // 价格项目退出条件
  priceItemsExitConditions: {
    listItemOutCondition: '/web/itemmanage/itemoutcondition/listItemOutCondition', // 获取退出条件列表
    getItemOutCondition: '/web/itemmanage/itemoutcondition/getItemOutCondition', // 查看条件信息的详情
    saveItemOutCondition: '/web/itemmanage/itemoutcondition/saveItemOutCondition'// 保存价格项目退出条件
  },
  // 价格项目规范数据归集 wjt added
  standardDataCollectionPriceItems: {
    exportItemInfo: '/web/itemmanage/itemimputation/exportItemInfo', // 导出项目信息列表
    saveItemImputation: '/web/itemmanage/itemimputation/saveItemImputation', // [提交]保存并发起项目调整任务
    queryImputationItem: '/web/itemmanage/itemimputation/queryImputationItem' // 查询调整的项目
  },
  // 价格项目规范建议方案 wjt added
  proposedPriceProjectSpecificationScheme: {
    saveItemImputationPlan: '/web/itemmanage/itemimputationplan/saveItemImputationPlan', // 保存方案
    listTask: '/web/itemmanage/itemimputationplan/listTask', // 查询方案任务
    getItemImputationPlan: '/web/itemmanage/itemimputationplan/getItemImputationPlan' // 按钮查看任务详情
  },
  // 价格新增查询
  priceProjectAddQuery: {
    deleteServitemDetailData: '/web/itemmanage/itemapply/deleteServitemDetailData', //  《删除》按钮
    queryServitemDetailData: '/web/itemmanage/itemapply/queryServitemDetailData', // 《查看》《编辑》按钮查询页面详情
    queryServitemData: '/web/itemmanage/itemapply/queryServitemData', // 《查询》按钮
    declareServitemData: '/web/itemmanage/itemapply/declareServitemData' // 《《申报》按钮
  },
  // 价格初审
  priceProjectAddFirstTrial: {
    listPricServiIemCompareResult: '/web/pricemanage/pricServItemCompare/listPricServiIemCompareResult', //  【查询】 全网项目比对查询
    allNetWorkCompar: ' /web/itemmanage/itemaccept/allNetWorkCompar', // 全网比对（allNetWorkCompar）
    auditToNoPass: '/web/itemmanage/itemaccept/auditToNoPass', // 《受理不通过（auditToNoPass）
    auditToEnd: '/web/itemmanage/itemaccept/auditToEnd', // 《受理终止（auditToEnd）
    auditToPass: '/web/itemmanage/itemaccept/auditToPass', // 受理通过（auditToPass）
    queryServitemDetailData: '/web/itemmanage/itemapply/queryServitemDetailData', // 详情（queryServitemDetailData）
    queryTask: '/web/itemmanage/itemaccept/queryTask', // 《查询（queryTask）
    // 赋码
    // queryTask: '/web/itemmanage/itemaccept/queryTask', // 《查询》按钮
    TaggCode: '/web/itemmanage/itemaccept/TaggCode' // 《《赋码》弹出界面中“提交”按钮
    // queryServitemDetailData: '/web/itemmanage/itemapply/queryServitemDetailData' // 《详情》按钮
  }

}
