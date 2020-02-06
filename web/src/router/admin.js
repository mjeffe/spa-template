const adminRoutes = [
    {
        path: '/admin',
        name: 'admin',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
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
