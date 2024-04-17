<script setup>
import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
} from 'vitepress/theme';

const members = [
    {
        avatar: 'https://www.github.com/okohlbacher.png',
        name: 'Oliver Kohlbacher',
        title: 'Product Owner',
        links: [
            { icon: 'github', link: 'https://github.com/okohlbacher' }
        ]
    },
    {
        avatar: 'https://www.github.com/tada5hi.png',
        name: 'Peter Placzek',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/tada5hi' },
            { icon: 'twitter', link: 'https://twitter.com/tada5hi' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/peter-placzek-047a74210/' },
        ]
    },
    {
        avatar: 'https://www.github.com/lucienclin.png',
        name: 'Lucien Clin',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/lucienclin' }
        ]
    }
]
</script>

<template>
    <div>
        <VPTeamPage>
            <VPTeamPageTitle>
                <template #title>
                    Unser Team
                </template>
            </VPTeamPageTitle>
            <VPTeamMembers
                :members="members"
            />
        </VPTeamPage>
    </div>
</template>

