import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger);
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let context: ReturnType<typeof gsap.context> | undefined;
  let frame = 0;
  let observer: IntersectionObserver | undefined;

  const clear = () => {
    cancelAnimationFrame(frame);
    observer?.disconnect();
    observer = undefined;
    context?.revert();
    context = undefined;
  };

  const animate = () => {
    clear();
    if (preference.matches) return;
    const page = document.querySelector('.page-main');
    if (!page) return;
    const reveals = new Map<Element, gsap.core.Animation>();
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveals.get(entry.target)?.play();
        reveals.delete(entry.target);
        observer?.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .01 });
    const reveal = (target: Element, animation: gsap.core.Animation) => {
      reveals.set(target, animation);
      observer?.observe(target);
    };
    context = gsap.context(() => {
      const intro = page.querySelectorAll('.hero-intro .text-wrapper > *, .hero-intro .content-text-element > *');
      if (intro.length) gsap.from(intro, {
        y: 64, autoAlpha: 0, duration: 1.15, stagger: .16,
        ease: 'power3.out', clearProps: 'transform,opacity,visibility',
      });

      // Reveal the mosaic when it is actually visible, rather than offscreen on load.
      const gallery = page.querySelector('.pictures-container');
      if (gallery) {
        const photos = gallery.querySelectorAll('.column');
        reveal(gallery, gsap.from(photos, {
          paused: true,
          clipPath: 'inset(100% 0% 0% 0% round 12px)', autoAlpha: 0,
          duration: 1.25, stagger: .14, ease: 'power3.inOut',
          clearProps: 'clipPath,opacity,visibility',
        }));
        // Alternate the photo drift inside the fixed mosaic; its geometry never moves.
        photos.forEach((photo, index) => {
          const image = photo.querySelector('img');
          if (!image) return;
          gsap.fromTo(image, { scale: 1.16, yPercent: index % 2 ? -5 : 5 }, {
            scale: 1.16, yPercent: index % 2 ? 5 : -5, ease: 'none',
            scrollTrigger: { trigger: gallery, start: 'top bottom', end: 'bottom top', scrub: .8 },
          });
        });
      }

      page.querySelectorAll('.section-title, .artist-portfolio-category-hd, .demo-form').forEach((element) => {
        reveal(element, gsap.from(element, {
          paused: true,
          y: 56, autoAlpha: 0, duration: 1, ease: 'power3.out',
          clearProps: 'transform,opacity,visibility',
        }));
      });
      const portrait = page.querySelector('.artist-presentation-image-box');
      if (portrait) reveal(portrait, gsap.from(portrait, {
        paused: true,
        clipPath: 'inset(0% 100% 0% 0% round 20px)', duration: 1.3, ease: 'power3.inOut', clearProps: 'clipPath',
      }));
      const bio = page.querySelector('.artist-infos-block');
      if (bio) reveal(bio, gsap.from(bio, {
        paused: true,
        y: 64, autoAlpha: 0, duration: 1.15, ease: 'power3.out', clearProps: 'transform,opacity,visibility',
      }));
      page.querySelectorAll('swiper-container').forEach((slider) => {
        const cards = slider.querySelectorAll('.portfolio-element-card');
        if (!cards.length) return;
        reveal(slider, gsap.from(cards, {
          paused: true,
          y: 72, autoAlpha: 0, duration: 1.1, stagger: .14, ease: 'power3.out', clearProps: 'transform,opacity,visibility',
        }));
      });
    }, page);
    ScrollTrigger.refresh();
  };

  const schedule = () => { clear(); frame = requestAnimationFrame(animate); };
  nuxtApp.hook('app:mounted', schedule);
  nuxtApp.hook('page:start', clear);
  nuxtApp.hook('page:finish', schedule);
  preference.addEventListener('change', schedule);
  nuxtApp.vueApp.onUnmount(() => { clear(); preference.removeEventListener('change', schedule); });
});
