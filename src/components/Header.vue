<template>
  <nav class="header">
    <div class="logo">
      <router-link to="/">MyProject</router-link>
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/admin">Admin Panel</router-link>
      </li>
      <li>
        <button v-if="!currentUser" @click="handleLogin" class="auth-button">Login</button>
        <button v-else @click="handleLogout" class="auth-button">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'
import {storeToRefs} from "pinia";
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const userStore = useUserStore();
const { currentUser } = storeToRefs(userStore);

const handleLogin = () => {
  try {
    userStore.login('admin', '1234')
  } catch (err) {
    alert('Invalid login credentials')
  }
}

const handleLogout = () => {
  userStore.logout()
  if(route.path === '/admin') {
    router.push('/')
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-sizing: border-box;
  background-color: #242424;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffffde;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #ffffffde;
  font-weight: 500;
}

.nav-links a.router-link-exact-active {
  color: #42b983;
}

.auth-button {
  background: none;
  border: 1px solid #333;
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  cursor: pointer;
}

.auth-button:hover {
  background: #42b983;
  color: #ffffffde;
}
</style>