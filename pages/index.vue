<template>
    <div class="page-main w-full">
        <!-- Section Hero -->
        <section class="hero-home-section">
            <div class="container flex-col">
                <div class="container-content justify-between items-start flex py-5rem">
                    <div class="text-wrapper uppercase items-start">
                        <span class="--text-sp-viewable-small font-medium">
                            {{ $t('root.pages.home.content.hero.sub-text') }}
                        </span>
                        <p class="font-semibold u--text-p-viewable-med">
                            John Doe
                        </p>
                    </div>
                    <div class="content-text-element uppercase flex-col min-h-min items-start flex">
                        <div class="flex items-center w-full">
                            <p>{{ $t('root.pages.home.content.hero.sub-content.pre-text') }}</p>
                            <UiButton :is-link="true" :to="'/contact'" :class-name="'purpy'">
                                <Icon name="ri-arrow-right-up-line" size="1.5rem" style="color: white;" />
                            </UiButton>
                        </div>
                        <p>{{ $t('root.pages.home.content.hero.sub-content.post-text') }}</p>
                    </div>
                </div>
                <div class="flex-col container-content flex">
                    <div class="brescibidi-template-filligrane flex w-full">
                        <UiHeroGallery />
                    </div>
                </div>
            </div>
        </section>

        <!-- Section de présentation de l'artiste -->
        <section id="about-in-home" class="artist-presentation-section">
            <div class="container flex-col">
                <div class="section-title uppercase">
                    <div class="text-wrapper">
                        <span class="--text-sp-viewable-small font-medium">
                            {{ $t('root.pages.home.content.about.heading-pre-text') }}
                        </span>
                        <h1 class="--text-p-viewable-med">
                            {{ $t('root.pages.home.content.about.heading-text', { name: 'John Doe' }) }}
                        </h1>
                    </div>

                    <div class="link-wrapper flex-col flex">
                        <UiButton :is-link="true" :to="'/about'" :class-name="'prime'">
                            {{ $t('root.buttons.know-more') }}
                            <Icon name="ri-arrow-right-up-line" size="1.5rem" style="color: white;" />
                        </UiButton>
                    </div>
                </div>
                <div class="container-content flex w-full overflow-hidden max-h-[710px]">
                    <div class="artist-presentation-image-box flex-1 rounded-xl overflow-hidden">
                        <img
                            src="/photos/artist.webp" alt="Artist presentation image"
                            class="w-full h-full object-cover" />
                    </div>

                    <div class="flex-1 w-full flex artist-infos-block max-h-max flex-col">
                        <div class="flex p-2 5rem h-1/2 flex-col artist-bio">
                            <div class="font-medium">
                                <p>
                                    {{ $t('root.pages.home.content.about.bio.title') }}
                                </p>
                            </div>
                            <p class="--text-sp-viewable-small">{{ $t('root.pages.home.content.about.bio.text') }}</p>
                        </div>
                        <div class="flex artist-contact p-2 5rem h-1/2 flex-col">
                            <div class="font-medium">
                                <p>
                                    {{ $t('root.pages.home.content.about.contact.title') }}
                                </p>
                            </div>
                            <ul class="items-center flex-wrap inline-information flex">
                                <li class="flex-col box w-auto flex">
                                    <p class="box-title font-medium">
                                        {{ $t('root.pages.home.content.about.contact.email-title') }}
                                    </p>
                                    <span>hello@example.com</span>
                                </li>
                                <li class="flex-col box w-auto flex">
                                    <p class="box-title font-medium">
                                        {{ $t('root.pages.home.content.about.contact.phone-number-title') }}
                                    </p>
                                    <span>+00 00 00 00 00</span>
                                </li>
                            </ul>
                            <div class="flex justify-between artist-socials flex-row">
                                <UiSocialsLink />
                                <div class="button-wrapper">
                                    <UiButton :is-link="true" :to="'/contact'" :class-name="'prime'">
                                        {{ $t('root.buttons.lets-work') }}
                                    </UiButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section de présentation des oeuvres de l'artiste -->
        <section id="home-artist-portfolio" class="home-portfolio-section">
            <div class="container flex-col">
                <div class="section-title uppercase">
                    <div class="text-wrapper">
                        <span class="--text-sp-viewable-small font-medium">
                            {{ $t('root.pages.home.content.portfolio.heading-pre-text') }}
                        </span>
                        <h1 class="--text-p-viewable-med">
                            {{ $t('root.pages.home.content.portfolio.heading-text') }}
                        </h1>
                    </div>

                    <div class="link-wrapper flex">
                        <div class="buttons-wrapper gap-2 items-center flex justify-center">
                            <button
                                class="swiper-prev swiper-button h-60px justify-center rounded-full mr-2 flex aspect-square items-center flex"
                                type="button" :disabled="swiper.isBeginning.value" :aria-label="copy.previous" @click="swiper.prev()"
                            >
                                <Icon name="ri-arrow-left-s-line" size="1.5rem" style="color: white" />
                            </button>
                            <button
                                class="swiper-next swiper-button h-60px justify-center rounded-full mr-2 flex aspect-square items-center flex"
                                type="button" :disabled="swiper.isEnd.value" :aria-label="copy.next" @click="swiper.next()"
                            >
                                <Icon name="ri-arrow-right-s-line" size="1.5rem" style="color: white" />
                            </button>
                        </div>
                        <UiButton :is-link="true" :to="'/portfolio'" :class-name="'prime'">
                            {{ $t('root.buttons.view-all') }}
                            <Icon name="ri-arrow-right-up-line" size="1.5rem" style="color: white;" />
                        </UiButton>
                    </div>
                </div>
                <div class="container-content flex w-full overflow-hidden relative items-end">
                    <ClientOnly>
                        <swiper-container
                            ref="containerRef" :init="false"
                            class="artist-homepage-portfolio-view">
                            <swiper-slide
                                v-for="(media, index) in homepagePortfolio"
                                :key="index"
                            >
                                <UiCard 
                                    :media-name="media.file_name"
                                    :media-title="media.media_title"
                                    :media-date="media.add_date"
                                    :media-location="media.media_location"
                                />
                            </swiper-slide>
                        </swiper-container>
                    </ClientOnly>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const copy = useDemoCopy();
