<template>
  <div id="app">
    <main-layout>
      <transition name="inner-fade" mode="out-in">
          <router-view />
      </transition>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from './components/MainLayout.vue';
export default {
  name:'App',
  components: {
   MainLayout
  }
}
</script>

<style lang="scss">

.inner-fade-enter-active,
 .inner-fade-leave-active {
  transition: opacity .2s
}
.inner-fade-enter, 
.inner-fade-leave-to {
  opacity: 0
}

</style>
