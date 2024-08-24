import { VaAvatar, VaButton } from '../.nuxt/components';
<template>
    <div>
        <NuxtLayout name="user-layout" :menu="adminMenu">
            <div class="flex justify-end">
                <h1>Project</h1>
            </div>
            <div class="mt-4">
                <ProjectTable />
            </div>
        </NuxtLayout>
    </div>
</template>


<script lang="ts" setup>
import { adminMenu } from '../composables/sideBar';

</script>

<style></style>