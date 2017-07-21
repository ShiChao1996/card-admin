/**
 * Created by see on 7/16/17.
 */

import modelExtend from 'dva-model-extend'
import { query } from '../../services/news'
import { pageModel } from '../common'
import { config } from 'utils'

export default modelExtend(pageModel, {
  namespace: 'news',

  state: {
    newsList: []
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/news') {
          console.log('this is news page!!!')
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
          type: 'querySuccess',
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
    querySuccess (state, { payload }) {
      const newsList = payload
      console.log('state data: ', state)
      return {
        ...state,
        newsList,
      }
    },
  },
})
