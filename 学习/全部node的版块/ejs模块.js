//模板引擎
var ejs = require("ejs");
//创建http请求
var express = require("express")
var it = express()
//动态数据获取
var expressStatic = require("express-static")


//renderFile第一个方法里面的模板后椎名必须是.ejs
//第一个参数(找到ext.ejs)
//第一个参数(jaon后椎名的文件里面是个对象修改第一个参数里面的文件)

ejs.renderFile("./ext.ejs",{},function(error,data){
	if(error)
		console.log(error)
	else{
		response.end(data)  //整个页面返回到网页
	}
})

it.use(expressStatic("./"))
//监听
it.listen(55777)
