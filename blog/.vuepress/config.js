module.exports = {
    title: "Leopold's blog",
    description: 'Blog powerd by vuepress',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'favicon.ico' }
        ]
    ],
    plugins: [
        '@vuepress/last-updated',
        ['@vuepress/blog', {
            directories: [
                {
                    // 当前分类的唯一 ID
                    id: 'detail',
                    // 目标文件夹
                    dirname: 'detail',
                    // 文章列表的路径
                    path: '/',
                    // 使用布局文件
                    // layout: 'home',
                    // itemLayout: 'detail',
                    // 单个文章的链接
                    // itemPermalink: '/detail/:slug'
                    itemPermalink: '/:regular' // 默认的生成方式
                },
            ],
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
                        lengthPerPage: 3,
                        prevText: 'PREV',
                        nextText: 'NEXT'
                    }
                },
                {
                    id: "category",
                    keys: ['category', 'categories'],
                    path: '/categories/',
                    frontmatter: {
                        title: 'Category',
                        layout: 'categories'
                    },
                    pagination: {
                        lengthPerPage: 3,
                        prevText: 'PREV',
                        nextText: 'NEXT'
                    }
                }
            ],
            globalPagination: {
                sorter: (prev, next) => {
                    const dayjs = require('dayjs')
                    const prevTime = dayjs(prev.frontmatter.date)
                    const nextTime = dayjs(next.frontmatter.date)
                    return prevTime - nextTime > 0 ? -1 : 1
                },
                prevText:'PREV', // Text for previous links.
                nextText:'NEXT', // Text for next links.
                lengthPerPage:'5', // Maximum number of posts per page.
                // layout:'home', // Layout for pagination page - 分页的布局文件，不能修改frontmatter的值
            }
              
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
    },
    themeConfig: {
        footer: {
          copyright: [
            {
              text: 'Released under the MIT License.',
            },
            {
              text: 'Copyright © 2023-present Leopold',
            },
          ],
        },
        connection_link: {
            github: 'github.com/SayNop',
            gitee: 'gitee.com/WhenTimeGoesBy',
            mail: 'fur999immer@gmail.com'
        },
    },
}
