
const baseRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        children: [
            {
                path: 'spinners',
                name: 'spinners',
                component: () => import(/* webpackChunkName: "spinners" */ '../views/demo/Spinners.vue'),
            },
            {
                path: 'alerts',
                name: 'alerts',
                component: () => import(/* webpackChunkName: "alerts" */ '../views/demo/Alerts.vue'),
            },
        ],
    },
];

export default baseRoutes;
