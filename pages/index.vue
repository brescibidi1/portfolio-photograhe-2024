<template>
    <div class="page-main home-page w-full">
        <!-- Section Hero -->
        <section class="hero-home-section">
            <div class="container flex-col">
                <div class="container-content hero-intro">
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
                <div class="container-content artist-overview">
                    <div class="artist-presentation-image-box flex-1 rounded-xl overflow-hidden">
                        <img
                            src="/photos/artist.webp" alt="Artist presentation image"
                            class="w-full h-full object-cover" />
                    </div>

                    <div class="flex-1 w-full flex artist-infos-block flex-col">
                        <div class="flex flex-col artist-bio">
                            <div class="font-medium">
                                <p>
                                    {{ $t('root.pages.home.content.about.bio.title') }}
                                </p>
                            </div>
                            <p class="--text-sp-viewable-small">{{ $t('root.pages.home.content.about.bio.text') }}</p>
                        </div>
                        <div class="flex artist-contact flex-col">
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
.home-page {
    &, section { transition: none; }
    --home-gutter: clamp(1rem, 5vw, 8rem);
    --home-space: clamp(3.5rem, 6vw, 7rem);
    section, section > .container { width: 100%; min-width: 0; }
    section > .container { display: flex; flex-direction: column; max-width: none; }
    .hero-intro {
        display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
        align-items: end; gap: 2rem;
        padding: clamp(2.5rem, 5vw, 5rem) var(--home-gutter) clamp(2rem, 4vw, 4rem);
        .text-wrapper { display: grid; gap: .75rem; }
        .text-wrapper span { max-width: 29rem; font-size: clamp(.8rem, 1.2vw, 1.125rem); line-height: 1.5; color: var(--grey-50); }
        .text-wrapper > p { font-size: clamp(3rem, 5.5vw, 6.5rem); line-height: 1; letter-spacing: -.055em; }
        .content-text-element { gap: .2rem; font-size: clamp(1.75rem, 3.3vw, 4rem); line-height: 1.2; letter-spacing: -.045em; }
        .content-text-element > div { gap: .75rem; }
    }
    .brescibidi-template-filligrane { width: 100%; padding: 0 var(--home-gutter); }
    .artist-presentation-section, .home-portfolio-section {
        padding: var(--home-space) var(--home-gutter);
        > .container { gap: clamp(1.5rem, 3vw, 3rem); }
    }
    .section-title { align-items: end; gap: 1.5rem; flex-wrap: wrap; padding-bottom: 1.5rem; }
    .section-title .text-wrapper h1 { font-size: clamp(1.875rem, 3.5vw, 4rem); line-height: 1.1; letter-spacing: -.04em; }
    .section-title .text-wrapper span { font-size: .875rem; letter-spacing: .06em; }
    .section-title .link-wrapper { flex-wrap: wrap; gap: .75rem; }
    .home-portfolio-section .section-title .buttons-wrapper { position: static; inset: auto; transform: none; gap: .5rem; }
    .home-portfolio-section .swiper-button { height: 3rem; width: 3rem; margin: 0; }
    .artist-overview { display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); gap: clamp(1rem, 2vw, 2rem); align-items: stretch; }
    .artist-presentation-image-box { position: relative; border-radius: 1.25rem; min-height: 32rem; }
    .artist-presentation-image-box img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .artist-infos-block { border: 1px solid var(--dark-12); border-radius: 1.25rem; min-width: 0; align-self: stretch; }
    .artist-bio, .artist-contact { height: auto; padding: clamp(1.25rem, 2.25vw, 2.75rem); gap: 1.25rem; }
    .artist-bio { flex: 1; border-bottom: 1px solid var(--dark-12); }
    .artist-bio > p { font-size: 1rem; line-height: 1.8; color: var(--grey-70); }
    .artist-bio > .font-medium, .artist-contact > .font-medium { font-size: clamp(1.25rem, 1.7vw, 1.75rem); color: var(--grey-90); }
    .artist-contact { gap: 1.5rem; }
    .inline-information { gap: 1.25rem 2.5rem; }
    .inline-information .box { gap: .375rem; }
    .inline-information span { color: var(--grey-70); overflow-wrap: anywhere; }
    .artist-socials { gap: 1rem; flex-wrap: wrap; align-items: center; }
    @media (max-width: 900px) {
        .artist-overview { grid-template-columns: 1fr; }
        .artist-presentation-image-box { min-height: 0; height: clamp(22rem, 65vw, 36rem); }
    }
    @media (max-width: 650px) {
        .hero-intro { grid-template-columns: 1fr; gap: 1.5rem; }
        .hero-intro .text-wrapper > p { font-size: clamp(3rem, 12vw, 4.5rem); }
        .hero-intro .content-text-element { font-size: clamp(1.75rem, 6.5vw, 2.75rem); }
        .section-title { align-items: start; }
        .section-title .link-wrapper { width: 100%; justify-content: space-between; }
        .artist-contact .artist-socials { flex-direction: column; align-items: start; }
    }
}
</style>
