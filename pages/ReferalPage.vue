<template>
    <VaTreeView :nodes="nodes" class="">
        <template #content="node">
            <div class="flex justify-start">
                <VaAvatar v-if="node.image" :src="node.image" class="" />
                <div class="">
                    <b v-if="node.label" class="">{{ node.label }}</b>
                    <p v-if="node.description" class="va-text-secondary mb-0">
                        {{ node.description }}
                    </p>
                </div>
            </div>
        </template>
    </VaTreeView>
</template>

<script>
export default {
    name: "CustomizableContent",

    data: () => ({
        nodes: [
            {
                id: 1,
                label: "Category",
                description: "It is absolutely optional",
                expanded: true,
                image: "https://picsum.photos/100",
                children: [
                    {
                        id: 2,
                        label: "Photo",
                        description: "This item works so well with the other one.",
                        image: "https://picsum.photos/100",
                        hasAction: true,
                    },
                    {
                        id: 3,
                        label: "Emoji",
                        description: "This item corresponds the first item perfectly.",
                        image: "https://picsum.photos/100",
                        hasAction: true,
                    },

                ],
            },
        ],
    }),
};
</script>