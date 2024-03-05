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
            try {
                const requestBody = {
                    email: username,
                    password: password
                };
                const response = await fetch('http://localhost:8080/user/authentication', {
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