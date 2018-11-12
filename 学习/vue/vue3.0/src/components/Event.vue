<template>
	<!-- 在template中只能存在一个跟组件 -->
	<div class="event">
		<p v-bind:title="css">
		鼠标悬停几秒查看此动态
		</p>
		<input type="text" v-model="DS">
		<p>{{DS}}</p>
		<div>
			<p v-model="kk">{{kk}}</p>
			<button v-on:click="reverseMessage">点击改变文字</button>
		</div>

		<div>
			<p v-if="show">我喜欢红色</p>
			<p v-else>我不喜欢红色</p>
		</div>
		<ol>
			<li v-for="i in todos">{{i.text}}</li>
		</ol>
	</div>
</template>
		
<script>
// 要导出可被外部访问
export default {
	//渲染页面
	data () {
		return {
			kk:"欢迎光临您好啊",
			msg:"欢迎光临",
			css:"这是一段不怎么明白的文字"+new Date().toLocaleString(),
			DS:"",
			show:true,
		 	todos:[
		      { text: '学习 JavaScript'},
		      { text: '学习 Vue'},
		      { text: '整个牛项目'}
		    ]
		}
	},
	methods:{
		reverseMessage: function () {
	      this.kk.split('').reverse().join('')
	    }
		
	}
}

</script>
<style>
	
</style>