<template>
	<view class="form">
		<view class="uni-form-item">
			<label class="uni-list-cell">
				<input class="uni-input" focus type="text" v-model="form.username" placeholder="请输入用户名"/>
			</label>
		</view>
		<button type="primary" @click="submit">添加</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
				    username:""	
				}
			}
		},
		methods: {
			submit(){
				uniCloud.callFunction({
					name:'addUser',
					data:this.form,
					success: (e) => {
						uni.showToast({
							title:'添加成功',
							duration:2000
						});
						setTimeout(()=>{
							uni.navigateTo({
								url:'../index/index'
							})
						},2000)
					}
				})
			}
		}
	}
</script>

<style>
.uni-form-item{
	padding: 20rpx 0;
}
.uni-input {
	height: 28px;
	line-height: 28px;
	font-size: 15px;
	padding: 5px 13px;
	flex: 1;
	background-color: #FFFFFF;
}
</style>
