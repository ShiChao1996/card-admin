import modelExtend from 'dva-model-extend'
import * as usersService from '../services/person'
import { pageModel } from './common'
import { config } from 'utils'

const { query, update } = usersService
const { prefix } = config

export default modelExtend(pageModel, {
  namespace: 'person',

  state: {
    personInfo: {}
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/myUser/person') {
          console.log('this is person page!!!')
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },

  effects: {

    *query ({ payload = {} }, { select, call, put }) {
      const id = yield select(({ login }) => login.UserId)
      console.log('getUserId: ', id)
      const data = yield call(query, {id})
      console.log('userdata : ', data)
      if (data.success) {
        yield put({
          type: 'queryPersonSuccess',
          payload: {
            info: data.userInfo
          },
        })
      }
      else {
        yield put({
          type: 'queryPersonFail'
        })
      }
    },

    *update ({ payload }, { select, call, put }) {
      const id = yield select(({ user }) => user.currentItem.id)
      const newUser = { ...payload, id }
      const data = yield call(update, newUser)
      if (data.success) {
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

  },

  reducers: {

    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },

    switchIsMotion (state) {
      localStorage.setItem(`${prefix}userIsMotion`, !state.isMotion)
      return { ...state, isMotion: !state.isMotion }
    },

    queryPersonSuccess (state, { payload }) {
      let {info} = payload
      return { ...state, personInfo: info }
    },

    queryPersonFail (state) {
      console.log('queryfailed!!!')
      let mockInfo = {name: 'lovae'}
      return { ...state, personInfo: mockInfo }
    }

  },
})
