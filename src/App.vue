<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    Page:
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterView />
  </div>
</template>
