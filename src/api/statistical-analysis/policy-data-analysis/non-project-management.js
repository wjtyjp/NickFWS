import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function listNoneItemManage(params) {
  return request({
    url: APIUrl.nonProjectManagement.listNoneItemManage,
    method: 'post',
    data: params
  })
}

export default{
  listNoneItemManage
}
