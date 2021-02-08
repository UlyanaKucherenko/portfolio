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
        height: calc(100vh-60px);
        &__nav {
            background-color: rgba(#000, 1);
            min-height: 70px;
            width: 100%;
            position: fixed;
            top:0px;
            z-index: 5;
        }
        &__content{
            display: flex;
            flex:1;
            height: 100vh;
            width: 100%;
            
        }
    }
</style>