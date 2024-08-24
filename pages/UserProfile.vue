<template>
    <div>
        <NuxtLayout name="user-layout" :menu="usersMenu">
            <div class="flex justify-end">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <DataSectionItem v-for="metric in dashboardMetrics" :key="metric.id" :title="metric.title"
                        :value="metric.value" :change-text="metric.changeText" :up="metric.changeDirection === 'up'"
                        :icon-background="metric.iconBackground" :icon-color="metric.iconColor">
                        <template #icon>
                            <VaIcon :name="metric.icon" size="large" />
                        </template>
                    </DataSectionItem>
                </div>
            </div>
            <div class="flex flex-wrap gap-5 mt-5">
                <div
                    class="min-w-[280px] min-h-[560px] max-w-[280px] max-h-[560px] rounded bg-blue-200 shadow-md border-4 border-blue-500">
                    <div class="w-full flex flex-col gap-3 items-center">
                        <div class="mt-8">
                            <VaAvatar src="/user_2.svg" size="100px" />
                        </div>
                        <div class="text-pretty font-semibold text-3xl p-1">agbo martin</div>
                        <div class="text-pretty text-sm text-center p-1">
                            <p>JJ0659f47b-9412-7e68-8000-a0c6e4450401</p>
                        </div>
                        <div class="bg-blue-400 rounded flex w-full p-10 mt-10">
                            <img src="/qrcode.png" alt="" width="120px">
                        </div>
                    </div>
                </div>

                <VaCard class="min-h-[570px] max-h-[570px]">
                    <VaCardContent>
                        <div class="flex flex-col gap-3">
                            <div class="grid grid-cols-3 gap-2">
                                <VaButton icon="print">Print</VaButton>
                                <VaButton icon="book" @click="show = 0">verified</VaButton>
                                <VaButton icon="editor" @click="show = 1">Editer</VaButton>
                            </div>
                            <div>
                                <UserEditForm v-if="show === 1" />
                                <div class="flex flex-col gap-5 items-stretch justify-between" v-else>
                                    <div class="grid grid-cols-2 gap-5">
                                        <VaCard>
                                            <VaCardTitle>
                                                <h2>Resulta de Quiz</h2>
                                            </VaCardTitle>
                                            <VaCardContent class="flex">
                                                <VaProgressCircle :model-value="value" :thickness="0.4" size="120px"
                                                    class="p-2">
                                                    {{ value + '%' }}
                                                </VaProgressCircle>
                                                <h1>{{ value + '% de bonne reponses' }}</h1>
                                            </VaCardContent>
                                        </VaCard>
                                        <VaCard>
                                            <VaCardTitle>
                                                <h2>Info</h2>
                                            </VaCardTitle>
                                            <VaCardContent class="flex justify-start">
                                                <VaList>
                                                    <VaListItem>parrain: JOHON </VaListItem>
                                                    <VaListItem>statut : junior</VaListItem>
                                                    <VaListItem>Data d'inscription: 11/12/24</VaListItem>
                                                </VaList>
                                            </VaCardContent>
                                        </VaCard>
                                    </div>
                                    <div class="grid grid-cols-3 gap-5">
                                        <div>
                                            <h2>Selfie</h2>
                                            <img src="/android-chrome-512x512.png" alt="cart" width="200px" />
                                        </div>
                                        <div>
                                            <h2>Recto</h2>
                                            <img src="/android-chrome-512x512.png" alt="cart" width="200px" />
                                        </div>
                                        <div>
                                            <h2>Verso</h2>
                                            <img src="/android-chrome-512x512.png" alt="cart" width="200px" />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2 gap-5">
                                        <VaButton icon="cancel">Suspendre</VaButton>
                                        <VaButton icon="check">Valider</VaButton>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </VaCardContent>
                </VaCard>
            </div>
            <div class="mt-4">
                <ProjectTable />
            </div>
        </NuxtLayout>
    </div>
</template>


<script lang="ts" setup>
import { useColors } from 'vuestic-ui';
import { usersMenu } from '../composables/sideBar';


const value = ref(90)

interface DashboardMetric {
    id: string
    title: string
    value: string
    icon: string
    changeText: string
    changeDirection: 'up' | 'down'
    iconBackground: string
    iconColor: string
}

const { getColor } = useColors()

const dashboardMetrics = computed<DashboardMetric[]>(() => [

    {
        id: 'ongoingProjects',
        title: 'Ongoing project',
        value: '150',
        icon: 'folder_open',
        changeText: '25.36%',
        changeDirection: 'up',
        iconBackground: getColor('info'),
        iconColor: getColor('on-info'),
    },
    {
        id: 'Fieulles',
        title: 'Fieulles',
        value: '25',
        icon: 'user',
        changeText: '2.5%',
        changeDirection: 'up',
        iconBackground: getColor('danger'),
        iconColor: getColor('on-danger'),
    },
    {
        id: 'newProfit',
        title: 'New profit',
        value: '27%',
        icon: 'grade',
        changeText: '4%',
        changeDirection: 'up',
        iconBackground: getColor('warning'),
        iconColor: getColor('on-warning'),
    }, {
        id: 'newProfit',
        title: 'New profit',
        value: '27%',
        icon: 'grade',
        changeText: '4%',
        changeDirection: 'up',
        iconBackground: getColor('warning'),
        iconColor: getColor('on-warning'),
    },
])
const show = ref(0)
</script>

<style></style>