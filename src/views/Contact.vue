<template>
    <div class="contact">
         <div class="contact__container container">
               <div class="contact__image-wrap">
                    <img src="../assets/plane2.gif" alt="plain"  class="contact__image">
               </div>
               <h3 class="contact__text">Let`s talk!</h3>
              <ul class="contact__social-links">
                  <li class="contact__item-social-links">
                      <a href="https://www.linkedin.com/in/uliana-kucherenko" target="_blank" class="contact__link">
                           <x-icon icon=linkedin />
                      </a>
                  </li>
                  <li class="contact__item-social-links">
                      <a href="https://github.com/UlyanaKucherenko" target="_blank" class="contact__link">
                           <x-icon icon=github />
                      </a>
                  </li>
                  <li class="contact__item-social-links">
                      <a href="mailto:kucherenko.ul.ana@gmail.com" class="contact__link">
                           <x-icon icon=gmail />
                      </a>
                  </li>
                  <li class="contact__item-social-links">
                      <a href="tel:+380933256460" class="contact__link">
                           <x-icon icon=tel />
                      </a>
                  </li>
              </ul>
              
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
        padding-top: 70px;
        width: 100%;
        
        &__container {
            @include flex(center,center,column);
        }

         &__image-wrap{
             margin-bottom: 10px;
         }
        &__image{
            height: 300px;
            max-width: 500px;
            width: 100%;
        }
        &__text {
            margin-bottom: 10px;
             @include text(18px, 600, #000);
        }
        &__social-links{
            width: 100%;
            min-height: 50px;
            @include flex(center, center, row);
        }

        &__item-social-links{
            font-size: 40px;
            margin-right: 30px;
            color: #fff;
            &:last-child {
                margin-right: 0;
            }
        }
        &__link{
             color: #000;
             &:hover,
             &:active {
                 color: darkmagenta;
                 transition: all 0.3s ease-out;
             }
        }
    }
</style>