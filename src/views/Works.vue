<template>
    <div class="works">
        <div class="works__container container">
            <ul class="works__list">
                <li class="works__item-list" >
                    <a class="works__item-link" href="https://github.com/UlyanaKucherenko" target="_blank">
                        <h2 class="works__title-first">GitHub </h2>
                        <div class="contact__image-wrap">
                            <img src="../assets/source.gif" alt="plain" style="width:200px; height:180px">
                        </div>
                    </a>
                </li>
            <li class="works__item-list" v-for="item in projects" :key="item.title">
                <div class="works__image-wrap">
                    <img src="https://picsum.photos/seed/picsum/250/300" />
                </div>
                <div class="works__info">
                    <p class="works__title">{{item.title}}</p>
                    <div class="works__btns-link">
                        <a href="#" target="_blank" class="works__preview">preview</a>
                        <a href="#" target="_blank" class="works__github">GitHub</a>
                    </div>
                    <p class="works__read-more" @click="showModal" >read more...</p>
                </div>
                <div>
                    <a-modal
                    :title="item.title"
                    :visible="visible"
                    @cancel="handleCancel"
                    :footer="null"
                    >
                    <p>{{ ModalText }}</p>
                    </a-modal>
                </div>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Works",
    data(){
        return{
            projects: [
                {
                    image: "",
                    title: "CoffeeLike App | Vue Js ",
                    github: "",
                    preview:"",

                },
                 {
                    image: "",
                    title: "Manag | Vue Js",
                    github: "",
                    preview:"",

                },
                 {
                    image: "",
                    title: "Portfolio | Vue Js",
                    github: "",
                    preview:"",

                }
            ],

            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
        }
    },
    methods: {
         showModal() {
            this.visible = true;
            },
        handleCancel() {
            console.log('Clicked cancel button');
            this.visible = false;
        },
    }
}
</script>
<style lang="scss">
    .works {
        padding-top: 70px;
        width: 100%;
        
        &__container {
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
            border:2px dotted grey;
            width: 90%;
            max-width: 250px;
            min-height: 320px;
             padding: 10px 15px;
             &:first-child{
                border-radius:30px 0px 30px 0px ;
                padding: 0;
                position: relative;
                border:1px solid grey;
             }
              
             @media screen and (min-width: 768px) {
                 width: 48%;
            }
            @media screen and (min-width: 960px) {
                 width: 30%;
            }

           
        }

        &__item-link{
            display: block;
            width: 100%;
            height: 100%;
            @include position($top: 0, $right: 0, $bottom: 0, $left: 0);
            position: absolute;
            @include flex(center,center,column);
            cursor: pointer;
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

        &__title-first {
             @include text(35px, 500, #000);
        }

        &__title {
            @include text(20px, 500, #000);
            min-height: 60px;
        }

        &__btns-link {
            @include flex(center,center,row);
        }

        &__preview,
        &__github {
            display: block;
            border-radius:30px 0px 30px 0px ;
            transition: .3s;
            &:hover {
                box-shadow: none;
                color: #ffffff;
                }
        }
        &__preview {
            background-color: green;
            box-shadow: 0 4px 0 rgba(green, 0.5);
            min-height: 45px;
            max-width: 200px;
            @include flex(center,center,column);
            padding: 0 10px;
            color: #ffffff;
            cursor: pointer;
            margin-bottom: 10px;
            text-transform: uppercase;
            margin-right: 20px;
        }

         &__github {
            background-color: #000000;
            box-shadow: 0 4px 0 grey;
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
            cursor: pointer;
             &:hover,
             &:active {
                color: brown;
                }
        }
    }
</style>