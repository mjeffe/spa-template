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

        // otherwise redirect to home
        { path: '*', redirect: '/auth/login' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/auth/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (authRequired && !loggedIn) {
        return next('/auth/login');
    }

    next();
});

export default router;
