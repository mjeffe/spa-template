const institutionsRoutes = [
    {
        path: '/institutions',
        name: 'institutions',
        component: () => import(
            /* webpackChunkName: "institutions" */ '../views/institutions/Institutions.vue'),
        props: true,
    },
    // {
    //     path: 'institution/:ficeCode',
    //     name: 'institution',
    //     component: () => import(
    //         /* webpackChunkName: "institution" */ '../views/institutions/Institution.vue'),
    //     props: true,
    // },
];

export default institutionsRoutes;
