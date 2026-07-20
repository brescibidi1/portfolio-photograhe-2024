<template>
    <li class="timeline-step flex-col overflow-hidden flex rounded-xl">
        <h4 class="uppercase --text-p-viewable-big">
            {{ stepTitle }}
        </h4>
        <p class="--text-sp-viewable-small">
            {{ stepText }}
        </p>
    </li>
</template>

<script setup lang="ts">
defineProps({
    stepTitle: { type: String, required: true },
    stepText: { type: String, default: 'Lorem25'}
})
</script>

<style lang="scss" scoped>
.timeline-step {
    row-gap: 1.25rem;
    background-color: var(--dark-06);
    color: var(--grey-50);
    border: 1px solid var(--dark-12);
    padding: 3.125rem;

    @media (max-width:1440px) {
        padding: 2.5rem 2.5rem;
    }

    @media (max-width:490px) {
        padding: 1.25rem 1.25rem;
    }

    h4 {
        font-size: 2.75rem;

        @media (max-width:1440px) {
            font-size: 2.125rem
        }
    }

    p {
        font-size: 1.125rem;

        @media (max-width:1440px) {
            font-size: 1rem;
        }
    }
}
</style>