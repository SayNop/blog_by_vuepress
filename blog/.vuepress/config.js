module.exports = {
    title: "Leopold's blog",
    description: 'Blog powerd by vuepress',
    plugins: [
        '@vuepress/last-updated',
        ['@vuepress/blog', {
            frontmatters: [
                {
                    id: "tag",
                    keys: ['tag', 'tags'],
                    path: '/tags/',
                    frontmatter: {
                        title: 'Tag',
                        layout: 'tags'
                    },
                    pagination: {
                        lengthPerPage: 10,
                        prevText: '',
                        nextText: ''
                    }
                },
                {
                    id: "category",
                    keys: ['category', 'categories'],
                    path: '/categories/',
                    frontmatter: {
                        title: 'Category',
                        layout: 'tags'
                    },
                    pagination: {
                        lengthPerPage: 10,
                        prevText: '',
                        nextText: ''
                    }
                }
            ]
        }],
        ['vuepress-plugin-code-copy', {
            selector: 'div[class*="language-"]',
            align: 'top',
            backgroundTransition: false,
        }]
        // '@vuepress/plugin-toc'
    ],
    markdown: {
        lineNumbers: true
    }
}
