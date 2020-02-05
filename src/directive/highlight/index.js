// highlight.js  代码高亮指令
import Hljs from 'highlight.js'
// import 'highlight.js/styles/monokai-sublime.css'
import 'highlight.js/styles/agate.css'
const Highlight = {}
Highlight.install = function(Vue, options) {
  // 先有数据再绑定，调用highlight
  Vue.directive('highlight', {
    inserted: function(el) {
      const blocks = el.querySelectorAll('pre code')
      for (let i = 0; i < blocks.length; i++) {
        const item = blocks[i]
        Hljs.highlightBlock(item)
      }
    }
  })

  // 先绑定，后面会有数据更新，调用highlightB
  // Vue.directive('highlightB', {
  //   componentUpdated: function(el) {
  //     const blocks = el.querySelectorAll('pre code')
  //     for (let i = 0; i < blocks.length; i++) {
  //       const item = blocks[i]
  //       Hljs.highlightBlock(item)
  //     }
  //   }
  // })
}

export default Highlight
