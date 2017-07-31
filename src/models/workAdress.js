import { update } from '../services/workAdress'
import { routerRedux } from 'dva/router'
import { queryURL } from 'utils'
import { message } from 'antd'


export default {
  namespace: 'workAdress',
  state: {
    loading: false,
    visible: false
  },

  effects: {
    *submit ({
      payload,
    }, { put, call }) {
      console.log(payload)
      yield put({ type: 'showLoading' })
      const data = yield call(update, payload)
      if(data.success === true){
        console.log('success: ', data)
        yield put({ type: 'submitSuccess', payload: {success: payload} })
      }else {
        console.log("failed")
        yield put({ type: 'submitFail', payload: payload.onFail })
      }

      let d = new Date
      while(1){
        if((new Date - d) > 3000)
          break
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

    openModal (state) {
      return {
        ...state,
        visible: true,
      }
    },

    closeModal (state) {
      return {
        ...state,
        visible: false,
      }
    },

    submitSuccess (state, payload) {
      let factors = payload.payload.success
      let newValues = {
        adress: factors.adress,
        workTime: factors.workTime,
        phone: factors.phone
      }
      let success = factors.onSuccess
      success(newValues)
      return {
        ...state,
        visible: false
      }
    },

    submitFail (state, payload) {
      let fail = payload.payload
      fail()
      return {
        ...state,
      }
    },

  },
}
