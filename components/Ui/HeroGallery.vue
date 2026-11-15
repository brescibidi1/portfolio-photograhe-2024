<template>
    <div class="gallery-hero-section">
        <div class="pictures-container grid relative">
            <div v-for="(image, index) in imagesUrl" :key="index" :class="['column relative', image.class]">
                <img :src="image.src" :alt="`Photo de démonstration ${index + 1}`" decoding="async" :class="''" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const imagesUrl = [
    {
        src: '/photos/image-15.webp',
        class: 'image-15'
    },
    {
        src: '/photos/image-16.webp',
        class: 'image-16'
    },
    {
        src: '/photos/image-13.webp',
        class: 'image-13'
    },
    {
        src: '/photos/image-11.webp',
        class: 'image-11'
    },
    {
        src: '/photos/image-17.webp',
        class: 'image-17'
    },
    {
        src: '/photos/image-12.webp',
        class: 'image-12'
    }
]
</script>

<style scoped lang="scss">
.gallery-hero-section {
    width: 100%;
    min-width: 0;
    flex: 1 1 0%;
    .pictures-container {
        width: 100%;
        height: clamp(340px, 34vw, 640px);
        min-width: 0;
        gap: .625rem;
        overflow: hidden;
        grid-template-columns: repeat(15, minmax(0, 1fr));
        grid-template-rows: repeat(8, minmax(0, 1fr));

        @media (max-width:490px) {
            height: clamp(280px, 82vw, 400px);
            gap: 0.3275rem;
        }

        .column {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border-radius: 10px;
            width: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                border-radius: 12px;
            }

            &.image-15,
            &.image-16 {
                &::after {
                    position: absolute;
                    content: '';
                    background: var(--dark-03);
                }
            }

            &.image-15 {
                grid-column: 1 / 6;
                grid-row: 1 / 7;


                &::after {
                    bottom: 0;
                    right: 2px;
                    border-radius: 17px 17px 0 0;
                    height: 51%;
                    width: 61%;

                    @media (max-width:490px) {
                        border-radius: 21px 14px 0 0;
                        right: 1px;
                    }
                }
            }

            &.image-16 {
                grid-column: 6 / 12;
                grid-row: 1 / 9;
                padding-inline: 0.25rem 0;

                @media (max-width:490px) {
                    padding-inline: 0;
                }

                &::after {
                    bottom: 0;
                    left: 0;
                    height: 64.5%;
                    border-radius: 0 32px 0 17px;
                    width: 51%;

                    @media (max-width:490px) {
                        height: 64%;
                    }
                }
            }

            &.image-13 {
                grid-column: 12 / 16;
                grid-row: 1 / 6;
            }

            &.image-11 {
                grid-column: 1 / 3;
                grid-row: 7 / 9;
            }

            &.image-17 {
                background: var(--dark-03);
                grid-column: 3 / 9;
                grid-row: 4 / 9;
                border-radius: 17px;

                img {
                    border-radius: 17px;
                }
            }

            &.image-12 {
                grid-column: 12 / 16;
                grid-row: 6 / 9;
            }
        }
    }
}
</style>
