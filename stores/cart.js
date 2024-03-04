import { defineStore } from "pinia";
import products from '../assets/product/product.json'
import { useProductStore } from '@/stores/product'
export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
    }),
    persist: {
        storage: persistedState.localStorage,
    },
    getters: {
        itemCount() {
            return this.cart.length;
        },
        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
    actions: {
        addProduct(item) {
            
            const productStore = useProductStore();
            const existingItem = this.cart.find((i) => i.id === item.id);
            const productInDatabase = productStore.products.find((i) => i.id === item.id);
            if (existingItem) {
                if (existingItem.quantity < productInDatabase.stock) {
                    existingItem.quantity++;
                } else {
                    alert("สินค้าหมดแล้ว");
                }
            } else {
                this.cart.push({ ...item, quantity: 1 });
            }
        },
        removeProduct(id) {
            const index = this.cart.findIndex((item) => item.id === id);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },
        reduceProduct(item) {
            const existingItem = this.cart.find((i) => i.id === item.id);
            console.log(existingItem.quantity)
            if (existingItem.quantity >= 2){
                existingItem.quantity--;
            }
            else {
                this.removeProduct(existingItem.id);
            }
        },
        clearCart() {
            this.cart = [];
        },
    }
})
