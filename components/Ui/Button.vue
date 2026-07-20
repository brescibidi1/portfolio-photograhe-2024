<template>
    <NuxtLinkLocale v-if="isLink" :to="to" :class="['btn', className]">
        <slot/>
    </NuxtLinkLocale>
    <button v-else :type="type" :class="['btn', className]">
        <slot/>
    </button>
</template>

<script setup>
defineProps({
    isLink: { type: Boolean, default: false },
    className: { type: String, default: '' },
    type: { type: String, default: 'button' },
    to: { type: [String, Object], default: '' }
})
</script>