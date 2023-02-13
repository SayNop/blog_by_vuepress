<template>
    <div id="article_list">
        <div class="article_list">
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
        </div>
    </div>
</template>

<style scoped lang="stylus">
    // scoped: 该组件才能使用的样式
    @import '../styles/index'
    @import '../styles/articles'
</style>
