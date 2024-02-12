
<script setup>
definePageMeta({
  layout: "justnav"
});
</script>
<template>
  <div
    class="bg-[url('https://th.gundam.info/content/mgka/narrative/images/02about/bg.jpg')] flex h-screen">
    <div class="container mx-auto my-2 p-2 h-full w-full">
      <div class="md:flex no-wrap md:-mx-2 ">
        <!-- Left Side -->
        <div class="w-full md:w-2/6 md:mx-2 ">
          <!-- Profile Card -->
          <div class="border-b-4 border-cyan-200 h-full ">
            <div class="bg-sky-950 pt-5 bg-opacity-75 text-cyan-300 border-cyan-300 border-solid border-2 h-full ">
              <div class="image overflow-hidden">
                <img class="h-96 w-80 mx-auto object-contain "
                  src="https://preview.redd.it/mash-from-mashle-magic-and-muscles-v0-w0lnuo2dl07b1.jpg?width=640&crop=smart&auto=webp&s=d3be7b44c8909439f7c9df0553adeb5225dd5bc7"
                  alt="">
              </div>

              <div class=" pt-2 px-3 mt-3 divide-y shadow-sm border-cyan-300 border-solid border-t-2 bottom-0">

                <li class="flex items-center py-3 ">
                  <span>Member since</span>
                  <span class="ml-auto">Nov 07, 2016</span>
                </li>
              </div>
            </div>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>

        </div>
        <!-- Right Side -->
        <!-- Profile tab -->
        <!-- About Section -->
        <div
          class="bg-sky-500 border-cyan-300 border-solid border-2 bg-opacity-40 font-semibold ">
          <div class="flex items-center profile-header text-cyan-300 border-cyan-300 border-solid border-b-2 bg-slate-900 font-semibold bg-opacity-85">
            <span clas="">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <span class="tracking-wide ">About</span>
          </div>
          <div
            class="text-white  content-between h-full pt-5">
            <div class="grid md:grid-cols-2 text-sm ">
              <div class="grid grid-cols-2 mb-5">
                <div class="px-4 py-2 font-semibold">First Name</div>
                <div class="px-4 py-2">Jane</div>
              </div>
              <div class="grid grid-cols-2 mb-5">
                <div class="px-4 py-2 font-semibold">Last Name</div>
                <div class="px-4 py-2">Doe</div>
              </div>
              <div class="grid grid-cols-2 mb-5">
                <div class="px-4 py-2 font-semibold">Gender</div>
                <div class="px-4 py-2">Female</div>
              </div>
              <div class="grid grid-cols-2 mb-5">
                <div class="px-4 py-2 font-semibold">Contact No.</div>
                <div class="px-4 py-2">+11 998001001</div>
              </div>
              <div class="grid grid-cols-2 mb-5">
                <div class="px-4 py-2 font-semibold">Current Address</div>
                <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
              </div>
              <div class="grid grid-cols-2 mb-5">
                <div class="px-4 py-2 font-semibold">Permanant Address</div>
                <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
              </div>
              <div class="grid grid-cols-2 mb-5">
                <div class="px-4 py-2 font-semibold">Email.</div>
                <div class="px-4 py-2">
                  <a class="text-white" href="mailto:jane@example.com">jane@example.com</a>
                </div>
              </div>
              <div class="grid grid-cols-2 mb-5">
                <div class="px-4 py-2 font-semibold">Birthday</div>
                <div class="px-4 py-2">Feb 06, 1998</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- End of profile tab -->
    </div>
  </div>
</template>

  