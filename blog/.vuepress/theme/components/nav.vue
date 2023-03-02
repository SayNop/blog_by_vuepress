<template>
    <section class="article_sidebar">
            <ul>
                <li :id="item.height" :class="'level' + item.level" v-for="item in $page.headers" :key="item.slug">
                    <a class="sidebar-link" :href="'#'+item.slug">{{ item.title }}</a>
                </li>
            </ul>
        </section>
</template>

<style scoped lang="stylus">
    // scoped: 该组件才能使用的样式
    @import '../styles/nav'
</style>

<script>
export default {
    name: 'nav_wrapper',
    components: {
    },
    data() {
        return {
            height_list: []
        }
    },
    methods: {
        scroll_acitve(){
            // 文章导航栏
            if(this.$frontmatter.layout == 'detail') {
                var scrollTop = window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop;
                if (scrollTop > this.height_list[0]) {
                    let i
                    for (i=0; i < this.height_list.length-1; i++) {
                        if (scrollTop > this.height_list[i] && scrollTop < this.height_list[i+1]) {
                            break
                        }
                    }
                    document.getElementsByClassName('article_sidebar')[0].childNodes[0].childNodes.forEach((item, index) => {
                        if (index == i) {
                            item.classList.add('active')
                        } else {
                            item.classList.remove('active')
                        }
                    })
                }
            }
        }
    },
    mounted() {
        // 滚动触发头部与文章页导航
        window.addEventListener('scroll', this.scroll_acitve, true)
        // 计算并绑定每个导航的距离
        if (this.$frontmatter.layout == 'detail') {
            do {
                var titles = document.getElementsByClassName('header-anchor')
            } while (!titles.length)
            // for (let title of titles) {
            //     for (let nav of this.$page.headers) {
            //         if ( nav.slug == title.parentElement.id ) {
            //             nav.height = title.parentElement.offsetTop
            //             console.log(title.parentElement.offsetTop)
            //             break
            //         }
            //     }
            // }
            for (let title of titles) {
                this.height_list.push(title.parentElement.offsetTop)
            }
            console.log(this.height_list)
        }
    }
}
</script>
