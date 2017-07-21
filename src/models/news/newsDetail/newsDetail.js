import pathToRegexp from 'path-to-regexp'
import { query } from '../../../services/newsDetail'

export default {

  namespace: 'newsDetail',

  state: {
    data: {name: 'lovae'},
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(() => {
        console.log('pathName: ', location.pathname)
        const match = pathToRegexp('/card/news/:id').exec(location.pathname)
        console.log('news match: ', match)
        if (match) {
        //  dispatch({ type: 'query', payload: { id: match[1] } })
          dispatch({type: 'onFail', payload: {id: match}})
        }
      })
    },
  },

  effects: {
    *query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, payload)
      const { success, result } = data
      if (success) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: result,
          },
        })
      } else {
        yield put({
          type: 'onFail'
        })
      }
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { data } = payload
      console.log('state data: ', state)
      return {
        ...state,
        data,
      }
    },

    onFail(state, { payload }){
      console.log('onfailed!!! payload: ', payload)
      console.log('state data: ', state)
      const data = {
        title: '习近平：促进经济和金融良性循环健康发展',
        content: '　全国金融工作会议14日至15日在北京召开。中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话。他强调，金融是国家重要的核心竞争力，金融安全是国家安全的重要组成部分，金融制度是经济社会发展中重要的基础性制度。必须加强党对金融工作的领导，坚持稳中求进工作总基调，遵循金融发展规律，紧紧围绕服务实体经济、防控金融风险、深化金融改革三项任务，创新和完善金融调控，健全现代金融企业制度，完善金融市场体系，推进构建现代金融监管框架，加快转变金融发展方式，健全金融法治，保障国家金融安全，促进经济和金融良性循环、健康发展。'
      }
      return {
        ...state,
        data
      }
    }
  },
}
