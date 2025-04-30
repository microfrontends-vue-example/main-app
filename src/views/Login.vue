<template>
  <div class="login-page">
    <h1>Login</h1>
    <p>Please log in to access the admin panel.</p>

    <div class="form">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

function login() {
  if (username.value === 'admin' && password.value === '1234') {
    userStore.login(username.value, password.value)
    router.push('/admin')
  } else {
    errorMessage.value = 'Invalid username or password'
  }
}
</script>

<style scoped>
.login-page {
  text-align: center;
  margin-top: 5rem;
}
.form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
input {
  padding: 0.5rem;
  width: 200px;
  font-size: 1rem;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
.error {
  color: red;
  margin-top: 1rem;
}
</style>