<template>
  <div class="safe-area">
    <NuxtLayout />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.full-height {
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
}
</style>
