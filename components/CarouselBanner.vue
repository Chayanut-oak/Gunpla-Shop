<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <img class="w-100 h-100 object-cover" :src="slide" />
      </div>
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
const slides = ["https://cdn.discordapp.com/attachments/399896332187336704/1205795121497513984/gunplaScale.jpg?ex=65ec2037&is=65d9ab37&hm=fa10efb140a2201017289d337ebecafd8ebcf1aeb93bdd336c5889d893890d15&",
  "https://cdn.discordapp.com/attachments/399896332187336704/1205797969232789565/385066915_827207236075580_7405062703721475088_n.png?ex=65ec22de&is=65d9adde&hm=41a46515589339acd83d46c4312b88fcf503d41f73cb9166859832c30857fd52&",
]

</script>

<style>
.carousel__item {
  width: 50%;
  height: 50%;
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
</style>
