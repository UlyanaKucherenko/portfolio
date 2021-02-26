<template>

   <a-carousel class="the-carousel"
    :autoplay="true"
    :speed="1000"
    :autoplaySpeed="5000"
    effect="fade">
    <div class="the-carousel__slide" v-for="item in slides" :key="item.name">
        <div class="the-carousel__content">
            <div class="works__image-wrap">
                  <img :src="require(`@/assets/img/${item.picture}`)" :alt="item.title" />
            </div>
            <div class="works__info">
                <p class="the-carousel__title">{{item.title}}</p>
                <p class="the-carousel__descr">HTML5 | CSS3 | SCSS | BEM | gulp</p>
                <div class="works__btns-link">
                    <a :href="item.preview" target="_blank" class="works__preview">preview</a>
                    <a :href="item.github" target="_blank" class="works__github">GitHub</a>
                </div>
            </div> 
        </div>
    </div>
  </a-carousel>
  

</template>
<script>

export default {
  name:"TheCarousel",
  components:{
      
    },
    data(){
        return{
            slides:[
                {
                    title: "Cahee",
                    picture: "cahee.png",
                    github: "https://github.com/UlyanaKucherenko/Study-Projects/tree/master/projects/Cahee",
                    preview:"https://ulyanakucherenko.github.io/Study-Projects/projects/Cahee/app",
                },
                {
                    title: "Bhromaon",
                    picture: "bhromaon.png",
                    github: "https://github.com/UlyanaKucherenko/Study-Projects/tree/master/projects/Exam",
                    preview:"https://ulyanakucherenko.github.io/Study-Projects/projects/Exam/app",
                },
                {
                   title: "DisignlLab",
                    picture: "digitalLab.png",
                    github: "https://github.com/UlyanaKucherenko/Study-Projects/tree/master/projects/hw_12_DesignLab",
                    preview:"https://ulyanakucherenko.github.io/Study-Projects/projects/hw_12_DesignLab/app",
                },
            ],
          
        }
    },
};
</script>

<style lang="scss">
    .the-carousel {
        width: 100%;
        border-radius: 20px;
        min-height: 100px;

       & .slick-slide {
        text-align: center;
        overflow: hidden;
        }

        &__content {
            @include flex(center,center,column);
            width: 100%;
            min-height: 100px;
            margin-bottom: 30px;
        }

        & .slick-dots {
            height: 13px;
        }

        & .slick-dots-bottom {
            bottom: 0px;
        }

        & .slick-dots li  {
            margin-right: 15px;
            &:last-child {
                margin-right: 0;
            }
        }
        & .slick-dots li button {
            width: 13px;
            height: 13px;
            background-color: rgba(#000,0.8);
            border-radius: 50%;
        }

        & .slick-dots li.slick-active button {
            width: 13px;
            height: 13px;
            background: rgba(#000,0.8);
        }
        &__descr,
        &__title{
            margin-bottom: 10px;
            min-height: 0px;
            @include text(16px, 500, #000);
        }
    }
</style>