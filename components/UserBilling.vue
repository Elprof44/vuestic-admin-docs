<template>
    <VaCard class="mb-6">
        <VaCardContent>
            <h2 class="page-sub-title mb-5">Invoices</h2>
            <template v-for="(item, index) in itemsInView" :key="item.id">
                <div class="flex items-center justify-between">
                    <div class="w-20">
                        {{ item.orderID }}
                    </div>
                    <div class="w-20">
                        {{ item.types }}
                    </div>
                    <div class="flex items-center w-48">
                        {{ item.date }}
                    </div>
                    <div class="w-20">
                        {{ item.amount }}
                    </div>
                    <div>
                        <VaButton preset="primary" @click="download">Download</VaButton>
                    </div>
                </div>

                <VaDivider v-if="index !== itemsInView.length - 1" />
            </template>
        </VaCardContent>
        <VaCardActions vertical class="flex flex-wrap content-center mt-4">
            <VaButton v-if="numberOfInvoicesInVIew < maxNumberOfInvoices" preset="primary"
                @click="increaseNumberOfInvoices()">
                Show more
            </VaButton>
            <VaButton v-else preset="primary" @click="numberOfInvoicesInVIew = minNumberOfInvoices">Show less
            </VaButton>
        </VaCardActions>
    </VaCard>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useToast } from 'vuestic-ui';

const { init } = useToast()

const minNumberOfInvoices = 7
const maxNumberOfInvoices = 20

const numberOfInvoicesInVIew = ref(minNumberOfInvoices)

const increaseNumberOfInvoices = (step = 10) => {
    numberOfInvoicesInVIew.value = Math.min(numberOfInvoicesInVIew.value + step, maxNumberOfInvoices)
}


const allItems = Array.from({ length: maxNumberOfInvoices }, (_, i) => ({
    id: i,
    orderID: `000${(Math.random() * 1000).toFixed(0)}`,
    date: '2023-12-01',
    amount: `$${(Math.random() * 100).toFixed(2)}`,
    types: 'membership  tier'
}))

const itemsInView = computed(() => {
    return allItems.slice(0, numberOfInvoicesInVIew.value)
})

const download = () => {
    init({
        message: "Request received. We'll email your invoice once we've completed data collection.",
        color: 'success',
    })
}
</script>