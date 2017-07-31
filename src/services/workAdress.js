import { request, config } from 'utils'
const { api } = config
const { workAdress } = api

export async function query (params) {
  return request({
    url: workAdress,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: workAdress,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: workAdress,
    method: 'post',
    data: params,
  })
}
