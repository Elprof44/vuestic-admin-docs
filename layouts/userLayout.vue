<script setup lang="ts">
import { useBreakpoint } from 'vuestic-ui';

const showSidebar = ref(false)

const breakpoints = useBreakpoint()

const menu = useAttrs().menu




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
                </template>
            </VaNavbar>
        </template>
        <template #left>
            <VaSidebar :minimized="showSidebar" minimized-width="64px">
                <VaSidebarItem v-for="{ link, icon, title } in menu" :key="icon" :to="link">
                    <VaSidebarItemContent>
                        <VaIcon :name="icon" />
                        <VaSidebarItemTitle>
                            {{ title }}
                        </VaSidebarItemTitle>
                    </VaSidebarItemContent>
                </VaSidebarItem>
                <VaSpacer />
                <VaSidebarItem>
                    <VaSidebarItemContent>
                        <VaIcon name="settings" />
                        <VaSidebarItemTitle>Settings</VaSidebarItemTitle>
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
