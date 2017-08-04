import { query } from '../services/workAdress'
import { routerRedux } from 'dva/router'
import { queryURL } from 'utils'
import { message } from 'antd'


export default {
  namespace: 'lostManage',
  state: {
    loading: false,
    resultList: []
  },

  effects: {
    *getLostInfo ({}, { put, call }) {
      yield put({ type: 'showLoading' })
      const res = yield call(query)
      if(res.success === true){
        yield put({ type: 'lostManageQuerySuccess', payload: res.data })
      }else {
        console.log("failed")
        yield put({ type: 'lostManageQueryFail' })
      }

      yield put({ type: 'hideLoading' })
    },
  },
  reducers: {
    showLoading (state) {
      return {
        ...state,
        loading: true,
      }
    },

    hideLoading (state) {
      return {
        ...state,
        loading: false,
        visible: true
      }
    },


    lostManageQuerySuccess (state, payload) {
      let list = payload
      return {
        ...state,
        visible: false,
        resultList: list
      }
    },

    lostManageQueryFail (state, payload) {
      message.error('请求失败');
      return {
        ...state,
      }
    },

  },
}
