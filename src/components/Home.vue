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
        <span
          v-for="image in images"
          class="home__projects__logos__item"
          @click="redirect(image.url)"
          @mouseover="image.showInfo = true"
          @mouseleave="image.showInfo = false"
        >
          <div class="home__projects__logos__item__img">
            <img :src="image.logo" />
          </div>

          <span
            v-if="image.showInfo"
            class="home__projects__logos__item__texts animate fade"
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
        </span>
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
          showInfo: true,
          url: "https://youtube.joaog.com",
          logo: "images/youtube.png",
          techs: ["Vue.JS", "Typescript", "HTML", "TailwindCSS"],
          title: "Youtube Data",
          description: "Find the most popular video of a Youtube channel",
        },
        {
          showInfo: false,
          url: "https://spotify.joaog.com",
          logo: "images/spotify.png",
          techs: ["Vue.JS", "Typescript", "HTML", "TailwindCSS"],

          title: "Spotify Popularity",
          description:
            "Discover the list of most popular songs of an Spotify artist",
        },
        {
          showInfo: false,
          url: "https://imdb.joaog.com",
          logo: "images/imdb.png",
          techs: ["Vue.JS", "Typescript", "HTML", "TailwindCSS"],

          title: "IMDB Best Season",
          description:
            "Find out what's the best season of a show, based on IMDb scores",
        },
        {
          showInfo: false,
          url: "https://github.joaog.com",
          logo: "images/github.png",
          techs: ["Vue.JS", "Typescript", "HTML", "TailwindCSS"],

          title: "Github Discovery",
          description:
            "Example platform for showcase. Gets info from the github api, and display it for a logged user",
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
      @apply text-4xl mb-4 text-gray-500;
    }
    &__description {
      @apply flex flex-col gap-y-2 mb-10;
    }
  }

  &__projects {
    @apply flex flex-col text-left;

    &__title {
      @apply font-bold text-left text-2xl mb-6 text-gray-500;
    }
    &__logos {
      @apply flex flex-row flex-wrap self-center justify-between gap-2;
      &__item {
        @apply flex flex-col items-center px-6 py-2 relative;
        @apply object-contain bg-blueGray-100  rounded-xl cursor-pointer;
        @apply transition duration-300 ease-in-out;
        @apply w-full h-80 md:w-80;
        &:hover {
          & .home__projects__logos__item__texts {
            @apply opacity-100;
          }
        }
        &__img {
          @apply mt-10;
        }
        &__texts {
          @apply flex flex-col w-11/12 opacity-100 text-gray-500;
          @apply absolute bottom-3;

          &__title {
            @apply font-bold text-gray-500 text-2xl mb-4;
          }
          &__description {
            @apply text-sm mb-4;
          }
          &__techs {
            @apply flex flex-row text-xs gap-1;
            &__item {
              @apply p-1 px-2 bg-white  text-gray-500 rounded-full m-auto flex flex-row;
            }
          }
        }
      }
    }
  }
}
.animate {
  animation-duration: 50ms;
  animation-duration: 300ms;
  animation-delay: 50ms;
  animation-name: animate-fade;
  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
  animation-fill-mode: backwards;
}

.animate.fade {
  animation-name: animate-fade;
  animation-timing-function: ease;
}
@keyframes animate-fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
