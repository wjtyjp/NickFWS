import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListPolicyDocument(params) {
  return request({
    url: APIUrl.policyDocumentData.ListPolicyDocument,
    method: 'post',
    data: params
  })
}

export default{
  ListPolicyDocument
}
