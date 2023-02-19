module.exports = {
    title: "Leopold's blog",
    description: 'Blog powerd by vuepress',
    plugins: [
        '@vuepress/last-updated',
        '@vuepress/blog',
        ['vuepress-plugin-code-copy', {
            selector: 'div[class*="language-"]',
            align: 'top',
            backgroundTransition: false,
            // successText: 'String',
            staticIcon: true
        }]
        // '@vuepress/plugin-toc'
    ],
    markdown: {
        lineNumbers: true
    }
}
