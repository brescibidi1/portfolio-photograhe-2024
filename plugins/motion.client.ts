import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger);
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let context: ReturnType<typeof gsap.context> | undefined;
  let frame = 0;

  const clear = () => {
    cancelAnimationFrame(frame);
    context?.revert();
    context = undefined;
  };

  const animate = () => {
    clear();
    if (preference.matches) return;
    const page = document.querySelector('.page-main');
    if (!page) return;
    context = gsap.context(() => {
      const intro = page.querySelectorAll('.hero-home-section .text-wrapper, .hero-home-section .content-text-element');
      if (intro.length) gsap.from(intro, { y: 24, autoAlpha: 0, duration: .85, stagger: .14, ease: 'power3.out', clearProps: 'all' });
      const photos = page.querySelectorAll('.gallery-hero-section .column');
      if (photos.length) gsap.from(photos, { y: 32, autoAlpha: 0, duration: 1, stagger: .09, delay: .15, ease: 'power3.out', clearProps: 'all' });
      page.querySelectorAll('.section-title, .artist-presentation-image-box, .artist-infos-block, .artist-portfolio-category-hd, .demo-form').forEach((element) => {
        gsap.from(element, { y: 28, autoAlpha: 0, duration: .8, ease: 'power3.out', clearProps: 'all', scrollTrigger: { trigger: element, start: 'top 92%', once: true } });
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
