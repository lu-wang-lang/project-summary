# (1)刘海处理
# (2)tabbar换成自定义的tabbar样式
# (3)微信登录
# (4)获取手机验证码登录

# (5)种类：滚动轴上拉下拽提示
# (6)种类：切换tab时，滚动轴滚回顶端  refresherpulling   scroll-top   @scroll
#   上拉下拽
onPullDownRefresh() {
			uni.showLoading({
				title: '加载中'
			});
			let ref = this.tabBars[this.findGenreType].id
			let timer = setTimeout(()=>{
				uni.stopPullDownRefresh();
			}, 5000)
			this.$refs[ref].init().finally(()=>{
				uni.stopPullDownRefresh();
				uni.hideLoading();
				clearTimeout(timer)
			})
			
		},
		scroll(e){
			if(e.detail.scrollTop > 600) return 
			this.old.scrollTop = e.detail.scrollTop
			if(e.detail.scrollTop > 62 && e.detail.deltaY < 0 && !this.isTop){
				this.isTop = true
				// // 向下滚动 隐藏搜索框
				uni.pageScrollTo({
					scrollTop: 70,
					duration: 200
				})
			}else if(e.detail.deltaY > 0 && this.isTop){
				// 向上滚动 显示搜索框
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 200
				})
				this.isTop = false
			}
		},
		vipScrollTo(distance){
			this.scrollTop = this.old.scrollTop;
			const isTop = this.isTop
			this.$nextTick(function() {
				uni.pageScrollTo({
					scrollTop: 70,
					duration: 200,
					success: () => {
						this.isTop = true
						if(isTop){
							this.scrollTop = this.scrollTop + distance - 50
						}else{
							this.scrollTop = this.scrollTop + distance - 107
						}
					}
				})
			})






# 图片必须上传到服务器，不能放在本地，太大了