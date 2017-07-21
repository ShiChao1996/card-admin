
module.exports = [
  {
    id: '1',
    icon: 'laptop',
    name: 'Dashboard',
    route: '/dashboard',
    permission: 'admin'
  },
  {
    id: '2',
    bpid: '1',
    name: 'Users',
    icon: 'user',
    route: '/user',
    permission: 'admin'
  },
  {
    id: '7',
    bpid: '1',
    name: 'Posts',
    icon: 'shopping-cart',
    route: '/post',
    permission: 'admin'
  },
  {
    id: '21',
    mpid: '-1',
    bpid: '2',
    name: 'User Detail',
    route: '/user/:id',
    permission: 'admin'
  },
  {
    id: '3',
    bpid: '1',
    name: 'Request',
    icon: 'api',
    route: '/request',
    permission: 'admin'
  },
  {
    id: '4',
    bpid: '1',
    name: 'UI Element',
    icon: 'camera-o',
    permission: 'admin'
  },
  {
    id: '41',
    bpid: '4',
    mpid: '4',
    name: 'IconFont',
    icon: 'heart-o',
    route: '/UIElement/iconfont',
    permission: 'admin'
  },
  {
    id: '42',
    bpid: '4',
    mpid: '4',
    name: 'DataTable',
    icon: 'database',
    route: '/UIElement/dataTable',
    permission: 'admin'
  },
  {
    id: '43',
    bpid: '4',
    mpid: '4',
    name: 'DropOption',
    icon: 'bars',
    route: '/UIElement/dropOption',
    permission: 'admin'
  },
  {
    id: '44',
    bpid: '4',
    mpid: '4',
    name: 'Search',
    icon: 'search',
    route: '/UIElement/search',
    permission: 'admin'
  },
  {
    id: '45',
    bpid: '4',
    mpid: '4',
    name: 'Editor',
    icon: 'edit',
    route: '/UIElement/editor',
    permission: 'admin'
  },
  {
    id: '46',
    bpid: '4',
    mpid: '4',
    name: 'layer (Function)',
    icon: 'credit-card',
    route: '/UIElement/layer',
    permission: 'admin'
  },
  {
    id: '5',
    bpid: '1',
    name: 'Recharts',
    icon: 'code-o',
    permission: 'admin'
  },
  {
    id: '51',
    bpid: '5',
    mpid: '5',
    name: 'LineChart',
    icon: 'line-chart',
    route: '/chart/lineChart',
    permission: 'admin'
  },
  {
    id: '52',
    bpid: '5',
    mpid: '5',
    name: 'BarChart',
    icon: 'bar-chart',
    route: '/chart/barChart',
    permission: 'admin'
  },
  {
    id: '53',
    bpid: '5',
    mpid: '5',
    name: 'AreaChart',
    icon: 'area-chart',
    route: '/chart/areaChart',
    permission: 'admin'
  },
  {
    id: '6',
    bpid: '1',
    name: 'Test Navigation',
    icon: 'setting',
    permission: 'admin'
  },
  {
    id: '61',
    bpid: '6',
    mpid: '6',
    name: 'Test Navigation1',
    route: '/navigation/navigation1',
    permission: 'admin'
  },
  {
    id: '62',
    bpid: '6',
    mpid: '6',
    name: 'Test Navigation2',
    route: '/navigation/navigation2',
    permission: 'admin'
  },
  {
    id: '621',
    bpid: '62',
    mpid: '62',
    name: 'Test Navigation21',
    route: '/navigation/navigation2/navigation1',
    permission: 'admin'
  },
  {
    id: '622',
    bpid: '62',
    mpid: '62',
    name: 'Test Navigation22',
    route: '/navigation/navigation2/navigation2',
    permission: 'admin'
  },
  {
    id: '8',
    bpid: '1',
    name: 'Card',
    icon: 'setting',
    permission: 'admin'
  },
  {
    id: '81',
    mpid: '8',
    name: 'cardInfo',
    route: '/card/cardInfo',
    permission: 'admin'
  },
  {
    id: '82',
    mpid: '8',
    name: 'news',
    route: '/card/news',
    permission: 'admin'
  },
  {
    id: '83',
    mpid: '-1',
    name: 'news',
    route: '/card/news/:id',
    permission: 'admin'
  },
  {
    id: '84',
    mpid: '8',
    name: 'loseReport',
    route: '/card/lostReport',
    permission: 'admin'
  },
  {
    id: '85',
    mpid: '8',
    name: 'fileDownload',
    route: '/card/fileDownload',
    permission: 'admin'
  },
  {
    id: '9',
    bpid: '1',
    name: 'User',
    icon: 'user',
    permission: 'admin'
  },
  {
    id: '91',
    mpid: '9',
    name: 'Personality',
    route: '/myUser/person',
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
