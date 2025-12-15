<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    Page:
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterLink to="/book/list">Book</RouterLink>
    <RouterLink to="/book/create">Create</RouterLink>
    <RouterView />
  </div>
</template>
