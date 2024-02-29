<template>
  <div class="bg-white">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
            enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
            leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
              enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel
                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button type="button"
                    class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    @click="mobileFiltersOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-4 border-t border-gray-200">


                  <Disclosure as="div" v-for="section in filters" :key="section.id"
                    class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
                    <h3 class="-mx-2 -my-3 flow-root">
                      <DisclosureButton
                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span class="font-medium text-gray-900">{{ section.name }}</span>
                        <span class="ml-6 flex items-center">
                          <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                          <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel class="pt-6">
                      <div class="space-y-6">
                        <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                          <input :id="`filter-mobile-${section.id}-${optionIdx}`" :name="`${section.id}[]`"
                            :value="option.value" type="radio" :checked="option.checked"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label :for="`filter-mobile-${section.id}-${optionIdx}`"
                            class="ml-3 min-w-0 flex-1 text-gray-500">{{ option.value }}</label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

          <div class="flex items-center">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true" />
                </MenuButton>
              </div>

              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                    <a :href="option.href"
                      :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">{{
                        option.name }}</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
              <span class="sr-only">View grid</span>
              <Squares2X2Icon class="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              @click="mobileFiltersOpen = true">
              <span class="sr-only">Filters</span>
              <FunnelIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pb-24 ">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Filters -->
            <form class="hidden lg:block">
              <Disclosure as="div" :key="series.id" class="border-b border-gray-200 py-6"
                v-slot="{ open }">
                <h3 class="-my-3 flow-root">
                  <DisclosureButton
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span class="font-medium text-gray-900" >{{ series.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                      <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div v-for="(option, optionIdx) in series.options" :key="option.value" class="flex items-center">
                      <input :id="`filter-${series.id}-${optionIdx}`" :name="`${series.id}`" :value="option.value"
                        type="radio" :checked="option.checked"     v-model="newSerie"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label :for="`filter-${series.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{ option.value
                      }}</label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
              
              <Disclosure as="div" :key="type.id" class="border-b border-gray-200 py-6"
                v-slot="{ open }">
                <h3 class="-my-3 flow-root">
                  <DisclosureButton
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span class="font-medium text-gray-900" >{{ type.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                      <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div v-for="(option, optionIdx) in type.options" :key="option.value" class="flex items-center">
                      <input :id="`filter-${type.id}-${optionIdx}`" :name="`${type.id}`" :value="option.value"
                        type="radio" :checked="option.checked"     v-model="newType"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label :for="`filter-${type.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{ option.value
                      }}</label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div"  :key="grade.id" class="border-b border-gray-200 py-6"
                v-slot="{ open }">
                <h3 class="-my-3 flow-root">
                  <DisclosureButton
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span class="font-medium text-gray-900" >{{ grade.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                      <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div v-for="(option, optionIdx) in grade.options" :key="option.value" class="flex items-center">
                      <input :id="`filter-${grade.id}-${optionIdx}`" :name="`${grade.id}`" :value="option.value"
                        type="radio" :checked="option.checked"     v-model="newGrade"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label :for="`filter-${grade.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{ option.value
                      }}</label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div"  :key="scale.id" class="border-b border-gray-200 py-6"
                v-slot="{ open }">
                <h3 class="-my-3 flow-root">
                  <DisclosureButton
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span class="font-medium text-gray-900" >{{ scale.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                      <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div v-for="(option, optionIdx) in scale.options" :key="option.value" class="flex items-center">
                      <input :id="`filter-${scale.id}-${optionIdx}`" :name="`${scale.id}`" :value="option.value"
                        type="radio" :checked="option.checked"     v-model="newScale"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label :for="`filter-${scale.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{ option.value
                      }}</label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
             
            </form>
            <!-- Product grid -->
            <div class="lg:col-span-3">
              <!-- Your content -->
              <ProductsList  />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'
import { useProductStore } from '../stores/product'
const productStore = useProductStore()
const sortOptions = [
  { name: 'Most Popular', href: '#', current: false },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const newGrade = ref(null)
const newScale = ref(null)
const newType = ref(null)
const newSerie = ref(null)
const series = {
    id: 'seriesId',
    name: 'Series',
    options: [
      { value: 'Universal Century', checked: false },
      { value: 'Future Century', checked: false },
      { value: 'After Colony', checked: false },
      { value: 'After War', checked: false },
      { value: 'Correct Century', checked: false },
      { value: 'Cosmic Era', checked: false },
      { value: 'Anno Domini', checked: false },
      { value: 'Advanced Generation', checked: false },
      { value: 'Regild Century', checked: false },
      { value: 'Post Disaster', checked: false },
      { value: 'Ad Stella', checked: false },
      { value: 'Present', checked: false },
    ]}

const type =   {
    id: 'typeId',
    name: 'Type',
    options: [
      { value: 'Gunpla', checked: false },
      { value: 'Tool', checked: false },
    ],
  }

const grade =  {
    id: 'gradeId',
    name: 'Grade',
    options: [
      { value: 'SD Super Deformed', checked: false },
      { value: 'Entry Grade', checked: false },
      { value: 'High Grade', checked: false },
      { value: 'Real Grade', checked: false },
      { value: 'Master Grade', checked: false },
      { value: 'Full Mechanic', checked: false },
      { value: 'Perfect Grade', checked: false },
      { value: 'Metal Build', checked: false },
      { value: 'Mega Size', checked: false },
    ],
  }
const scale = 
  {
    id: 'scaleId',
    name: 'Scale',
    options: [
      { value: '1/144', checked: false },
      { value: '1/100', checked: false },
      { value: '1/60', checked: false },
      { value: '1/48', checked: false },
    ],
  }

watch(newGrade, (newValue, oldValue) => {
  console.log('New Grade value changed:', newValue)
  // ทำสิ่งที่ต้องการเมื่อค่า newGrade เปลี่ยนแปลง
})

watch(newScale, (newValue, oldValue) => {
  console.log('New Scale value changed:', newValue)
  // ทำสิ่งที่ต้องการเมื่อค่า newScale เปลี่ยนแปลง
})

watch(newType, (newValue, oldValue) => {
  console.log('New Type value changed:', newValue)
  // ทำสิ่งที่ต้องการเมื่อค่า newType เปลี่ยนแปลง
})

watch(newSerie, (newValue, oldValue) => {
  console.log('New Serie value changed:', newValue)
  // ทำสิ่งที่ต้องการเมื่อค่า newSerie เปลี่ยนแปลง
})
const mobileFiltersOpen = ref(false)
</script>