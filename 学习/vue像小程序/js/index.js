//实例化vue对象
new Vue({
	el:"#Vue-app",  //element: 需要获取的元素，一定是html中的根容器
	data:{          //data: 用于数据储存
		name:"你好",
		fuziting:"傅紫婷",
		href:"https://www.2345.com/?38264-0010",
		websiteTag:"<a href='https://cn.vuejs.org/v2/guide/'>websiteTag</a>",
		age:"18",
		x:0,
		y:0,
		a:10,
		b:20,
		age:50,
		jj:false,
		orange:false,
		chengwidth:false,
		fin:false,
		fin2:true,
		activeClass: 'activeClass',
  		errorClass: 'errorClass',
  		num:0,
  		template: '<p class="foo bar">Hi</p>',
  		mai:[
	  		{
	  			name:"傅紫婷",
	  			age:"18",
	  			sex:"女"
	  		},
	  		{
	  			name:"杨林",
	  			age:"18",
	  			sex:"男"
	  		},
	  		{
	  			name:"小梦",
	  			age:"18",
	  			sex:"女"
	  		}
  		],
  		hideLoading:100,
  		Square:"Square",
  		ended:true
  		
	},
	
	methods:{             //用于存储各种方法
		// on(res){
		// 	this.fin=!this.fin
		// },
		// Submission(){
		// 	// var name = this.$refs.name.value
		// 	// var age = this.$refs.age.value
		// 	// console.log(name,age)
		// },
		// submit(){
		// 	var name = this.$refs.name.value
		// 	var age = this.$refs.age.value
		// 	console.log("你正在输入你的名字"+name,age)
		// },
		// dianji(res){
		// 	this.num = res
		// 	// console.log(this.$refs.name.dataset.id)
		// 	console.log(res)
		// },
		start(){
			this.hideLoading = 100
			this.ended = true
			this.Square='Square'
		},
		jia(){
			this.hideLoading -= 10;
			if(this.hideLoading <= 0){
				this.ended = false
				this.Square='Square2'
			}
		}
	},
})
	// 组件
	// Vue.component('button-counter', {
	// 	data: function () {
	// 	 return {
	// 	   count:0
	// 	 }
	// },
	// 	template: '<button>You clicked me times.</button>'
	// }),
	// Vue.component('button-app', {
	// 	data: function () {
	// 	 return {
	// 	   console:123
	// 	 }
	// },
	// 	template: '<button>{{console}}</button>'
	// })
