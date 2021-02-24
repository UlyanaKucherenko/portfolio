<template>
  <div id="app">
    <main-layout>
      <transition name="fade-in" mode="out-in">
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

#app {

  .fade-in-enter-active {
    animation: fadeIn 1s;
  }

  .fade-in-enter-leave {
    animation: fadeIn 1s;
  }

  @keyframes fadeIn {
      0% {
        opacity: 0; 
        }
      100% {
        opacity: 1; 
        }
  }
}

</style>
