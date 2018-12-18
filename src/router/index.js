import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: resolve => require(['../components/pages/login'], resolve)
    },
    {
      path: '/home',
      component: resolve => require(['../components/common/home'], resolve),
      children:[
        {
          path:'banner',
          component: resolve => require(['../components/pages/a/a1'], resolve),
        },
        {
          path:'sign',
          component: resolve => require(['../components/pages/a/a2'], resolve),
        },
        {
          path:'about',
          component: resolve => require(['../components/pages/a/a3'], resolve),
        },
        {
          path:'good',
          component: resolve => require(['../components/pages/b/b1'], resolve),
        },
        {
          path:'order',
          component: resolve => require(['../components/pages/c/c1'], resolve)
        },
        {
          path:'rating',
          component: resolve => require(['../components/pages/c/c2'], resolve)
        },
        {
          path:'enterprise',
          component: resolve => require(['../components/pages/d/d1'], resolve)
        },
        {
          path:'check',
          component: resolve => require(['../components/pages/d/d2'], resolve)
        },
        {
          path:'message',
          component: resolve => require(['../components/pages/d/d3'], resolve)
        },
        {
          path:'userList',
          component: resolve => require(['../components/pages/e/e1'], resolve)
        },
        {
          path:'range',
          component: resolve => require(['../components/pages/f/f1'], resolve)
        },
        {
          path:'role',
          component: resolve => require(['../components/pages/f/f2'], resolve)
        },
        {
          path:'nav',
          component: resolve => require(['../components/pages/f/f3'], resolve)
        },
        {
          path:'company',
          component: resolve => require(['../components/pages/f/f4'], resolve)
        }
      ]

    }
  ]
})
