import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import SubscriptionView from '../views/SubscriptionView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import NotificationView from '../views/NotificationView.vue'
import BalanceView from '../views/BalanceView.vue'
import CalendarView from '../views/CalendarView.vue'
import FAQView from '../views/FAQView.vue'
import ProfileView from '@/views/ProfileView.vue'

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
    path: '/balance',
    name: 'balance',
    component: BalanceView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      requiresAuth: true
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
