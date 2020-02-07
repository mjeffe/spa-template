const adminRoutes = [
    {
        path: '/admin',
        name: 'admin',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Admin.vue'),
        meta: { requiresAuth: true },
        children: [
            {
                path: 'users',
                name: 'users',
                component: () => import(/* webpackChunkName: "users" */ '../views/admin/Users.vue'),
            },
            {
                path: 'register',
                name: 'register',
                component: () => import(/* webpackChunkName: "register" */ '../views/admin/Register.vue')
            },
        ],
    },
];

export default adminRoutes;
