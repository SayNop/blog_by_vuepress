<template>
    <div id="article_list">
        <!-- <div>{{$site.pages}}</div>  -->
        <div class="article_list" v-for="item in $site.pages" :key="item.key">
            <div class="article_card card_border" v-if="item.frontmatter.layout=='detail'" @click="go_to_detail(item.regularPath)">
                <div class="card_title_container">
                    <div class="card_title article_title">{{ item.frontmatter.title }}</div> 
                    <div class="article_time">{{ item.frontmatter.date }}</div>
                </div>
                <div class="card_content_container">
                    <div class="card_content">{{ item.frontmatter.discription }}</div>
                    <div class="card_tag">
                        <category_lable :datas="item.frontmatter.category"/>
                        <tag_lable :datas="tag"  v-for="tag in item.frontmatter.tags" :key="tag" />
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="stylus">
    // scoped: 该组件才能使用的样式
    @import '../styles/articles'
</style>

<script>
import category_lable from './category_lable'
import tag_lable from './tag_lable'
export default {
    props: [
        'articles'
    ],
    components: {
        category_lable,
        tag_lable,
    },
    methods: {
        go_to_detail(path) {
            this.$router.push(path)
        }
    }
}
</script>
