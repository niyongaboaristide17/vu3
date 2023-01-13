<template >
  <h1>Welcome to vue3 tutorial</h1>
  <router-link
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        delay: 500,
      },
    }"
    v-for="link in links"
    :key="link.title"
    class="p-1 px-4 bg-cyan-500 text-white hover:bg-cyan-600"
    :to="link.to"
    >{{ link.title }}</router-link
  >
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Dc Hero",
          to: "/dc-heros",
        },
        {
          title: "Calendar",
          to: "/calendar",
        },
        {
          title: "Markdown",
          to: "/markdown",
        },
        {
          title: "Slider Carousel",
          to: "/slider",
        },
      ],
    };
  },
};
</script>

<style>
</style>