<template>
    <span class="article_tag" @click="go_to_tag_list(datas)">{{ datas }}</span>
</template>

<script>
export default {
    props: [
        'datas'
    ],
    methods: {
        go_to_tag_list(path) {
            this.$router.push('/tag/' + path)
        }
    }
}
</script>
