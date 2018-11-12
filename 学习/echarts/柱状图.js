var Echarts = echarts.init(document.getElementById("Bar"))
 Echarts.setOption({
				//图标标题
				title:{
					text:"2018年气温"
					// textStyle:{
					// 	color:"red",
					// },
				},
				//分类框
				legend:{
					data:["最高气温","最低气温"]
				},	

				//x轴项目列表																
				xAxis:{
					// type: 'category',
					//是否紧贴0介边
					boundaryGap: true,
					//x轴上面的字
					data:["1月","2月","3月","4月","5月","6月","7月"]

				},

				yAxis:{
					 type:"value"
				},
				//全局背景颜色
				// backgroundColor:["#cecece"],
				//绘制图表信息
				series:[
					{
						type:"bar", //类型
						data:["30","32","40","42","43","48","50"], //y轴的上的字(只能是数字)
						name:"最高气温"
						// areaStyle: {}, //是否填充
					},
					{
						type:"bar",
						data:["11","15","16","5","23","28","5"],//(只能是数字)
						name:"最低气温"
						// areaStyle: {},
					}
				],
				//工具框
				toolbox:{
					feature:{
						dataZoom: {}, //区域缩放
						restore: {}, //区域缩放还原      
						saveAsImage: {}, //还原
						dataView:{}, //保存为图片
						magicType:{
							type:["bar","line"] //切换为柱状切换为折线
						}, //数据视图
						// brush:{}, //矩形圆形纵向选择保存选择清楚选择
						// emphasis:{},
					},
					right:"0" //距离右边20
				},
				//信息提示框
				tooltip:{
					trigger:"axis",	//触发类型 item必须点到圆点上在弹出框
					axisPointer: {
						type: 'cross'    // 同时显示xy轴数据 默认是y轴
					},
					triggerOn:"mousemove"
				}
			})