<template>
    <footer class="brescibidi-template-footer">
        <div class="container w-full flex flex-col">
            <div class="flex-col extra-content flex items-end">
                <div class="mega-logo uppercase">
                    <UiLogo :class-name="'mega'" />
                </div>
                <div class="footer-filigrane w-full p-5" />
            </div>
            <div class="flex-col container-content overflow-hidden flex w-full">
                <div class="relative flex w-full footer-main-content">
                    <div class="--text-sp-viewable-small text-wrapper flex footer-wrapper relative w-full">
                        <p class="--text-sp-viewable-small">
                            {{ $t('root.footer.content.text') }}
                        </p>
                        <div class="content-text-element">
                            <div class="">
                                <p>{{ $t('root.pages.home.content.hero.sub-content.pre-text') }}</p>
                                <UiButton :is-link="true" :to="'/contact'" :class-name="'purpy'">
                                    <Icon name="ri-arrow-right-up-line" size="1.5rem" style="color: white;" />
                                </UiButton>
                            </div>
                            <p>{{ $t('root.pages.home.content.hero.sub-content.post-text') }}</p>
                        </div>
                    </div>
                    <div class="flex footer-links relative --text-sp-viewable-small justify-between w-full">
                        <div class="flex footer-links-block flex-col">
                            <h4 class="footer-links-title font-semibold">
                                {{ $t('root.footer.links.quick-links') }}
                            </h4>

                            <ul class="flex-col items-start flex">
                                <li class="flex footer-link">
                                    <NuxtLinkLocale :to="{ name: 'index' }">{{ $t('root.navlinks.home') }}</NuxtLinkLocale>
                                </li>
                                <li class="flex footer-link">
                                    <NuxtLinkLocale :to="{ name: 'about' }">{{ $t('root.pages.home.content.about.heading-pre-text') }}</NuxtLinkLocale>
                                </li>
                                <li class="flex footer-link">
                                    <NuxtLinkLocale :to="{ name: 'portfolio' }">{{ $t('root.pages.home.content.portfolio.heading-pre-text') }}</NuxtLinkLocale>
                                </li>
                                <li class="flex footer-link">
                                    <NuxtLinkLocale :to="{ name: 'contact' }">{{ $t('root.navlinks.contact') }}</NuxtLinkLocale>
                                </li>
                            </ul>
                        </div>
                        <div class="flex footer-links-block flex-col">
                            <h4 class="footer-links-title font-semibold">
                                {{ $t('root.navlinks.portfolio') }}
                            </h4>

                            <ul class="flex-col items-start flex">
                                <li class="flex footer-link">
                                    <NuxtLinkLocale :to="{ name: 'index' }">{{ $t('root.navlinks.home') }}</NuxtLinkLocale>
                                </li>
                            </ul>
                        </div>
                        <!-- <div class="flex footer-links-block flex-col">
                            <h4 class="footer-links-title font-semibold">
                                {{ $t('root.footer.links.h.title') }}
                            </h4>
                        </div> -->
                    </div>
                </div>
                <div class="copyright-line items-center flex justify-between w-full">
                    <UiSocialsLink />

                    <div class="text-wrapper copyright-text">
                        <p>{{ currentYear }} © John Doe. {{ $t('root.footer.copyrright-text-rights-reserved') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped lang="scss">
footer.brescibidi-template-footer {
    .container {
        .extra-content {
            row-gap: 6.25rem;

            @media (max-width: 1440px) {
                row-gap: 3.75rem;
            }

            @media (max-width: 490px) {
                row-gap: 1.25rem;
            }

            .mega-logo {
                display: flex;
                padding-right: 3.25rem;
                gap: .625rem;

                @media (max-width: 490px) {
                    padding-right: 1rem;
                }

                .footer-filigrane {
                    border-block: 1px solid var(--dark-12);

                    @media (max-width: 490px) {
                        padding: 1rem;
                        column-gap: 1rem;
                    }
                }
            }
        }

        .container-content {
            .footer-main-content {
                padding-inline: 10.125rem;
                border-bottom: 1px solid var(--dark-12);
                
                @media (max-width:1440px) {
                    padding-inline: 5rem;
                }
                
                @media (max-width:490px) {
                    padding-inline: 1rem;
                    flex-direction: column;
                }
                
                >div {
                    row-gap: 3.75rem;
                    padding: 6.25rem 5rem;
                    text-transform: uppercase;

                    @media (max-width:1440px) {
                        padding: 5rem 3.75rem;
                        row-gap: 3.125rem;
                    }

                    @media (max-width:490px) {
                        padding: 2.5rem 1.5rem;
                        row-gap: 1.25rem;
                    }

                    &::after {
                        position: absolute;
                        top: 50%;

                        @media (max-width:490px) {
                            display: none;
                        }
                    }

                    &.text-wrapper {
                        border-inline: 1px solid var(--dark-12);

                        &::after {
                            content: url('/assets/clipart-l.svg');
                            left: 0;
                            transform: translate(-100%, -50%);
                        }

                        >p {
                            color: var(--grey-50);
                            font-size: 1.25rem;

                            @media (max-width:1440px) {
                                font-size: 1rem;
                            }
                        }
                    }

                    &.footer-links {
                        border-right: 1px solid var(--dark-12);

                        @media (max-width:490px) {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            grid-column-gap: 1.25rem;
                            grid-row-gap: 3.125rem;
                            border-left: 1px solid var(--dark-12);
                        }

                        .footer-links-block {
                            row-gap: 1.25rem;

                            @media (max-width:1440px) {
                                row-gap: 1rem;
                            }

                            @media (max-width:490px) {
                                row-gap: .625rem;
                            }

                            .footer-links-title {
                                color: var(--grey-80);
                                font-size: 1.25rem;

                                @media (max-width:1440px) {
                                    font-size: 1rem;
                                }

                                // @media (max-width:490px) {
                                //     font-size: 1rem;
                                // }
                            }

                            ul {
                                row-gap: .625rem;

                                li.footer-link {
                                    a {
                                        padding: .625rem 0;
                                        border-bottom: 1px solid var(--dark-20);

                                        @media (max-width:490px) {
                                            padding: 0.375rem 0;
                                        }
                                    }
                                }
                            }
                        }

                        &::after {
                            content: url('/assets/clipart-r.svg');
                            right: 0;
                            transform: translate(100%, -50%);
                        }
                    }
                }
            }

            .copyright-line {
                padding: 1.875rem 10.125rem;

                @media (max-width:1440px) {
                    padding: 1.5rem 5rem;
                }

                @media (max-width:490px) {
                    flex-direction: column-reverse;
                    row-gap: 1rem;
                    padding: 1.25rem 1rem;
                }

                .copyright-text {
                    p {
                        color: var(--grey-50);
                        font-size: 1.125rem;

                        @media (max-width:1440px) {
                            font-size: 1rem;
                        }
                    }
                }
            }
        }
    }
}
</style>