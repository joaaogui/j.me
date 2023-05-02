<script setup></script>

<template>
  <div class="home">
    <span class="home__header">
      <h1 class="home__header__title">Oi!</h1>
      <span class="home__header__description">
        <p>
          Greetings! I am João Guilherme, a talented front-end developer
          currently based in Brasília, Brasil. With over 5 years of experience
          in frontend development, and 3 years working as a growth engineer, I
          have developed a keen eye for designing and developing intuitive,
          visually appealing user interfaces.
        </p>
        <p>
          I pride myself on taking a collaborative approach to development,
          which prioritizes open communication and problem-solving. I am always
          eager to take on new challenges and work on exciting projects.
        </p>
        <p>
          If you're curious about my skills, feel free to check out my projects
          section below. This website was built using Vue.JS, Typescript, HTML,
          and TailwindCSS.
        </p>
        <p>
          If you're interested in working with me, I'd love to hear from you.
          Please don't hesitate to get in touch.
        </p>
      </span>
    </span>
    <div class="home__projects">
      <a class="home__projects__title">Projects</a>
      <span class="home__projects__logos">
        <img
          v-for="image in images"
          class="home__projects__logos__item"
          @click="redirect(image.url)"
          :src="image.logo"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          url: "https://youtube.joaog.com",
          logo: "images/youtube_short.svg",
        },
        {
          url: "https://spotify.joaog.com",
          logo: "images/spotify.png",
        },
        {
          url: "https://imdb.joaog.com",
          logo: "images/imdb.png",
        },
        {
          url: "https://github.joaog.com",
          logo: "images/github-text.png",
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
<style lang="scss" scoped>
.home {
  @apply m-10 flex gap-x-6;
  &__header {
    &__title {
      @apply text-4xl mb-4;
    }
    &__description {
      @apply flex flex-col gap-y-2 max-w-xl mb-10;
    }
  }

  &__projects {
    @apply flex flex-col;
    &__title {
      @apply font-bold;
    }
    &__logos {
      @apply flex flex-row flex-wrap gap-2;
      &__item {
        @apply max-h-32 object-contain border border-gray-400 m-auto p-2 rounded-lg cursor-pointer;
        @apply hover:animate-pulse hover:bg-gray-100;
      }
    }
  }
}
</style>
