
/*
* 此文件为sider 目录渲染数据，ID 为 1 的，是ID为 1 开头的父级菜单。
* mpid 表示父级菜单 ID
* permission 为 admin 表示 管理员账户可见
* 为 user 表示 用户可见
* */

module.exports = [
  {
    id: '1',
    icon: 'laptop',
    name: 'Dashboard',
    route: '/UIElement/dataTable',
    permission: 'dev'
  },


  {
    id: '4',
    bpid: '1',
    name: 'UI Element',
    icon: 'camera-o',
    permission: 'dev'
  },

  {
    id: '42',
    bpid: '4',
    mpid: '4',
    name: 'DataTable',
    icon: 'database',
    route: '/UIElement/dataTable',
    permission: 'dev'
  },
  {
    id: '43',
    bpid: '4',
    mpid: '4',
    name: 'DropOption',
    icon: 'bars',
    route: '/UIElement/dropOption',
    permission: 'dev'
  },
  {
    id: '44',
    bpid: '4',
    mpid: '4',
    name: 'Search',
    icon: 'search',
    route: '/UIElement/search',
    permission: 'dev'
  },
  {
    id: '45',
    bpid: '4',
    mpid: '4',
    name: 'layer (Function)',
    icon: 'credit-card',
    route: '/UIElement/layer',
    permission: 'dev'
  },
  {
    id: '5',
    bpid: '1',
    name: 'Recharts',
    icon: 'code-o',
    permission: 'dev'
  },
  {
    id: '51',
    bpid: '5',
    mpid: '5',
    name: 'LineChart',
    icon: 'line-chart',
    route: '/chart/lineChart',
    permission: 'dev'
  },
  {
    id: '52',
    bpid: '5',
    mpid: '5',
    name: 'BarChart',
    icon: 'bar-chart',
    route: '/chart/barChart',
    permission: 'dev'
  },
  {
    id: '53',
    bpid: '5',
    mpid: '5',
    name: 'AreaChart',
    icon: 'area-chart',
    route: '/chart/areaChart',
    permission: 'dev'
  },

  {
    id: '8',
    bpid: '1',
    name: 'Card',
    icon: 'setting',
    permission: 'user'
  },
  {
    id: '81',
    mpid: '8',
    name: 'cardInfo',
    route: '/card/cardInfo',
    permission: 'user'
  },
  {
    id: '82',
    mpid: '8',
    name: 'news',
    route: '/card/news',
    permission: 'user'
  },
  {
    id: '83',
    mpid: '-1',
    name: 'news',
    route: '/card/news/:id',
    permission: 'user'
  },
  {
    id: '84',
    mpid: '8',
    name: 'loseReport',
    route: '/card/lostReport',
    permission: 'user'
  },
  {
    id: '85',
    mpid: '8',
    name: 'fileDownload',
    route: '/card/fileDownload',
    permission: 'user'
  },
  {
    id: '9',
    bpid: '1',
    name: 'User',
    icon: 'user',
    permission: 'user'
  },
  {
    id: '91',
    mpid: '9',
    name: 'Personality',
    route: '/myUser/person',
    permission: 'user'
  },
  {
    id: '92',
    mpid: '9',
    name: 'loseReport',
    route: '/myUser/reportLose',
    permission: 'user'
  },
  {
    id: 'a',
    bpid: '1',
    name: 'admin',
    icon: 'user',
    permission: 'admin'
  },
  {
    id: 'a1',
    mpid: 'a',
    name: 'workAdress',
    route: '/admin/workAdress',
    permission: 'admin'
  },
  {
    id: 'a2',
    mpid: 'a',
    name: 'lostManage',
    route: '/admin/lostManage',
    permission: 'admin'
  },
  {
    id: 'a3',
    mpid: 'a',
    name: 'newsManage',
    route: '/admin/newsManage',
    permission: 'admin'
  },
  {
    id: 'a4',
    mpid: '-1',
    name: 'newsManageDetail',
    route: '/admin/newsManage/:id',
    permission: 'admin'
  },
  {
    id: 'a5',
    mpid: 'a',
    name: 'fileUpLoad',
    route: '/admin/fileUpLoad',
    permission: 'admin'
  },
]

/*

module.exports = {
  database
  /!*[`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },*!/
}
*/
