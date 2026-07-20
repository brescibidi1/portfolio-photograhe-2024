<template>
    <div class="w-full page-main">
        <section class="customized-section contact-form-section">
            <div class="container flex-col relative">
                <div class="container-content relative flex-col">
                    <div class="absolute left-0 flex-col flex w-full">
                        <div class="text-wrapper uppercase">
                            <span class="--text-sp-viewable-small">
                                {{ $t('root.pages.contact.content.main.pre-text') }}
                            </span>
                            <p class="--text-p-viewable-med">
                                {{ $t('root.pages.contact.content.main.title') }}
                            </p>
                        </div>
                        <p class="--text-sp-viewable-small">
                            {{ $t('root.pages.contact.content.main.text', { name: 'John Doe' }) }}
                        </p>
                    </div>

                    <div class="stylish-background-block overflow-hidden relative">
                        <div class="image-wrapper">
                            <NuxtImg src="/photos/contact.webp" alt="artist-contact-thank-you-with-hands-img" class="" />

                            <div class="overlay-text bottom-0 width-[320px] z-3 absolute py-6">
                                <p class="uppercase">
                                    {{ $t('root.pages.contact.content.main.overlay-text') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-content flex-col artist-contact-form py-0 relative">
                    <div class="element-block w-full items-center relative py-5rem justify-between flex">
                        <div class="left-element flex-col max-w-[535px]">
                            <p class="element-title font-semibold uppercase --text-p-viewable-med">
                                {{ $t('root.pages.home.content.about.contact.title') }}
                            </p>
                            <p>{{ $t('root.pages.contact.content.main.pre-form.text') }}</p>
                        </div>
                        <div class="right-element flex-wrap">
                            <div class="element-content relative flex items-baseline">
                                <a href="tel:+1234567890">+12 34 56 78 90</a>
                                <Icon name="ri-arrow-right-up-line" size="1.125rem" />
                            </div>
                            <div class="element-content relative flex items-baseline">
                                <a href="mailto:example@example.com">exemple@exemple.com</a>
                                <Icon name="ri-arrow-right-up-line" size="1.125rem" />
                            </div>
                        </div>
                    </div>
                    <div class="element-block w-full contact-form-block items-center relative py-5rem justify-between flex">
                        <div class="flex form-container flex-col w-full" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.page-main {
    section {
        .container {
            .container-content {
                &:not(.artist-contact-form) {
                    flex-direction: column-reverse;
                }
                
                &.artist-contact-form {
                    padding-inline: 10.125rem;

                    @media (max-width:1440px) {
                        padding-inline: 5rem;
                    }

                    @media (max-width:490px) {
                        padding-inline: 1rem;
                    }

                    .element-block {
                        background-color: var(--dark-03);
                        column-gap: 5rem;

                        @media (max-width:1440px) {
                            padding-block: 3.75rem;
                            column-gap: 3.75rem;
                        }

                        @media (max-width:490px) {
                            row-gap: 2.5rem;
                            flex-direction: column;
                            padding-block: 2.5rem;
                        }

                        >div {
                            position: relative;
                            transition: all .3s ease-in-out;

                            &.left-element {
                                color: var(--grey-50);
                                row-gap: 1.875rem;

                                @media (max-width:1440px) {
                                    row-gap: 1.5rem;
                                    max-width: 413px;
                                }

                                @media (max-width:490px) {
                                    row-gap: .875rem;
                                }

                                .element-title {
                                    font-size: 2.75rem;

                                    @media (max-width:1440px) {
                                        font-size: 2.125rem;
                                    }
                                }
                            }

                            &.right-element {
                                font-size: 1.125rem;
                                gap: 1rem 3.125rem;

                                .element-content {
                                    padding-block: .25rem;
                                    column-gap: .375rem;
                                    align-items: baseline;

                                    a {
                                        color: var(--grey-95);
                                        font-weight: 500;
                                    }

                                    &::after {
                                        position: absolute;
                                        content: '';
                                        left: 0;
                                        bottom: 0;
                                        height: 1px;
                                        width: 100%;
                                        background: var(--dark-20);
                                    }
                                }
                            }
                        }

                        &.contact-form-block {
                            &::before {
                                position: absolute;
                                content: '';
                                left: 0;
                                top: 0;
                                height: 1px;
                                width: 100%;
                                background: var(--dark-12);
                            }

                            .form-container {
                                row-gap: 3.125rem;

                                @media (max-width:1440px) {
                                    row-gap: 2.5rem;
                                }

                                @media (max-width:490px) {
                                    row-gap: 1.875rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    section,
    .container,
    .container-content,
    .element-block >div {
        display: flex;
        width: 100%;
    }
}
</style>