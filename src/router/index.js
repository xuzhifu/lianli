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
        name: '',
        meta: {},
        component: index
    },
    {
        path: '/detail', // 首页
        name: '',
        meta: {},
        component: detail
    },
    {
        path: '/contact',
        component: contact,
        name:'联系',
        meta: {},
    },
    {
        path: '/introduction',
        component: introduction,
        name:'莲鲤',
        meta: {},
    },
    {
        path: '/',
        component: loading,
        name:'',
        meta: {},
    },
]

let router = new Router( {
    routes,
} )

router.beforeEach(function (to, from, next) {
    next()
})

export default router
