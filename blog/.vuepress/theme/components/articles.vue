<template>
    <div id="article_list">
        <!-- <div>{{$site.pages}}</div>  -->
        <div class="article_card card_border">
            <div class="card_title_container">
                <div class="card_title article_title">HelloWorld</div> 
                <div class="article_time">2023-01-01 12:00:00</div>
            </div>
            <div class="card_content_container">
                <div class="card_content">print('Hello World')</div>
                <div class="card_tag">
                    <span class="article_category">python</span>
                    <span class="article_tag">python</span>
                    <span class="article_tag">vue</span>
                </div> 
            </div>
        </div>
        <div class="article_list" v-for="item in $site.pages" :key="item.key">
            <div class="article_card card_border" v-if="item.frontmatter.layout=='detail'" @click="go_to_detail(item.regularPath)">
                <div class="card_title_container">
                    <div class="card_title article_title">{{ item.frontmatter.title }}</div> 
                    <div class="article_time">{{ item.frontmatter.date }}</div>
                </div>
                <div class="card_content_container">
                    <div class="card_content">{{ item.frontmatter.discription }}</div>
                    <div class="card_tag">
                        <span class="article_category">{{ item.frontmatter.category }}</span>
                        <span class="article_tag" v-for="tag in item.frontmatter.tags" :key="tag">{{ tag }}</span>
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
export default {
    name: 'articles',
    methods: {
        go_to_detail(path) {
            this.$router.push(path)
        }
    }
}
</script>
