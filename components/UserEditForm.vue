<script setup lang="ts">
import { ref, watch } from 'vue';


const avatar = ref<File>()

const user = ref({
    "id": 1,
    "fullname": "Patrik Radkow",
    "email": "magicpan@example.gg",
    "location": "Togo",
    "role": "fondateur",
    "avatar": "",
    "active": 'verfier',
    "notes": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
})

const makeAvatarBlobUrl = (avatar: File) => {
    return URL.createObjectURL(avatar)
}

watch(avatar, (newAvatar) => {
    user.value.avatar = newAvatar ? makeAvatarBlobUrl(newAvatar) : ''
})

const roleSelectOptions = [
    { value: 'Fondateur', text: 'Fondateur' },
    { value: 'Senior', text: 'Senior' },
    { value: 'junior', text: 'junior' },
]

const isUrl = (avatar: string) => {
    return avatar.startsWith('http') || avatar.startsWith('blob:')
}

</script>

<template>
    <VaForm v-slot="{ isValid }" ref="add-user-form"
        class="flex-col justify-start items-start gap-4 inline-flex w-full">
        <VaFileUpload v-model="avatar" type="single" hide-file-list
            class="self-stretch justify-start items-center gap-4 inline-flex">
            <VaAvatar size="medium" :src="isUrl(user.avatar) ? user.avatar : ''"
                :fallback-text="user.avatar || user.fullname[0]" />
            <VaButton preset="primary" size="small">Add image</VaButton>
            <VaButton v-if="avatar" preset="primary" color="danger" size="small" icon="delete" class="z-10"
                @click.stop="avatar = undefined" />
        </VaFileUpload>
        <div class="self-stretch flex-col justify-start items-start gap-4 flex">
            <div class="flex gap-4 flex-col sm:flex-row w-full">
                <VaInput v-model="user.fullname" label="Full name" class="w-full sm:w-1/2"
                    :rules="[validators.required]" name="fullname" />
                <VaInput v-model="user.location" label="Username" class="w-full sm:w-1/2" :rules="[validators.required]"
                    name="username" />
            </div>
            <div class="flex gap-4 flex-col sm:flex-row w-full">
                <VaInput v-model="user.email" label="Email" class="w-full sm:w-1/2"
                    :rules="[validators.required, validators.email]" name="email" />
                <!-- <VaSelect v-model="user.verfier" label="Projects" class="w-full sm:w-1/2" :options="verfier"
                    :rules="[validators.required]" name="projects" text-by="project_name" track-by="id" multiple
                    :max-visible-options="2" /> -->
            </div>

            <div class="flex gap-4 w-full">
                <div class="w-1/2">
                    <VaSelect v-model="user.role" label="Role" class="w-full" :options="roleSelectOptions"
                        :rules="[validators.required]" name="role" value-by="value" />
                </div>

                <div class="flex items-center w-1/2 mt-4">
                    <VaCheckbox v-model="user.active" label="Active" class="w-full" name="active" />
                </div>
            </div>
            <div class="flex gap-2 flex-col-reverse items-stretch justify-end w-full sm:flex-row sm:items-center">
                <VaButton preset="secondary" color="secondary" @click="$emit('close')">Cancel</VaButton>
                <VaButton :disabled="!isValid" @click=""></VaButton>
            </div>
        </div>
    </VaForm>
</template>
