import { defineStore } from "pinia";
import products from '../assets/product/product.json'
export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [],
    }),
    persist: {
        storage: persistedState.localStorage,
    },
    getters: {
        itemCount() {
            return this.products.length;
        },
        totalPrice() {
            return this.products.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
    actions: {
        addProduct(item) {
            const existingItem = this.products.find((i) => i.id === item.id);

            if (existingItem) {
                if (existingItem.quantity < existingItem.stock) {
                    existingItem.quantity++;
                } else {
                    alert("สินค้าหมดแล้ว");
                }
            } else {
                this.products.push({ ...item, quantity: 1 });
            }
        },
        removeProduct(id) {
            const index = this.products.findIndex((item) => item.id === id);
            if (index !== -1) {
                this.products.splice(index, 1);
            }
        },
        clearCart() {
            this.products = [];
        },
    }
})
