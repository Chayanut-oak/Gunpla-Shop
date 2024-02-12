<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div  class="bg-[url('https://th.gundam.info/content/mgka/narrative/images/02about/bg.jpg')] h-screen p-5 items-center  object-contain justify-center">
    <div data-aos="fade-left" class="p-1 flex flex-wrap items-center justify-center my-7 object-cover object-center w-30 h-50 ">
      <div class="bg-transparent rounded-lg overflow-hidden  border-4 border-orange-200 max-w-sm relative">
        <div class="background-gold text-center text-gray-900 font-bold ">mg rx-78-2 gundam ver 3.0 </div>
        <div class="relative ">
          <img class=" object-contain object-center w-60 h-72 bottom-0 "
            src="https://cn.lnwfile.com/_/cn/_raw/9r/u8/uo.jpg" alt="Product Image">
          <div class="absolute flex justify-between left-0 p-1 bg-black bg-opacity-50 text-white bottom-6 w-full">
            <h3 class="text-lg font-medium">Product Title</h3>
            <span class="font-bold text-lg">$19.99</span>
          </div>
          <!-- <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
          </div> -->
        </div>
        <div class="p-2 bg-black bg-opacity-25 text-white">
          <!-- <div class="flex items-center justify-between mb-4"> -->
          <!-- <h3 class="text-lg font-medium">Product Title</h3>
            <span class="font-bold text-lg">$19.99</span> -->
          <!-- </div> -->
          <div class="flex-col flex">
            <button
              class="w-2/3 bg-sky-900 hover:bg-sky-950  text-white font-bold py-2 px-4 absolute bottom-0 left-0 border-cyan-500 border-2 rounded-tr-lg  ">
              Buy Now
            </button>
            <button
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
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/20/solid'
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  }
]
const product = {
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

const open = ref(false)
const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[2])
</script>
