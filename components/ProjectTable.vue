<template>
    <VaCard>
        <VaCardContent>
            <div class="flex flex-col md:flex-row gap-2 mb-2 justify-between">
                <div class="flex flex-col md:flex-row gap-2 justify-start">
                    <VaInput v-model="filtre" placeholder="Search">
                        <template #prependInner>
                            <VaIcon name="search" color="secondary" size="small" />
                        </template>
                    </VaInput>
                </div>
            </div>
            <VaDataTable sort-by="Full Name" sorting-order="asc" :columns="columns" :items="users" virtual-scroller
                :wrapper-size="400" :item-size="46" sticky-header>
                <template #cell(project_name)="{ rowData }">
                    <div class="max-w-[120px] ellipsis p-2">
                        {{ rowData.project_name }}
                    </div>
                </template>

                <template #cell(project_owner)="{ rowData }">
                    <div class="flex items-center gap-2 max-w-[230px] ellipsis">
                        <VaAvatar src="https://randomuser.me/api/portraits/women/5.jpg" size="small" />
                        <div class="w-2/3"> {{ rowData.project_owner }}</div>
                    </div>

                </template>

                <template #cell(creation_date)="{ rowData }">
                    <div class="ellipsis max-w-[230px] p-2">
                        {{ rowData.creation_date }}
                    </div>
                </template>
                <template #cell(contrubition)="{ rowData }">
                    <div class="ellipsis max-w-[230px] p-2">
                        {{ rowData.contrubition }}
                    </div>
                </template>
                <template #cell(status)="{ rowData }">
                    <VaBadge :text="rowData.status" />
                </template>
                <template #cell(actions)="{ rowData }">
                    <div class="flex gap-2 justify-end">
                        <VaButton preset="primary" size="small" icon="more" aria-label="Edit user" to="/UserProfile" />
                    </div>
                </template>
            </VaDataTable>

        </VaCardContent>
    </VaCard>
</template>

<script setup lang="ts">
import { defineVaDataTableColumns, useModal } from 'vuestic-ui';

const filtre = ""

const columns = defineVaDataTableColumns([
    { label: 'Project name', key: 'project_name', sortable: true },
    { label: 'Project owner', key: 'project_owner', sortable: true },
    { label: 'Status', key: 'status', sortable: true },
    { label: 'Creation Date', key: 'creation_date', sortable: true },
    { label: 'Contrubition', key: 'contrubition', sortable: true },
    { label: ' ', key: 'actions' },
])

// const totalPages = computed(() => Math.ceil(props.pagination.total / props.pagination.perPage))

const { confirm } = useModal()

const onUserDelete = async (user: User) => {
    const agreed = await confirm({
        title: 'Delete user',
        message: `Are you sure you want to delete ${user.fullname}?`,
        okText: 'Delete',
        cancelText: 'Cancel',
        size: 'small',
        maxWidth: '380px',
    })

    // if (agreed) {
    //     emit('delete-user', user)
    // }
}

const formatProjectNames = (projects: Project[]) => {
    if (projects.length === 0) return 'No projects'
    if (projects.length <= 2) {
        return projects.map((project) => project.project_name).join(', ')
    }

    return (
        projects
            .slice(0, 2)
            .map((project) => project.project_name)
            .join(', ') +
        ' + ' +
        (projects.length - 2) +
        ' more'
    )
}



const users = [
    {
        "id": 0,
        "project_name": "Vuestic",
        "project_owner": 13,
        "status": "in progress",
        "creation_date": "20 Nov 2023",
        "contrubition": 1000
    },
    {
        "id": 19,
        "project_name": "dduse",
        "project_owner": 13,
        "status": "in progress",
        "creation_date": "20 Nov 2023",
        "contrubition": 1000
    },
    {
        "id": 81,
        "project_name": "Lazare",
        "project_owner": 13,
        "status": "in progress",
        "creation_date": "20 Nov 2023",
        "contrubition": 1000
    }, {
        "id": 11,
        "project_name": "Lazase",
        "project_owner": 13,
        "status": "in progress",
        "creation_date": "20 Nov 2023",
        "contrubition": 1000
    }, {
        "id": 8,
        "project_name": "Luse",
        "project_owner": 13,
        "status": "in progress",
        "creation_date": "20 Nov 2023",
        "contrubition": 1000
    }, {
        "id": 7,
        "project_name": "LogoPolo",
        "project_owner": 13,
        "status": "in progress",
        "creation_date": "20 Nov 2023",
        "contrubition": 1000
    },
]
</script>

<style lang="scss" scoped>
.va-data-table {
    ::v-deep(.va-data-table__table-tr) {
        border-bottom: 1px solid var(--va-background-border);
    }
}
</style>