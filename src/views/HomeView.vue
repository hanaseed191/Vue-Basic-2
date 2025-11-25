<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>Hello Home</div>
  <RouterLink :to="{ name: 'profile-edit', params: { id: 1 } }">
    <button>Home</button>
  </RouterLink>
</template>
