<template>
    <!-- 使用冒泡stop，阻止父组件的跳转覆盖子组件 -->
    <span class="article_category" @click.stop="go_to_category_list(datas)">{{ datas }}</span>
</template>

<script>
export default {
    props: [
        'datas'
    ],
    methods: {
        go_to_category_list(path) {
            this.$router.push('/categories/' + path)
        }
    }
}
</script>
