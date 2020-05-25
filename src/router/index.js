import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import '../components/material.module'

const linkExactActiveClass = 'router-exact-active'
// pass custom class to Vue Material
Vue.material.router.linkExactActiveClass = linkExactActiveClass

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/techniques',
        name: 'Techniques',
        component: () => import('../components/Techniques.vue'),
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import('../components/Services.vue'),
    },
    {
        path: '/gifts',
        name: 'Gifts',
        component: () => import('../components/Gifts.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../components/Contact.vue'),
    },
]

const router = new VueRouter({
    routes,
    linkExactActiveClass,
})

export default router
