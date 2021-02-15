<template>
    <div class="main-layout">
        <div class="main-layout__container">
            <div class="main-layout__nav" :class="{ scrolling: scrollPosition > 0}" >
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
    },
    data() {
         return {
             scrollPosition: 0,
         }
       
    },
     mounted() {
        window.addEventListener("scroll", this.handleTopBar);
    },
    methods:{
        handleTopBar() {
            this.scrollPosition = window.scrollY;
        },
    }
}
</script>
<style lang="scss" >
    .main-layout {
        position: relative;
        min-height: 100vh;

         .scrolling {
            background-color:rgba(#0a0f12, 1);
            z-index: 2;
            transition: 0.5s ease-in;
            top: 0;
            padding: 10px 0;
            
        }

        &__nav {
            background-color: rgba(#0a0f12, 1);
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