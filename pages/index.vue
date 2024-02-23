

<template>
  <div data-aos="fade-right" data-aos-delay="150"
    class=" bg-[url('https://en.gundam.info/content/mgka/narrative/images/05research/point02obj.png')] h-full w-full bg-contain bg-no-repeat bg-left-top fixed z-[-99]">
  </div>
  <CarouselBanner />
  <div class="">
    <div data-aos="fade-up" data-aos-delay="100">
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="image in images" :key="images" class="transition duration-300 ease-in-out hover:scale-110 ">
          <NuxtLink :to="`/category/${image.name}`">
            <img class="aspect-['2/2'] w-[150px] h-[150px] object-contain mix-blend-color-burn" :src="image.image"
              alt="Product Image">
          </NuxtLink>

        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
  <div class="flex items-center justify-center  ">
    <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
      <div
        class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 ">
        <img src="https://www.kikatek.com/MMRes/ResourcesMultimediaProducts/Piper-G600/1154/K1419057_g4_161521.jpg"
          alt="image" class="h-full w-full object-contain" />
      </div>
      <div class="px-6 ">
        <h6
          class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
          startups
        </h6>
        <h4
          class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Lyft launching cross-platform service this week
        </h4>
        <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part of
          the story
        </p>
        <a class="inline-block" href="#">
          <button
            class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              aria-hidden="true" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const images = ref([{
  "name": "high-grade",
  "image": "https://media.discordapp.net/attachments/959359393776959553/1206208339957260328/latest.png?ex=65db2c0e&is=65c8b70e&hm=dc7a67ebf6b76a6f6bf85d64feb9d915a1f11cc0f1b91b4dcd29c04a3fd1b9b6&=&format=webp&quality=lossless"
},
{
  "name": "real-grade",
  "image": "https://cdn.discordapp.com/attachments/959359393776959553/1206203561835495434/latest.png?ex=65db279b&is=65c8b29b&hm=2c870688f91b434b11d1e35104647c57fa90ae8ce72f8147daad5600d7c20912&"
},
{
  "name": "master-grade",
  "image": "https://media.discordapp.net/attachments/959359393776959553/1206223126728540181/latest.png?ex=65db39d3&is=65c8c4d3&hm=db01a7911cdaa27ff6813c1dde7cf70bf13d4e80232830c82861b2d6620b08aa&=&format=webp&quality=lossless"
},
{
  "name": "master-grade-sd",
  "image": "https://media.discordapp.net/attachments/959359393776959553/1206223435269799936/latest.png?ex=65db3a1d&is=65c8c51d&hm=5891a79dcd47624eb2183d134c60445a4fa28f048a4551fef1495b24765c7d6d&=&format=webp&quality=lossless"
},
{
  "name": "full-mechanic",
  "image": "https://media.discordapp.net/attachments/959359393776959553/1206223493172301874/1000.png?ex=65db3a2b&is=65c8c52b&hm=a34f5a780a06d2ab8690411cfada7bd5fdf7ac9029a91eb8a166a0c0fff7d016&=&format=webp&quality=lossless"
},
{
  "name": "sd",
  "image": "https://media.discordapp.net/attachments/959359393776959553/1206223628161515551/latest.png?ex=65db3a4b&is=65c8c54b&hm=0379c0d4be884b6140105afa95f0fe52ebee9b4e545a268ddd30138954faa307&=&format=webp&quality=lossless"
},
{
  "name": "perfect-grade",
  "image": "https://media.discordapp.net/attachments/959359393776959553/1206225156712693810/b7a639c4ef18200494c8c2d844df2e1f.png?ex=65db3bb7&is=65c8c6b7&hm=f0bbcb315a3c3f9bb2eb2ca6cd4ac1819f9626329416389530362a2a44d09549&=&format=webp&quality=lossless&width=1440&height=408"
},
{
  "name": "meatal-build",
  "image": "https://media.discordapp.net/attachments/959359393776959553/1206223844227022848/latest.png?ex=65db3a7f&is=65c8c57f&hm=c199f311ee73f6a8010e1920ead7ebd4cd01697a6cff1bba662c272eb205535c&=&format=webp&quality=lossless"
},
{
  "name": "metal-structure",
  "image": "https://media.discordapp.net/attachments/959359393776959553/1206223888732651621/latest.png?ex=65db3a89&is=65c8c589&hm=0d94352605fa98aa11748de77b07893ebaf34639bce545864ad464e40ac810fd&=&format=webp&quality=lossless"
},
{
  "name": "mega-size",
  "image": "https://media.discordapp.net/attachments/959359393776959553/1206224899543277649/latest.png?ex=65db3b7a&is=65c8c67a&hm=ae7d7ed319b12149bc59a13b41fd84d4e6d76f699e2b064d7341082d681472fa&=&format=webp&quality=lossless"
}
]);
const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
});

const breakpoints = ref({
  // carousel settings for different screen sizes
  // breakpoints are mobile first
  // any settings not specified will fallback to the carousel settings
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
});
</script>