<template>
  <div
    class="bg-[url('https://th.gundam.info/content/mgka/narrative/images/02about/bg.jpg')] h-screen p-5 items-center  object-contain justify-center">
    <div data-aos="slide-up"
      class="p-1 flex flex-wrap items-center justify-center my-7 object-cover object-center w-30 h-50 ">
      <div class="bg-transparent rounded-lg overflow-hidden  border-4 border-orange-200 max-w-sm relative m-5"
        v-for="item in filteredProduct">
        <Nuxt-link :to="`/product/${item.id}`">
          <div class="background-gold text-center text-gray-900 font-bold font-['kanit'] ">{{ item.name }}</div>
          <div class="relative ">
            <img class=" object-cover object-center w-60 h-72 bottom-0 " :src=item.images[0] alt="Product Image">
            <div class="absolute flex justify-between left-0 p-1 bg-black bg-opacity-50 text-white bottom-6 w-full">
              <span class="font-bold font-['kanit'] text-lg">{{ item.price }} บาท</span>
            </div>
            <!-- <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
          </div> -->
          </div>
        </Nuxt-link>
        <div class="p-2 bg-black bg-opacity-25 text-white">
          <!-- <div class="flex items-center justify-between mb-4"> -->
          <!-- <h3 class="text-lg font-medium">Product Title</h3>
            <span class="font-bold text-lg">$19.99</span> -->
          <!-- </div> -->
          <div class="flex-col flex">
            <button
              class="w-2/3 bg-sky-900 hover:bg-sky-950  text-white font-bold font-['kanit'] py-2 px-4 absolute bottom-0 left-0 border-cyan-500 border-2 rounded-tr-lg  ">
              สั่งทันที
            </button>
            <button @click="cartStore.addProduct(item)"
              class="w-1/3 bg-sky-900 hover:bg-sky-950 text-white font-bold py-2 px-4 absolute bottom-0 right-0 border-cyan-500 border-2 rounded-tl-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.8-3H7.4M11 7H6.3M17 4v6m-3-3h6" />
              </svg>
            </button>

          </div>


        </div>
      </div>

    </div>
  </div>
</template>





<script setup>
import { useCartStore } from '../../stores/cart'
import { useProductStore } from '../../stores/product'
import { ref } from 'vue'
const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()

const filteredProduct = productStore.products.filter((item) => {
  if (item.hasOwnProperty('grade')) {
    console.log(item)
    return item.grade.split('(')[0].trim().replace(" ", "-").toLocaleLowerCase() == route.params.categoryId
  }
})



</script>

