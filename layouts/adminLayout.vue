<script setup lang="ts">
import { useBreakpoint } from 'vuestic-ui';

const showSidebar = ref(true)

const customProp = useAttrs()

const breakpoints = useBreakpoint()

const menu = [
    { icon: 'dashboard', title: 'Dashboard' },
    { icon: 'email', title: 'Projects' },
    { icon: 'phone', title: 'Quizz' },
    { icon: 'email', title: 'Payment' },
    { icon: 'settings', title: 'Settings' },
    { icon: 'logout', title: 'Logout' },
]
</script>

<template>
    <VaLayout :left="{ fixed: true, absolute: breakpoints.smDown }" :top="{ fixed: true }" style="height: 500px">
        <template #top>
            <VaNavbar color="#282F69">
                <template #left>
                    <VaNavbarItem class="hidden sm:block ml-11">
                        <VaButton :icon="showSidebar ? 'menu_open' : 'menu'" @click="showSidebar = !showSidebar" />
                    </VaNavbarItem>
                    <VaNavbarItem class="logo">
                        LOGO
                    </VaNavbarItem>
                </template>
                <template #right>
                    <VaNavbarItem class="hidden sm:block">
                        {{ customProp.isAdmin }}
                    </VaNavbarItem>

                </template>
            </VaNavbar>
        </template>

        <template #left>
            <VaSidebar v-model="showSidebar">
                <VaSidebarItem v-for="{ icon, title } in menu" :key="icon">
                    <VaSidebarItemContent>
                        <VaIcon :name="icon" />
                        <VaSidebarItemTitle>
                            {{ title }}
                        </VaSidebarItemTitle>
                    </VaSidebarItemContent>
                </VaSidebarItem>
            </VaSidebar>
        </template>

        <template #content>

            <main class="p-4" style="height: 2000px">
                <slot />
            </main>
        </template>
    </VaLayout>
</template>
