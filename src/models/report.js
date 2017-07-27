import { report } from '../services/reportLose'
import { routerRedux } from 'dva/router'
import { queryURL } from 'utils'

export default {
  namespace: 'report',
  state: {
    loading: false,
    visible: false,
    modalMsg: "aaa"
  },

  effects: {
    *report ({
      payload,
    }, { put, call }) {
      console.log(payload)
      yield put({ type: 'showLoading' })
      const data = yield call(report, payload)
      if(data){
        console.log('daddadatatatata: ', data)
        yield put({ type: 'submitSuccess' })
      }else {
        console.log("nnnnnooooodadadatatata")
        yield put({ type: 'submitFail' })
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

    submitSuccess (state) {
      return {
        ...state,
        modalMsg: "提交成功！",
      }
    },

    submitFail (state) {
      return {
        ...state,
        modalMsg: "提交失败！",
      }
    },

  },
}
