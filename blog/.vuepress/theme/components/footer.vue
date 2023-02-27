<template>
    <footer class="page_footer">
        <!-- <div class="footer_blank"></div> -->
        <!-- <div class="footer_middle card_border">
            Released under the MIT License.<br>
            Copyright © 2023-present Leopold
        </div> -->
        <div class="footer_middle card_border">
            <span v-for="item in $themeConfig.footer.copyright" :key="item.text">{{ item.text }} <br></span>
        </div>
    </footer>
</template>

<style scoped lang="stylus">
    // scoped: 该组件才能使用的样式
    @import '../styles/footer'
</style>
