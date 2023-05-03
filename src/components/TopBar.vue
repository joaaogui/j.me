<script setup></script>

<template>
  <div class="top-bar">
    <img
      v-for="image in images"
      class="top-bar__image"
      @click="redirect(image.url)"
      :src="image.logo"
    />
  </div>
</template>

<script>
import mixpanel from "mixpanel-browser";

export default {
  data() {
    return {
      images: [
        {
          url: "https://www.linkedin.com/in/joaaogui/",
          logo: "images/linkedin.png",
        },
        {
          url: "https://www.linkedin.com/in/joaaogui/",
          logo: "images/github.png",
        },
        {
          url: "mailto:joaaogui@gmail.com",
          logo: "images/mail-black.png",
        },
        {
          url: "https://github.com/joaaogui/j.me/",
          logo: "images/source-code.png",
        },
      ],
    };
  },
  methods: {
    async redirect(url) {
      mixpanel.init("47d6cdcf042589196d3375de159e966d", { debug: true });
      mixpanel.identify((Math.random() + 1).toString(36).substring(7));
      await mixpanel.track("redirect to site - bar", { url });
      window.location.href = url;
    },
  },
};
</script>

<style scoped lang="scss">
.top-bar {
  @apply w-full flex flex-row justify-start max-h-10 py-1 ml-6;
  &__image {
    @apply cursor-pointer object-contain  w-16 hover:opacity-60;
  }
}
</style>
