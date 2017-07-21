import { login } from '../services/login'
import { routerRedux } from 'dva/router'
import { queryURL } from 'utils'

export default {
  namespace: 'login',
  state: {
    loginLoading: false,
    UserId: ''
  },

  effects: {
    *login ({
      payload,
    }, { put, call }) {
      console.log('payload: ', payload)
      yield put({ type: 'showLoginLoading' })
      const data = yield call(login, payload)
      console.log('loginData: ', data)
      if(data.userId){
        yield put({ type: 'setUserId', payload: {userId: data.userId} })
      }
      yield put({ type: 'hideLoginLoading' })
      if (data.success) {
        const from = queryURL('from')
        console.log('from: ', from)
        yield put({ type: 'app/query' })
        if (from) {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/dashboard'))
        }
      } else {
        throw data
      }
    },
  },
  reducers: {
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
    setUserId(state, {payload}) {
      const {userId} = payload
      console.log('userId: ', userId)
      return {
        ...state,
        UserId: userId
      }
    }
  },
}
