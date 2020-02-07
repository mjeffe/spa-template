import Vue from 'vue';
import VueRouter from 'vue-router';

import baseRoutes from '@/router/base.js';
import authRoutes from '@/router/auth.js';
import adminRoutes from '@/router/admin.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...baseRoutes,
        ...authRoutes,
        ...adminRoutes,

        // catchall, unmatched routes show 404
        {
            path: '*',
            name: '404',
            component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
        },
    ]
});

function isUserAuthorizedForRoute(to) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const loggedIn = localStorage.getItem('token');

        if (!loggedIn) {
            return false;
        }
    }

    return true;
}

router.beforeEach((to, from, next) => {
    if (!isUserAuthorizedForRoute(to)) {
        return next({ name: 'login' });
    }

    next();
});

export default router;
