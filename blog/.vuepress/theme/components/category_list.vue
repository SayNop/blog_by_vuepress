<template>
    <div>
        <div class="category_brand card_border"><span >所有分类</span></div>
        <div class="card_border category_card" v-for="item in $category.list" :key="item.key">
            <div class="category_name"  @click="go_to_category_list(item.path)">{{ item.name }}</div>
            <div class="category_count"  @click="go_to_category_list(item.path)">共计 {{ item.pages.length }} 篇</div>
            <div class="category_title">
                <ul>
                    <li class="article_info" v-for="article in item.pages.slice(0, 10)" :key="article.title">
                        <!-- {{ article }} -->
                        <div class="article_list_title" @click="go_to_detail(article.path)">{{ article.title }} </div>
                        <div class="article_list_tags">
                            <span style="display: inline-block;vertical-align: bottom;" class="icon"><tag_icon /></span>
                            <!-- <span v-for="tag in article.frontmatter.tags" :key="tag"> {{ tag }}</span> -->
                            <span> {{ article.frontmatter.tags.join(', ') }}</span>
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
import tag_icon from './icons/tag'
export default {
    components: {tag_icon},
    methods: {
        go_to_category_list(path) {
            this.$router.push(path)
        },
        go_to_detail(path) {
            this.$router.push(path)
        }
    }
}
</script>
