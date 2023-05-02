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
    redirect(url) {
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
