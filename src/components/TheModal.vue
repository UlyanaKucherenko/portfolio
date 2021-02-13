<template>
    <div class="the-modal">
        <a-modal
            :title="currentItem.title"
            :visible="visible"
            @cancel="handleCancel"
            :footer="null"
            >
            <div class="the-modal__main">
                <div class="the-modal__col the-modal__col_left ">
                    <div class="the-modal__wrap-image">
                          <img src="https://picsum.photos/seed/picsum/250/300" />
                    </div>
                </div>
                <div class="the-modal__col the-modal__col_right">
                    <h3 class="the-modal__subtitle">Technologies that I used:</h3>
                    <p class="the-modal__text">{{ currentItem.descreption }}</p>
                </div>
            </div>
        </a-modal>
    </div>
</template>
<script>
export default {
    name: "TheModal",
    props: ["currentItem", "visible", "handleCancel"]
}
</script>
<style lang="scss">
    .the-modal {
        &__main {
            @include flex(center,flex-start,row);
            width: 100%;
        }

        &__col {
            width: 50%;
            &_left {

            }
            &_right{
                padding-left:20px ;
            }
        }

        &__wrap-image {
            width: 100%;
            @include padding-hack($padding: 100%, $size: cover);
        }
    }
</style>