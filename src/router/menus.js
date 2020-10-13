export const menus = [
  {
    path: '/main',
    title: '首页',
    icon: ''
  },
  {
    path: '/menu',
    title: '菜单1',
    icon: '',
    children: [
      {
        path: '/menu/demo1',
        title: '子页面1'
      },
      {
        path: '/menu/demo2',
        title: '子页面2'
      },
      {
        path: '/menu/demo3',
        title: '子页面3'
      }
    ]
  }
]