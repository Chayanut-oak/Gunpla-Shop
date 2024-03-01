<template>
  <div class="relative mx-auto w-full bg-white">
    <div class="grid min-h-screen grid-cols-10">
      <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
        <div class="mx-auto w-full max-w-lg">
          <h1 class="relative text-2xl font-['kanit'] text-gray-700 sm:text-3xl">ยืนยันสินค้า<span
              class="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>

          <div class="mt-10 flex flex-col space-y-4">
            <div>
              <p class="text-lg font-['kanit'] text-gray-500">ชื่อผู้รับ</p>
              <p class="text-base font-['kanit'] text-gray-500">{{ user.name }}</p>

            </div>
            <div class="relative">
              <label for="address" class="text-lg font-['kanit'] text-gray-500">ที่อยู่</label>
              <textarea id="address" name="address" placeholder="ที่อยู่" v-model="address"
                class="block w-full rounded font-['kanit'] border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-base text-gray-500 placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-300" />
            </div>

          </div>

          <div class="pt-5" v-for="shipping in shippingMethod.option" :key="shipping.name">
            <div class="relative">
              <input class="peer hidden" :id="shipping.name" type="radio" name="radio" :value="shipping"
                :checked="shipping.checked" v-model="selectedShippingMethod" />
              <span
                class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                :for="shipping.name">

                <div class="ml-5">
                  <span class="mt-2 font-['kanit']">{{ shipping.name }} ({{ shipping.duraion }})</span>
                  <p class="text-slate-500 font-['kanit'] text-sm leading-6"> {{ shipping.cost }} บาท</p>
                  <!-- <p class="text-slate-500 font-['kanit'] text-sm leading-6"></p> -->
                </div>
              </label>
            </div>

          </div>

          <button @click="submitOrder()"
            class="mt-4 inline-flex w-full items-center justify-center rounded bg-[#2c52b3] py-2.5 px-4 text-base font-semibold font-['kanit'] tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">ยืนยันการสั่งซื้อ</button>
        </div>
      </div>
      <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">

        <div>
          <img src="@/assets/image/logo.png" alt="" class="absolute inset-0 h-full w-full object-cover" />
          <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-[#2c52b3] to-[#4370e4] opacity-95"></div>
        </div>
        <div class="relative">
          <div class="bg-transparent rounded-lg overflow-hidden  border-4 border-orange-200 max-w-sm relative m-5"
            v-for="item in cartStore.cart" :key="item.name">
            <!-- รอ Product Cart -->
            <div class="background-gold text-center text-gray-900 font-bold font-['kanit'] ">{{ item.name }}</div>
            <div class="relative ">
              <img class=" object-cover object-center w-60 h-72 bottom-0 " :src=item.images[0] alt="Product Image">
              <div class="absolute flex justify-between left-0 p-1 bg-black bg-opacity-50 text-white bottom-6 w-full">
                <span class="font-bold font-['kanit'] text-lg">{{ item.price }} บาท</span>
              </div>
            </div>
          </div>
          <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
          <div class="space-y-2">
            <p class="flex justify-between text-lg font-['kanit'] text-white"><span>ราคารวม:</span><span>{{
              cartStore.totalPrice }}+{{ selectedShippingMethod.cost }} = {{ (cartStore.totalPrice +
    selectedShippingMethod.cost).toFixed(2) }} </span></p>
          </div>
        </div>
        <div class="relative mt-10 text-white">

          <!-- <h3 class="mb-5 text-lg font-bold">HERERERERERE {{ address }} {{ selectedShippingMethod }}</h3>
          <p class="text-sm font-semibold">+01 653 235 211 <span class="font-light">(International)</span></p>
          <p class="mt-1 text-sm font-semibold">support@nanohair.com <span class="font-light">(Email)</span></p>
          <p class="mt-2 text-xs font-medium">Call us now for payment related issues</p>
        </div>
        <div class="relative mt-10 flex">
          <p class="flex flex-col"><span class="text-sm font-bold text-white">Money Back Guarantee</span><span
              class="text-xs font-medium text-white">within 30 days of purchase</span></p> -->
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';
const user = {
  name: "Nut Thaiwattananon",
  address: "33 Nakniwat 17"
}
const shippingMethod = {
  id: "shippingId",
  name: "shippingMethod",
  option: [
    {
      name: "ปกติ",
      duraion: "3-4 วัน",
      cost: 45,
      checked: true
    },
    {
      name: "ด่วนพิเศษ",
      duraion: "1-2 วัน",
      cost: 75,
      checked: false
    }
  ]
}
const address = ref(user.address)
const selectedShippingMethod = ref({
  name: "ปกติ",
  duraion: "3-4 วัน",
  cost: 45,
  checked: true
})
const cartStore = useCartStore()
const config = useRuntimeConfig()
const order = {
  userId: "test",
  cart: cartStore.cart,
  totalPrice: cartStore.totalPrice,
  shippingMethod: selectedShippingMethod.value,
  address: address.value || "default"
}
const submitOrder = async () => {
  const { data: res, error: error } = await useFetch(`${config.public.baseURL}/gunpla/`, {
    method: "POST",
    body: order
  },)
  // console.log(res.value)
}

</script>
  
