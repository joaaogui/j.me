<script setup></script>

<template>
  <div class="top-bar">
    <span class="top-bar__logo">
      <img class="top-bar__logo" src="/images/logo.png" />
    </span>
    <span class="top-bar__links">
      <span
        v-for="image in images"
        @mouseover="image.showTooltip = true"
        @mouseleave="image.showTooltip = false"
        class="relative"
      >
        <img
          class="top-bar__links__image"
          @click="redirect(image.url)"
          :src="image.logo"
        />
        <Tooltip v-if="image.showTooltip" :text="image.description" />
      </span>
    </span>
  </div>
</template>

<script>
import mixpanel from "mixpanel-browser";
import Tooltip from "./Tooltip.vue";

export default {
  data() {
    return {
      images: [
        {
          url: "https://www.linkedin.com/in/joaaogui/",
          logo: "images/linkedin.png",
          showTooltip: false,
          description: "Check my LinkedIn",
        },
        {
          url: "https://github.com/joaaogui",
          logo: "images/github.png",
          showTooltip: false,
          description: "Take a look at my github repositories",
        },
        {
          url: "mailto:joaaogui@gmail.com",
          logo: "images/mail-black.png",
          showTooltip: false,
          description: "Get in touch with me",
        },
        {
          url: "https://github.com/joaaogui/j.me/",
          logo: "images/source-code.png",
          showTooltip: false,
          description: "Check the source code for this site",
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
  components: { Tooltip },
};
</script>

<style scoped lang="scss">
.top-bar {
  @apply w-full flex flex-row justify-around items-center gap-6 mt-6 mb-8;
  &__logo {
    @apply w-16 object-contain;
  }

  &__links {
    @apply flex gap-6 relative;
    &__image {
      @apply cursor-pointer object-contain w-10 hover:opacity-60;
    }
  }
}
</style>
