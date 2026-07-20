<template>
    <header class="sticky top-0 brescibidi-template-hd px-8rem z-1000">
        <nav class="flex py-7 items-end w-full justify-between px-8">
            <UiLogo />

            <ul class="brescibidi-template-navlinks flex overflow-hidden items-center">
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

<script setup></script>

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