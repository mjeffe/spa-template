const esrRoutes = [
    {
        path: '/esr',
        component: () => import(/* webpackChunkName: "home" */ '../views/esr/Esr.vue'),
        children: [
            {
                path: 'major',
                name: 'esr.major',
                component: () => import(/* webpackChunkName: "esr-major" */ '../views/esr/Major.vue'),
            },
            {
                path: 'degree',
                name: 'esr.degree',
                component: () => import(/* webpackChunkName: "esr-degree" */ '../views/esr/Degree.vue'),
            },
            {
                path: 'institution',
                name: 'esr.institution',
                component: () => import(/* webpackChunkName: "esr-institution" */ '../views/esr/Institution.vue'),
            },
            {   /* default */
                path: '',
                name: 'esr.home',
                component: () => import(/* webpackChunkName: "esr-home" */ '../views/esr/Home.vue'),
            },
        ],
    },
];

export default esrRoutes;
