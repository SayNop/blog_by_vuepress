<template>
    <div>
        <div class="category_brand card_border"><span >文章分类</span></div>
        <div class="category_card card_border" v-for="item in $category.list" :key="item.key" @click="go_to_category_list(item.path)">
            <div class="category_name">{{ item.name }}</div>
            <div class="category_count">{{ item.pages.length }}</div>
        </div>
    </div>
</template>

<style scoped lang="stylus">
    // scoped: 该组件才能使用的样式
    @import '../styles/category.styl'
</style>

<script>
export default {
    methods: {
        go_to_category_list(path) {
            this.$router.push(path)
        }
    }
}
</script>
