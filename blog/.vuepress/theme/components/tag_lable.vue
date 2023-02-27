<template>
    <span class="article_tag" @click="go_to_tag_list(tag_name)">{{ tag_name }}</span>
</template>

<script>
export default {
    props: [
        'tag_name'
    ],
    methods: {
        go_to_tag_list(path) {
            this.$router.push('tags' + path)
        }
    }
}
</script>
