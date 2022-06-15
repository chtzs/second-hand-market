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
];

export default routes