
const authRoutes = [
    {
        path: '/auth/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
    },
    {
        path: '/auth/logout',
        name: 'logout',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "logout" */ '../views/auth/Logout.vue')
    },
];

export default authRoutes;
