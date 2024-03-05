<template>
  <div class="bg-black flex justify-center items-center h-screen">

    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img src="https://cdn.donmai.us/original/a1/b7/a1b7ffbe3d20fef54d34a1f158db9e8d.png" alt="Placeholder Image"
        class="object-cover w-full h-full">
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Create Account</h1>
      <form @submit.prevent="register">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-white mb-2">Email</label>
          <input type="text" id="email" v-model="email" name="email" required
            class="text-white w-full border blue-neon rounded-md py-2 px-3 focus:outline-none bg-transparent"
            autocomplete="off">
        </div>
        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-white mb-2">Password</label>
          <input type="password" id="password" v-model="password" name="password" required
            class="text-white w-full border blue-neon rounded-md py-2 px-3 focus:outline-none bg-transparent"
            autocomplete="off">
        </div>
        <!-- Confirm Password Input -->
        <div class="mb-4">
          <label for="confirmPassword" class="block text-white mb-2">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" name="confirmPassword"required
            class="text-white w-full border blue-neon rounded-md py-2 px-3 focus:outline-none bg-transparent"
            autocomplete="off">
        </div>
        <!-- Create Account Button -->
        <button type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Create
          Account</button>
      </form>
      <nuxt-link to="/login">
      <!-- Already have an account Link -->
      <div class="mt-6 text-blue-500 text-center">
        <a href="#" class="hover:underline">Already have an account?</a>
      </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '#imports';
const { $api } = useNuxtApp()
definePageMeta({
  layout: "loginlayout"
});
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();
const user = useUserStore()
const register = async () => {
  try {
    if (password.value == confirmPassword.value) {
      await user.register(email.value, password.value);
      router.push('/');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};
</script>
