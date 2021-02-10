<template>
    <div class="about">
         <div class="about-container container">
                <h1>about</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: "About",
}
</script>
<style lang="scss">
     .about {
        padding-top: 70px;
        width: 100%;
        
        &__container {
            @include flex(center,center,column);
        }
    }
</style>