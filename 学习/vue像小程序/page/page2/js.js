
// 组件
Vue.component('greeting',{
	template:'<div>{{name}}啊来<u>131xfsdf</u><p>{{name}}啊来<u>131xfsdf</u>是几点发链接回复</p>是几点发链接回复</div>',
	data:function(){
		return{
			name:"你好"
		}
	},
	methods:{

	}
})

new Vue({
	el:"#vue-app-one"
});
new Vue({
	el:"#vue-app-two"
})