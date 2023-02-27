<template>
    <div class="card_border content_container">
        <!-- <div>{{$page}}</div>  -->
        <div class="frontmatter_info">
            <h1 class="frontmatter-title">{{ $frontmatter.title }}</h1>
            <div class="frontmatter-date">{{  $frontmatter.date }}</div>
            <div class="card_tag frontmatter_tags">
                <span class="icon"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M896 682.666667a42.666667 42.666667 0 0 0-42.666667-42.666667h-85.333333v-85.333333a85.333333 85.333333 0 0 0-85.333333-85.333334h-128V384h85.333333a42.666667 42.666667 0 0 0 42.666667-42.666667V170.666667a42.666667 42.666667 0 0 0-42.666667-42.666667H384a42.666667 42.666667 0 0 0-42.666667 42.666667v170.666666a42.666667 42.666667 0 0 0 42.666667 42.666667h85.333333v85.333333H341.333333a85.333333 85.333333 0 0 0-85.333333 85.333334v85.333333H170.666667a42.666667 42.666667 0 0 0-42.666667 42.666667v170.666666a42.666667 42.666667 0 0 0 42.666667 42.666667h256a42.666667 42.666667 0 0 0 42.666666-42.666667v-170.666666a42.666667 42.666667 0 0 0-42.666666-42.666667H341.333333v-85.333333h341.333334v85.333333h-85.333334a42.666667 42.666667 0 0 0-42.666666 42.666667v170.666666a42.666667 42.666667 0 0 0 42.666666 42.666667h256a42.666667 42.666667 0 0 0 42.666667-42.666667z"></path></svg></span>
                <category_lable :datas="$frontmatter.category"/>
                <span class="icon" style="margin-right: 5px"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M985.6 473.6 985.6 473.6l-256 256-256 256 0 0C454.4 1011.2 422.4 1024 384 1024c-38.4 0-70.4-12.8-89.6-38.4l0 0-256-256 0 0C12.8 710.4 0 678.4 0 640c0-38.4 12.8-70.4 38.4-89.6l0 0 256-256 256-256 0 0C569.6 12.8 601.6 0 640 0l256 0c70.4 0 128 57.6 128 128l0 256C1024 422.4 1011.2 454.4 985.6 473.6zM768 128c-70.4 0-128 57.6-128 128 0 70.4 57.6 128 128 128 70.4 0 128-57.6 128-128C896 185.6 838.4 128 768 128z"></path></svg></span>
                <tag_lable :tag_name="tag"  v-for="tag in $frontmatter.tags" :key="tag" />
            </div>
        </div>
        <Content/>
    </div>
</template>

<script>
// markdown使用样式，不可受作用域影响
import '../styles/markdown'
import category_lable from './category_lable'
import tag_lable from './tag_lable'
export default {
    name: 'detail',
    components: {
        category_lable,
        tag_lable,
    },
    mounted() {
        document.documentElement.setAttribute('style', 'overflow: scroll;scroll-behavior: smooth;');
    }
}
</script>

<style scoped lang="stylus">
    // scoped: 该组件才能使用的样式
    @import '../styles/detail'
</style>
