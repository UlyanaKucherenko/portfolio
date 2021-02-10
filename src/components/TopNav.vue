<template>
     <nav class="top-nav">
        <div class="top-nav__btns container">
          <div class="top-nav__wrap-logo"  @click="closeMenu()">
            <router-link class="top-nav__logo" to="/" exact active-class="_active">
              Portfolio
            </router-link>
          </div>
        <a-button @click="openMenu()" shape="circle"  class="top-nav__burger-btn">
          <a-icon type="menu" class="top-nav__icon-menu" :class="{hiddenIcon}"/>
          <a-icon type="close" class="top-nav__icon-menu" v-if="menuActive" />
        </a-button>
        </div>
        <the-animation>
            <ul class="top-nav__menu" :class="{menuActive}" v-if="menuActive">
                <li class="top-nav__item-menu" @click="closeMenu()" v-for="{title, route} in routes" :key="title">
                <router-link :to="route" exact active-class="_active"  class="top-nav__link">
                  {{title}}
                </router-link>
                </li>
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
            routes:[
              {
                title: "Works",
                route:"/works"
              },
               {
                title: "About",
                route:"/about"
              },
               {
                title: "Contact",
                route:"/contact"
              }
            ]
            
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

    width: 100%;
    @include flex(center, center, column);
    
    &__btns {
      width: 100%;
      min-height: 50px;
      align-items: center;
      @include flex(space-between, center, row);
    }

    &__logo {
       @include text(18px, 500, #fff);
       text-transform: uppercase;
       font-style: italic;
      &:hover{
        color:rgb(185, 56, 185);
        transition: all 0.3s ease-out;
      }
      &._active {
        color: darkmagenta;
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
      color: #fff;
      font-size: 30px;
    }

    .hiddenIcon {
      display: none;
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
    &__link {
       @include text(35px, 500, #fff);
       &:hover,
       &:active {
        color: darkmagenta;
        transition: all 0.3s ease-out;
      }
      &._active {
        color: darkmagenta;
      }
    }
}
</style>