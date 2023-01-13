<template>
  <nav
    class="
      w-screen
      bg-gradient-to-r
      capitalize
      text-normal
      from-cyan-700
      to-sky-400
      p-4
      text-white
      font-semibold
      justify-center
      items-center
      flex
      space-x-4
    "
  >
    <router-link class="hover:underline hover:animate-pulse" v-for="link in links" :key="link.title"  v-bind:to="link.to">{{ link.title }}</router-link>
    <button v-if="isLoggedIn" @click="logout"  class="uppercase text-xs  border-2 rounded-full px-4 p-1 font-bold bg-red-800 hover:bg-red-900 text-white">Logout</button>
    <button v-else @click="$emit('open-login-modal')"  class="uppercase text-xs border-2 rounded-full px-4 p-1 hover:bg-sky-700">Login</button>
    
  </nav>
</template>

<script>
import auth from "../utilities/firebase";
import { signOut } from "firebase/auth";
import HomeVue from '../pages/Home.vue';
export default { 
  // props: ['isLoggedIn'],
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    logout(){
      signOut(auth).then(() => {
        console.log('logout success');
      }).catch(err => {
        console.log(err);
      })
    }
  },
  data() {
    return {
      links : [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Dc Hero',
          to: '/dc-heros'
        },
        {
          title: 'Calendar',
          to: '/calendar'
        },
        {
          title: 'Markdown',
          to: '/markdown'
        },
        {
          title: 'Slider Carousel',
          to: '/slider'
        }
      ]
    }
  },
};
</script>

<style>
</style>