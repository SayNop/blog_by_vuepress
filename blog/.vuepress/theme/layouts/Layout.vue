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
                    <articles :articles="article_list" v-else-if="$page.frontmatter.layout == 'home'"/>
                    <category_list v-else-if="$page.frontmatter.layout == 'categories'" />
                </div>
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


export default {
    components: {
        detail,
        header_wrapper,
        sidebar,
        articles,
        footer_wrapper,
        category_list
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
                    if (this.header_opacity > 2.5)
                        this.is_nav = true
                    else
                        this.is_nav = false
            }

            // // 文章导航栏
            // if(this.$frontmatter.layout == 'detail') {
            //     var scrollTop = window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop;
            //     // console.log(scrollTop)
            //     // for ( let nav of this.$page.headers ) {
            //     //     if ( scrollTop > nav.height ) {
            //     //         // nav.active = true
            //     //         document.getElementById(nav.height.toString()).classList.add('active')
            //     // } else {
            //     //     // nav.active = false
            //     //     document.getElementById(nav.height.toString()).classList.remove('active')
            //     // }}
            //     if (scrollTop > this.height_list[0]) {
            //         for (let i=0; i < this.height_list.length-1; i++) {
            //             if (scrollTop > this.height_list[i] && scrollTop < this.height_list[i+1]) {
            //                 console.log(i)

            //             }
            //         }
            //     }
            // }
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
