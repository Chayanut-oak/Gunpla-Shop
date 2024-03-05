import { defineStore } from "pinia";
import products from '../assets/product/product.json'

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
        filteredProducts: []
    }),
    getters: {
    },
    actions: {
        async fetchProducts() {
            const { $api } = useNuxtApp()
            const gunpla = await $api("/gunpla", {
                method: "GET"
            })
            const tool = await $api("/tool", {
                method: "GET"
            })
            this.products = [...gunpla, ...tool]
        }
    }

})