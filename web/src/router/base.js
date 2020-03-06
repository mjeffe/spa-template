
const baseRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    {
        path: '/demo',
        name: 'demo',
        component: () => import(/* webpackChunkName: "about" */ '../views/demo/Demo.vue'),
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
