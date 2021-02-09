<template>
    <div class="contact">
         <div class="contact__container container">
              <the-animation name="swing">
                <x-icon icon=plaine />
              </the-animation>
         </div>
    </div>
</template>
<script>
export default {
    name: "Contact"
}
</script>
<style lang="scss" >
    .contact {
        padding-top: 80px;
        width: 100%;
        
        &__container {
            padding-top: 20px;
            @include flex(center,center,column);
        }
    }
</style>