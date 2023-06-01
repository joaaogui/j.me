<script setup></script>

<template>
  <div class="home">
    <span class="home__header">
      <h1 class="home__header__title">Oi!</h1>
      <span class="home__header__description">
        <p>
          I am João Guilherme, a <b>front-end</b> developer currently based in
          Brasília, Brasil.
          <span
            >With over 5 years of experience in frontend development, and 3
            years working as a <b>growth engineer</b>, I have developed a keen
            eye for designing and developing <b>intuitive</b>,
            <b>visually appealing</b> user interfaces.</span
          >
        </p>
        <p>
          I pride myself on taking a collaborative approach to development,
          which prioritizes open <b>communication</b> and problem-solving.
        </p>
        <p>
          This website was built using <b>Vue.JS</b>, Typescript, HTML, and
          TailwindCSS.
        </p>
        <p>
          If you're interested in working with me, I'd love to hear from you.
          Please don't hesitate to <b>get in touch</b>.
        </p>
      </span>
    </span>
    <div class="home__projects">
      <a class="home__projects__title">Projects</a>
      <span class="home__projects__logos">
        <spa
          v-for="image in images"
          class="home__projects__logos__item"
          @click="redirect(image.url)"
          @mouseover="image.showInfo = true"
          @mouseleave="image.showInfo = false"
        >
          <img class="home__projects__logos__item__img" :src="image.logo" />
          <span
            v-if="image.showInfo"
            class="home__projects__logos__item__texts"
          >
            <span class="home__projects__logos__item__texts__title">{{
              image.title
            }}</span>
            <span class="home__projects__logos__item__texts__description">{{
              image.description
            }}</span>
            <span class="home__projects__logos__item__texts__techs">
              <span
                class="home__projects__logos__item__texts__techs__item"
                v-for="tech in image.techs"
                >{{ tech }}</span
              >
            </span>
          </span>
        </spa>
      </span>
    </div>
  </div>
</template>

<script>
import mixpanel from "mixpanel-browser";

export default {
  data() {
    return {
      images: [
        {
          showInfo: false,
          url: "https://youtube.joaog.com",
          logo: "images/youtube_short.svg",
          techs: ["Vue.JS", "Typescript", "HTML", "TailwindCSS"],
          title: "Youtube Data",
          description:
            "Lorem ipsum dolor sit amet, mollis non dolor nec, varius aliquet risus. Etiam hendrerit interdum erat, at tempor",
        },
        {
          showInfo: false,
          url: "https://spotify.joaog.com",
          logo: "images/spotify.png",
          techs: ["Vue.JS", "Typescript", "HTML", "TailwindCSS"],

          title: "Spotify Popularity",
          description:
            "Lorem ipsum dolor sit amet, Ut imperdiet tortor eget dolor suscipit",
        },
        {
          showInfo: false,
          url: "https://imdb.joaog.com",
          logo: "images/imdb.png",
          techs: ["Vue.JS", "Typescript", "HTML", "TailwindCSS"],

          title: "IMDB Best Season",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet tortor eget dolor suscipit",
        },
        {
          showInfo: false,
          url: "https://github.joaog.com",
          logo: "images/github-text.png",
          techs: ["Vue.JS", "Typescript", "HTML", "TailwindCSS"],

          title: "Github Discovery",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet tortor eget dolor suscipit",
        },
      ],
    };
  },
  methods: {
    redirect(url) {
      mixpanel.init("47d6cdcf042589196d3375de159e966d", { debug: true });
      mixpanel.identify((Math.random() + 1).toString(36).substring(7));
      mixpanel.track("redirect to site - home", { url });
      window.location.href = url;
    },
  },
  mounted() {
    mixpanel.track("Home pageview", {});
  },
};
</script>
<style lang="scss" scoped>
.home {
  @apply m-10 items-center flex flex-col gap-x-6 max-w-2xl justify-center;
  &__header {
    &__title {
      @apply text-4xl mb-4;
    }
    &__description {
      @apply flex flex-col gap-y-2 mb-10;
    }
  }

  &__projects {
    @apply flex flex-col text-left;
    &__title {
      @apply font-bold text-left text-2xl mb-4;
    }
    &__logos {
      @apply flex flex-row flex-wrap self-center justify-between gap-2;
      &__item {
        @apply flex flex-col justify-center items-center px-4 py-2;
        @apply object-contain bg-gray-100 rounded-lg cursor-pointer;
        @apply hover:bg-gradient-to-t from-gray-300 via-gray-200 to-white transition duration-300 ease-in-out;
        @apply w-80 h-96;
        &:hover {
          font-weight: bold;
          & .home__projects__logos__item__texts {
            @apply opacity-100;
          }
        }
        &__img {
          @apply max-w-36;
        }
        &__texts {
          @apply flex flex-col opacity-0 text-gray-600 mt-4;

          &__title {
            @apply font-extrabold text-3xl mb-4;
          }
          &__description {
            @apply text-sm mb-4;
          }
          &__techs {
            @apply flex flex-row text-sm;
            &__item {
              @apply p-1 px-2 bg-white  text-gray-500 rounded-full m-auto flex flex-row;
            }
          }
        }
      }
    }
  }
}
</style>
