<template>
    <div>
        <NuxtLayout name="user-layout" :menu="adminMenu">
            <div class="my-4">
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
            <div class="my-4">
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

                        <VaDataTable sort-by="Full Name" sorting-order="asc" :columns="columns" :items="users"
                            virtual-scroller :wrapper-size="400" :item-size="46" sticky-header>
                            <template #cell(fullname)="{ rowData }">
                                <div class="flex items-center gap-2 max-w-[230px] ellipsis">
                                    <VaAvatar src="https://randomuser.me/api/portraits/women/5.jpg" size="small" />
                                    <div class="w-2/3"> {{ rowData.fullname }}</div>
                                </div>
                            </template>

                            <template #cell(username)="{ rowData }">
                                <div class="max-w-[120px] ellipsis p-2">
                                    {{ rowData.username }}
                                </div>
                            </template>

                            <template #cell(email)="{ rowData }">
                                <div class="ellipsis max-w-[230px] p-2">
                                    {{ rowData.email }}
                                </div>
                            </template>

                            <template #cell(role)="{ rowData }">
                                <VaBadge :text="rowData.role" :color="roleColors[rowData.role as UserRole]" />
                            </template>

                            <template #cell(projects)="{ rowData }">
                                <div class="ellipsis max-w-[300px] lg:max-w-[450px] p-2 flex flex-wrap">
                                    {{ formatProjectNames(rowData.project) }}
                                </div>
                            </template>
                            <template #cell(status)="{ rowData }">
                                <div v-if="rowData.active === 'verfier'">
                                    <VaBadge :text="rowData.active" color="primary" />
                                </div>
                                <div v-else>
                                    <VaBadge :text="rowData.active" color="danger" />
                                </div>
                            </template>
                            <template #cell(actions)="{ rowData }">
                                <div class="flex gap-2 justify-end">
                                    <VaButton preset="primary" size="small" icon="more" aria-label="Edit user"
                                        to="/UserProfile" />
                                </div>
                            </template>
                        </VaDataTable>

                    </VaCardContent>
                </VaCard>
            </div>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
import { defineVaDataTableColumns } from 'vuestic-ui';
import { adminMenu } from '../composables/sideBar';

const filtre = ""

const columns = defineVaDataTableColumns([
    { label: 'Full Name', key: 'fullname', sortable: true },
    { label: 'Email', key: 'email', sortable: true },
    { label: 'Location', key: 'location', sortable: true },
    { label: 'Role', key: 'role', sortable: true },
    { label: 'Status', key: 'status', sortable: true },
    { label: 'Projects', key: 'projects', sortable: true },
    { label: ' ', key: 'actions', align: 'right' },
])

const roleColors: Record<UserRole, string> = {
    fondateur: 'danger',
    senior: 'background-element',
    junior: 'warning',
}


const formatProjectNames = (projects: any[]) => {
    if (projects.length === 0) return 'No projects'
    if (projects.length <= 2) {
        return projects.map((project: { project_name: string; }) => project.project_name).join(', ')
    }

    return (
        projects
            .slice(0, 2)
            .map((project: { project_name: string; }) => project.project_name)
            .join(', ') +
        ' + ' +
        (projects.length - 2)
    )
}



const users = [
    {
        "id": 1,
        "fullname": "Patrik Radkow",
        "email": "magicpan@example.gg",
        "location": "Togo",
        "role": "fondateur",
        "avatar": "",
        "active": 'verfier',
        "notes": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "project": [{
            "id": 7,
            "project_name": "Offer",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "Complete ",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        },]
    },
    {
        "id": 2,
        "fullname": "Martin AGBO",
        "email": "niceadmin@mail.com",
        "location": "Ghana",
        "role": "fondateur",
        "avatar": "😍",
        "active": 'verfier',
        "notes": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "project": [{
            "id": 7,
            "project_name": "product redesign",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "redesign",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "web site",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "donaltion",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        },]
    },
    {
        "id": 3,
        "fullname": "Liz Macintosh",
        "email": "ebrown@gmail.com",
        "location": "Togo",
        "role": "junior",
        "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
        "active": 'non verfier',
        "notes": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "project": [{
            "id": 7,
            "project_name": "donaltion",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "lome renouver",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "gold projec",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        },]
    },
    {
        "id": 4,
        "fullname": "M2",
        "email": "mrm@gmail.com",
        "location": "France",
        "role": "senior",
        "avatar": "",
        "active": 'verfier',
        "notes": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "project": [{
            "id": 7,
            "project_name": "dolnap",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "holla projec",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }]
    },
    {
        "id": 5,
        "fullname": "Kevin Smith",
        "email": "kevin@gmail.com",
        "location": "Ghana",
        "role": "senior",
        "avatar": "https://randomuser.me/api/portraits/men/2.jpg",
        "active": 'verfier',
        "notes": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "project": [{
            "id": 7,
            "project_name": "Complete product redesign",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }]
    },
    {
        "id": 6,
        "fullname": "Martin Hoff",
        "email": "martin@gmail.com",
        "location": "Togo",
        "role": "junior",
        "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
        "active": 'non verfier',
        "notes": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "project": [{
            "id": 7,
            "project_name": "coca cola",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "polo mana",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "jojo project",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "gogo lome",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        },]
    },
    {
        "id": 7,
        "fullname": "John Doe",
        "email": "john@mail.com",
        "location": "Togo",
        "role": "fondateur",
        "avatar": "",
        "active": 'verfier',
        "notes": "",
        "project": []
    },
    {
        "id": 8,
        "fullname": "Maksim Nedo",
        "email": "maksim@epic.com",
        "location": "Benin",
        "role": "senior",
        "avatar": "https://avatars.githubusercontent.com/u/23530004?v=4",
        "active": 'non verfier',
        "notes": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "project": [{
            "id": 7,
            "project_name": "Homo lomgo",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }, {
            "id": 7,
            "project_name": "martine location",
            "project_owner": 25,
            "status": "completed",
            "creation_date": "11 Aug 2023"
        }]
    }
]


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
</script>

<style></style>