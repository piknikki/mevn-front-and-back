import { defineStore } from 'pinia'
import EventService from "../services/EventService";

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    userData: '',
  }),
  getters: {
    fullName() {
      return `${this.userData.firstName} ${this.userData.lastName}`
    },
    currentUser() {
      return EventService.getUser(42)
        .then(response => {
          this.userData = response.data.user
        })
        .catch(error => {
          throw error
        })
    }
  }
})
