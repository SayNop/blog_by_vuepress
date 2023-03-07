<template>
    <!-- 使用冒泡stop，阻止父组件的跳转覆盖子组件 -->
    <span class="article_tag" @click.stop="go_to_tag_list(tag_name)">{{ tag_name }}</span>
</template>

<script>
export default {
    props: [
        'tag_name'
    ],
    methods: {
        go_to_tag_list(path) {
            this.$router.push('/tags/' + path)
        }
    }
}
</script>
