<template>
  <div class="works">
    <div class="works__container container">
      <the-animation name="show-works">
        <ul class="works__list">
          <li class="works__item-list">
            <a class="works__item-link" href="https://github.com/UlyanaKucherenko" target="_blank">
              <h2 class="works__title-first">GitHub </h2>
              <div class="contact__image-wrap">
                <img src="../assets/source.gif" alt="plain" style="width:200px; height:180px">
              </div>
            </a>
          </li>
          <li
              class="works__item-list"
              v-for="item in projectsList"
              :key="item.title"
          >
            <div class="works__image-wrap">
              <img
                  :src="require(`@/assets/img/${item.picture}`)"
                  :alt="item.title"
              />
            </div>
            <div class="works__info">
              <p class="works__title">{{ item.title }}</p>
              <div class="works__btns-link">
                <a
                    :href="item.preview"
                    target="_blank"
                    class="works__preview"
                >
                  preview
                </a>
                <a
                    :href="item.github"
                    target="_blank"
                    class="works__github"
                >GitHub
                </a>
              </div>
              <p
                  class="works__read-more"
                  @click="showModal(item)">
                read more...
              </p>
            </div>
          </li>
          <li class="works__item-list works__item-carousel">
            <the-carousel/>
          </li>
        </ul>
      </the-animation>
      <the-modal
          :currentItem="currentItem"
          :handleCancel="handleCancel"
          :visible="visible">
      </the-modal>
    </div>
  </div>
</template>
<script>
import TheModal from "../components/TheModal.vue"
import TheCarousel from "../components/TheCarousel.vue"

export default {
  name: "Works",
  components: {
    TheModal,
    TheCarousel
  },
  data() {
    return {
      currentItem:{},
      projectsList: [
        {
          id: 0,
          title: "CoffeeLike App | Vue Js ",
          picture: "coffeeLike.png",
          description: "Final study project. Web App for ordering a cup of coffee.  ",
          tech: "Vue Js, Vuex, FireBase, SCSS, styled components, responsive design.",
          github: "https://github.com/UlyanaKucherenko/CoffeeLike",
          preview: "https://coffeelike.netlify.app",
        },
        {
          id: 1,
          title: "Merge Development | Vue Js",
          picture: "merge-development.png",
          description: "Test task for IT-company, singIn form & carousel.",
          tech: "Vue Js, ui-library AntDisigne,responsive design",
          github: "https://github.com/UlyanaKucherenko/Merge-Development",
          preview: "https://merge-development.netlify.app",
        },
        {
          id: 2,
          title: "Portfolio | Vue Js",
          picture: "portfolio.png",
          description: "Project with my other projects. ",
          tech: "Vue Js, Vue Router, styled components with Scss, mobile-first",
          github: "https://github.com/UlyanaKucherenko/portfolio",
          preview: "https://uliana-kucherenko.netlify.app",

        },
      ],
      visible: false,
    }
  },
  methods: {
    showModal(item) {
      this.visible = true;
      this.currentItem = item;
    },
    handleCancel() {
      this.visible = false;
    },
  }
}
</script>
<style lang="scss">

.works {
  padding-top: 70px;
  width: 100%;
  background-color: white;

  &__container {
    @include flex(center, center, column);
  }

  &__list {
    width: 100%;
    @include flex(center, center, column);
    @media screen and (min-width: 600px) {
      @include flex(space-between, center, row, wrap);
    }
  }

  &__item-list {
    margin-bottom: 40px;
    @include flex(center, center, column);
    text-align: center;
    border: 1px solid rgb(201, 199, 199);
    background-color: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    width: 90%;
    max-width: 250px;
    min-height: 360px;
    padding: 10px 15px;

    &:first-child {
      border-radius: 30px 0px 30px 0px;
      padding: 0;
      position: relative;
      box-shadow: none;
      border: 2px solid rgba(196, 191, 191, 0);

      &:hover {
        transition: 0.4s;
        border: 2px solid rgba(196, 191, 191, 1);
      }
    }

    @media screen and (min-width: 600px) {
      width: 50%;
    }
    @media screen and (min-width: 768px) {
      width: 30%;
    }
  }

  &__item-link {
    display: block;
    width: 100%;
    height: 100%;
    @include position($top: 0, $right: 0, $bottom: 0, $left: 0);
    position: absolute;
    @include flex(center, center, column);
    cursor: pointer;
  }

  &__image-wrap {
    margin-bottom: 10px;
    border-radius: 30px 0px 30px 0px;
    border: 2px solid grey;
    max-width: 250px;
    width: 100%;
    @include padding-hack($padding: 70%, $size: cover);

    img {
      border-radius: 28px 0px 28px 0px;
    }
  }

  &__info {
    @include flex(center, center, column);
  }

  &__title-first {
    @include text(35px, 500, #000);
  }

  &__title {
    @include text(20px, 500, #000);
    min-height: 60px;
    margin-bottom: 10px;
  }

  &__btns-link {
    @include flex(center, center, row);
    margin-bottom: 10px;
  }

  &__preview,
  &__github {
    display: block;
    border-radius: 30px 0px 30px 0px;
    transition: .4s;
    @include text(14px, 500, #fff);

    &:hover {
      color: #000;
      background-color: transparent;
    }
  }

  &__preview {
    background-color: green;
    border: 2px solid green;
    min-height: 45px;
    max-width: 200px;
    @include flex(center, center, column);
    padding: 0 10px;
    cursor: pointer;
    text-transform: uppercase;
    margin-right: 20px;

    &:hover {
      color: green;
    }
  }

  &__github {
    background-color: #000000;
    border: 2px solid #000;
    min-height: 45px;
    max-width: 200px;
    @include flex(center, center, column);
    padding: 0 10px;
    cursor: pointer;
    text-transform: uppercase;
  }

  &__read-more {
    display: block;
    text-transform: uppercase;
    @include text(16px, 500, green);
    cursor: pointer;

    &:hover,
    &:active {
      color: brown;
    }
  }

}
</style>