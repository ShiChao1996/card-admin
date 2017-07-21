import { request, config } from 'utils'
const { api } = config
const { newsDetail } = api

export async function query (params) {
  return request({
    url: newsDetail,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: newsDetail.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: newsDetail,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: newsDetail,
    method: 'patch',
    data: params,
  })
}
