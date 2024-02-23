import { defineStore } from "pinia";
import products from '../assets/product/product.json'
export const useProductStore = defineStore('products', {
    state: () => ({
        products: products
    })
})