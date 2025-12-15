<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
  <div>Hello Home</div>
  <div>FirstName {{ userStore.firstName }}</div>
  <div>LastName {{ userStore.lastName }}</div>
  <div>FullName {{ userStore.fullName }}</div>
  <RouterLink :to="{ name: 'profile-edit', params: { id: 1 } }">
    <button>Home</button>
  </RouterLink>
</template>
