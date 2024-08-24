<template>
    <div>
        <NuxtLayout name="user-layout" :menu="adminMenu">
            <QuizzTable />
        </NuxtLayout>
    </div>
</template>


<script setup>
import { adminMenu } from '../composables/sideBar';
</script>

<style></style>