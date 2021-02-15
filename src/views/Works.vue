<template>
    <div class="works">
        <div class="works__container container">
           <the-animation name="show-works">
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
                        <p class="works__read-more" @click="showModal(item)" >read more...</p>
                    </div> 
                </li>
            </ul>
           </the-animation>
            <the-modal :currentItem="currentItem" :handleCancel="handleCancel" :visible="visible"></the-modal>
        </div>
    </div>
</template>
<script>
import TheModal from "../components/TheModal.vue"
export default {
    name: "Works",
    components:{
        TheModal
    },
    data(){
        return{
            currentItem:{},
            projects: [
                {
                    image: "",
                    title: "CoffeeLike App | Vue Js ",
                    descreption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde inventore iusto praesentium cum consectetur doloribus minima, tenetur quod deserunt nemo modi iure, esse dignissimos suscipit nostrum optio rerum quae.",
                    github: "",
                    preview:"",
                },
                 {
                    image: "",
                    title: "Manag | Vue Js",
                    descreption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde inventore iusto praesentium cum consectetur doloribus minima, tenetur quod deserunt nemo modi iure, esse dignissimos suscipit nostrum optio rerum quae.",
                    github: "",
                    preview:"",
                },
                 {
                    image: "",
                    title: "Portfolio | Vue Js",
                    descreption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde inventore iusto praesentium cum consectetur doloribus minima, tenetur quod deserunt nemo modi iure, esse dignissimos suscipit nostrum optio rerum quae.",
                    github: "",
                    preview:"",

                },
                 {
                    image: "",
                    title: "Sushee | Vue Js",
                    descreption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde inventore iusto praesentium cum consectetur doloribus minima, tenetur quod deserunt nemo modi iure, esse dignissimos suscipit nostrum optio rerum quae.",
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
         showModal(item) {
            this.visible = true;
            this.currentItem = item;
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
             @media screen and (min-width: 600px) {
                @include flex(space-between,center,row,wrap);
            }
        }
         &__item-list{
            margin-bottom: 40px;
            @include flex(center,center,column);
            text-align: center;
            border:1px solid rgb(201, 199, 199);
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            width: 90%;
            max-width: 250px;
            min-height: 320px;
            padding: 10px 15px;
            &:first-child{
                border-radius:30px 0px 30px 0px ;
                padding: 0;
                position: relative;
                box-shadow: none;
                border:2px solid rgba(196, 191, 191,0);
                &:hover {
                    transition: 0.4s;
                    border:2px solid rgba(196, 191, 191,1);
                }
            }
              
            @media screen and (min-width: 600px) {
                width: 50%;
            }  
            @media screen and (min-width: 768px) {
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
            margin-bottom: 10px;
            border-radius:30px 0px 30px 0px ;
            border:2px solid grey;
            max-width: 250px;
            width: 100%;
            @include padding-hack($padding: 70%, $size: cover);
            img{
                 border-radius:28px 0px 28px 0px ;
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
            margin-bottom: 10px;
        }

        &__preview,
        &__github {
            display: block;
            border-radius:30px 0px 30px 0px ;
            transition: .4s;
            @include text(14px, 500, #fff);
            &:hover {
                color: #000;
                background-color: transparent;
            }
        }
        &__preview {
            background-color: green;
            border:2px solid green ;
            min-height: 45px;
            max-width: 200px;
            @include flex(center,center,column);
            padding: 0 10px;
            cursor: pointer;
            text-transform: uppercase;
            margin-right: 20px;
            &:hover {
                color: green;
            }
            
        }

         &__github {
            background-color: #000000;
             border:2px solid #000 ;
            min-height: 45px;
            max-width: 200px;
            @include flex(center,center,column);
            padding: 0 10px;
            cursor: pointer;
            text-transform: uppercase;
        }
        

        &__read-more {
            display: block;
            text-transform: uppercase;
            @include text(16px, 500, green);
            cursor: pointer;
             &:hover,
             &:active {
                color: brown;
                }
        }

    }
</style>