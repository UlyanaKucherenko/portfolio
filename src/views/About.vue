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
                <p class="about__text">I am actively looking for a junior developer position. Willing to join a dynamic, innovative, and collaborative team.
                <b class="about__offers">Offers related to the internship are highly welcome!</b></p>

                <ul class="about__soft-skills">
                    <li class="about__soft-skills-item">Energetic, flexible, highly motivated, positive team player</li>
                    <li class="about__soft-skills-item">Eager to learn and open to new challenges</li>
                    <li class="about__soft-skills-item">Having the potential to motivate and support others</li>
                </ul>

                <p class="about__text">I finished studies in a ZNTU in 2020 May. During my studies I got knowledge of the basics programming in C++, OOP,
                    working with a database, as well as working on a project in a team. 
                    Interest in web development appeared at the university. My <a href="https://github.com/UlyanaKucherenko/PhotoBlog" class="about__link">finel project</a> was the PhotoBlog 
                    web application built with Laravel and MySQL. Most of all I enjoyed working on the frontend, 
                    so I decided to focus on it after getting my diploma.</p>
           
                <p class="about__text"> Also I finished Front-End Development course at Beeetroot Academy in 2021,
                    where I got experience with semantic HTML, CSS, SCSS, Java Script|ES6 when doing <a href="https://github.com/UlyanaKucherenko/Study-Projects" class="about__link">practical tasks</a>.
                    My <a href="https://github.com/UlyanaKucherenko/CoffeeLike" class="about__link">finel project</a> was the CoffeeLike 
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
        background-color: white;
        
        &__container {
            @include flex(center,center,column);
        }
        &__contant{
            max-width: 900px;
            width: 100%;
            text-align: inherit;
            @include text(16px, 400, #000);
        }

        &__header {
            @include flex(flex-start, center,row);
            border-bottom: 1px solid rgb(199, 194, 194);
            min-height: 70px;
            margin-bottom: 20px;
        }


        &__header-title {
             @include text(18px, 600, #000);
             padding: 0;
             margin: 0;
        }

        &__header-icon {
             margin-right: 30px;
        }

        &__link {
            @include text(16px, 500, rgb(139, 0, 97));
             &:hover,
             &:active {
                 color: rgb(226, 77, 226);
                 transition: all 0.3s ease-out;
             }
        }

        &__text{
            margin-bottom: 10px;
        }
        &__offers{
            display: inline-block;
        }

        &__soft-skills {
            margin-bottom: 15px;
        }
        &__soft-skills-item {
           padding-left: 20px;
           position: relative;
           &::before {
               content: "";
               display: block;
               width: 8px;
               height: 8px;
               top: 50%;
                left: -5px;
                transform: translate(5px, -50%);
               background-color: rgb(139, 0, 97);
               border-radius: 50%;
               position: absolute;

           }
        }
    }
</style>