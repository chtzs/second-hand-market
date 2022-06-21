import LoginPage from "@/views/pages/LoginPage";
import HomePage from "@/views/pages/HomePage";

const routes = [
    {
        name: 'loginPage',
        component: LoginPage,
        children: [
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
        ]
    },
    {
        name: 'homePage',
        component: HomePage,
        children: [
            {
                name: 'home',
                path: '/home',
                component: () => import('@/views/Home')
            },
            {
                name: 'details',
                path: '/goods/details',
                component: () => import('@/views/GoodsDetails')
            },
            {
                name: 'order',
                path: '/goods/order',
                component: () => import('@/views/GoodsOrder')
            }
        ]
    }
];

export default routes