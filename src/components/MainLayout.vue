<template>
    <div class="main-layout">
        <div class="main-layout__container">
            <div class="main-layout__nav">
              <top-nav />
            </div>
            <div class="main-layout__content">
                <slot />
            </div>
               
        </div>
    </div>
</template>
<script>
import TopNav from './TopNav.vue';
export default {
    name: 'MainLayout',
    components: {
        TopNav
    }
}
</script>
<style lang="scss" >
    .main-layout {
        position: relative;
        min-height: 100vh;
       &__nav {
         background-color: rgba(#000, 1);
           min-height: 70px;
            width: 100%;
            position: fixed;
            top:0;
            z-index: 5;
       }
       &__content{
           display: flex;
           flex:1;
           min-height: 100vh;
           width: 100%;
       }
    }
</style>