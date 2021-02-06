<template>
  <div id="app">
    <main-layout>
      <router-view/>
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


</style>
