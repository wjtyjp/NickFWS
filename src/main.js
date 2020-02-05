import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'babel-polyfill' // es6转es5
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import '@/styles/index.scss' // global css
// import '@/styles/mixin.scss' // mixin scss

import App from './App'
import store from './store'
import router from './router'

import '@/assets/icons' // icon
import '@/permission' // permission control
import '@/assets/iconfont/iconfont.css'// 引入字体图标
// import './styles/gloabl.css'// 引入全局样式
import '@/directive/drag-directive/index.js'
// 全局引入可编辑表格
import xeUtils from 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
Vue.use(VXETable)
Vue.prototype.$utils = xeUtils

Vue.directive('noMoreClick', {
  inserted(el, binding) {
    el.addEventListener('click', e => {
      el.classList.add('is-disabled')
      el.disabled = true
      setTimeout(() => {
        el.disabled = false
        el.classList.remove('is-disabled')
      }, 3000)
    })
  }
})
// highlight.js代码高亮指令
// import Highlight from './directive/highlight/index'
// Vue.use(Highlight)

/**
 * This project originally used easy-mock to simulate data,
 * but its official service is very unstable,
 * and you can build your own service if you need it.
 * So here I use Mock.js for local emulation,
 * it will intercept your request, so you won't see the request in the network.
 * If you remove `../mock` it will automatically request easy-mock data.
 */
// import '../mock' // simulation data
// Vue.use(ElementUI)
Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false
router.beforeEach(Vue.prototype.$auth.authRedirectGuard())
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
