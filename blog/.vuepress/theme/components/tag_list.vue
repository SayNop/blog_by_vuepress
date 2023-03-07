<template>
    <div>
        <div class="category_brand card_border"><span >所有标签</span></div>
        <div class="card_border category_card" v-for="item in $tag.list" :key="item.key">
            <div class="category_name"  @click="go_to_tag_list(item.path)">{{ item.name }}</div>
            <div class="category_count"  @click="go_to_tag_list(item.path)">TOP 10 /共计 {{ item.pages.length }} 篇</div>
            <div class="category_title">
                <ul>
                    <li class="article_info" v-for="article in item.pages.slice(0, 10)" :key="article.title">
                        <!-- {{ article }} -->
                        <div class="article_list_title" @click="go_to_detail(article.path)">{{ article.title }} </div>
                        <div class="article_list_tags">
                            <span style="display: inline-block;vertical-align: bottom;" class="icon"><category_icon /></span>
                            <span> {{ article.frontmatter.category }}</span>
                        </div>
                        <div class="article_list_date">{{ article.frontmatter.date.slice(0,10) }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="stylus">
    // scoped: 该组件才能使用的样式
    @import '../styles/category.styl'
</style>

<script>
import category_icon from './icons/category'
export default {
    components: {category_icon},
    methods: {
        go_to_tag_list(path) {
            this.$router.push(path)
        },
        go_to_detail(path) {
            this.$router.push(path)
        }
    }
}
</script>