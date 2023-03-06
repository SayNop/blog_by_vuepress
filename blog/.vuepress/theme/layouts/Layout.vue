<template>
    <div id="home">
        <header_wrapper :style="{opacity: header_opacity}"  @slide_switch="showSlide"/>
        <div id="background">
            <svg class="pull_down" viewBox="0 0 1026 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M857.088 224.256q28.672-28.672 69.12-28.672t69.12 28.672q29.696 28.672 29.696 68.608t-29.696 68.608l-382.976 380.928q-12.288 14.336-30.72 19.968t-38.912 4.608-40.448-8.704-34.304-22.016l-376.832-374.784q-29.696-28.672-29.696-68.608t29.696-68.608q14.336-14.336 32.256-21.504t36.864-7.168 37.376 7.168 32.768 21.504l313.344 309.248z">
                </path>
            </svg>
        </div>
        <div id="content_container" ref="demos">
            <div id="content">
                <div class="none" v-if="!is_mobile && is_nav" style="width: 16rem" />
                <sidebar :class="is_mobile ? (show_sidebar ? 'show_info' : 'hidden_info') : (is_nav ? 'article_nav' : '') "/>
                <div id="article_container">
                    <detail v-if="$page.frontmatter.layout == 'detail'"/>
                    <!-- <articles :articles="article_list" v-else-if="$page.frontmatter.layout == 'home'"/> -->
                    <div v-else-if="$page.frontmatter.layout == 'Layout'">
                        <articles :articles="$pagination.pages"/>
                        <Pagination />
                    </div>
                    <category_list v-else-if="$page.frontmatter.layout == 'categories'" />
                    <tag_list v-else-if="$page.frontmatter.layout == 'tags'" />
                    <div v-else-if="/(.+) Category/.test($page.frontmatter.title)">
                        <!-- <div>{{ $page.frontmatter.title.match(/(.+) Category/)[1] }}</div> -->
                        <div class="card_border category_tag_key">
                            <span style="display: inline-block;vertical-align: bottom;margin-right: 10px;" class="icon"><category_icon /></span>
                            {{ $currentCategory.key }}
                        </div>
                        <!-- <articles :articles="$currentCategory.pages" /> -->
                        <articles :articles="$pagination.pages" />
                        <Pagination />
                    </div>
                    <div v-else-if="/(.+) Tag/.test($page.frontmatter.title)">
                        <div class="card_border category_tag_key">
                            <span style="display: inline-block;vertical-align: bottom;margin-right: 10px;" class="icon"><tag_icon /></span>
                            {{ $currentTag.key }}
                        </div>
                        <articles :articles="$pagination.pages" />
                        <Pagination />
                    </div>
                </div>
                <!-- <footer_wrapper/> -->
            </div>
            <footer_wrapper/>
        </div>
    </div>
</template>

<script>
import detail from '../components/detail'
import header_wrapper from '../components/header'
import sidebar from '../components/sidebar'
import articles from '../components/articles'
import footer_wrapper from '../components/footer'
import category_list from '../components/category_list'
import tag_list from '../components/tag_list'
import category_icon from '../components/icons/category'
import tag_icon from '../components/icons/tag'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'


export default {
    components: {
        detail,
        header_wrapper,
        sidebar,
        articles,
        footer_wrapper,
        category_list,
        tag_list,
        category_icon,
        tag_icon,
        Pagination
    },
    data() {
        return {
            header_opacity: 0,
            show_sidebar: false,
            is_mobile: false,
            is_nav: false,
            // 统计页面高度
            height_list: []
        }
    }, 
    methods: {
        handleScroll()
        {
            // 头部文件
            // 桌面端进行头部模糊渲染动态渲染
            if(window.screen.availWidth > 767) {
                var scrollTop = window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop;
                this.header_opacity = (scrollTop / (this.$refs.demos.offsetTop/3));
                if(this.$page.frontmatter.layout == 'detail')
                    // if (this.header_opacity > 2.5)
                    if (this.header_opacity > 2.7)
                        this.is_nav = true
                    else
                        this.is_nav = false
            }
        },
        showSlide(){
            this.show_sidebar = !this.show_sidebar
        }
    },
    mounted() {
        // 滚动触发头部与文章页导航
        window.addEventListener('scroll', this.handleScroll, true)

        // 触控判断
        if(window.screen.availWidth > 767) {
            document.body.addEventListener('touchstart',function(){})
            this.is_mobile = false
        } else {
            this.is_mobile = true
        }        
    },
    computed: {
        // 未使用分页器时使用
        article_list() 
        {
            let res = []
            if(this.$page.frontmatter.layout == 'home')
                this.$site.pages.forEach((item) => {
                    if(item.frontmatter.layout=='detail')
                        res.push(item)
                })
            // else if(this.$page.frontmatter.layout == 'tags')
            //     this.$
            return res
        }
    }
}
</script>
