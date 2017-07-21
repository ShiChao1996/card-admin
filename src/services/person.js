import { request, config } from 'utils'
const { api } = config
const { person } = api

export async function query (params) {
  return request({
    url: person,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: person,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: person,
    method: 'post',
    data: params,
  })
}
