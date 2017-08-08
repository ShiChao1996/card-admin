/**
 * Created by see on 7/16/17.
 */

import modelExtend from 'dva-model-extend'
import { query } from '../../services/news'
import { pageModel } from '../common'
import { config } from 'utils'

export default modelExtend(pageModel, {
  namespace: 'newsManage',

  state: {
    newsList: [4,7,5,2,3,5]
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/news') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },

  effects: {

    *query ({ payload = {} }, { call, put }) {
      const data = yield call(query, payload)
      if (data) {
        yield put({
          type: 'queryNewsSuccess',
          payload: {
            list: data.data,
          },
        })
      }
      else {
        yield put({
          type: 'onFail'
        })
      }
    }
  },

  reducers: {
    queryNewsSuccess (state, { payload }) {
      const newsList = payload
      console.log('state data: ', state)
      return {
        ...state,
        newsList,
      }
    },
  },
})
