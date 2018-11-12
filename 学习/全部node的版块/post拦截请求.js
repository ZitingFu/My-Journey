//拦截post请求
var bodyparser = require("body-parser")

//拦截post请求
it.use(bodyparser.urlencoded({}))
it.use(bodyparser())


//(*input请求的一定要走post请求,request.query改成request.body)
it.post("/re",function(request,response){
	
	//获取url的传过来的值
	var Username = request.body.username
	var password = request.body.password
	//向数据库插入数据
	
	response.end(
		response.send({
			state:"true",
			ds:"注册成功"
		}))
})
