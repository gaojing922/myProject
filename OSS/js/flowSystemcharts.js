$(window).resize(function(){    
    chart.setSize();   
});
$(function(){
	//分布比例
	 $('.llgl-fbbl-charts').highcharts({
	 	credits: {//禁用版权信息
            enabled:false
      	},
        chart: {
        	plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true
        },
        title: {
            floating:true,
            text: '2145张'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,//不显示提示
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            innerSize: '50%',
            name: '分布比例',
            data: [
             	{name:'广州移动',y:55,color:'#fcee10'},
             	{name:'集成商重庆岁寒',y:45,color:'#d34444'}
            ]
        }]
    }, function(c) {
        // 环形图圆心
        var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
        c.setTitle({
            y:centerY + titleHeight/2
        });
        chart = c;
    });
	
	
	//激活比例
	$('.llgl-jhbl-charts').highcharts({
		credits: {//禁用版权信息
            enabled:false
      	},
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance:-45,
                    /*format: '<b>{point.name}</b>: {point.percentage:.1f} %',*/
                   format: '<b>{point.name}</b>',
                    style: {
                        color:'#ffffff',
                        fontSize:'12px'
                    },
                   connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '激活比例',
            data: [
                {
                    name: '未激活',
                    y: 12.8,
                    color:'#d4d6d9',
                    //sliced: true,
                    //selected: true
                },
                {
                    name: '已激活',
                    y: 22.8,
                    color:'#178bbc'
                }
            ]
        }]
    });
	
	
	//故障比例
	$('.llgl-gzbl-charts').highcharts({
		credits: {//禁用版权信息
            enabled:false
      	},
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance:-50,
                    format: '<b>{point.name}</b>',
                    style: {
                        color:'#ffffff',
                        fontSize:'12px'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '故障比例',
            data: [
                {
                    name: '销号',
                    y: 12.8,
                    color:'#e48686',
                    //sliced: true,
                    //selected: true
                },
                {
                    name: '正常',
                    y: 25.8,
                    color:'#85cd5d'
                },
                {
                    name: '停机',
                    y: 2.8,
                    color:'#dddddd'
                },
                {
                    name: '其它',
                    y: 29.8,
                    color:'#9dd7d9'
                },
            ]
        }]
    });
	//所属服务器分布
	$('.llgl-server-charts').highcharts({
    	credits: {//禁用版权信息
            enabled:false
        },
        chart: {
            type: 'column',
            marginTop:'20'
        },
        title: {
			text:null
        },
        xAxis: {	
            categories: [
                '中国',
                '思迈特',
                '晴天',
                '正泰',
                '海外',
                '其他'
            ],
            crosshair: true,
            tickLength: 0,//坐标轴刻度线的长度,
            labels: {
                style: {
                    color: '#222222',
                    fontSize:'12px'
                }
            },
        },
        yAxis: {
            min: 0,
            title: {
                text:'SIM卡数(张)',
                style: {
	                color: '#222222',
	                fontWeight: 'bold',
	                fontSize:'14px'
	            }
            },
            labels: {
                style: {
                    color: '#222222',
                    fontSize:'12px'
                }
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:14px;color:#333333;">{point.key}</span><table style="width:100px;">',
            pointFormat: '<tr><td style="color:{series.color};font-size:12px;padding:0">{series.name}: </td>' +
            '<td style="padding:0;color:#333333;font-size:12px;"><b>{point.y:.1f}台</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        legend : {
		    enabled:false
		},
        series: [{
            name: '服务器',
            color:'#7bb5ec',
            data: [49.9, 71.5, 106.4, 129.2, 144.0,133]
        }]
    });
    //使用比例1
    $('.userRatio-chartOne').highcharts({
		credits: {//禁用版权信息
            enabled:false
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            marginBottom:-60,
            marginTop:-62
        },
        title: {
            text: null,
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -27,
                    style: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                        textShadow: '0px 1px 2px black',
                        fontSize:'15px'
                    },
                    format:'{point.percentage:.1f}%'//在图表上显示百分比
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: '使用比例',
            innerSize: '50%',
            data: [{name:'已使用',y:55,color:'#3bd2d4'},{name:'未使用',y:65,color:'#dddddd'}]
        }]
    });
    //使用比例2
     $('.userRatio-chartTwo').highcharts({
		credits: {//禁用版权信息
            enabled:false
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
           	marginLeft:-50,
            marginRight:-50,
            marginBottom:-60,
            marginTop:-62
        },
        title: {
            text: null,
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -27,
                    style: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                        textShadow: '0px 1px 2px black',
                        fontSize:'15px'
                    },
                    format:'{point.percentage:.1f}%'//在图表上显示百分比
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: '使用量',
            innerSize: '50%',
            data: [{name:'已使用',y:36,color:'#3bd2d4'},{name:'未使用',y:55,color:'#dddddd'}]
        }]
    });
})
