<template>
  <Carousel :autoplay="2000" :wrap-around="true" class="mt-10">
    <Slide class="carouselSlide" v-for="slide in slides" :key="slide">
      <img :src="slide" class="carousel__item" />
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>


<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const slides = ["https://cdn.discordapp.com/attachments/399896332187336704/1205795121497513984/gunplaScale.jpg?ex=65d9ab37&is=65c73637&hm=3d500d0d14393ee9c78689dfefca249bcc0e2f0304757763cb0aac9a02e77bdc&",
  "https://cdn.discordapp.com/attachments/399896332187336704/1205797969232789565/385066915_827207236075580_7405062703721475088_n.png?ex=65d9adde&is=65c738de&hm=5e0a5d6c34d9acf96fa246eb3a2229e04b6794216c5506d09052f398e9522550&",
]

</script>

<style>
.carousel__item {
  height: 30em;
  width: 40%;
  background-color: gray;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border-radius: 50%;

}

.carouselSlide {
  height: 50%;
}
</style>
