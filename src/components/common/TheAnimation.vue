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
            type:String,
            default:"fade-in-left"
        }
    }
}
</script>
<style lang="scss">
    .fade-in-left-enter-active {
        animation: fadeInLeft 1s;
        }
    .fade-in-left-enter-leave {
        animation: fadeInLeft 1s;
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
</style>