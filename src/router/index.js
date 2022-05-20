import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/home.vue'),
    },
    {
        path: '/author',
        name: 'author',
        component: () =>
            import ('../views/author.vue'),
    },
    {
        path: '/commands',
        name: 'commands',
        component: () =>
            import ('../views/commands.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error',
        component: () =>
            import ('../views/error.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;