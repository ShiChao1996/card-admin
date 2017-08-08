/*
 * MIT License
 *
 * Copyright (c) 2017 Shichao Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * Revision History:
 *     Initial: 2017/07/05        Shi Chao
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import App from './routes/app'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/dashboard'))
          cb(null, { component: require('./routes/dashboard/') })
        }, 'dashboard')
      },
      childRoutes: [
        {
          path: 'dashboard',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/dashboard'))
              cb(null, require('./routes/dashboard/'))
            }, 'dashboard')
          },
        }, {
          path: 'user',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/user'))
              cb(null, require('./routes/user/'))
            }, 'user')
          },
        }, {
          path: 'user/:id',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/user/detail'))
              cb(null, require('./routes/user/detail/'))
            }, 'user-detail')
          },
        }, {
          path: 'login',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/login'))
              cb(null, require('./routes/login/'))
            }, 'login')
          },
        }, {
          path: 'request',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/request/'))
            }, 'request')
          },
        }, {
          path: 'UIElement/iconfont',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/UIElement/iconfont/'))
            }, 'UIElement-iconfont')
          },
        }, {
          path: 'UIElement/search',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/UIElement/search/'))
            }, 'UIElement-search')
          },
        }, {
          path: 'UIElement/dropOption',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/UIElement/dropOption/'))
            }, 'UIElement-dropOption')
          },
        }, {
          path: 'UIElement/layer',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/UIElement/layer/'))
            }, 'UIElement-layer')
          },
        }, {
          path: 'UIElement/dataTable',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/UIElement/dataTable/'))
            }, 'UIElement-dataTable')
          },
        }, {
          path: 'UIElement/editor',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/UIElement/editor/'))
            }, 'UIElement-editor')
          },
        }, {
          path: 'chart/lineChart',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/chart/lineChart/'))
            }, 'chart-lineChart')
          },
        }, {
          path: 'chart/barChart',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/chart/barChart/'))
            }, 'chart-barChart')
          },
        }, {
          path: 'chart/areaChart',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/chart/areaChart/'))
            }, 'chart-areaChart')
          },
        }, {
          path: 'post',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/post'))
              cb(null, require('./routes/post/'))
            }, 'post')
          },
        },{
          path: 'card/cardInfo',
          getComponent (nextState, cb) {
            require.ensure([], require => {
             // registerModel(app, require('./models/post'))
              cb(null, require('./routes/card/cardInfo'))
            }, 'cardInfo')
          },
        },{
          path: 'card/news',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/post'))
              cb(null, require('./routes/card/news/'))
            }, 'news')
          },
        },{
          path: 'card/news/:id',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/news/newsDetail/newsDetail'))
              cb(null, require('./routes/card/news/newsDetail/'))
            }, 'newsDetail')
          },
        },{
          path: 'card/lostReport',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/post'))
              cb(null, require('./routes/card/lostReport'))
            }, 'lostReport')
          },
        },{
          path: 'card/fileDownload',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/post'))
              cb(null, require('./routes/card/fileDownload/'))
            }, 'fileDownload')
          },
        },{
          path: '/navigation/navigation1',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/post'))
              cb(null, require('./routes/card/lostReport'))
            }, 'lostReport')
          },
        },{
          path: '/navigation/navigation2/navigation1',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/post'))
              cb(null, require('./routes/card/lostReport'))
            }, 'lostReport')
          },
        },{
          path: '/navigation/navigation2/navigation2',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/post'))
              cb(null, require('./routes/card/lostReport'))
            }, 'lostReport')
          },
        },{
          path: 'myUser/person',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/person'))
              cb(null, require('./routes/myUser/person/'))
            }, 'person')
          },
        },{
          path: 'myUser/reportLose',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/report'))
              cb(null, require('./routes/myUser/reportLose/'))
            }, 'reportLose')
          },
        },{
          path: 'admin/workAdress',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/workAdress'))
              cb(null, require('./routes/admin/workAdress/'))
            }, 'workAdress')
          },
        },{
          path: 'admin/lostManage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/lostManage'))
              cb(null, require('./routes/admin/lostManage/'))
            }, 'workAdress')
          },
        },{
          path: 'admin/newsManage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/newsManage/newsManage'))
              cb(null, require('./routes/admin/newsManage/'))
            }, 'newsManage')
          },
        },{
          path: 'admin/newsManage/:id',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/newsManage/newsDetail/newsDetail'))
              cb(null, require('./routes/admin/newsManage/newsDetail/'))
            }, 'newsManageDetail')
          },
        }, {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
