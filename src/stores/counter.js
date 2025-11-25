import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
 state: () => ({
    firstName : '',
    lastName : ''
 }),
 actions: {
    changeName (formData){
      this.firstName = formData.firstName
      this.lastName = formData.lastName
    }
 }
})
