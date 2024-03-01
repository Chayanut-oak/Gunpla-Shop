import { defineStore } from "pinia";
import products from '../assets/product/product.json'
export const useProductStore = defineStore('products', {
    state: () => ({
        products: products,
        filteredProducts: []
    }),
    getters: {


    },
    actions: {
        // filterProduct(newType, newGrade, newScale, newSerie) {
        //     this.filteredProducts = this.products.filter(i => {
        //         console.log(newType, newGrade, newScale, newSerie)
        //         i.type == newType ||
        //             i.grade == newGrade ||
        //             i.scale == newScale ||
        //             i.series == newSerie
        //     })
        // },
    }

})