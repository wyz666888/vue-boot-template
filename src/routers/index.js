import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/BasicLayout'
// import BlankLayout from '@/layout/BlankLayout'
// import InsetLayout from '@/layout/InsetLayout'

/* Router */
import Login from '@/routers/login'
import Blank from '@/routers/blank'
import NotFount from '@/routers/pages/notfound'
import Background from '@/routers/pages/background'
import Dashboard from '@/routers/dashboard'
import Nested from '@/routers/nested'
import Container from '@/routers/ui/container'
import Panel from '@/routers/ui/panel'
import Card from '@/routers/ui/card'
import Dialog from '@/routers/ui/dialog'
import Form from '@/routers/widget/form'
/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  Login,
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      Dashboard
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/blank',
    meta: { title: '示例', icon: 'example' },
    children: [
      Blank
    ]
  },
  {
    path: '/ui',
    component: Layout,
    redirect: '/ui/container',
    meta: { title: 'UI元素', icon: 'table' },
    children: [
      Container,
      Panel,
      Card,
      Dialog
    ]
  },
  {
    path: '/widget',
    component: Layout,
    redirect: '/widget/form',
    meta: { title: '组件', icon: 'table' },
    children: [
      Form
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    meta: {
      title: '页面',
      icon: 'nested'
    },
    children: [
      Nested,
      Background
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/LANIF-UI/vue-boot-template',
        meta: { title: '外部链接', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  NotFount
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
