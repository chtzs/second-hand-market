const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/UserLogin')
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('@/views/UserRegister')
    },
    {
        name: 'details',
        path: '/goods/details',
        component: () => import('@/views/GoodsDetails')
    }
];

export default routes