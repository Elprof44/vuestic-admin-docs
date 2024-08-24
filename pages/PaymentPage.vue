<template>
    <div>
        <NuxtLayout name="user-layout" :menu="adminMenu">
            <VaCard class="mb-6">
                <VaCardContent>
                    <h2 class="page-sub-title m-4">Payment Methode</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <div class="flex flex-col gap-2 flex-grow">
                                <div class="flex items-center">
                                    <div class="text-lg font-bold">Cinetpay</div>
                                </div>
                                <div class="flex gap-4 items-center">
                                    <div class="m-2"><img src="/visa.png" alt=""></div>
                                    <div>
                                        <div class="text-[15px] font-bold mb-2 capitalize">Visa 12122****</div>
                                        <div class="text-secondary">Card expires at 2024</div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-auto flex-none flex sm:block">
                                <VaButton class="mr-2 flex-grow " preset="primary" @click="emits('edit')">Edit
                                </VaButton>
                                <VaButton class="mr-2 flex-grow " preset="primary" @click="emits('edit')">Delete
                                </VaButton>
                            </div>
                        </div>
                        <div
                            class="sm:h-[114px] p-4 rounded-lg border border-dashed border-primary flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-blue-100">
                            <div class="flex flex-col gap-2 flex-grow">
                                <div class="text-lg font-bold leading-relaxed">Add Payment Methode</div>
                                <!-- <div class="text-secondary text-sm leading-tight">
                            Please carefully read Product Terms before adding your new payment card
                        </div> -->
                            </div>
                            <VaButton class="flex-none w-full sm:w-auto" @click="showCreate = true">add
                            </VaButton>
                        </div>
                    </div>
                </VaCardContent>
            </VaCard>

            <VaCard class="mb-6">
                <VaCardContent>
                    <h2 class="page-sub-title m-4">Payment Plan</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div v-for="i in [1, 1, 1]"
                            class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <div class="flex flex-col gap-2 flex-grow">
                                <div class="flex items-center">
                                    <div class="text-lg font-bold">StartUp</div>
                                </div>
                                <div class="flex gap-4 items-center">
                                    <div class="m-2"><img src="/visa.png" alt=""></div>
                                    <div>
                                        <div class="text-[15px] font-bold mb-2 capitalize">$35/ mo</div>
                                        <div class="text-secondary">Card expires at 2024</div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-auto flex-none flex sm:block">
                                <VaButton class="mr-2 flex-grow " preset="primary" @click="emits('edit')">Edit
                                </VaButton>
                                <VaButton class="mr-2 flex-grow " preset="primary" @click="emits('edit')">Delete
                                </VaButton>
                            </div>
                        </div>
                        <div
                            class="sm:h-[114px] p-4 rounded-lg border border-dashed border-primary flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-blue-100">
                            <div class="flex flex-col gap-2 flex-grow">
                                <div class="text-lg font-bold leading-relaxed">Add Payment Plan</div>
                                <!-- <div class="text-secondary text-sm leading-tight">
                            Please carefully read Product Terms before adding your new payment card
                        </div> -->
                            </div>
                            <VaButton class="flex-none w-full sm:w-auto" @click="showCreate = true">add
                            </VaButton>
                        </div>
                    </div>
                </VaCardContent>
            </VaCard>
            <div class="mt-4">
                <UserBilling />
            </div>
        </NuxtLayout>
    </div>
</template>


<script setup>
import { adminMenu } from '../composables/sideBar';

</script>

<style></style>