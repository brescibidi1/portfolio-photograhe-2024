<template>
    <header class="sticky top-0 brescibidi-template-hd px-8rem z-1000">
        <nav ref="navbar" class="flex py-7 items-end w-full justify-between px-8" :aria-label="copy.navigation" @keydown.esc="closeMenu(true)">
            <UiLogo />

            <button ref="toggle" type="button" class="photographer-menu-toggle" :aria-expanded="open" aria-controls="photographer-navigation" :aria-label="open ? copy.close : copy.menu" @click="open = !open"><Icon :name="open ? 'ri:close-line' : 'ri:menu-line'" size="1.5rem" /></button>
            <ul id="photographer-navigation" class="brescibidi-template-navlinks flex overflow-hidden items-center" :class="{ 'mobile-open': open }" @click="closeMenu()">
                <li class="nav-link brescibidi-template-navlink">
                    <NuxtLinkLocale to="/" class="link py-7 px-8">
                        {{ $t('root.navlinks.home') }}
                    </NuxtLinkLocale>
                </li>
                <li class="nav-link brescibidi-template-navlink">
                    <NuxtLinkLocale to="/about" class="link py-7 px-8">
                        {{ $t('root.navlinks.about') }}
                    </NuxtLinkLocale>
                </li>
                <li class="nav-link brescibidi-template-navlink">
                    <NuxtLinkLocale to="/portfolio" class="link py-7 px-8">
                        {{ $t('root.navlinks.portfolio') }}
                    </NuxtLinkLocale>
                </li>
                <li class="nav-link brescibidi-template-navlink">
                    <NuxtLinkLocale to="/contact" class="link px-8 py-7">
                        {{ $t('root.navlinks.contact') }}
                    </NuxtLinkLocale>
                </li>
            </ul>

            <UiButton :is-link="true" :to="'/contact'" :class-name="'prime'">
                {{ $t('root.navlinks.contact') }}
            </UiButton>
        </nav>
    </header>
</template>

<script setup lang="ts">
const copy = useDemoCopy(), open = ref(false), navbar = ref<HTMLElement | null>(null), toggle = ref<HTMLButtonElement | null>(null);
const route = useRoute();
function closeMenu(focus = false) { const wasOpen = open.value; open.value = false; if (focus && wasOpen) toggle.value?.focus(); }
watch(() => route.fullPath, () => closeMenu());
function outside(event: MouseEvent) { if (event.target instanceof Node && !navbar.value?.contains(event.target)) closeMenu(); }
onMounted(() => document.addEventListener('click', outside));
onBeforeUnmount(() => document.removeEventListener('click', outside));
</script>

<style scoped lang="scss">
.brescibidi-template-hd {
    background-color: var(--dark-03);
    border-bottom: 1px solid var(--dark-12);

    @media (max-width:1440px) {
        padding-inline: 3.875rem;
    }

    @media (max-width:490px) {
        padding-inline: 1rem;
    }

    nav {
        background-color: var(--dark-03);
        border-inline: 1px solid var(--dark-12);

        ul.brescibidi-template-navlinks {
            padding: 0;
            border-radius: .75rem .75rem 0 0;
            border: 1px solid var(--dark-12);
            border-bottom: 0;
            margin-bottom: -1.875rem;

            li.nav-link.brescibidi-template-navlink {
                display: flex;
                align-items: center;

                a {
                    @media (max-width: 1440px) {
                        padding: 1.5rem 2rem;
                        font-size: .875rem;
                    }

                    @media (max-width: 1200px) {
                        padding: 1rem 1.625rem;
                    }

                    &.router-link-active {
                        background-color: var(--dark-08);
                        border-bottom: 3px solid var(--primary-02);
                    }
                }
            }
        }
    }
}
</style>
<style scoped>
.photographer-menu-toggle{display:none;color:var(--grey-95);min-width:44px;min-height:44px;border:1px solid var(--dark-20);border-radius:.5rem;background:var(--dark-08);align-items:center;justify-content:center}
@media(max-width:1000px){.brescibidi-template-hd{padding-inline:1rem}.brescibidi-template-hd nav{position:relative;align-items:center;padding:1rem;gap:1rem}.photographer-menu-toggle{display:inline-flex;margin-left:auto}.brescibidi-template-hd nav>.btn{display:none}.brescibidi-template-hd nav ul.brescibidi-template-navlinks{display:none;margin:0;border:1px solid var(--dark-20);border-radius:.5rem;position:absolute;top:100%;left:0;right:0;background:var(--dark-03);padding:.5rem;max-height:70svh;overflow-y:auto;box-shadow:0 12px 24px #0005}.brescibidi-template-hd nav ul.brescibidi-template-navlinks.mobile-open{display:flex;flex-direction:column;align-items:stretch}.brescibidi-template-hd nav ul.brescibidi-template-navlinks li a{width:100%;padding:1rem 1.25rem}}
</style>
