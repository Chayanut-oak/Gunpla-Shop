<template>
    <div class="bg-white">
        <div class="bg-white">
            <div class="pt-6">
                <!-- Image gallery -->
                <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div>
                        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                            <Slide v-for="(image, index) in product.images" :key="index">
                                <img :src=image alt="product" class="h-full w-full object-cover object-center" />
                            </Slide>
                        </Carousel>
                        <Carousel id="thumbnails" :items-to-show="3" :wrap-around="true" v-model="currentSlide"
                            ref="carousel">
                            <Slide v-for="(image, index) in product.images" :key="index">
                                <img :src=image alt="product" class="h-full w-full object-cover object-center "
                                    @click="slideTo(index)" />
                            </Slide>
                        </Carousel>
                    </div>

                    <!-- Product info Gunpla-->
                    <div
                        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:flex-row lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 lg:border-l lg:border-gray-200">
                        <div>
                            <div class="lg:col-span-2  lg:pl-8">
                                <h1 class="font-['kanit'] text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{
                                    product.name }}</h1>
                            </div>

                            <!-- Options -->
                            <div class="mt-4 lg:row-span-3 lg:mt-0 ">
                                <h2 class="sr-only">Product information</h2>
                                <p class="font-['kanit'] text-3xl tracking-tight text-gray-900 lg:pl-8 pt-2">{{
                                    product.price }}
                                    บาท
                                </p>
                                <p class="font-['kanit'] text-2xl tracking-tight text-gray-500 lg:pl-8 ">คงเหลือ {{
                                    product.stock }} ea
                                </p>
                                <div class="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pl-8 lg:pt-6">
                                    <!-- Description and details -->
                                    <div>
                                        <h3 class="sr-only">Description</h3>
                                        <div class="space-y-6">
                                            <p class="text-base font-['kanit'] text-gray-900">{{ product.description }}</p>
                                        </div>
                                    </div>
                                    <div class="mt-10">
                                        <h3 class="text-sm font-medium text-gray-900">รายละเอียดสินค้า</h3>

                                        <div class="mt-4">
                                            <ul v-if="product.type == 'Gunpla'" role="list"
                                                class="list-disc space-y-2 pl-4 text-sm">
                                                <li class="font-['kanit'] text-gray-900"><span
                                                        class="font-['kanit'] text-gray-900">ยี่ห้อ: {{ product.brand
                                                        }}</span></li>

                                                <li class="font-['kanit'] text-gray-900"><span
                                                        class="font-['kanit'] text-gray-900">ขนาด: {{ product.scale
                                                        }}</span></li>
                                                <li class="font-['kanit'] text-gray-900"><span
                                                        class="font-['kanit'] text-gray-900">เกรด: {{ product.grade
                                                        }}</span></li>
                                            </ul>
                                            <ul v-if="product.type == 'Tool'" role="list"
                                                class="list-disc space-y-2 pl-4 text-sm">
                                                <li class="font-['kanit'] text-gray-900"><span
                                                        class="font-['kanit'] text-gray-900">ยี่ห้อ: {{ product.brand
                                                        }}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="flex items-center">
                            <span class="font-['kanit'] text-gray-900 pr-4">จำนวน: </span>
                            <button @click="decrementQuantity()"
                                class="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-l">-</button>
                            <input type="text" v-model="quantity"
                                class="text-center w-16 bg-gray-100 text-gray-800 py-2 px-4" @input="validateNumber()" />
                            <button @click="incrementQuantity()"
                                class="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-r">+</button>
                        </div>
                        <button
                            class="font-['kanit'] mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            เพิ่มลงตะกร้า</button>
                    </div>

                </div>



            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
const route = useRoute()

