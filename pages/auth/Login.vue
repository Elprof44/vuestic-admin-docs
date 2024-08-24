<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6">Login</h1>
      <va-input v-model="email" placeholder="Email" type="email" class="mb-4 w-full" />
      <va-input v-model="password" placeholder="Password" type="password" class="mb-6 w-full" />
      <va-button @click="login" class="w-full">Login</va-button>
      <p class="text-center mt-4">
        Don't have an account? <nuxt-link to="/register" class="text-blue-500">Register</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('')
const password = ref('')

const login = () => {
  // Handle login logic here
  console.log('Email:', email.value)
  console.log('Password:', password.value)
}
</script>
