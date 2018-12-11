import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home' //首页路由
import searchcity from '@/view/searchcity'
import info from '@/view/info'
import infoen from '@/view/infoen'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/searchcity',
            name: 'searchcity',
            component: searchcity
        },
        {
            path: '/info',
            name: 'info',
            component: info
        },
        {
            path: '/infoen',
            name: 'infoen',
            component: infoen
        }
    ]
})
