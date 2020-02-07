
const esrRoutes = [
    {
        path: '/esr',
        name: 'esr',
        component: () => import(/* webpackChunkName: "home" */ '../views/esr/Esr.vue'),
    },
];

export default esrRoutes;
