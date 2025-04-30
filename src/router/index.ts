import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import { useUserStore } from '../stores/userStore'
import { defineAsyncComponent } from 'vue'

const AdminApp = defineAsyncComponent(() => import('adminApp/AdminApp.vue'))

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminApp,
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const userStore = useUserStore()

  if (to.meta.requiresAdmin && !userStore.isAdmin) {
    return { path: '/login' }
  }
})