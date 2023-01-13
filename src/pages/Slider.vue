<template>
  <div class="relative flex flex-wrap w-full">
    <div v-for="(color, index) in sliders" :key="color" class="w-full absolute">
      <Transition name="slide" tag="div">
        <div
          v-if="index === currentSlide"
          style="height: 350px"
          :class="color"
        ></div>
      </Transition>
    </div>
    <div class="absolute w-full" style="height: 350px">
      <div
        class="h-full w-full flex justify-center p-2 space-x-1 items-end"
      >
      <div @click="changeCurrentSlide(index)" v-for="(color, index) in sliders" :key="color" class="shadow-xl cursor-pointer h-4 w-4 rounded-full" :class="color">
        <div
          v-if="index === currentSlide"
          class="border-4 w-full h-full rounded-full"
        ></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeCurrentSlide(slide){
      this.currentSlide = slide
    }
  },
  data() {
    return {
      currentSlide: 0,
      sliders: [
        "bg-teal-600",
        "bg-blue-600",
        "bg-yellow-600",
        "bg-green-600",
        "bg-red-600",
      ],
      interval: "",
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide =
        this.currentSlide === this.sliders.length - 1
          ? 0
          : this.currentSlide + 1;
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>