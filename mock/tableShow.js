import Mock from 'mockjs'

export default {
  tableShowData: () => {
    const items = Mock.mock({
      'items|5': [{
        grid0_mc: '注射器',
        grid0_xh: 'a1234532',
        grid0_cd: '上海市普陀区金沙江路 1518 弄',
        grid0_jlgg: '100',
        grid0_dw: '1瓶',
        grid0_dj: '100元',
        grid0_mrcyl: '10ml',
        grid0_mrctxje: '500元'
      }]
    })
    return {
      code: 20000,
      data: items
    }
  }
}
