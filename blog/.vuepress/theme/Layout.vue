<template>
    <div id="home">
        <header class="header" :style="{opacity: header_opacity}">
            <div class="header_container">
                <div><a class="header_title" href="/">Leopold</a></div>
                <div class="appearance">
                    <button class="switch" type="button"  @click="handleDark">
                        <span class="check">
                            <span class="icon"><!--[-->
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="sun" v-show="is_dark">
                                    <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path>
                                    <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path>
                                    <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path>
                                    <path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path>
                                    <path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path>
                                    <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
                                    <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                                    <path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path>
                                    <path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="moon" v-show="!is_dark">
                                    <path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path>
                                </svg><!--]-->
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </header>
        <!-- <div id="background" v-show="top_flag"> -->
        <div id="background">
            <!-- <h1>我的在线笔记{{ header_opacity }}</h1> -->
        </div>
        <div id="content_container" ref="demos">
            <div id="content">
                <div id="info">
                    <div id="slider">
                        <div class="slider_top card_border">
                            <div class="tags_brand">文章标签</div>
                            <div class="tags">
                                <span class="article_tag">Python</span>
                                <span class="article_tag">Vue</span>
                                <span class="article_tag">Android</span>
                                <span class="article_tag">Assemble</span>
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
                                <div><p>GitHub:</p></div><div><p>github.com/SayNop</p></div>
                                <div><p>Email:</p></div><div><p>fur999immer@gmail.com</p></div>
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
            top_flag: true,
            header_opacity: 0,
            is_dark: false
        }
    }, 
    methods: {
        handleScroll()
        {   
            // 桌面端进行动态渲染
            if(window.screen.availWidth > 767) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(this.$refs.demos.offsetTop) 
                    this.header_opacity = scrollTop / (this.$refs.demos.offsetTop/3)
            }
        },
        handleDark(){
            this.is_dark = !this.is_dark
            if(this.is_dark){
                document.documentElement.className = 'dark'
            } else {
                document.documentElement.className = ''
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true)
    }
}

</script>
