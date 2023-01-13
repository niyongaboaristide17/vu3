<!-- DC Heros -->
<template>
  <div class="flex flex-col items-center w-screen">
    <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
    <!-- <DcHeros/> -->
    <!-- <Calendar/> -->
    <div class="flex flex-col items-center w-full space-y-1">
      <router-view> </router-view>
    </div>
  </div>
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</template>

<script>
import auth from "./utilities/firebase";
import { onAuthStateChanged } from "firebase/auth";
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
// import Calendar from "./components/Calendar.vue";
// import DcHeros from "./components/DcHeros.vue";

export default {
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: null,
    };
  },
  components: {
    AppHeader,
    LoginModal,
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.isLoggedIn = true;
        this.authUser = { ...user };
      } else {
        this.isLoggedIn = false;
        this.authUser = null;
      }
    });
  },
};
</script>

<style>
</style>