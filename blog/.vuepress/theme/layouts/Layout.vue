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
                <sidebar :class="show_sidebar?'show_info' :'hidden_info'"/>
                <div id="article_container">
                    <!-- <div>{{$page.frontmatter.layout}}</div> -->
                    <articles/>
                    <!-- <detail/> -->
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


export default {
    components: {
        detail,
        header_wrapper,
        sidebar,
        articles,
        footer_wrapper
    },
    data() {
        return {
            header_opacity: 0,
            show_sidebar: false
        }
    }, 
    methods: {
        handleScroll()
        {   
            // 桌面端进行动态渲染
            if(window.screen.availWidth > 767) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(this.$refs.demos.offsetTop) 
                    this.header_opacity = scrollTop / (this.$refs.demos.offsetTop/3)
            }
        },
        showSlide(){
            this.show_sidebar = !this.show_sidebar
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true)
        if(window.screen.availWidth > 767) document.body.addEventListener('touchstart',function(){})
    }
}
</script>
