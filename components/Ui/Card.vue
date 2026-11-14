<template>
    <div class="overflow-hidden flex-1 portfolio-element-card w-full flex flex-col">
        <div class="portfolio-media-box flex image-wrapper overflow-hidden">
            <img :src="`/photos/${mediaName}`" :alt="mediaAlt || mediaTitle" loading="lazy" decoding="async" />
        </div>

        <div class="media-infos-container flex justify-between items-start">
            <div class="media-title-block flex-col flex w-full">
                <h3 class="media-title line-clamp-1">{{ mediaTitle }}</h3>
                <span class="media-addDate">{{ mediaDate }}</span>
            </div>
            <div class="uppercase media-location items-center font-medium relative flex justify-center">
                <p class="media-location-text">{{ mediaLocation }}</p>
                <Icon name="ri-map-pin-2-line" size="1.25rem" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    mediaName: { type: String, default: '/image-16.webp'},
    mediaAlt: { type: String, default: ''},
    mediaTitle: { type: String, required: true },
    mediaDate: { type: String, required: true },
    mediaLocation: { type: String, required: true },
})
</script>

<style scoped lang="scss">
.portfolio-element-card {
    row-gap: 19px;

    @media (max-width: 1440px) {
        row-gap: 1rem;
    }

    .portfolio-media-box {
        border-radius: .75rem;

        img {
            display: block;
            height: 100%;
            height: 470px;
            width: 100%;
            object-fit: cover;
        }
    }

    .media-infos-container {
        column-gap: 1.25rem;

        .media-title-block {
            row-gap: .25rem;
            line-height: 1.2;

            @media (max-width: 1440px) {
                row-gap: .125rem;
            }

            h3 {
                font-size: 1.25rem;
                color: var(--grey-80);

                @media (max-width: 1440px) {
                    font-size: 1.125rem;
                }
            }

            span {
                color: var(--grey-50);
                font-size: 1.125rem;

                @media (max-width: 1440px) {
                    font-size: 1rem;
                }
            }
        }

        .media-location {
            padding: 0 0 .375rem;
            color: var(--grey-95);
            column-gap: .25rem;

            &::after {
                position: absolute;
                content: '';
                bottom: 2px;
                left: 0;
                height: 1px;
                width: 100%;
                background-color: var(--dark-20);
            }
        }
    }
}
</style>