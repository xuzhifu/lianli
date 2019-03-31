import Vue from 'vue'
import Router from 'vue-router'

Vue.use( Router )

const index = () => import('@/pages/index')
const introduction = () => import('@/pages/introduction')
const contact = () => import('@/pages/contact')
const loading = () => import('@/pages/loading')

let routes = [
    {
        path: '/',
        component: loading,
        redirect:null,
        meta:null,
        children:null,
    },
    {
        path: '/index',
        component: index,
        redirect:null,
        meta:'首页',
        children:null,
    },
    {
        path: '/contact',
        component: contact,
        redirect:null,
        meta:'联系',
        children:null,
    },
    {
        path: '/introduction',
        component: introduction,
        redirect:null,
        meta:'莲鲤',
        children:null,
    },
]

let router = new Router( {
    routes,
} )

router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0)
    next()
})

export default router
