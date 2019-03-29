import Vue from 'vue'
import Router from 'vue-router'

Vue.use( Router )

const index = () => import('@/pages/index')
const type = () => import('@/pages/type')
const wedding = () => import('@/pages/wedding')

let routes = [
    {
        path: '/',
        component: index,
        redirect:null,
        meta:null,
        children:null,
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
    window.scrollTo(0, 0)
    next()
})

export default router
