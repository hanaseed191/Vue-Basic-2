<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const backToHome = () => {
  //การใช้ท่านี้จะทำให้เราไม่ต้องระบุ path โดยตรง
  //และอาจจะทำอะไรบ้างอย่างก่อนจะไปหน้าอื่นได้
  router.push({ name: "home" });
};
onMounted(() => {
  console.log(route);
  console.log("params", route.params);
  console.log("query", route.query);
});
const isUpdate = ref(false);
const firstName = ref("");
const lastName = ref("");

const updateProfile = () => {
  console.log(firstName.value);
  console.log(lastName.value);
};
</script>
<template>
  <div>
    Profile View
    <div>FirstName : <input type="text" v-model="firstName" /></div>
    <div>LastName : <input type="text" v-model="lastName" /></div>
    <button @click="updateProfile()">Update Profile</button>
    <div>
      <button @click="backToHome()">Back To Home</button>
    </div>
  </div>
</template>
