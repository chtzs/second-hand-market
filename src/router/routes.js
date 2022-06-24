import LoginPage from "@/views/pages/LoginPage";
import HomePage from "@/views/pages/HomePage";
import AdminPage from "@/views/pages/AdminPage";

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
            },
            {
                name: 'myGoods',
                path: '/my/goods',
                component: () => import('@/views/MyGoods')
            },
            {
                name: 'myOrder',
                path: '/my/order',
                component: () => import('@/views/MyOrder')
            },
            {
                name: 'myBid',
                path: '/my/bid',
                component: () => import('@/views/MyBid')
            },
            {
                name: 'postGoods',
                path: '/my/post',
                component: () => import('@/views/PostGoods')
            }
        ]
    },
    {
        name: 'adminPage',
        component: AdminPage,
        children: [
            {
                name: 'userManagement',
                path: '/management/user',
                component: () => import('@/views/admin/UserManagement')
            },
            {
                name: 'goodsManagement',
                path: '/management/goods',
                component: () => import('@/views/admin/GoodsManagement')
            },
            {
                name: 'reviewManagement',
                path: '/management/review',
                component: () => import('@/views/admin/ReviewManagement')
            }
        ]
    }
];

export default routes