<script setup lang="ts">
const copy = useDemoCopy();
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>
<template>
  <aside class="demo-notice" aria-label="Demo">
    <p>{{ copy.notice }}</p>
    <div><a href="https://kenelm.brescibidi.com/labo">{{ copy.current }} ↗</a><nav aria-label="Language"><NuxtLink :to="switchLocalePath('fr')" :aria-current="locale === 'fr' ? 'page' : undefined" lang="fr">FR</NuxtLink><NuxtLink :to="switchLocalePath('en')" :aria-current="locale === 'en' ? 'page' : undefined" lang="en">EN</NuxtLink></nav></div>
  </aside>
</template>
<style scoped>
.demo-notice{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:.75rem 1.5rem;padding:.8rem clamp(1rem,4vw,4rem);border-bottom:1px solid var(--dark-20);background:var(--dark-08);font-size:.75rem;color:var(--grey-80)}
p{margin:0;line-height:1.6}.demo-notice>div,nav{display:flex;align-items:center;gap:1rem}a{text-decoration:underline;text-underline-offset:4px}nav a[aria-current=page]{color:var(--purple-90);font-weight:700}
</style>
