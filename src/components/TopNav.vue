<template>
     <nav class="top-nav">
        <div class="top-nav__btns container">
          <div class="top-nav__wrap-logo"  @click="closeMenu()">
            <router-link class="top-nav__logo" to="/" exact>
              Portfolio
            </router-link>
          </div>
        <a-button @click="openMenu() " type="" shape="circle"  class="top-nav__burger-btn">
          <a-icon type="menu" class="top-nav__icon-menu" :class="{hiddenIcon}"/>
          <a-icon type="close" class="top-nav__icon-menu" v-if="menuActive" />
        </a-button>
        </div>
        <the-animation>
            <ul class="top-nav__menu" :class="{menuActive}" v-if="menuActive">
                <li class="top-nav__item-menu" @click="closeMenu()">
                <router-link to="/works" exact active-class="_active">
                    <span>Works</span>
                </router-link>
                </li>
                <li class="top-nav__item-menu">About</li>
                <li class="top-nav__item-menu" @click="closeMenu()">
                  <router-link to="/contact" exact active-class="_active">
                    <span>Contact</span>
                </router-link></li>
            </ul>
        </the-animation>
    </nav>
</template>
<script>

export default {
    name: "TopNav",
    components:{
       
    },
     data(){
        return{
            menuActive: false,
            show: true,
            hiddenIcon: false,
            }
        },
  methods:{
    openMenu(){
       this.menuActive = !this.menuActive;
       this.hiddenIcon = !this.hiddenIcon;
   },
   closeMenu(){
      this.menuActive = false;
      this.hiddenIcon = false;
   }
  }
}
</script>
<style lang="scss">


.top-nav {


  .hiddenIcon {
    display: none;
  }
     width: 100%;
    @include flex(center, center, column);
    &__btns {
      width: 100%;
      min-height: 70px;
      align-items: center;
      @include flex(space-between, center, row);
     
    }

    &__logo {
       @include text(18px, 500, #ffc39e);
       text-transform: uppercase;
       &:active {
         color:#ffc39e;
       }
    }

    &__menu {
       width: 100%;
       height: 100%;
       padding-top: 50px;
       border-top: 1px solid grey;
       display: none;

    }

    &__burger-btn {
      background: transparent;
      border: none;
      &:active,
      &:hover,
      &:focus {
        background: transparent;
      }
    }
    &__icon-menu {
      color: rgb(10, 151, 10);
      font-size: 30px
    }

    .menuActive {
      @include flex(flex-start, center, column);
       background-color: #0a0f12;
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