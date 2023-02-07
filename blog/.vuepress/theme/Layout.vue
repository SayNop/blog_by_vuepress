<template>
    <div id="home">
        <header>
            <!-- <div class="header_container" v-show="!top_flag"> -->
            <div class="header_container">
                {{ top_flag }}
            </div>
        </header>
        <!-- <div id="background" v-show="top_flag"> -->
        <div id="background">
            <h1>我的在线笔记{{ top_flag }}</h1>
        </div>
        <div id="content_container" ref="demos">
            <div id="content">
                <div id="info">
                    <div id="slider">
                        <div class="slider_top card_border">
                            <div class="tags_brand">文章标签</div>
                            <div class="tags">
                                <span class="article_tag">python</span>
                                <span class="article_tag">vue</span>
                                <span class="article_tag">vue</span>
                                <span class="article_tag">vue</span>
                                <span class="article_tag">vue</span>
                                <span class="article_tag">vue</span>
                                <span class="article_tag">vue</span>
                                <span class="article_tag">vue</span>
                                <span class="article_tag">vue</span>
                                <span class="article_tag">vue</span>
                                <span class="article_tag">vue</span>
                                <span class="article_tag">vue</span>
                            </div>
                        </div>
                        <div class="slider_bottom card_border">
                            <div class="avatar" style="background-image:url(/assets/imgs/avatar.jpg);"></div>
                            <div class="author">Leopold</div>
                            <div class="summary">
                                <div><p>文章</p></div><div><p>分类</p></div><div><p>标签</p></div>
                                <div><p>1</p></div><div><p>1</p></div><div><p>2</p></div>
                            </div>
                            <div class="connection">
                                <div><p>GitHub:</p></div><div><p>xxx.github.com</p></div>
                                <div><p>Email:</p></div><div><p>xxx@gmail.com</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="article_container">
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
                </div>
            </div>
            <footer class="page_footer">
                <!-- <div class="footer_blank"></div> -->
                <div class="footer_middle card_border">
                    Released under the MIT License.<br>
                    Copyright © 2023-present Leopold
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            top_flag: true
        }
    }, 
    methods: {
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop > this.$refs.demos.offsetTop) {
                this.top_flag=false
            } else {
                this.top_flag=true
            }
        }   
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true)
    }
}

</script>
