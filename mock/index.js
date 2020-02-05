import Mock from 'mockjs'
import userAPI from './user'
import tableAPI from './table'
import dialogShowApi from './dialogShow'
import tableShowApi from './tableShow'
// Fix an issue with setting withCredentials = true, cross-domain request lost cookies
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}
// Mock.setup({
//   timeout: '350-600'
// })

// User
Mock.mock(/\/user\/login/, 'post', userAPI.login)
Mock.mock(/\/user\/info/, 'get', userAPI.getInfo)
Mock.mock(/\/user\/logout/, 'post', userAPI.logout)

// Table
Mock.mock(/\/table\/list/, 'get', tableAPI.list)
// dialogShow
Mock.mock(/\/dialog\/tree/, 'get', dialogShowApi.treeData)
Mock.mock(/\/dialog\/table/, 'get', dialogShowApi.tableData)
// tableShow
Mock.mock(/\/table\/table/, 'get', tableShowApi.tableShowData)
export default Mock
