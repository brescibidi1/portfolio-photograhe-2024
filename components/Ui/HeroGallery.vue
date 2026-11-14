<template>
    <div class="gallery-hero-section">
        <div class="pictures-container grid relative w-full h-[512px] max-w-[90vw]">
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
        // src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8f&auto=format&fit=crop&w=1170&q=80',
        class: 'image-15'
    },
    {
        src: '/photos/image-16.webp',
        // src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8f&auto=format&fit=crop&w=1170&q=80',
        class: 'image-16'
    },
    {
        src: '/photos/image-13.webp',
        // src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8f&auto=format&fit=crop&w=1170&q=80',
        class: 'image-13'
    },
    {
        src: '/photos/image-11.webp',
        // src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8f&auto=format&fit=crop&w=1170&q=80',
        class: 'image-11'
    },
    {
        src: '/photos/image-17.webp',
        // src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8f&auto=format&fit=crop&w=1170&q=80',
        class: 'image-17'
    },
    {
        src: '/photos/image-12.webp',
        // src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8f&auto=format&fit=crop&w=1170&q=80',
        class: 'image-12'
    }
]
</script>

<style scoped lang="scss">
.gallery-hero-section {
    padding-inline: 10.125rem;

    @media (max-width:1440px) {
        padding-inline: 5rem;
    }

    @media (max-width:490px) {
        padding-inline: 1rem;
    }

    .pictures-container {
        gap: .625rem;
        overflow: hidden;
        grid-template-columns: repeat(15, 1fr);
        grid-template-rows: repeat(8, 1fr);

        @media (max-width:490px) {
            height: auto;
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
                transition: all .3s ease;

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
<style scoped>@media(max-width:490px){.gallery-hero-section .pictures-container{height:clamp(240px,72vw,360px)}}
</style>
