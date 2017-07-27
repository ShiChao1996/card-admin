import { request, config } from 'utils'
const { api } = config
const { reportLose } = api

export async function report (data) {
  return request({
    url: reportLose,
    method: 'post',
    data,
  })
}
