import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import SubscriptionView from '../views/SubscriptionView.vue'
import AboutUsViewVue from '../views/AboutUsView.vue'
import NotificationView from '../views/NotificationView.vue'
import FAQView from '../views/FAQView.vue'

import { useAuthStore } from '../stores/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/subscription',
    name: 'subscription',
    component: SubscriptionView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notifs',
    name: 'notification',
    component: NotificationView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsViewVue,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQView,
    meta: {
      requiresAuth: false
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  const store = useAuthStore()
  if (to.meta.requiresAuth && !store.isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
