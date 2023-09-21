<template>
    <div class="card_border content_container">
        <!-- <div>{{$page}}</div>  -->
        <div class="frontmatter_info">
            <h1 class="frontmatter-title">{{ $frontmatter.title }}</h1>
            <div class="frontmatter-date">{{  $frontmatter.date.slice(0,10) }}</div>
            <div class="card_tag frontmatter_tags">
                <span class="icon">
                    <category_icon />
                </span>
                <category_lable :datas="$frontmatter.category"/>
                <span class="icon" style="margin-right: 5px">
                    <tag_icon />
                </span>
                <tag_lable :tag_name="tag"  v-for="tag in $frontmatter.tags" :key="tag" />
            </div>
        </div>
        <Content/>
        <script src="https://giscus.app/client.js"
            data-repo="SayNop/SayNop.github.io"
            data-repo-id="R_kgDOIlAnJQ"
            data-category="Announcements"
            data-category-id="DIC_kwDOIlAnJc4CYVx8"
            data-mapping="pathname"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="bottom"
            :data-theme="comment_dark ? 'dark_protanopia' : 'light_protanopia'"
            data-lang="zh-CN"
            crossorigin="anonymous"
            async>
        </script>
    </div>
</template>

<script>
// markdown使用样式，不可受作用域影响
import '../styles/markdown'
import category_lable from './category_lable'
import tag_lable from './tag_lable'
import category_icon from './icons/category.vue'
import tag_icon from './icons/tag.vue'
export default {
    name: 'detail',
    data() {
        return {
            comment_dark: false
        }
    },
    components: {
        category_lable,
        tag_lable,
        category_icon,
        tag_icon
    },
    mounted() {
        document.documentElement.setAttribute('style', 'overflow-y: scroll;scroll-behavior: smooth;');
        if( localStorage.getItem('theme') ) {
            if( localStorage.getItem('theme') == 'dark' ) {
                this.comment_dark=true
            } else {
                this.comment_dark=false
            }
        } else {
            localStorage.setItem('theme', 'light')
            this.comment_dark = false
        }
        window.addEventListener("storage", function(){
            this.comment_dark = window.localStorage.getItem('theme') == 'dark' ? true : false;
            console.log(this.comment_dark)
        })
    }
}
</script>

<style scoped lang="stylus">
// scoped: 该组件才能使用的样式
@import '../styles/detail'
</style>
