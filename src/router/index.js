import Vue from 'vue'
import Router from 'vue-router'

Vue.use( Router )


const index = r => require.ensure([], () => r(require('@/pages/index')), 'index') // 首页
const detail = r => require.ensure([], () => r(require('@/pages/detail')), 'detail')
const type = () => import('@/pages/type')
const wedding = () => import('@/pages/wedding')

let routes = [
    {
        path: '/index', // 首页
        name: '首页',
        meta: {},
        component: index
    },
    {
        path: '/detail', // 首页
        name: '详情',
        meta: {},
        component: detail
    },
    {
        path: '/type',
        component: type,
        redirect:null,
        meta:null,
        children:null,
    },
    {
        path: '/wedding',
        component: wedding,
        redirect:null,
        meta:null,
        children:null,
    },
]

let router = new Router( {
    routes,
} )

router.beforeEach(function (to, from, next) {
    next()
})

export default router
