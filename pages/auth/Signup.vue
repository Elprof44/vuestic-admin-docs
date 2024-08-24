<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6">Register</h1>
      <va-input v-model="email" placeholder="Email" type="email" class="mb-4" />
      <va-input v-model="password" placeholder="Password" type="password" class="mb-4" />
      <va-input v-model="confirmPassword" placeholder="Confirm Password" type="password" class="mb-6" />
      <va-button @click="register" class="w-full">Register</va-button>
      <p class="text-center mt-4">
        Already have an account? <nuxt-link to="/login" class="text-blue-500">Login</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = () => {
  // Handle registration logic here
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  console.log('Email:', email.value)
  console.log('Password:', password.value)
}
</script>
