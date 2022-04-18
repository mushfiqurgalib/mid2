import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import otp from './components/otp'
import password from './components/password'
import ForgetPassword from './components/ForgetPassword'
import Forgetotp from './components/Forgetotp'
import RecoveredPassword from './components/RecoveredPassword'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/otp', component: otp },
    { path: '/pass', component: password },
    {path:'/forget',component:ForgetPassword},
    {path:'/forgetotp',component:Forgetotp},
    {path:'/recoveredpass',component:RecoveredPassword}
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;