import { homepagePortfolio } from '~/assets/datas/portfolio'

const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
    slidesPerView: 1,
    breakpointsBase: 'container',
    resizeObserver: true,
    watchOverflow: true,
    grabCursor: true,
    speed: 650,
    spaceBetween: 10,
    keyboard: { enabled:true, onlyInViewport:true },
    a11y: { enabled:true },
    breakpoints: {
        600: { slidesPerView: 2, spaceBetween: 20},
        1000: { slidesPerView: 3, spaceBetween: 30},
        1440: { slidesPerView: 3, spaceBetween: 40},
    }
})


</script>

<style scoped lang="scss">
.page-main {
    section {
        &.hero-home-section {
            >.container {
                .container-content {
                    &:first-child {
                        padding: 10.125rem;

                        @media (max-width:1440px) {
                            padding: 3.75rem 5rem;
                        }

                        @media (max-width:490px) {
                            flex-direction: column;
                            padding: 2.5rem 1rem;
                        }

                        .text-wrapper,
                        .content-text-element {
                            row-gap: .625rem;

                            @media (max-width: 1440px) {
                                row-gap: .25rem;
                            }
                        }

                        .text-wrapper {
                            span {
                                font-size: 1.375rem;
                                color: var(--grey-40);

                                @media (max-width:1440px) {
                                    font-size: 1.125rem;
                                }

                                @media (max-width:991px) {
                                    font-size: 1.125rem;
                                }

                                @media (max-width:767px) {
                                    font-size: 2.5vw;
                                }

                                @media (max-width:490px) {
                                    font-size: 3.58974vw;
                                }
                            }

                            p {
                                font-size: 5rem;

                                @media (max-width:1440px) {
                                    font-size: 3.75rem;
                                }

                                @media (max-width:991px) {
                                    font-size: 5.25vw;
                                }

                                @media (max-width:767px) {
                                    font-size: 6.125vw;
                                }

                                @media (max-width:490px) {
                                    font-size: 10.2564vw;
                                }
                            }
                        }

                        .content-text-element {
                            font-size: 3.625rem;

                            @media (max-width:1440px) {
                                font-size: 3rem;
                            }

                            @media (max-width:991px) {
                                font-size: 5.25vw;
                            }

                            @media (max-width:767px) {
                                font-size: 6.125vw;
                            }

                            @media (max-width:490px) {
                                font-size: 7.1795vw;
                            }

                            .flex {
                                gap: .625rem;
                            }
                        }
                    }

                    &:last-child {
                        .brescibidi-template-filligrane {
                            padding: 1.25rem;
                            border-block: 1px solid var(--dark-12);
                            width: 100%;

                            @media (max-width:490px) {
                                padding: 1rem;
                                column-gap: 1rem;
                            }
                        }
                    }
                }
            }
        }

        &#about-in-home.artist-presentation-section {

            @media (max-width:490px) {
                padding-block: 3.75rem 1.875rem !important;
            }

            .container {
                .container-content {
                    gap: 1.25rem;
                    transition: all .3s ease-in;

                    @media (max-width:1440px) {
                        max-height: 585px;
                    }

                    @media (max-width:490px) {
                        flex-direction: column;
                        max-height: none;
                    }

                    .artist-infos-block {
                        align-self: center;
                        border: 1px solid var(--dark-12);
                        border-radius: 1.25rem;

                        >div {
                            @media (max-width: 1440px) {
                                padding: 1.875rem;
                            }

                            @media (max-width: 490px) {
                                padding: 1.5rem;
                            }

                            &.artist-bio {
                                border-bottom: .5px solid var(--dark-12);
                                row-gap: 1.25rem;

                                @media (max-width:1440px) {
                                    row-gap: 1rem;
                                }

                                >p,
                                span {
                                    color: var(--grey-70);
                                    font-size: 1.125rem;

                                    @media (max-width:1440px) {
                                        font-size: 1rem;
                                    }
                                }
                            }

                            &.artist-contact {
                                border-top: .5px solid var(--dark-12);
                                row-gap: 2.5rem;

                                @media (max-width:1440px) {
                                    row-gap: 1.875rem;
                                }

                                ul.inline-information {
                                    column-gap: 1rem;
                                    row-gap: .75rem;

                                    .box {
                                        row-gap: .625rem;

                                        @media (max-width:1440px) {
                                            row-gap: .375rem;
                                        }
                                    }
                                }

                                .artist-socials {
                                    column-gap: 3.75rem;

                                    @media (max-width:1440px) {
                                        column-gap: 3.125rem;
                                    }

                                    @media (max-width:490px) {
                                        column-gap: 0;
                                        row-gap: 1.25rem;
                                        flex-direction: column;
                                    }
                                }
                            }

                            &.artist-bio,
                            &.artist-contact {
                                >.font-medium {
                                    color: var(--grey-80);
                                    font-size: 1.875rem;

                                    @media (max-width: 1440px) {
                                        font-size: 1.5rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        &.home-portfolio-section {
            @media (max-width:490px) {
                padding-block: 1.875rem 7.5rem !important;
            }

            .container-content {
                column-gap: 3.125rem;

                @media (max-width: 1440px) {
                    column-gap: 1.875rem;
                }
            }
        }

        &.artist-presentation-section,
        &.home-portfolio-section {
            padding: 5rem 10.125rem;

            .container {
                display: flex;
                row-gap: 3.75rem;

                @media (max-width:490px) {
                    row-gap: 2.5rem;
                }
            }

            @media (max-width:1440px) {
                padding: 3.75rem 5rem;
            }

            @media (max-width:490px) {
                padding: 1rem;
            }
        }
    }

    section,
    section>.container {
        display: flex;
        width: 100%;
    }
}
</style>