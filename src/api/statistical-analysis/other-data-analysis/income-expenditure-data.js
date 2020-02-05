import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListIncomeAndExpenditureTotalData(params) {
  return request({
    url: APIUrl.incomeExpenditureData.ListIncomeAndExpenditureTotalData,
    method: 'post',
    data: params
  })
}

export default{
  ListIncomeAndExpenditureTotalData
}
