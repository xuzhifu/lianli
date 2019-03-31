import Vue from 'vue'
import Router from 'vue-router'

Vue.use( Router )

const index = r => require.ensure([], () => r(require('@/pages/index')), 'index') // 首页
const detail = r => require.ensure([], () => r(require('@/pages/detail')), 'detail')

const introduction = r => require.ensure([], () => r(require('@/pages/introduction')), 'introduction')
const contact = r => require.ensure([], () => r(require('@/pages/contact')), 'contact')
const loading = r => require.ensure([], () => r(require('@/pages/loading')), 'loading')


let routes = [
    {
        path: '/index', // 首页
        name: '首页',
        meta: '',
        component: index
    },
    {
        path: '/detail', // 首页
        name: '详情',
        meta: '',
        component: detail
    },
    {
        path: '/contact',
        component: contact,
        redirect:null,
        meta:'联系',
    },
    {
        path: '/introduction',
        component: introduction,
        redirect:null,
        meta:'莲鲤',
    },
    {
        path: '/loading',
        component: loading,
        redirect:null,
        meta:'莲鲤',
    },
]

let router = new Router( {
    routes,
} )

router.beforeEach(function (to, from, next) {
    next()
})

export default router
