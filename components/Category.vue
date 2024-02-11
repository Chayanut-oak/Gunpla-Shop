
<template>
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="image in images" :key="images" class="transition duration-300 ease-in-out hover:scale-110 ">
        <img class="aspect-['2/2'] w-[150px] h-[150px] object-contain mix-blend-color-burn" :src="image" alt="Product Image">
      </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  const images = ref(["https://media.discordapp.net/attachments/959359393776959553/1206208339957260328/latest.png?ex=65db2c0e&is=65c8b70e&hm=dc7a67ebf6b76a6f6bf85d64feb9d915a1f11cc0f1b91b4dcd29c04a3fd1b9b6&=&format=webp&quality=lossless",
    "https://cdn.discordapp.com/attachments/959359393776959553/1206203561835495434/latest.png?ex=65db279b&is=65c8b29b&hm=2c870688f91b434b11d1e35104647c57fa90ae8ce72f8147daad5600d7c20912&",
    "https://media.discordapp.net/attachments/959359393776959553/1206223126728540181/latest.png?ex=65db39d3&is=65c8c4d3&hm=db01a7911cdaa27ff6813c1dde7cf70bf13d4e80232830c82861b2d6620b08aa&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/959359393776959553/1206223435269799936/latest.png?ex=65db3a1d&is=65c8c51d&hm=5891a79dcd47624eb2183d134c60445a4fa28f048a4551fef1495b24765c7d6d&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/959359393776959553/1206223493172301874/1000.png?ex=65db3a2b&is=65c8c52b&hm=a34f5a780a06d2ab8690411cfada7bd5fdf7ac9029a91eb8a166a0c0fff7d016&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/959359393776959553/1206223628161515551/latest.png?ex=65db3a4b&is=65c8c54b&hm=0379c0d4be884b6140105afa95f0fe52ebee9b4e545a268ddd30138954faa307&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/959359393776959553/1206225156712693810/b7a639c4ef18200494c8c2d844df2e1f.png?ex=65db3bb7&is=65c8c6b7&hm=f0bbcb315a3c3f9bb2eb2ca6cd4ac1819f9626329416389530362a2a44d09549&=&format=webp&quality=lossless&width=1440&height=408",
    "https://media.discordapp.net/attachments/959359393776959553/1206223844227022848/latest.png?ex=65db3a7f&is=65c8c57f&hm=c199f311ee73f6a8010e1920ead7ebd4cd01697a6cff1bba662c272eb205535c&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/959359393776959553/1206223888732651621/latest.png?ex=65db3a89&is=65c8c589&hm=0d94352605fa98aa11748de77b07893ebaf34639bce545864ad464e40ac810fd&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/959359393776959553/1206224899543277649/latest.png?ex=65db3b7a&is=65c8c67a&hm=ae7d7ed319b12149bc59a13b41fd84d4e6d76f699e2b064d7341082d681472fa&=&format=webp&quality=lossless"
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
  