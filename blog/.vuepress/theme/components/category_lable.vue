<template>
    <span class="article_category" @click="go_to_tcategory_list(datas)">{{ datas }}</span>
</template>

<script>
export default {
    props: [
        'datas'
    ],
    methods: {
        go_to_tcategory_list(path) {
            this.$router.push('/category/' + path)
        }
    }
}
</script>
