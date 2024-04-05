import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BookStore from '@/views/bookstore/BookStore.vue';
import BookView from '../views/bookstore/BookView.vue';
import AboutView from '@/views/AboutView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/bookstore',
        children: [
            {
                path: '',
                name: 'bookstore',
                component: BookStore,
            },
            {
                path: ':id',
                name: 'Book details',
                component: BookView,
                props: true,
            },
        ],
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
