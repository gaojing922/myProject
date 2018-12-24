$(function () {
    $('.yxtf-charts-one').highcharts({
    	credits: {//禁用版权信息
            enabled:false
        },
        chart: {
            type: 'column'
        },
        title: {
        	useHTML:true,
			text:'<img src="images/Chart_icon.png" style="margin-bottom:3px;">&nbsp;状态统计',
            style:{
        		'fontColor':'#333333',
        		'fontSize':'14px'
    		}
        },
        xAxis: {	
            categories: [
                '美洲',
                '其它',
                '大洋洲',
                '非洲',
                '欧洲',
                '亚洲',
                '中国'
            ],
            crosshair: true,
            tickLength: 0,//坐标轴刻度线的长度,
            labels: {
                style: {
                    color: '#888888',
                    fontSize:'12px'
                }
            },
        },
        yAxis: {
            min: 0,
            title: {
                text:null
            },
            labels: {
                style: {
                    color: '#888888',
                    fontSize:'12px'
                }
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:14px;color:#333333;">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};font-size:12px;padding:0">{series.name}: </td>' +
            '<td style="padding:0;color:#333333;font-size:12px;"><b>{point.y:.1f} mm</b></td></tr>',
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
		    itemStyle : {
		        'fontSize' : '12px',
		        'color':'#888888',
		        'fontWeight':'normal'
		    }
		},
        series: [{
            name: '等待',
            color:'#00aeff',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
        }, {
            name: '离线',
            color:'#D4D4D4',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]
        }, {
            name: '在线',
            color:'#27be04',
            data: [39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4]
        }, {
            name: '错误',
            color:'#CE4933',
            data: [39.7, 52.6, 60.4, 47.6, 39.1, 46.8, 51.1]
        }]
    });
    //no.2
    $('.yxtf-charts-two').highcharts({
    	credits: {//禁用版权信息
            enabled:false
        },
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 35
            }
        },
        title: {
        	useHTML:true,
			text:'<img src="images/bing_icon.png" style="margin-bottom:2px;">&nbsp;状态统计',
            style:{
        		'fontColor':'#333333',
        		'fontSize':'14px'
    		}
        },
      	tooltip:{
      		valueSuffix:'个'
      	},
        plotOptions: {
            pie: {
                innerSize: 50,
                dataLabels: {//设置在图表中显示字
                    distance: -40,                    
                }
            }            
        },
        series: [{
            name: '数量',            
            data: [                   
                    {name:'离线',color:'#D4D4D4',y:20},  
                    {name:'错误',color:'#CE4933',y:30},
                    {name:'在线',color:'#27be04',y:40},
                    {name:'正在连接',color:'#00aeff',y:50}                      
                ]               
        }]
    });
    //no.3
    loadDateCharts();
    //no.4
    $('.plant-all-count').highcharts({
		credits: {//禁用版权信息
            enabled:false
      	},       
       chart: {
            zoomType: 'xy'
        },
        title: {
            text: null
        },
        xAxis: [{
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00','05:00', '06:00','07:00', '08:00', '09:00', '10:00', '11:00',
            '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00', '20:00', '21:00', '22:00', '23:00'],
            crosshair: true,
            minTickInterval:2,
             title:{
            	text:'(H)',
        		align:'high',
        		x:10,
        		y:-30        		
            }
        }],
        yAxis: [{ 
            labels: {
                format: '{value}KW',
                style: {
                    color: '#c39d1c'
                }
            },
            title: {
                text: null
               
            }
        }, { // Secondary yAxis
            title: {
                text: null
                
            },
            labels: {
                format: '{value} W',
                style: {
                    color: '#24bf12'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        series: [{
            name: '累积发电量',
            color: '#c39d1c',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: 'W'
            }

        }, {
            name: '平均发电量',
            color: '#24bf12',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: 'KW'
            }
        }]
    });
});
//历史新增告警次数
//no.3日
function loadDateCharts(){
	$('.history-waringCharts').highcharts({
		exporting:{
			enabled:false,
		},
		credits:{
			enabled:false
		},
	    title: {
	        text: null,
	    },
	    chart: {
	        type: 'areaspline'
	    },
	    xAxis: {
	        allowDecimals: false,
	        labels: {
	            formatter: function () {
	                return this.value; // clean, unformatted number for year
	            }
	        },
	        categories: [
	            '00:00',
	            '02:00',
	            '04:00',
	            '06:00',
	            '08:00',
	            '10:00',
	            '12:00',
	            '14:00',
	            '16:00',
	            '18:00',
	            '20:00',
	            '22:00'
	        ],
	        style:{
	    		'fontColor':'#333333',//标题颜色
	    		'fontSize':'14px'
			},
			labels: {
	            style: {
	                color: '#888888',//坐标轴颜色
	                fontSize:'12px'
	            }
	        },
	    },
	    legend: {            
	       enabled:false
	    },
	    yAxis: {
	        title: {
	            text:null
	        },
	        labels: {
	            style: {
	                color: '#888888',//坐标轴颜色
	                fontSize:'12px'
	            }
	        },
	    },
	     tooltip: {
	        valueSuffix: '',
	    	backgroundColor: '#FFF',
			hideDelay: 0,
			style: {
				color: '#6b6e72',
				fontSize: '12px ',
				padding: '10px'
			},
			//formatter:function(){
			//return arr[2] + " "+this.x+ '<br/>'+arr[3]+':'+this.y+'<br/>'; // 提示信息内容
	        //}
	    },
	    plotOptions: {  
	    	spline: {  
	    		lineWidth:0.5,  
	    		fillOpacity: 0.5,  
	    		 marker: {  
	    			enabled: false,
	    			symbol: 'circle',
	    			states: {  
	    				hover: {  
	    					enabled: true,  
	    					radius: 5
	    				}  
	    			}  
	    		},  
	    		//shadow: false  
	    	} ,
	    	series: {
	            marker: {
	                enabled: false, /*数据点是否显示*/
	                radius: 2.5,  /*数据点大小px*/
	                //fillColor:'#ff3300'         /*数据点颜色*/
	            },
	          
	           
	        }
	    },
	    series: [{
	        name: '历史新增告警次数',
	        color:'#eb8b7a',
	        data: [27, 29, 56, 82,40,3,4, 42,62,80,4,87]
	    }]
	});
}

