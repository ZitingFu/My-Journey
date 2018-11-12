//第三方链接数据库
var mysql = require("mysql")



//增删查改数据库
// "SELECT * FROM userInfo" //获取文件下的所有数据库
//"INSERT INTO user (name,password) value ('fuziting','123')"//向数据库插入数据
//"UPDATE userInfo SET password='132' WHERE name='fuziitng' "  //修改密码


//1-配置数据库参数
var db = mysql.createConnection({
	host:"localhost",		//数据库走的地址
	user:"root",  		 //数据库账号
	password:"!fzt18220908313",
	database:"user" //数据库表的名字
})

//2-链接数据库	
db.connect()


//3-查看全部库里面的user_的所有
db.query("SELECT * FROM user_",function(error,data){
	if(error)
		console.log(error)
	else{
		for(var j=0;j < data.length;j++){
			arry[data[j].name] = data[j].password
		}
	}
})	

//3-向数据库添加数据(用了一个对象)
var newUser = {name:Username,password:password}
	db.query('INSERT INTO user_ set?',newUser,function(error,data){
        if(error){
         	console.log(error);
        }
        else{
        	console.log(Username+"注册成功")
        }  
	});

//3-向数据库添加数据(*用单引号包着双引号)
db.query("INSERT INTO user (name,password) value ('+"Username+"','"+password+"')",function(error,data){
		var data = JSON.stringify(data)
		if(error)
			console.log(error)
		else{
			console.log(data)//返回ok插入成功
		}
	})


//3-通过用户名查找密码返回的是叫'傅紫婷'的所有密码
db.query("SELECT password FROM user_ WHERE name = '傅紫婷'",function(error,data){
	if(error)
		console.log(error)
	else{
		console.log(data)
	}
})	

//3-通过input标签里面的用户名查找数据库是否有"傅紫婷"
db.query("SELECT name FROM user_ WHERE name = '傅紫婷'",function(error,data){
	if(error)
		console.log(error)
	else{
		console.log(data)
	}
})	

//3-向数据库修改数据(*用单引号包着拼接好的变量)
db.query("UPDATE user_ SET password='"+password+"' WHERE name='"+Username+"'",function(error,data){
    if(error){
     	console.log(error);
    }
    else{
    	console.log(Username+"修改密码成功成功")
    }  
});