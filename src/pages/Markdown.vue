<template>
  <section class="flex flex-wrap w-10/12 m-auto h-screen pt-4">
    <article class="border w-1/2 h-full">
      <textarea
        ref="markdownTextArea"
        :value="text"
        @input="update"
        name=""
        class="h-full w-full p-4"
      ></textarea>
    </article>
    <article
      v-html="markedText"
      class="border w-1/2 p-4 h-screen break-words"
    ></article>
  </section>
</template>

<script>
import { marked } from "marked";
import debounce from "../utilities/mixins/decounce";

export default {
  mixins: [debounce],

  mounted() {
    this.$refs.markdownTextArea.focus()
  },

  computed: {
    markedText() {
      return marked(this.text);
    },
  },

  data() {
    return {
      text: "",
    };
  },

  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
};
</script>

<style>
</style>