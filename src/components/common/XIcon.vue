<template>
    <component :is="getIcon"></component>
</template>

<script>
const getName = (name) => `icon-${name}`;
export default {
    name: 'Icon',
    props: {
        icon:{
            type:   String,
            default: 'html',
        },
    }, 
    components: {

        [getName('html')]: () => import('../icons/IconHtml.vue'),
        [getName('css')]: () => import('../icons/IconCss.vue'),
        [getName('jsl')]: () => import('../icons/IconJsl.vue'),
        [getName('scss')]: () => import('../icons/IconScss.vue'),
        [getName('react')]: () => import('../icons/IconReact.vue'),
        [getName('fvue')]: () => import('../icons/IconFvue.vue'), 
        [getName('plaine')]: () => import('../icons/IconPlaine.vue'),
        [getName('plaine')]: () => import('../icons/IconPlaine.vue'),
        [getName('linkedin')]: () => import('../icons/IconLinkedin.vue'),
        [getName('github')]: () => import('../icons/IconGithub.vue'),
        [getName('gmail')]: () => import('../icons/IconGmail.vue'),
        [getName('tel')]: () => import('../icons/IconTel.vue'),

    },
    computed: {
        getIcon() {
            return getName(this.icon);
        },
    },
};
</script>
