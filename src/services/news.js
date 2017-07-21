import { request, config } from 'utils'
const { api } = config
const { news } = api

export async function query (params) {
  return request({
    url: news,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: news,
    method: 'delete',
    data: params,
  })
}
