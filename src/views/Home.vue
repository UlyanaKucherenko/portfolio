<template>
  <div class="home">
    <div class="home__container container">
      <h2 class="home__name"> Uliana Kucherenko</h2>
      <h3 class="home__position">Front-end Developer</h3>
      <ul class="home__list-icons">
        <li class="home__item-list-icons">
          <x-icon icon=html />
        </li>
        <li class="home__item-list-icons">
           <x-icon icon=css />
        </li>
        <li class="home__item-list-icons">
           <x-icon icon=scss />
        </li>
        <li class="home__item-list-icons">
           <x-icon icon=jsl />
        </li>
        <li class="home__item-list-icons">
           <x-icon icon=fvue />
        </li>
      </ul>
      <ul class="home__list">
        <li class="home__item-list">
           <router-link to="/works" exact active-class="_active" class="home__item-link">
            See my projects
          </router-link>
        </li>
        <li class="home__item-list">
          <a href="https://www.linkedin.com/in/uliana-kucherenko" target="_blank" class="home__item-link">
            Let ` s connect
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  name: 'TheHeader',
  components: {
   
  },
  data(){
   return{
      menuActive: false,
      show: true,
    }
  },
  methods:{
   
  }
}
</script>
<style lang="scss">
  .home {
    background-color: #0a0f12;
    width: 100%;
    height: 100%;
    color: #fff;
    @include flex(center, center, column);
    position: relative;
    z-index: 1;

    
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      background: url("../assets/Stars.svg") no-repeat center;
      background-size: cover;
      z-index: 0;
    }

    &__container {
      position: relative;
      @include flex(center, center, column);
      text-align: center;
    }

    &__name {
      margin-bottom: 20px;
      text-transform: uppercase;
      @include text(28px, 600, #fff);
      font-style: italic;
    }

    &__position {
      margin-bottom: 10px;
      text-transform: uppercase;
      @include text(25px, 600, #fff);
      font-style: italic;
    }

    &__list-icons{
      width: 100%;
      min-height: 50px;
      @include flex(center, center, row);
      margin-bottom: 50px;
    }
    &__item-list-icons{
      font-size: 30px;
      margin-right: 5px;
      color: #fff;
      &:last-child {
        margin-right: 0;
      }
    }

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__item-list {
      min-height: 40px;
      width: 200px;
      background-color: green;
      @include flex(center, center, row);
      margin-bottom: 20px;
      text-transform: uppercase;
      border: 4px dotted #fff;
      border-radius: 10px;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
            background-color: rgb(6, 138, 6);
        }
    }

    &__item-link {
      @include text(16px, 500, #fff);
      height: 100%;
      width:100%;
      padding: 0 10px;
      &:hover,
      &:active {
           @include text(16px, 500, #fff);
        }
    }

 .fade-in-enter-active {
    animation: fadeIn 2s;
  }

  .fade-in-enter-leave {
    animation: fadeIn 2s;
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
