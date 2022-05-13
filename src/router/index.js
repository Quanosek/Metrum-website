import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/home.vue'),
    },
    {
        path: '/info',
        name: 'info',
        component: () =>
            import ('../views/info.vue'),
    },
    {
        path: '/commands',
        name: 'commands',
        component: () =>
            import ('../views/commands.vue'),
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