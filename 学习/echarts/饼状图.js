var Echarts = echarts.init(document.getElementById("Pie"))
			Echarts.setOption({

				//头部文字和位置
			 	title: {
				        text: '本月账户汇总',
				        left: 'center',
				        top: 40,
				    //     textStyle: {
				    //         color: '#000'
					 		// }
					 },

				//分类框
				legend:{
					data:["本月广告收入总费用","本月支持金总支出"],
					 orient: 'vertical',  //一数列 默认一横列
					 x: 'left',
					 top: 40,
					 left:20
				},	

			 	//绘制饼状图
				series : [
					{
						name:'访问来源',  //弹出框里面的标题
						type:'pie',      //饼状图类型
						radius : '50%',		//饼状图
						center: ['50%', '50%'], //饼状图准确位置
						data:[
								{value:14, name:'本月广告收入总费用'},
								{value:12, name:'本月支持金总支出'},
							]
					}
				],

				//全局背景颜色
				// backgroundColor:["#cecece"],
				//玫瑰图
				 // roseType: 'radius',

				//弹出框
				 tooltip : {
			        trigger: 'item',
				},
			})