
// var ws = new WebSocket("ws://oranzh.cc:8083");
 
// ws.onopen = function(evt) {
// 	console.log("Connection open ...");
// 	ws.send("Hello WebSockets!");
// };
 
// ws.onmessage = function(evt) {
// 	console.log("Received Message: " + evt.data);
// 	ws.close();
// };
 
// ws.onclose = function(evt) {
// 	console.log("Connection closed.");
// }
// .............................................................................................................................................
//初始化链接
 // ws = new WebSocket(" wss://oranzh.cc/wss");

 	//连接中
    // ws.onopen = function (evt) {
    //     alert("连接成功");        
    //     // ws.send('tom');
    //     // alert("给服务端发送一个字符串：tom");	
    // }

    //接收服务器返回的数据
    // ws.onmessage = function (e) {
    // 	console.log(e.data)
    //     // document.getElementById('img').src = 'data:image/gif;'+e.data;
    // }

    //关闭请求
 //    ws.onclose = function(evt) {
	// 	console.log("Connection closed.");
	// }
// ..............................................................................................................................................


// Define some data to encode
// var sourceData = {
//     number: 123,
//     number2: -0.129,
//     text: "Abc with Üñıçôðé and ユニコード",
//     flag: true,
//     list: [ 1, 2, 3 ],
//     obj: { a: 1, b: "2", c: false, d: { a: 0, b: -1 } },
//     time: Date.now()
// };


// Encode to byte array
// var encodedBytes = serializeMsgPack(sourceData);
// Decode again
// var decodedData = deserializeMsgPack(encodedBytes);




//客户端就会与服务端连接
	// var ws = new WebSocket("wss://oranzh.cc/wss");
	// if(ws.readyState == WebSocket.CONNECTING){
	// 	ws.addEventListener('open', function (event) {
	// 	  ws.send('Hello Server!');
	// 	});
	// }
//指定连接成功后的回调函数
	// ws.onopen = function(evt) {
		// console.log("连接成功"); 
		// ws.send("Hello WebSockets!");
	// }
//或者
	// ws.addEventListener('open', function (event) {
	// 	alert("连接成功"); 
	//   // ws.send('Hello Server!');
	// });

//用于指定连接关闭后的回调函数。
	// ws.onclose = function(event) {
	//   var code = event.code;
	//   var reason = event.reason;
	//   var wasClean = event.wasClean;
	// };
	 
	// ws.addEventListener("close", function(event) {
	//   var code = event.code;
	//   var reason = event.reason;
	//   var wasClean = event.wasClean;
	// });

//指定收到服务器数据后的回调函数
	// ws.onmessage = function(event) {
	//   var data = event.data;
	//   console.log(data)
	// };
	 
	// ws.addEventListener("message", function(event) {
	//   var data = event.data;
	// });

//服务器数据有可能是文本，也有可能是二进制数据，需要判断
	// ws.onmessage = function(event){
	// 	var str = event.data
	//     console.log(str)

	  // if(typeof event.data === String) {
	  //   console.log("Received data string");
	  // }
	 
	  // if(event.data instanceof ArrayBuffer){
	  //   var buffer = event.data;
	  //   console.log("Received arraybuffer");
	  // }
	// }
//除了动态判断收到的数据类型，也可以使用binaryType属性，显式指定收到的二进制数据类型

	// 收到的是 blob 数据
	// ws.binaryType = "blob";
	// ws.onmessage = function(e) {
	//   console.log(e.data.size);
	// };
	 
	// 收到的是 ArrayBuffer 数据
	// ws.binaryType = "arraybuffer";
	// ws.onmessage = function(e) {
	//   console.log(e.data.byteLength);
	// };

//send方法用于向服务器发送数据

	//发送文本
	// ws.send("Hello WebSockets!");

	//发送Blob数据
	// var file = document
	//   .querySelector('input[type="file"]')
	//   .files[0];
	// ws.send(file);

	//发送ArrayBuffer
	// var img = canvas_context.getImageData(0, 0, 400, 320);
	// var binary = new Uint8Array(img.data.length);
	// for (var i = 0; i < img.data.length; i++) {
	//   binary[i] = img.data[i];
	// }
	// ws.send(binary.buffer);


//bufferedAmount属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束
	// var data = new ArrayBuffer(10000000);
	// socket.send(data);
	 
	// if (socket.bufferedAmount === 0) {
	// 	console.log("发送完毕")
	//   //发送完毕
	// } else {
	// 	console.log("发送还没结束")
	//   // 发送还没结束
	// }

//用于指定报错时的回调函数
	// ws.onerror = function(event) {
	// 	console.log(event)
	// };
	 
	// es.addEventListener("error", function(event) {
	// 	console.log(event)
	// });



//前后JSON交互。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
// function binaryData(ev) {
//     return JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(ev.data)))
// }

// var ws = new WebSocket('wss://oranzh.cc/wss')
// ws.binaryType = 'arraybuffer';
// ws.onopen = function() {
	// console.log("连接了")
    // 发送 Hello 消息
    // ws.send(JSON.stringify({"controller_name":"wss\/Bind","method_name":"perform","uid":"5"}))
// }
// ws.onmessage = function (ev){
	// console.log(ev.data)
	// console.log(JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(ev.data))))
   
// }
// 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。


//前后二进制流交互。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
var ws = new WebSocket('wss://oranzh.cc/wss')
ws.binaryType = 'arraybuffer';
ws.onopen = function() {

// 	console.log("发送情况")
//     // 发送 Hello 消息
//     ws.send(JSON.stringify({Hello: {
//         Name: 'leaf'
//     }}))
}
ws.onmessage = function (ev) {

 var blob = new Blob([ev.data],{type:"text/plain"});

	// var reader = new FileReader();
	// reader.readAsText(blob, 'utf-8');
	// reader.onload = function (e) {
	//     console.info(reader.result);
	// }
	
	// console.log(JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(ev.data))))

	console.log(new TextDecoder("UTF-8").decode(new Uint8Array(ev.data)))
	// console.log()
}


 //。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。

// function binaryData(ev) {
//     return JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(ev.data)))
// }

// var ws = new WebSocket('wss://oranzh.cc/wss')
// ws.binaryType = 'arraybuffer';
// ws.onopen = function() {
//     // 发送 Hello 消息
//     ws.send(JSON.stringify({Hello: {
//         Name: 'leaf'
//     }}))
// }

// ws.onmessage = function (ev) {
//     console.log(binaryData(ev))
// }