//no.3月
function loadMonthCharts(){
	$('.history-waringCharts').highcharts({
		exporting:{
			enabled:false,
		},
		credits:{
			enabled:false
		},
	    title: {
	        text: null,
	    },
	    chart: {
	        type: 'areaspline'
	    },
	    xAxis: {
	        allowDecimals: false,
	        labels: {
	            formatter: function () {
	                return this.value; // clean, unformatted number for year
	            }
	        },
	        categories: [
	            '1',
	            '2',
	            '3',
	            '4',
	            '5',
	            '6',
	            '7',
	            '8',
	            '9',
	            '10',
	            '12',
	            '13',
	            '14',
	            '15',
	            '16',
	            '17',
	            '18',
	            '19',
	            '20',
	            '21',
	            '22',
	            '23',
	            '24',
	            '25',
	            '26',
	            '27',
	            '28',
	            '29',
	            '30'
	        ],
	        style:{
	    		'fontColor':'#333333',//标题颜色
	    		'fontSize':'14px'
			},
			labels: {
	            style: {
	                color: '#888888',//坐标轴颜色
	                fontSize:'12px'
	            }
	        },
	    },
	    legend: {            
	       enabled:false
	    },
	    yAxis: {
	        title: {
	            text:null
	        },
	        labels: {
	            style: {
	                color: '#888888',//坐标轴颜色
	                fontSize:'12px'
	            }
	        },
	    },
	     tooltip: {
	        valueSuffix: '',
	    	backgroundColor: '#FFF',
			hideDelay: 0,
			style: {
				color: '#6b6e72',
				fontSize: '12px ',
				padding: '10px'
			},
			//formatter:function(){
			//return arr[2] + " "+this.x+ '<br/>'+arr[3]+':'+this.y+'<br/>'; // 提示信息内容
	        //}
	    },
	    plotOptions: {  
	    	spline: {  
	    		lineWidth:0.5,  
	    		fillOpacity: 0.5,  
	    		 marker: {  
	    			enabled: false,
	    			symbol: 'circle',
	    			states: {  
	    				hover: {  
	    					enabled: true,  
	    					radius: 5
	    				}  
	    			}  
	    		},  
	    		//shadow: false  
	    	} ,
	    	series: {
	            marker: {
	                enabled: false, /*数据点是否显示*/
	                radius: 2.5,  /*数据点大小px*/
	                //fillColor:'#ff3300'         /*数据点颜色*/
	            },
	          
	           
	        }
	    },
	    series: [{
	        name: '历史新增告警次数',
	        color:'#eb8b7a',
	        data: [27, 29, 56, 82,40,3,4, 42,62,80,4,87,27, 29, 56, 82,40,3,4, 42,62,80,4,87,33,23,11,25,22,13]
	    }]
	});
}
//no.3年
function loadYearCharts(){
	$('.history-waringCharts').highcharts({
		exporting:{
			enabled:false,
		},
		credits:{
			enabled:false
		},
	    title: {
	        text: null,
	    },
	    chart: {
	        type: 'areaspline'
	    },
	    xAxis: {
	        allowDecimals: false,
	        labels: {
	            formatter: function () {
	                return this.value; // clean, unformatted number for year
	            }
	        },
	        categories: [
	            '一月',
	            '二月',
	            '三月',
	            '四月',
	            '五月',
	            '六月',
	            '七月',
	            '八月',
	            '九月',
	            '十月',
	            '十一月',
	            '十二月'
	        ],
	        style:{
	    		'fontColor':'#333333',//标题颜色
	    		'fontSize':'14px'
			},
			labels: {
	            style: {
	                color: '#888888',//坐标轴颜色
	                fontSize:'12px'
	            }
	        },
	    },
	    legend: {            
	       enabled:false
	    },
	    yAxis: {
	        title: {
	            text:null
	        },
	        labels: {
	            style: {
	                color: '#888888',//坐标轴颜色
	                fontSize:'12px'
	            }
	        },
	    },
	     tooltip: {
	        valueSuffix: '',
	    	backgroundColor: '#FFF',
			hideDelay: 0,
			style: {
				color: '#6b6e72',
				fontSize: '12px ',
				padding: '10px'
			},
			//formatter:function(){
			//return arr[2] + " "+this.x+ '<br/>'+arr[3]+':'+this.y+'<br/>'; // 提示信息内容
	        //}
	    },
	    plotOptions: {  
	    	spline: {  
	    		lineWidth:0.5,  
	    		fillOpacity: 0.5,  
	    		 marker: {  
	    			enabled: false,
	    			symbol: 'circle',
	    			states: {  
	    				hover: {  
	    					enabled: true,  
	    					radius: 5
	    				}  
	    			}  
	    		},  
	    		//shadow: false  
	    	} ,
	    	series: {
	            marker: {
	                enabled: false, /*数据点是否显示*/
	                radius: 2.5,  /*数据点大小px*/
	                //fillColor:'#ff3300'         /*数据点颜色*/
	            },
	          
	           
	        }
	    },
	    series: [{
	        name: '历史新增告警次数',
	        color:'#eb8b7a',
	        data: [27, 29, 56, 82,40,3,4, 42,62,80,4,87]
	    }]
	});
}