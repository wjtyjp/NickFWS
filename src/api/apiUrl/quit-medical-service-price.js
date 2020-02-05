// 退出医疗服务价格
export default {
  // 价格项目退出条件
  priceItemsExitConditions: {
    listItemOutCondition: '/web/itemmanage/itemoutcondition/listItemOutCondition', // 获取退出条件列表
    getItemOutCondition: '/web/itemmanage/itemoutcondition/getItemOutCondition', // 查看条件信息的详情
    saveItemOutCondition: '/web/itemmanage/itemoutcondition/saveItemOutCondition', // 保存价格项目退出条件
    updateOutCondition: '/web/itemmanage/itemoutcondition/updateOutCondition', // 修改退出条件
    deleteOutCondition: '/web/itemmanage/itemoutcondition/deleteOutCondition', // 删除退出条件
    updateRlsFlag: '/web/itemmanage/itemoutcondition/updateRlsFlag' // 发布或停止退出条件
  },
  // 价格退出发起
  priceItemsExitStart: {
    getTask: '/web/itemmanage/itemoutStart/getTask', // 主页面[详情]按钮展示任务详情包括项目
    listTask: '/web/itemmanage/itemoutStart/listTask', // 主页面的[查询]查询任务列表
    queryServitem: '/web/itemmanage/itemoutStart/queryServitem', // 主页面的[查询]查询任务列表
    saveItemOutStart: '/web/itemmanage/itemoutStart/saveItemOutStart', // 发起页面中[提交]发起退出任务
    // 价格退出提醒
    queryOutServitem: '/web/itemmanage/itemoutStart/queryOutServitem'// 退出提醒主界面的[查询]查询退出提醒的项目
  },
  // 价格退出审核
  priceItemsExitExamine: {
    getTask: '/web/itemmanage/itemoutStart/getTask', // [详情]按钮任务详情(包含项目)
    itemOutAuditFaile: '/web/itemmanage/itemoutaudit/itemOutAuditFaile', // 审核不通过
    updateAuditPass: '/web/itemmanage/itemoutaudit/updateAuditPass', // 审核通过
    listTask: '/web/itemmanage/itemoutStart/listTask'// 查询任务列表
  }

}
