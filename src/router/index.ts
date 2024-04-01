import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        
    },
    {
        path: '/bookstore',
        name: 'bookstore',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/BookStore.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
