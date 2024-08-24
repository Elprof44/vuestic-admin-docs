<template>
  <div>
    <NuxtLayout name="user-layout" :menu="usersMenu">
      <h1 class="mb-5">Billing information</h1>
      <MembeshipTier />
      <PaymentInfo />
      <UserBilling />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { usersMenu } from '../composables/sideBar';
</script>
