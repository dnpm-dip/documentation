import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'DNPM:DIP',
    base: '/',
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/dnpm-dip' },
        ],
        editLink: {
            pattern: 'https://github.com/dnpm-dip/documentation/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },
        nav: [
            {
                text: 'Home',
                link: '/',
                activeMatch: '/',
            },
            {
                text: 'Getting Started',
                link: '/getting-started/',
                activeMatch: '/getting-started/'
            },
            {
                text: 'Guide',
                activeMatch: '/guide/',
                items: [
                    // { text: 'User', link: '/guide/user/'},
                    { text: 'Deployment', link: '/guide/deployment/'},
                    // { text: 'Development', link: '/guide/development/'},
                    // { text: 'Contributing', link: '/guide/contributing/'}
                ]
            },
            {
                text: 'About',
                activeMatch: '/about/',
                items: [
                    { text: 'Team', link: '/about/team' },
                ]
            }
        ],
        sidebar: {
            '/getting-started/': [
                {
                    text: 'Overview',
                    items: [
                        {text: 'What is Authup?', link: '/getting-started/'},
                        {text: 'Features', link: '/getting-started/features'},
                        {text: 'Architecture', link: '/getting-started/architecture'},
                        {text: 'Guides', link: '/getting-started/guides'},
                    ]
                },
            ],
            '/guide/user/': [
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Introduction', link: '/guide/user/'},

                    ]
                },
            ],
            '/guide/deployment': [
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Introduction', link: '/guide/deployment/'},
                    ]
                },
                {
                    text: 'Configuration',
                    items: [
                        { text: 'Introduction', link: '/guide/deployment/configuration' },
                    ]
                },
                {
                    text: 'Targets',
                    items: [
                        {text: 'Bare Metal', link: '/guide/deployment/bare-metal'},
                        {text: 'Docker', link: '/guide/deployment/docker'},
                        {text: 'Docker Compose', link: '/guide/deployment/docker-compose'},
                    ]
                },
                {
                    text: 'Reverse Proxy',
                    items: [
                        { text: 'Nginx', link: '/guide/deployment/nginx' }
                    ]
                },
            ]
        }
    }
})
