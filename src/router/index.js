import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import SubscriptionView from '../views/SubscriptionView.vue'
import AboutUsViewVue from '../views/AboutUsView.vue'
import NotificationView from '../views/NotificationView.vue'
import FAQView from '../views/FAQView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/subscription',
    name: 'subscription',
    component: SubscriptionView
  },
  {
    path: '/notifs',
    name: 'notification',
    component: NotificationView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsViewVue
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AuthView.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
