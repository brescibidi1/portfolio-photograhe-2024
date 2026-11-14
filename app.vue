<template>
  <div class="safe-area">
    <NuxtLayout />
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n();
useHead(() => ({ htmlAttrs:{ lang:locale.value }, title:locale.value === 'en' ? 'Photographer portfolio — Integration demo' : 'Portfolio photographe — Démo d’intégration', meta:[{ name:'robots', content:'noindex, follow' },{ name:'description', content:locale.value === 'en' ? 'A fictional photographer portfolio integrated by Kenelm. AI-generated visuals made with Freepik. No real booking or message sending.' : 'Une intégration de portfolio de photographe fictif par Kenelm. Visuels générés avec Freepik. Aucun envoi de message ni réservation réelle.' }] }));
</script>

<style lang="scss">
.full-height {
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
}
</style>
