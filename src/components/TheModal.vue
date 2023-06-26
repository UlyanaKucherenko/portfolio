<template>
  <div class="the-modal">
    <a-modal
        :title="currentItem.title"
        :visible="visible"
        @cancel="handleCancel"
        :footer="null"
    >
      <div class="the-modal__main">
        <div class="the-modal__col">
          <p class="the-modal__text">{{ currentItem.description }}</p>
          <h3 class="the-modal__subtitle">Technologies that I used:</h3>
          <p class="the-modal__text">{{ currentItem.tech }}</p>
          <div class="the-modal__image-wrap">
            <img
                :src="userWithIcon.imgSrc"
                :alt="currentItem.title"
            />
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: "TheModal",
  props: {
    currentItem: Object,
    visible: Boolean,
    handleCancel: Function
  },
  computed: {
    userWithIcon () {
      return {
        ...this.currentItem,
        imgSrc: this.currentItem.picture && require(`@/assets/img/${this.currentItem.picture}`)
      }
    }
  }
}
</script>
<style lang="scss">
.the-modal {
  &__main {
    @include flex(center, flex-start, row);
    width: 100%;
  }

  &__col {
    width: 100%;
  }

  &__image-wrap {
    margin-top: 10px;
    width: 100%;
    height: 300px
    }

  &__image-wrap img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: scale-down;
  }

}
</style>