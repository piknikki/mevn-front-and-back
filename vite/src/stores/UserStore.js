import { defineStore } from 'pinia'
import EventService from "../services/EventService";

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: '',
  }),
  getters: {
    firstName() {
      return this.user.firstName
    },
    currentUser() {
      return EventService.getUser(42)
        .then(response => {
          this.user = response.data
        })
        .catch(error => {
          throw error
        })
    }
  }
})
