<template>
  <VaCard>
    <VaCardContent class="hover:bg-blue-100">
      <section>
        <header class="flex items-center justify-between">
          <div class="text-lg font-semibold grow">{{ props.value }}</div>
          <div class="p-1 rounded" :style="{
            backgroundColor: props.iconBackground,
            color: props.iconColor,
          }">
            <slot name="icon"></slot>
          </div>
        </header>
        <div>
          <p class="mb-2">{{ props.title }}</p>
        </div>
      </section>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { VaCard } from 'vuestic-ui';

const props = defineProps<{
  title: string
  value: string | number
  changeText: string
  up: boolean
  iconBackground: string
  iconColor: string
}>()

</script>
