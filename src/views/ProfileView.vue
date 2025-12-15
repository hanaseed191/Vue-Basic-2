<script setup>
import { ref, onMounted, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
const route = useRoute();
const router = useRouter();
const backToHome = () => {
  //การใช้ท่านี้จะทำให้เราไม่ต้องระบุ path โดยตรง
  //และอาจจะทำอะไรบ้างอย่างก่อนจะไปหน้าอื่นได้
  router.push({ name: "home" });
};
const userStore = useUserStore();
onMounted(() => {
  firstName.value = userStore.firstName;
  lastName.value = userStore.lastName;
  console.log(route);
  console.log("params", route.params);
  console.log("query", route.query);
  console.log(userStore.firstName);
  console.log(userStore.lastName);
});
const isUpdate = ref(false);
const firstName = ref("");
const lastName = ref("");

watch([firstName, lastName], (newData) => {
  if (newData[0] !== userStore.firstName || newData[1] !== userStore.lastName) {
    isUpdate.value = false;
  }
});

const updateProfile = () => {
  console.log(firstName.value);
  console.log(lastName.value);
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
  };
  userStore.changeName(formData);
  isUpdate.value = true;
};
</script>
<template>
  <div>
    Profile View to Store
    <div v-if="isUpdate" style="color: blue">Profile Update</div>
    <div>FirstName : {{ userStore.firstName }}</div>
    <div>LastName : {{ userStore.lastName }}</div>
    <div>FullName : {{ userStore.fullName }}</div>
  </div>
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
