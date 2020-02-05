// 基本信息管理
export default {
  // 医疗服务项目
  medicalserviceiteminquiry: {
    listItemInfo: '/web/basicinfomanage/itemquery/listItemInfo', // 主页面查询
    getItemInfo: '/web/basicinfomanage/itemquery/getItemInfo' // 《查看》《编辑》按钮查询页面详情
  },
  // 医疗服务价格
  medicalservicepriceinquiry: {
    listItemPricInfo: '/web/basicinfomanage/itemquery/listItemPricInfo', // 主页面查询
    getItemInfo: '/web/basicinfomanage/itemquery/getItemInfo' // 《查看》《编辑》按钮查询页面详情
  },
  // 新增项目执行情况监测表填报
  newItemFilling: {
    saveItemMonitoringAdd: '/web/basicinfomanage/itemMonitoringAdd/saveItemMonitoringAdd', // 新增保存
    updateItemMonitoringAdd: '/web/basicinfomanage/itemMonitoringAdd/updateItemMonitoringAdd', // 修改保存
    deleteItemMonitoringAdd: '/web/basicinfomanage/itemMonitoringAdd/deleteItemMonitoringAdd', // 删除
    listServiceItem: '/web/basicinfomanage/itemMonitoringAdd/listServiceItem', // 新增页面，选择服务项目
    reportItemMonitoringAdd: '/web/basicinfomanage/itemMonitoringAdd/reportItemMonitoringAdd', // 上报
    listItemMonitoringAdd: '/web/basicinfomanage/itemMonitoringAdd/listItemMonitoringAdd', // 查询
    listDeptByMedinsId: '/web/basicinfomanage/itemMonitoringAdd/listDeptByMedinsId', // 根据医疗机构编码查询开展科室
    listPoolAreaByProv: '/web/basicinfomanage/itemMonitoringAdd/listPoolAreaByProv', // 根据省份编码查询统筹区信息
    getItemMonitoringAddDetail: '/web/basicinfomanage/itemMonitoringAdd/getItemMonitoringAddDetail' // 详情
  },
  // 新增项目执行情况监测表查询
  newItemQuery: {
    getItemMonitoringAddDetail: '/web/basicinfomanage/itemMonitoringAddQuery/getItemMonitoringAddDetail', // 详情
    listItemMonitoringAdd: '/web/basicinfomanage/itemMonitoringAddQuery/listItemMonitoringAdd', // 查询
    listPoolAreaByProv: '/web/basicinfomanage/itemMonitoringAddQuery/listPoolAreaByProv', // 根据省份编码查询统筹区信息
    exportItemMonitoringAdd: '/web/basicinfomanage/itemMonitoringAddQuery/exportItemMonitoringAdd' // 导出
  },
  // 项目执行情况监测表填报
  itemMonitoringList: {
    saveItemMonitoring: '/web/basicinfomanage/itemMonitoring/saveItemMonitoring', // 新增保存
    updateItemMonitoring: '/web/basicinfomanage/itemMonitoring/updateItemMonitoring', // 修改保存
    deleteItemMonitoring: '/web/basicinfomanage/itemMonitoring/deleteItemMonitoring', // 删除
    listServiceItem: '/web/basicinfomanage/itemMonitoring/listServiceItem', // 新增页面，选择服务项目
    reportItemMonitoring: '/web/basicinfomanage/itemMonitoring/reportItemMonitoring', // 上报
    listItemMonitoring: '/web/basicinfomanage/itemMonitoring/listItemMonitoring', // 查询
    listDeptByMedinsId: '/web/basicinfomanage/itemMonitoring/listDeptByMedinsId', // 根据医疗机构编码查询开展科室
    listPoolAreaByProv: '/web/basicinfomanage/itemMonitoring/listPoolAreaByProv', // 根据省份编码查询统筹区信息
    getItemMonitoringDetail: '/web/basicinfomanage/itemMonitoring/getItemMonitoringDetail' // 详情
  },
  // 项目执行情况监测表查询
  itemMonitoringQuery: {
    getItemMonitoringDetail: '/web/basicinfomanage/itemMonitoringQuery/getItemMonitoringDetail', // 详情
    listItemMonitoring: '/web/basicinfomanage/itemMonitoringQuery/listItemMonitoring', // 查询
    listPoolAreaByProv: '/web/basicinfomanage/itemMonitoringQuery/listPoolAreaByProv', // 根据省份编码查询统筹区信息
    exportItemMonitoring: '/web/basicinfomanage/itemMonitoringQuery/exportItemMonitoring' // 导出
  },
  // 药品信息查询
  drugInformationInquiry: {
    listDrugsInfo: '/web/basicinfomanage/itemquery/listDrugsInfo', // 【页面加载】获取药品信息列表
    getDrugsInfo: '/web/basicinfomanage/itemquery/getDrugsInfo' // 《查看》《编辑》按钮查询页面详情
  },
  // 耗材信息查询
  consumablesInformationQuery: {
    listConsumablesInfo: '/web/basicinfomanage/itemquery/listConsumablesInfo', // 【页面加载】获取耗材信息列表
    getConsumablesInfo: '/web/basicinfomanage/itemquery/getConsumablesInfo' // 【选择一个耗材信息获取详情】获取耗材详情信息
  }
}
