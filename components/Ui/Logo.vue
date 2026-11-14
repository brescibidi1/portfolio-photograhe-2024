<template>
    <div class="logo">
        <NuxtLinkLocale to="/" :class="className">
            <img src="/john-doe.svg" alt="template-logo" />
        </NuxtLinkLocale>
    </div>
</template>

<script setup lang="ts">
defineProps({
    className: { type: String, default: '' }
})
</script>

<style scoped lang="scss">
.logo {
    a {
        img {
            height: 27px;
        }

        &.mega {
            img {
                height: 173px;

                @media (max-width:1440px) {
                    height: 129px;
                }

                @media (max-width:490px) {
                    height: 53px;
                }
            }
        }
    }
}
</style>