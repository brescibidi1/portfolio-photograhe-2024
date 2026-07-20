<template>
    <ul class="items-center flex justify-center">
        <li class="social-link">
            <a
                href="https://www.instagram.com/"
                class="justify-center flex p-12px rounded-full overflow-hidden items-center cursor-pointer h-60px aspect-square"
                target="_blank" rel="noopener noreferrer">
                <Icon name="ri-instagram-line" size="1.25rem" />
            </a>
        </li>
        <li class="social-link">
            <a 
                href="https://x.com/"
                class="justify-center flex p-12px rounded-full overflow-hidden items-center cursor-pointer h-60px aspect-square"
                target="_blank" rel="noopener noreferrer">
                <Icon name="ri-twitter-x-line" size="1.25rem" />
            </a>
        </li>
        <li class="social-link">
            <a 
                href="https://"
                class="justify-center flex p-12px rounded-full overflow-hidden items-center cursor-pointer h-60px aspect-square"
                target="_blank" rel="noopener noreferrer">
                <Icon name="ri-linkedin-fill" size="1.25rem" />
            </a>
        </li>
    </ul>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
ul {
    column-gap: .625rem;
    padding: .5rem;
    border-radius: 100px;
    background-color: var(--dark-03);
    border: 1px solid var(--dark-12);
    width: max-content;

    @media (max-width:490px) {
        padding: 0.625rem;
    }

    .social-link {
        a {
            transition: all .3s ease;

            // &:first-of-type {
            //     &:hover {
            //         span {
            //             font-size: 1.2875rem !important;
            //         }
            //     }
            // }

            &:last-of-type {
                &:hover {
                    transform: translateY(3px);
                }
            }

            @media (max-width:1440px) {
                height: 40px;
                width: 40px;
            }

            @media (max-width:490px) {
                height: 48px;
                width: 48px;
            }
        }
    }

    &:has(>a) {
        .button {
            font-size: 1.125rem;
            padding: 1.125rem 2.125rem;

            @media (max-width:1440px) {
                font-size: .875rem;
                padding: .875rem 1.5rem;
            }

            @media (max-width:490px) {
                width: 100%;
            }
        }
    }

}
</style>