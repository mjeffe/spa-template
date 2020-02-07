import Vue from 'vue';
import VueRouter from 'vue-router';

import baseRoutes from '@/router/base.js';
import esrRoutes from '@/router/esr.js';
// import authRoutes from '@/router/auth.js';
// import adminRoutes from '@/router/admin.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...baseRoutes,
        ...esrRoutes,
        // ...authRoutes,
        // ...adminRoutes,

        // catchall, show 404 for any unrecognized routes
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
        return next('/');
    }

    next();
});

export default router;
