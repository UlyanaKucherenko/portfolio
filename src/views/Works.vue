<template>
    <div class="works">
        <div class="works__container container">
            <ul class="works__list">
            <li class="works__item-list">
                <div class="works__image-wrap">
                    <img src="https://picsum.photos/seed/picsum/250/300" />
                </div>
                    
                <div class="works__info">
                    <p class="works__title">CoffeeLike App | Vue Js </p>
                    <a href="#" target="_blank" class="works__preview">live preview</a>
                    <a href="#" target="_blank" class="works__github">GitHub</a>
                    <p class="works__read-more">read more...</p>
                </div>
            </li>
            <li class="works__item-list">
                <div class="works__image-wrap">
                   <img src="https://picsum.photos/id/236/250/300" />
                </div>
                 <div class="works__info">
                    <p class="works__title">CoffeeLike App | Vue Js | VueX</p>
                    <a href="#" target="_blank" class="works__preview">live preview</a>
                    <a href="#" target="_blank" class="works__github">GitHub</a>
                    <p class="works__read-more">read more...</p>
                </div>
            </li>
            <li class="works__item-list">
                <div class="works__image-wrap">
                   <img src="https://picsum.photos/id/236/250/300" />
                </div>
                 <div class="works__info">
                    <p class="works__title">CoffeeLike App | Vue Js | VueX</p>
                    <a href="#" target="_blank" class="works__preview">live preview</a>
                    <a href="#" target="_blank" class="works__github">GitHub</a>
                    <p class="works__read-more">read more...</p>
                </div>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Works"
}
</script>
<style lang="scss">
    .works {
        padding-top: 80px;
        width: 100%;
        
        &__container {
            padding-top: 20px;
            @include flex(center,center,column);
        }
        &__list{
            width: 100%;
            @include flex(center,center,column);
             @media screen and (min-width: 768px) {
                @include flex(space-between,center,row,wrap);
            }
        }
         &__item-list{
            margin-bottom: 30px;
            @include flex(center,center,column);
            text-align: center;
            border:1px dotted grey;
             width: 90%;
             max-width: 400px;
             padding: 10px 15px;
              
             @media screen and (min-width: 768px) {
                 width: 48%;
            }
            @media screen and (min-width: 960px) {
                 width: 30%;
            }
        }
        &__image-wrap {
            margin-bottom: 20px;
            border-radius:30px 0px 30px 0px ;
            border:1px solid grey;
            max-width: 250px;
            width: 100%;
            @include padding-hack($padding: 70%, $size: cover);
            img{
                 border-radius:30px 0px 30px 0px ;
            }
           
        }

        &__info{
            @include flex(center,center,column);
        }
        &__title {
            @include text(20px, 500, #000);
        }
        &__preview,
        &__github {
            display: block;
        }
        &__preview {
            background-color: green;
            min-height: 45px;
            max-width: 200px;
            @include flex(center,center,column);
            padding: 0 10px;
            color: #ffffff;
            cursor: pointer;
            margin-bottom: 10px;
            text-transform: uppercase;
        }

         &__github {
            background-color: #000000;
            min-height: 45px;
            max-width: 200px;
            @include flex(center,center,column);
            padding: 0 10px;
            color: #ffffff;
            cursor: pointer;
            margin-bottom: 10px;
            text-transform: uppercase;
        }

        &__read-more {
            display: block;
            text-transform: uppercase;
            @include text(20px, 500, green);
        }
    }
</style>