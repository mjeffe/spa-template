const esrRoutes = [
    {
        path: '/esr',
        name: 'esr',
        component: () => import(/* webpackChunkName: "home" */ '../views/esr/Esr.vue'),
        children: [
            {
                // default, load the Home component when /esr is loaded
                path: '',
                component: () => import(/* webpackChunkName: "esr-home" */ '../views/esr/Home.vue'),
            },
            {
                path: 'home',
                name: 'esr-home',
                component: () => import(/* webpackChunkName: "esr-home" */ '../views/esr/Home.vue'),
            },
            {
                path: 'institution',
                name: 'esr-institution',
                component: () => import(/* webpackChunkName: "esr-institution" */ '../views/esr/Institution.vue'),
            },
        ],
    },
];

export default esrRoutes;
