<template>
     <nav class="top-nav">
        <div class="top-nav__btns container">
        <router-link to="/" class="top-nav__logo">
          MyPortfolio
        </router-link>
        <a-button @click="menuActive = !menuActive" type="primary" shape="circle" icon="menu" />
        </div>
        <the-animation>
            <ul class="top-nav__menu" :class="{menuActive}" v-if="menuActive">
                <li class="top-nav__item-menu" @click="menuActive = !menuActive">
                <router-link to="/works" exact active-class="_active">
                    <span>Works</span>
                    </router-link>
                </li>
                <li class="top-nav__item-menu">About</li>
                <li class="top-nav__item-menu">Contact</li>
            </ul>
        </the-animation>
    </nav>
</template>
<script>
export default {
    name: "TopNav",
     data(){
        return{
            menuActive: false,
            show: true,
            }
        },
  methods:{
   closeMenu(){
       this.menuActive = false;
   }
  }
}
</script>
<style lang="scss">

.top-nav {
     width: 100%;
      @include flex(center, center, column);
    &__btns {
      width: 100%;
      min-height: 80px;
      align-items: center;
      @include flex(space-between, center, row);
      ///
     
    }

    &__logo {
       @include text(18px, 500, #ffffff);
    }

    &__menu {
       //@include flex(flex-start, center, column);
       width: 100%;
       height: 100%;
       padding-top: 50px;
       border-top: 1px solid grey;
       display: none;

    }

    .menuActive {
      @include flex(flex-start, center, column);
       background-color: #000;
      min-height: 100vh;
    }

    &__item-menu{
      margin-bottom: 30px;
      @include text(35px, 500, #fff);
      text-transform: uppercase;
      &:last-child{
        margin-bottom: 0;
      }

    }
}
</style>