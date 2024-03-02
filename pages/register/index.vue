<script setup>
definePageMeta({
  layout: "loginlayout"
});
</script>
<template>
    <div class="bg-black flex justify-center items-center h-screen">
      
      <!-- Left: Image -->
  <div class="w-1/2 h-screen hidden lg:block">
    <img src="https://cdn.donmai.us/original/a1/b7/a1b7ffbe3d20fef54d34a1f158db9e8d.png" alt="Placeholder Image" class="object-cover w-full h-full">
  </div>
  <!-- Right: Login Form -->
  <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
    <h1 class="text-2xl font-semibold mb-4">Login</h1>
    <form action="#" method="POST">
      <!-- Username Input -->
      <div class="mb-4">
        <label for="username" class="block text-white mb-2">Username</label>
        <input type="text" id="username" name="username" class="text-white w-full border blue-neon rounded-md py-2 px-3 focus:outline-none bg-transparent" autocomplete="off">
      </div>
      <!-- email Input -->
      <div class="mb-4">
        <label for="email" class="block text-white mb-2">Email</label>
        <input type="text" id="email" name="email" class="text-white w-full border blue-neon rounded-md py-2 px-3 focus:outline-none bg-transparent" autocomplete="off">
      </div>
      <!-- Password Input -->
      <div class="mb-4">
        <label for="password" class="block text-white mb-2">Password</label>
        <input type="password" id="password" name="password" class="text-white w-full border blue-neon rounded-md py-2 px-3 focus:outline-none bg-transparent" autocomplete="off">
      </div>
      <!-- Confirm Password Input -->
      <div class="mb-4">
        <label for="conpassword" class="block text-white mb-2">Confirm Password</label>
        <input type="password" id="conpassword" name="conpassword" class="text-white w-full border blue-neon rounded-md py-2 px-3 focus:outline-none bg-transparent" autocomplete="off">
      </div>
      <!-- already have an account Link
      <div class="mb-6 text-blue-500">
        <a href="#" class="hover:underline">Already have an account?</a>
      </div> -->
      <!-- Login Button -->
      <nuxt-link to="/Login"><button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Create Account</button></nuxt-link>
      
      
    </form>
    <!-- already have an account Link -->
    <div class="mt-6 text-blue-500 text-center">
      <nuxt-link to="/Login" class="hover:underline">Already have an account?</nuxt-link>
  </div>
  </div>
  </div>
  </template>
  