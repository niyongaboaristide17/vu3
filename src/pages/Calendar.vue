<template>
  <h1>Vue Calender</h1>
  <div v-motion
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
    }" class="bg-slate-300 p-2">
    <section class="flex justify-center">
      <!-- <h1 class="font-bold">
        {{ currentMonthName }}
      </h1> -->
      <h1 class="font-bold">
        {{ currentYear }}
      </h1>
    </section>
    <section class="flex text-white">
      <p
        class="
          h-10
          w-10
          bg-cyan-500
          items-center
          flex
          justify-center
          font-medium
          border
          text-xs
        "
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="grid grid-cols-7">
      <p
        class="h-10 w-10 border bg-cyan-600 items-center flex justify-center"
        v-for="num in startDay()"
        :key="num"
      >
        <!-- {{ num }} -->
      </p>
      <p
        class="
          h-10
          w-10
          bg-cyan-700
          hover:bg-cyan-500
          border
          text-white
          items-center
          flex
          justify-center
        "
        :class="num === currentDate && isTodayMonth ? 'bg-sky-400':''"
        v-for="num in daysInMonth()"
        :key="num"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between items-center font-semibold mt-1">
      <button
        @click="prev"
        class="p-1 bg-cyan-500 hover:bg-sky-600 text-white rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <span>
        {{ currentMonthName }}
      </span>
      <button
        @click="next"
        class="p-1 bg-cyan-500 hover:bg-sky-600 text-white rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
        return;
      }
      this.currentMonth++;
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
        return;
      }
      this.currentMonth--;
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth + 1,
        0
      ).toLocaleString("default", { month: "long" });
    },
    isTodayMonth() {
      const d = new Date()
      return d.getFullYear() === this.currentYear && d.getMonth() === this.currentMonth
    },
  },
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
};
</script>

<style>
</style>