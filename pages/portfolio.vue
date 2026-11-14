<template>
    <div class="page-main w-full">
        <section class="artist-portfolio-full-section customized-section">
            <div class="flex-col relative container">
                <div class="container-content flex-col py-5rem relative">
                    <div class="flex-col flex w-full left-0 absolute">
                        <div class="text-wrapper uppercase">
                            <span class="--text-sp-viewable-small">
                                {{ $t('root.pages.home.content.portfolio.heading-pre-text') }}
                            </span>
                            <h1 class="--text-sp-viewable-small">
                                {{ $t('root.pages.portfolio.content.main.title') }}
                            </h1>
                        </div>
                        <p class="--text-sp-viewable-small">
                            {{ $t('root.pages.portfolio.content.main.text') }}
                        </p>
                    </div>

                    <div class="stylish-background-block overflow-hidden relative">
                        <div class="image-wrapper">
                            <img src="/photos/portfolio.webp" alt="artist-about-paysage-img" class="" />

                            <div class="overlay-text bottom-0 width-[320px] z-3 absolute py-6">
                                <p class="uppercase">
                                    {{ $t('root.pages.portfolio.content.main.overlay-text') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-wrapper">
                    <p class="uppercase --text-p-viewable-med">
                        {{ $t('root.pages.portfolio.content.main.text-2') }}
                    </p>

                    <div class="brescibidi-template-filigrane"></div>
                </div>
            </div>
        </section>

        <section class="artist-portfolio-section">
            <div class="container flex-col">
                <UiPortfolioSwiper
                    v-for="(category, index) in portfolioByCategories"
                    :key="index"
                    :slug="category.slug"
                    :items="category.items"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { portfolioByCategories } from '~/assets/datas/portfolio'
</script>

<style scoped lang="scss">
.page-main {
    transition: all .35s linear;

    section {
        &.artist-portfolio-full-section {
            .container {
                row-gap: 6.25rem;

                @media (max-width:1440px) {
                    row-gap: 5rem;
                }

                @media (max-width:490px) {
                    row-gap: 2.5rem;
                }

                .container-content {
                    flex-direction: column-reverse;

                    @media (max-width:490px) {
                        flex-direction: column-reverse;
                        row-gap: 1.875rem;

                        img {
                            height: 236px !important;
                        }
                    }
                }

                >.text-wrapper {
                    row-gap: 1.125rem;

                    @media (max-width:1440px) {
                        row-gap: .875rem;
                    }

                    @media (max-width:490px) {
                        padding: 2.5rem 0;
                        row-gap: 1.25rem;
                    }

                    >p {
                        font-weight: 500;
                        text-align: center;
                        color: var(--grey-50);

                        @media (max-width:1440px) {
                            font-size: .875rem;
                        }
                    }

                    .brescibidi-template-filigrane {
                        background-color: var(--dark-06);
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

        &.artist-portfolio-full-section .container-content,
        &.artist-portfolio-section .container {
            padding-block: 10.125rem;

            @media (max-width:1440px) {
                padding: 3.75rem 5rem;
            }

            @media (max-width:490px) {
                padding: 1.875rem 1rem;
            }
        }

        // &.artist-portfolio-section {
        //     .container {
        //     }
        // }
    }

    section,
    section .container,
    .container-content,
    .brescibidi-template-filigrane,
    .artist-portfolio-category-hd {
        display: flex;
        width: 100%;
    }
}
</style>