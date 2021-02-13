<template>
    <div class="about">
         <div class="about__container container">
             <div class="about__contant">
                 <div class="about__header">
                    <a class="about__header-icon" href="https://www.linkedin.com/in/uliana-kucherenko" target="_blank">
                       <x-icon icon=linkedin style="font-size: 50px"/>
                    </a>
                    <p class="about__header-title">Hello, I'm Uliana! Creative front-end developer</p>
                </div>
                <p>I am actively looking for a junior developer position. Willing to join a dynamic, innovative, and collaborative team.</p>
                <p><b>Offers related to the internship are highly welcome!</b></p>
                <p>I finished studies in a ZNTU in 2020 May. During my studies I got knowledge of the basics programming in C++, OOP,
                    working with a database, as well as working on a project in a team. 
                    Interest in web development appeared at the university. My <a href="#" class="about__link">finel project</a> was the PhotoBlog 
                    web application built with Laravel and MySQL. Most of all I enjoyed working on the frontend, 
                    so I decided to focus on it after getting my diploma.</p>
           
                <p> Also I finished Front-End Development course at Beeetroot Academy in 2021,
                    where I got experience with semantic HTML, CSS, SCSS, Java Script|ES6 when doing <a href="#" class="about__link">practical tasks</a>.
                My <a href="#" class="about__link">finel project</a> was the CoffeeLike 
                    web application built with Vue Js, VueX and FireBase.  </p>
             </div>
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
        &__contant{
            max-width: 900px;
            width: 100%;
            text-align: inherit;
            @include text(16px, 600, #000);
        }

        &__header {
            @include flex(flex-start, flex-end,row);
            border-bottom: 1px solid rgb(199, 194, 194);
            min-height: 50px;
            margin-bottom: 20px;
        }


        &__header-title {
             @include text(18px, 600, #000);
        }

        &__header-icon {
             margin-right: 30px;
        }

        &__link {
             color: darkmagenta;
             &:hover,
             &:active {
                 color: rgb(226, 77, 226);
                 transition: all 0.3s ease-out;
             }
        }
    }
</style>