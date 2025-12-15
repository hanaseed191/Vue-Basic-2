import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    firstName: "123",
    lastName: "456",
  }),
  getters: {
    fullName(state) {
      return `${state.firstName} ${state.lastName}`;
    },
  },
  actions: {
    changeName(formData) {
      this.firstName = formData.firstName;
      this.lastName = formData.lastName;
    },
  },
});
