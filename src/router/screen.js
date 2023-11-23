import layout from '@/layout/index.vue'
const screenRoutes = [
    {
        path: '/screen',
        name: 'screen',
        component: layout,
        redirect: '/screen/index',
        children: [{
            path: 'index',
            name: 'screenIndex',
            component: () => import('@/views/Screen/index.vue')
        }]
    }
]
export default screenRoutes
