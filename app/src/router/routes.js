import {Home, Theory, Practice, Login} from '@/views'

export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/theory',
        name: 'Theory',
        component: Theory
    },
    {
        path: '/practice',
        name: 'Practice',
        component: Practice
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]