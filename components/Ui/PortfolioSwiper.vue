<script setup lang="ts">
defineProps<{
    slug: string
    items: {
        file_name: string
        media_title: string
        add_date: string
        media_location: string
    }[]
}>()

const containerRef = ref(null)
// let swiper: any = null

const swiper = useSwiper(containerRef, {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20},
        1024: { slidesPerView: 3, spaceBetween: 30},
        1440: { spaceBetween: 50},
    }
})

const prev = () => swiper.prev()
const next = () => swiper.next()
</script>

<template>
    <div 
        class="relative container-content flex-col portfolio-category">
        <!-- Header -->
        <div class="flex artist-portfolio-category-hd w-full justify-between items-center">
            <h3 class="uppercase --text-p-viewable-med font-semibold">
                {{ $t(slug) }}
            </h3>

            <div class="link-wrapper flex">
                <div class="buttons-wrapper gap-2 items-center flex justify-center">
                    <button
                        class="swiper-prev swiper-button h-60px justify-center rounded-full mr-2 flex aspect-square items-center flex"
                        @click="prev">
                        <Icon name="ri-arrow-left-s-line" size="1.5rem" style="color: white" />
                    </button>
                    <button
                        class="swiper-next swiper-button h-60px justify-center rounded-full mr-2 flex aspect-square items-center flex"
                        @click="next">
                        <Icon name="ri-arrow-right-s-line" size="1.5rem" style="color: white" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Swiper -->
        <ClientOnly>
            <swiper-container 
                ref="containerRef"
                class="portfolio-category-container grid auto-rows-auto [grid-auto-flow:dense]">
                <swiper-slide 
                    v-for="(item, idx) in items" 
                    :key="idx"
                    :init="false"
                >
                    <UiCard 
                        :media-name="item.file_name"
                        :media-title="item.media_title"
                        :media-date="item.add_date"
                        :media-location="item.media_location"
                    />
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </div>
</template>

<style lang="scss">
.container-content.portfolio-category {
    padding-block: 3.125rem;
    row-gap: 3.125rem;
    border-top: 1px solid var(--dark-12);

    @media (max-width:1440px) {
        padding-block: 3.75rem;
        row-gap: 2.5rem;
    }

    @media (max-width:490px) {
        padding-block: 1.875rem 7.5rem !important;
    }

    .artist-portfolio-category-hd {
        h3 {
            font-size: 2.75rem;
            color: var(--grey-50);

            @media (max-width:1440px) {
                font-size: 2.125rem;
            }
        }
    }

    .portfolio-category-container {
        column-gap: 3.125rem;

        @media (max-width:1440px) {
            column-gap: 2.5rem;
        }
    }
}

.container-content {
    display: flex;
    width: 100%;
}
</style>