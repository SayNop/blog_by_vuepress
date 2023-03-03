<template>
    <div class="card_border content_container">
        <!-- <div>{{$page}}</div>  -->
        <div class="frontmatter_info">
            <h1 class="frontmatter-title">{{ $frontmatter.title }}</h1>
            <div class="frontmatter-date">{{  $frontmatter.date }}</div>
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
    components: {
        category_lable,
        tag_lable,
        category_icon,
        tag_icon
    },
    mounted() {
        document.documentElement.setAttribute('style', 'overflow: scroll;scroll-behavior: smooth;');
    }
}
</script>

<style scoped lang="stylus">
    // scoped: 该组件才能使用的样式
    @import '../styles/detail'
</style>
