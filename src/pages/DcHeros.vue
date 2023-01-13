<template>
  <h1>Dc Heros App</h1>
  <div
    class="font-bold text-xl text-gray-400 animate-pulse"
    v-if="dcHeroes.length === 0"
  >
    No hero found
  </div>
  <ul v-else class="space-y-2 flex-wrap">
    <li v-for="(hero, index) in dcHeroes" v-bind:key="hero.name">
      <div class="flex space-x-2 justify-between ease-in duration-2000">
        <span>{{ hero.name }}</span>
        <button
          class="bg-red-500 hover:bg-red-600 p-1"
          @click="removeHero(index)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  </ul>
  <form class="w-full" @submit.prevent="addHero">
    <div
      class="
        flex flex-col
        md:flex-row
        space-y-1
        md:space-y-0
        space-x-2
        md:justify-center
        items-center
      "
    >
      <input
        ref="newHeroRef"
        class="p-1 px-4 rounded-full border flex-wrap"
        placeholder="Type hero name"
        required
        v-model.trim="newHero"
      />
      <!-- v-model.trim.number.lazy="newHero" -->
      <button
        class="
          p-1
          hover:animate-pulse
          bg-sky-500
          hover:bg-sky-600
          text-white
          px-4
          font-semibold
          rounded-full
          flex
          items-center
          justify-center
        "
        type="submit"
      >
        Add Hero
      </button>
    </div>
  </form>
</template>

<script>
export default {
  mounted(){
    this.$refs.newHeroRef.focus()
  },
  methods: {
    addHero() {
      if (this.newHero.trim() !== "") {
        const addedHero = { name: this.newHero };
        this.dcHeroes.unshift(addedHero);
        this.newHero = "";
      }
    },

    removeHero(index) {
      this.dcHeroes = [...this.dcHeroes.filter((hero, idx) => idx != index)];
    },
  },
  data() {
    return {
      newHero: "",
      dcHeroes: [],
    };
  },
  computed: {
    heroesCount() {
      return this.dcHeroes.length + " Heros";
    },
    fullName() {
      return `Full name is ${this.fname} ${this.lname}`;
    },
  },
};
</script>

<style>
</style>