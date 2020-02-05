// 调价工具
export default {
  // 调价方案查询
  adjustPriceSchemeQuery: {
    listPricAdjmSchm: '/web/adjustmanage/pricAdjmSchm/listPricAdjmSchm', // 查询价格调整方案信息列表
    getPricAdjmSchmDetail: '/web/adjustmanage/pricAdjmSchm/getPricAdjmSchmDetail', // 查询价格调整方案信息详情
    deletePricAdjmSchm: '/web/adjustmanage/pricAdjmSchm/deletePricAdjmSchm'// 删除
  },

  // 预分配申报调价工具
  // 调价参数设置
  adjustmentParameterSet: {
    // listPricAdjmSchm: '/web/adjustmanage/pricAdjmSchm/listPricAdjmSchm', // 调价参数设置--查询列表【查询】查询价格调整方案信息列表
    // getPricAdjmSchmDetail: '/web/adjustmanage/pricAdjmSchm/getPricAdjmSchmDetail', // 调价参数设置--查询详情【查询】查询价格调整方案信息详情
    savePricAdjmSchmDetail: '/web/adjustmanage/pricAdjmSchm/savePricAdjmSchmDetail', // 调价参数设置--新增保存【保存】保存价格调整方案详情
    listPricMedinsInfo: '/web/adjustmanage/pricMedinsItemFee/listPricMedinsInfo' // 调价参数设置 --查询参与调价医疗机构【查询】医疗机构项目费用统计信息列表
  },
  // 医疗机构调价项目申报
  medicalAdjustmentProjectDeclare: {
    saveMedinsDeclareItemInfo: '/web/adjustmanage/pricAdjmMedinsItem/saveMedinsDeclareItemInfo', // 保存医疗机构申报项目信息
    saveMedinsDeclareInfo: '/web/adjustmanage/pricAdjmMedinsItem/saveMedinsDeclareInfo', // 保存医院申报信息
    saveMedinsCancelDeclare: '/web/adjustmanage/pricAdjmMedinsItem/saveMedinsCancelDeclare', // 保存取消申报信息
    listPricAdjmMedinsItem: '/web/adjustmanage/pricAdjmMedinsItem/listPricAdjmMedinsItem', // 进入界面加载已选中的项目信息
    getPricAdjmNotcMedinsDetail: '/web/adjustmanage/pricAdjmNotcMedins/getPricAdjmNotcMedinsDetail', // 查询价格调整方案通知医疗机构信息详情
    listPricAdjmNotcMedins: '/web/adjustmanage/pricAdjmNotcMedins/listPricAdjmNotcMedins', // 查询价格调整方案通知医疗机构信息列表
    listPricMedinsItemFee: '/web/adjustmanage/pricMedinsItemFee/listPricMedinsItemFee' // 进入界面加载未选择的项目信息

    // savePricAdjmSchmDetail: '/web/adjustmanage/pricAdjmNotcMedins/savePricAdjmSchmDetail', // 医疗机构调价项目申报保存【保存】保存价格调整方案通知医疗机构信息
  },
  // 统筹区调价项目评分
  poolareaAdjustmentProjectScore: {
    listPricAdjmSchmItemScore: '/web/adjustmanage/pricAdjmSchmItem/listPricAdjmSchmItemScore', // 统筹区调价项目--加载符合调价项目信息【查询】查询条件项目信息列表
    // listPricAdjmSchm: '/web/adjustmanage/pricAdjmSchm/listPricAdjmSchm', // 统筹区调价项目评分---查询列表【查询】查询价格调整方案信息列表
    savePricAdjmSchmDetail: '/web/adjustmanage/pricAdjmSchm/savePricAdjmSchmDetail' // 统筹区调价项目评分---新增保存【保存】保存价格调整方案详情
    // getPricAdjmSchmDetail: '/web/adjustmanage/pricAdjmSchm/getPricAdjmSchmDetail' // 统筹区调价项目评分--查询详情【查询】查询价格调整方案信息详情
  },
  // 调价方案查看
  // adjustmentPricePlanView: {
  //   listPricAdjmSchm: '/web/adjustmanage/pricAdjmSchm/listPricAdjmSchm', // 调价方案查看--查询列表【查询】查询价格调整方案信息列表
  //   getPricAdjmSchmDetail: '/web/adjustmanage/pricAdjmSchm/getPricAdjmSchmDetail' // 调价方案查看--查询详情【查询】查询价格调整方案信息详情
  // },

  // 按照CPI调整
  // cpi调价
  accordingCpiAdjustment: {
    listPricPoolareaItemFeeOfCpi: '/web/adjustmanage/pricPoolareaItemFee/listPricPoolareaItemFeeOfCpi', // CPI调价查询未加载项目--查询项目列表
    exportPricPoolareaItemFeeOfCpi: '/web/adjustmanage/pricPoolareaItemFee/exportPricPoolareaItemFeeOfCpi' // CPI调价方案导出项目
  },
  // 项目标签
  projectTag: {
    listTagManage: '/web/adjustmanage/tagManage/listTagManage', // 查询新增页面标签下拉框
    saveServitemTagRelation: '/web/adjustmanage/servitemTagRelation/saveServitemTagRelation', // 保存项目标签关系
    listServitemTagRelation: '/web/adjustmanage/servitemTagRelation/listServitemTagRelation', // 查询项目标签关系列表
    getServitemTagRelation: '/web/adjustmanage/servitemTagRelation/getServitemTagRelation', // 查询项目标签关系详情
    updateServitemTagRelation: '/web/adjustmanage/servitemTagRelation/updateServitemTagRelation', // 保存修改
    deleteServitemTagRelation: '/web/adjustmanage/servitemTagRelation/deleteServitemTagRelation'// 删除
  },

  // 标签管理
  tagManagement: {
    saveTagManage: '/web/adjustmanage/tagManage/saveTagManage', // 保存标签信息
    updateTagManage: '/web/adjustmanage/tagManage/updateTagManage', // 更新标签信息
    listTagManage: '/web/adjustmanage/tagManage/listTagManage', // 获取标签信息列表
    getTagManage: '/web/adjustmanage/tagManage/getTagManage', // 获得标签信息
    deleteTagManage: '/web/adjustmanage/tagManage/deleteTagManage' // 删除标签信息
  },

  // 点数与回收率
  pointAndRecycle: {
    savePricServitemPt: '/web/adjustmanage/pricServitemPt/savePricServitemPt', // 保存价格服务项目点数与回收率信息列表
    modifyPricServitemPt: '/web/adjustmanage/pricServitemPt/modifyPricServitemPt', // 修改价格服务项目点数与回收率信息列表
    listPricServitemPt: '/web/adjustmanage/pricServitemPt/listPricServitemPt', // 查询价格服务项目点数与回收率信息列表
    getPricServitemPt: '/web/adjustmanage/pricServitemPt/getPricServitemPt', // 获取服务项目点数与回收率信息
    deletePricServitemPt: '/web/adjustmanage/pricServitemPt/deletePricServitemPt', // 删除服务项目点数与回收率信息
    exportPricSerPtInfo: '/web/adjustmanage/pricServitemPt/exportPricSerPtInfo', // 配置与导入项目点数--导出点数项目
    saveBatchPricServitemPt: '/web/adjustmanage/pricServitemPt/saveBatchPricServitemPt'// 点数与回收率--导入接口（批量保存点数与回收率）
  },

  // 点数法调价
  pointAdjustmentPrice: {
    exportPricSerPtInfoOfAdjust: '/web/adjustmanage/pricServitemPt/exportPricSerPtInfoOfAdjust', // 导出未加载项目
    listPricServitemPtOfAdjust: '/web/adjustmanage/pricServitemPt/listPricServitemPtOfAdjust' // 左边查询未加载项目
  },

  // 成本预算调价
  costCalculateAdjustmentPrice: {
    listPricPoolItemFeeOfServ: '/web/adjustmanage/pricPoolareaItemFee/listPricPoolItemFeeOfServ', // 服务量分配、成本测算方案--查询左边未加载项目
    exportPricPoolItemFeeOfServ: '/web/adjustmanage/pricPoolareaItemFee/exportPricPoolItemFeeOfServ', // 服务量分配、成本测算方案导出项目
    savePricAdjmSchmDetail: '/web/adjustmanage/pricAdjmSchm/savePricAdjmSchmDetail' // 成本--新增保存【保存】保存价格调整方案详情
  }

}
