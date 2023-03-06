export default ({
	Vue, // VuePress 正在使用的 Vue 构造函数
	options, // 附加到根实例的一些选项
	router, // 当前应用的路由实例
	siteData // 站点元数据
}) => {
	// ...做一些其他的应用级别的优化
	router.afterEach((to,from,next) => {
		console.log(to)
		console.log(from)
		console.log(next)
		window.scrollTo(0,0);
	})
	router.scrollBehavior = function() {
		return { y: 0 } // 始终滚动到顶部
	}
}