const products = [
    {
        "id": 1,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "RX-78-2 Gundam",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam",
        "scale": "1/144",
        "grade": "High Grade (HG)",
        "price": 15.99,
        "stock": 50,
        "description": "The iconic Gundam model from the original Mobile Suit Gundam series. This High Grade model features excellent articulation and detail, making it a perfect addition to any Gunpla collection."
    },
    {
        "id": 2,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "ZGMF-X20A Strike Freedom Gundam",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam SEED Destiny",
        "scale": "1/100",
        "grade": "Master Grade (MG)",
        "price": 39.99,
        "stock": 30,
        "description": "A Master Grade model of the powerful Strike Freedom Gundam piloted by Kira Yamato in Gundam SEED Destiny. This model boasts intricate detail, multiple articulation points, and comes with a variety of weapons and accessories."
    },
    {
        "id": 3,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "XXXG-01W Wing Gundam",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam Wing",
        "scale": "1/144",
        "grade": "Real Grade (RG)",
        "price": 24.99,
        "stock": 20,
        "description": "The Real Grade version of the Wing Gundam from Mobile Suit Gundam Wing. This model features a highly detailed inner frame, allowing for realistic posing and dynamic action poses. A must-have for any Gundam Wing fan."
    },
    {
        "id": 4,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "GN-001 Gundam Exia",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam 00",
        "scale": "1/60",
        "grade": "Perfect Grade (PG)",
        "price": 249.99,
        "stock": 10,
        "description": "Experience the pinnacle of Gunpla engineering with the Perfect Grade Gundam Exia from Mobile Suit Gundam 00. This massive model features intricate inner mechanisms, LED lighting effects, and a full range of motion. A true collector's item."
    },
    {
        "id": 5,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "Basic Model Tool Set",
        "type": "Tool",
        "brand": "Generic",
        "price": 9.99,
        "stock": 100,
        "description": "This basic tool set includes essential tools for plastic model building, including a hobby knife, tweezers, sandpaper, and a cutting mat. Perfect for beginners or as a backup set for experienced builders."
    },
    {
        "id": 6,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "Modeling Cement",
        "type": "Tool",
        "brand": "Generic",
        "price": 4.99,
        "stock": 50,
        "description": "A high-quality plastic cement for bonding plastic model parts. This cement creates strong and durable bonds, ensuring your model stays together securely. Ideal for use with Gundam model kits and other plastic models."
    },
    {
        "id": 7,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "Panel Line Accent Color",
        "type": "Tool",
        "brand": "Generic",
        "price": 6.99,
        "stock": 30,
        "description": "Enhance the detail of your plastic models with this panel line accent color. Simply apply the accent color along panel lines and watch as it fills in the gaps, creating realistic shadows and depth. Available in various colors to suit your model's design."
    },
    {
        "id": 8,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "RGZ-91 Re-GZ",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam: Char's Counterattack",
        "scale": "1/144",
        "grade": "Real Grade (RG)",
        "price": 29.99,
        "stock": 15,
        "description": "Real Grade model of the RGZ-91 Re-GZ from Mobile Suit Gundam: Char's Counterattack. This model features highly detailed parts and articulation, capturing the sleek design of the Re-GZ as seen in the anime."
    },
    {
        "id": 9,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "Gundam Marker Set",
        "type": "Tool",
        "brand": "Bandai",
        "price": 12.99,
        "stock": 40,
        "description": "Set of Gundam markers in various colors for detailing and customizing your Gunpla models. These markers are specially formulated for use on plastic models, providing precise and vibrant color application."
    },
    {
        "id": 10,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "RX-78-2 Gundam Ver. 3.0",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam",
        "scale": "1/100",
        "grade": "Master Grade (MG)",
        "price": 49.99,
        "stock": 25,
        "description": "Master Grade version 3.0 of the iconic RX-78-2 Gundam from Mobile Suit Gundam. This model features a high level of detail and articulation, allowing for dynamic posing and realistic display options."
    },
    {
        "id": 11,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "Decal Setter",
        "type": "Tool",
        "brand": "Generic",
        "price": 7.99,
        "stock": 20,
        "description": "Decal setting solution for applying water slide decals to your plastic models. This solution helps adhere decals securely to the model surface, preventing wrinkles or air bubbles for a professional finish."
    },
    {
        "id": 12,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "MS-06F Zaku II",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam",
        "scale": "1/100",
        "grade": "High Grade (HG)",
        "price": 19.99,
        "stock": 35,
        "description": "High Grade model of the classic MS-06F Zaku II from Mobile Suit Gundam. This model features a simplified design for easy assembly, making it suitable for both beginners and experienced modelers."
    },
    {
        "id": 13,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "Precision Side Cutter",
        "type": "Tool",
        "brand": "Generic",
        "price": 14.99,
        "stock": 25,
        "description": "High-quality side cutter for precise removal of plastic model parts from the sprue. The sharp blades ensure clean cuts, minimizing the need for additional sanding or trimming."
    },
    {
        "id": 14,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "HGUC RX-0 Unicorn Gundam",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam Unicorn",
        "scale": "1/144",
        "grade": "High Grade (HG)",
        "price": 27.99,
        "stock": 20,
        "description": "High Grade Universal Century model of the RX-0 Unicorn Gundam from Mobile Suit Gundam Unicorn. This model features a transformable design, allowing you to switch between Unicorn and Destroy modes."
    },
    {
        "id": 15,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "Weathering Kit",
        "type": "Tool",
        "brand": "Generic",
        "price": 18.99,
        "stock": 15,
        "description": "Set of weathering powders and pigments for adding realistic weathering effects to your plastic models. Create rust, dirt, and grime effects to enhance the realism of your Gunpla and other scale models."
    },
    {
        "id": 16,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "MG RX-78-2 Ver. Ka",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam",
        "scale": "1/100",
        "grade": "Master Grade (MG)",
        "price": 59.99,
        "stock": 10,
        "description": "Master Grade version Ka of the RX-78-2 Gundam from Mobile Suit Gundam. This model features a redesigned inner frame and increased detail, inspired by the artwork of Hajime Katoki."
    },
    {
        "id": 17,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "Modeling Putty",
        "type": "Tool",
        "brand": "Generic",
        "price": 8.99,
        "stock": 30,
        "description": "High-quality modeling putty for filling gaps and seams in plastic models. This putty is easy to apply and sand, allowing you to achieve seamless finishes on your Gunpla and other scale models."
    },
    {
        "id": 18,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "PG Unicorn Gundam",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam Unicorn",
        "scale": "1/60",
        "grade": "Perfect Grade (PG)",
        "price": 299.99,
        "stock": 5,
        "description": "Perfect Grade model of the RX-0 Unicorn Gundam from Mobile Suit Gundam Unicorn. This massive model features advanced articulation, LED lighting effects, and full transformation between Unicorn and Destroy modes."
    },
    {
        "id": 19,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "Gundam Panel Lining Pen",
        "type": "Tool",
        "brand": "Bandai",
        "price": 5.99,
        "stock": 25,
        "description": "Fine-tip panel lining pen for adding ink panel lines to your Gunpla models. The pen's precise tip allows for clean and consistent lines, enhancing the detail and realism of your plastic models."
    },
    {
        "id": 20,
        "images": [
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&",
            "https://cdn.discordapp.com/attachments/439702858263429128/1206152121020448768/ab.png?ex=65daf7b2&is=65c882b2&hm=acc8986c3a4d8657a43a5dc5dc0902de767b37a6602eadec82f6eab2544773e1&"
        ],
        "name": "HGUC MSN-06S Sinanju",
        "type": "Gunpla",
        "brand": "Bandai",
        "series": "Mobile Suit Gundam Unicorn",
        "scale": "1/144",
        "grade": "High Grade (HG)",
        "price": 34.99,
        "stock": 15,
        "description": "High Grade Universal Century model of the MSN-06S Sinanju from Mobile Suit Gundam Unicorn. This model features a striking red color scheme and detailed decals, capturing the menacing presence of the Sinanju."
    }
]
const product = products.find((item) => item.id == route.params.productId)
const currentSlide = ref(0)
const quantity = ref(1)
function decrementQuantity() {
    if (this.quantity > 1) {
        this.quantity--;
    }
}
function incrementQuantity() {
    if (this.quantity < product.stock) {
        this.quantity++;
    }

}
function slideTo(val) {
    this.currentSlide = val
}
function validateNumber() {
    if (this.quantity > product.stock) {
        this.quantity = product.stock
    }
    else if (this.quantity < 0) {
        this.quantity = 0
    }
}
</script>