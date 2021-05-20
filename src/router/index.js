import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'index',
    component: () => import("../views/Index.vue")
}, {
    path: '/post',
    name: 'post',
    component: () => import("../views/Post.vue")
}, ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router