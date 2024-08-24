<template>
    <div class="p-4 mx-8 mt-4">
        <VaCard class="mb-6">
            <VaCardContent>
                <div class="flex gap-4">
                    <h1 class="w-48">Qizz</h1>
                </div>
                <VaDivider />
                <template v-for="(item, questionIndex) in itemsInView" :key="item.id">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col items-start w-[4/5]">
                            <div>
                                <h5 class="p-1 m-1">{{ item.id }}/ {{ item.question }}</h5>
                            </div>
                            <div class="flex items-center w-48" v-for="(answer, answerIndex) in item.answers"
                                :key="answer.id">
                                <VaRadio v-model="selectedAnswers[questionIndex]" :option="answer.answer"
                                    :name="`Q` + questionIndex + `A` + answerIndex" />
                            </div>
                        </div>
                    </div>

                    <VaDivider v-if="questionIndex !== itemsInView.length - 1" />
                </template>
            </VaCardContent>
            <VaCardActions vertical class="flex flex-wrap content-center mt-4">
                <VaButton preset="primary" @click="numberOfInvoicesInVIew = minNumberOfInvoices">Show less
                </VaButton>
            </VaCardActions>
        </VaCard>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useToast } from 'vuestic-ui';

const { init } = useToast()

const selectedAnswers = ref([]);

const minNumberOfInvoices = 7
const maxNumberOfInvoices = 20

const numberOfInvoicesInVIew = ref(minNumberOfInvoices)

const increaseNumberOfInvoices = (step = 10) => {
    numberOfInvoicesInVIew.value = Math.min(numberOfInvoicesInVIew.value + step, maxNumberOfInvoices)
}


const allItems = Array.from({ length: maxNumberOfInvoices }, (_, i) => ({
    id: i,
    question: 'Our state-of-the-art analytics dashboard provides you with actionable insights about everything,',
    mark: 2,
    good: { id: 1 },
    answers: [{ id: 1, answer: "lome" }, { id: 2, answer: "parie" }, { id: 3, answer: "londre" }]
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