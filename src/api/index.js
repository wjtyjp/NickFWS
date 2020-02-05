import priceItemAdjustment from './apiUrl/price-item-adjustment'
export default {
  // 价格项目新增
  ...priceItemAdjustment,
  // 公共请求
  commonApiUrl: {
    getCodeValueListMultiple: '/web/dict/getCodeValueListMultiple', // 公共下拉组件参数获取
    download: '/web/file/download', // 公共下载
    del: '/web/file/del', // 删除
    batchDownload: '/web/file/batchDownload', // 批量下载
    queryServitemTypeTreeData: '/web/itemmanage/itemaccept/queryServitemTypeTreeData'// 服务项目级联选择
  }

}
