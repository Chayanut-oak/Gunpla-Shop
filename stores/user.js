import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        token: "",

    }),
    getters: {


    },
    persist: {
        storage: persistedState.localStorage,
    },
    actions: {
        async login(username, password) {
            const { $api } = useNuxtApp()
            try {
                const requestBody = {
                    email: username,
                    password: password
                };
                const response = await $api('/user/authentication', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });
                  console.log(response.json())
                if (!response.ok) {
                    throw new Error('Failed to login');
                }   
               
                const data = await response.json(); 
           
                this.token = data;
            } catch (error) {
                console.error('Error logging in:', error);
                throw error;
            }
        },
        async register(username, password) {
            const { $api } = useNuxtApp()
            try {
                const requestBody = {
                    email: username,
                    password: password
                };
                const response = await $api('/user/newUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });
                if (!response.ok) {
                    throw new Error('Failed to login');
                }
                const data = await response.json();
                this.token = data;
            } catch (error) {
                console.error('Error logging in:', error);
                throw error;
            }
        }
    }

})