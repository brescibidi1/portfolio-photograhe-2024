<template>
    <div class="page-main w-full">
        <section class="about-artist-full-section customized-section py-5rem">
            <div class="flex-col container">
                <div class="container-content specific-container flex-col relative">
                    <div class="flex-col flex w-full left-0 absolute">
                        <div class="text-wrapper uppercase">
                            <span class="--text-sp-viewable-small">
                                {{ $t('root.pages.home.content.about.heading-pre-text') }}
                            </span>
                            <h1 class="--text-sp-viewable-small">
                                {{ $t('root.pages.about.content.main.title', { name: 'John Doe' }) }}
                            </h1>
                        </div>
                        <div class="artist-global-statistics flex w-full">
                            <ul class="grid py-3">
                                <li
                                    v-for="(stat, index) in stats"
                                    :key="index"
                                    class="stat-pad text-start flex-col rounded-xl py-6 flex"
                                >
                                    <h4 class="--text-p-viewable-medium">
                                        {{ stat.value }}
                                    </h4>
                                    <p class="--text-sp-viewable-small">
                                        {{ $t(stat.title_key) }}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="stylish-background-block overflow-hidden relative">
                        <div class="image-wrapper">
                            <NuxtImg src="/photos/mountains_sunset.webp" alt="artist-about-paysage-img" class="" />

                            <div class="overlay-text bottom-0 width-[320px] z-3 absolute py-6">
                                <p class="uppercase">
                                    {{ $t('root.pages.about.content.main.overlay-text') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-wrapper">
                    <span class="uppercase --text-p-viewable-med">
                        {{ $t('root.pages.about.content.bio.title') }}
                    </span>
                    <p class="--text-sp-viewable-small">
                        {{ $t('root.pages.about.content.bio.text') }}
                    </p>
                </div>
            </div>
        </section>

        <section class="artist-bio-section flex-col py-5rem">
            <div class="container flex-col">
                <div class="section-title uppercase">
                    <div class="text-wrapper">
                        <span class="--text-sp-viewable-small font-medium">
                            {{ $t('root.pages.about.content.journey.heading-pre-text') }}
                        </span>
                        <h2 class="--text-p-viewable-med">
                            {{ $t('root.pages.about.content.journey.heading-text', { firstname: 'John' }) }}
                        </h2>
                    </div>
                </div>
                <div class="container-content">
                    <ul class="grid timeline-details">
                        <UiTimelineStep
                            v-for="(step, index) in steps"
                            :key="index"
                            :step-title="$t(step.title, { year: step.year })"
                            :step-text="step.text"
                        />
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { steps, stats } from '~/assets/datas/steps'
</script>

<style scoped lang="scss">
.page-main {
    transition: all .35s linear;

    section {
        &.about-artist-full-section {
            padding-block: 10.125rem;

            @media (max-width:1440px) {
                padding: 3.75rem 5rem;
            }

            @media (max-width:490px) {
                padding: 1.875rem 1rem;
            }

            .container {
                row-gap: 6.25rem;

                @media (max-width:1440px) {
                    row-gap: 5rem;
                }

                @media (max-width:490px) {
                    row-gap: 3.75rem;
                }

                .container-content {
                    padding: 0 !important;

                    @media (max-width:490px) {
                        flex-direction: column-reverse;
                        row-gap: 1.875rem;

                        img {
                            height: 236px !important;
                        }
                    }

                    >.absolute {
                        background: transparent;
                        top: -1px !important;
                        padding: 0 !important;
                        row-gap: 1.75rem;

                        @media (max-width:490px) {
                            row-gap: 1.5rem;
                        }

                        @media (min-width:491px) {
                            .text-wrapper {
                                padding: 3.0625rem 1.5rem 1rem 0;
                                border-bottom-right-radius: 30px;
                                width: 76.125vw !important;
                            }
                        }

                        .artist-global-statistics {
                            ul {
                                background-color: var(--dark-03);
                                grid-template-rows: repeat(1, 1fr);
                                grid-template-columns: repeat(6, 1fr);
                                grid-column-gap: 1.25rem;

                                @media (max-width:490px) {
                                    grid-template-columns: repeat(2, 1fr);
                                    grid-column-gap: .625rem;
                                    grid-row-gap: .625rem;
                                }

                                .stat-pad {
                                    background-color: var(--dark-06);
                                    border: 1px solid var(--dark-12);
                                    padding-inline: 1.875rem;

                                    @media (max-width:1440px) {
                                        padding: 1.5rem 1.25rem;
                                    }

                                    @media (max-width:490px) {
                                        text-align: center;
                                        padding: 1.25rem 0.75rem;
                                    }

                                    h4 {
                                        font-size: 3rem;

                                        @media (max-width:1440px) {
                                            font-size: 2.125rem;
                                        }
                                    }

                                    p {
                                        color: var(--grey-50);

                                        @media (max-width:1440px) {
                                            font-size: .875rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                >.text-wrapper {
                    border-top: 1px solid var(--dark-12);
                    row-gap: 2.5rem;
                    padding: 5rem 0;
                    color: var(--grey-50);

                    @media (max-width:1440px) {
                        padding: 3.75rem 0;
                    }

                    @media (max-width:490px) {
                        padding: 2.5rem 0;
                        row-gap: 1.25rem;
                    }

                    span {
                        font-size: 2.75rem;
                        font-weight: 600;

                        @media (max-width:1440px) {
                            font-size: 2.125rem;
                        }
                    }

                    p {
                        font-size: 1.125rem;

                        @media (max-width:1440px) {
                            font-size: 1rem;
                        }
                    }
                }
            }
        }

        &.artist-bio-section {
            padding-inline: 10.125rem;

            @media (max-width:1440px) {
                padding: 3.75rem 5rem;
            }

            @media (max-width:490px) {
                padding: 1rem;
            }
            
            .container {
                row-gap: 3.75rem;

                @media (max-width:490px) {
                    row-gap: 2.5rem;
                }

                .container-content {
                    .timeline-details {
                        grid-template-rows: repeat(1, 1fr);
                        grid-template-columns: repeat(2, 1fr);
                        grid-column-gap: 1.875rem;
                        grid-row-gap: 1.875rem;
                        background: var(--dark-03);

                        @media (max-width:1440px) {
                            grid-column-gap: 1.25rem;
                            grid-row-gap: 1.25rem;
                        }

                        @media (max-width:490px) {
                            grid-template-columns: repeat(1, 1fr);
                        }
                    }
                }
            }
        }
    }

    section,
    section .container,
    .container-content {
        display: flex;
        width: 100%;
    }
}
</style>