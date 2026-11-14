<script setup lang="ts">
const copy=useDemoCopy(), notice=ref('');
const socials=[{ name:'Instagram', icon:'ri:instagram-line' },{ name:'X', icon:'ri:twitter-x-line' },{ name:'LinkedIn', icon:'ri:linkedin-fill' }];
</script>
<template><div class="demo-socials"><ul class="items-center flex justify-center"><li v-for="social in socials" :key="social.name" class="social-link"><button type="button" class="justify-center flex p-12px rounded-full overflow-hidden items-center cursor-pointer h-60px aspect-square" :aria-label="social.name + ' (demo)'" @click="notice=copy.social"><Icon :name="social.icon" size="1.25rem" /></button></li></ul><span class="social-feedback" role="status">{{ notice }}</span></div></template>
<style scoped lang="scss">
ul {
    column-gap: .625rem;
    padding: .5rem;
    border-radius: 100px;
    background-color: var(--dark-03);
    border: 1px solid var(--dark-12);
    width: max-content;

    @media (max-width:490px) {
        padding: 0.625rem;
    }

    .social-link {
        button {
            transition: all .3s ease;

            // &:first-of-type {
            //     &:hover {
            //         span {
            //             font-size: 1.2875rem !important;
            //         }
            //     }
            // }

            &:last-of-type {
                &:hover {
                    transform: translateY(3px);
                }
            }

            @media (max-width:1440px) {
                height: 40px;
                width: 40px;
            }

            @media (max-width:490px) {
                height: 48px;
                width: 48px;
            }
        }
    }

    &:has(>a) {
        .button {
            font-size: 1.125rem;
            padding: 1.125rem 2.125rem;

            @media (max-width:1440px) {
                font-size: .875rem;
                padding: .875rem 1.5rem;
            }

            @media (max-width:490px) {
                width: 100%;
            }
        }
    }

}
</style>
<style scoped>.demo-socials{position:relative}.social-link button{color:inherit}.social-feedback{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}</style>
