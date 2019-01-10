import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@components/login/Login')
const Index = () => import('@components/index/Index')

const routes = [{
    path     : '/',
    name     : 'Login',
    component: Login
}, {
    path     : '/index',
    name     : 'Index',
    component: Index
}]

Vue.use(Router)

export default new Router({
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})
