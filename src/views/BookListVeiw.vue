<script setup>
import { useBookStore } from "@/stores/book";
import { RouterLink } from "vue-router";
const bookStore = useBookStore();
</script>
<template>
  <div>Book ListView</div>
  <div>
    <ul>
      <!-- books คือ state ที่อยู่ใน store -->
      <li v-for="(book, index) in bookStore.books">
        {{ index + 1 }} {{ book.name }} {{ book.author }}
        <RouterLink
          :to="{
            name: 'book-edit',
            params: { id: index },
          }"
        >
          <button>Edit</button>
        </RouterLink>
        <button @click="bookStore.removeBook(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
