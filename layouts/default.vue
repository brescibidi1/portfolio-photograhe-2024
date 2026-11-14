<template>
    <div class="content">
        <UiDemoNotice />
        <UiNavbar />
        <NuxtPage />
        <UiFooter />
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
:root {
    --manrope: 'Manrope', sans-serif;
}

html {
    font-family: var(--manrope);
}
</style>