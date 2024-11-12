import request from '@/utils/request'

export async function queryProse(): Promise<any> {
  return request('/prose')
}

export async function queryMbtiData(): Promise<any> {
  return request('/mbtiData')
}
