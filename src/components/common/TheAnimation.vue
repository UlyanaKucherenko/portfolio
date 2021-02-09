<template>
    <transition :name="name">
        <slot />
    </transition>
</template>
<script>
export default {
    name:'TheAnimation',
    props: {
        name:{
            validator(value){
             return ['fade-in-left','swing'].indexOf(value) !== -1;
            },
            default:"fade-in-left"
        }
    }
}
</script>
<style lang="scss">
    .fade-in-left-enter-active {
        animation: fadeInLeft 1s ;
        }
    .fade-in-left-enter-leave {
        animation: fadeInLeft 1s ;
        }

    @keyframes fadeInLeft {
        0% {
            opacity: 0;
            transform: translateX(-200px);
            }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }


    .swing-enter-active {
        animation: swing 1s;
        }
    .swing-enter-leave {
        animation: swing 1s;
        }

    @keyframes swing {
      20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
    }



</style>