const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: 'Card Admin',
  prefix: 'cardAdmin',
  footerText: '一卡通  © 2017 ',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,

    newsList: '',
    newsDetail: '',
    news: '',
    personInfo: '',
    reportLose: '',
    workAdress: '',
  },
}
