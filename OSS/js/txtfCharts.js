$(function(){
	//no.3
    $('.txtf-charts-one').highcharts({
		exporting:{
    		enabled:false,
    	},
    	credits:{
    		enabled:false
    	},
       title: {
        	useHTML:true,
			text:'<img src="images/quxain-icon.png" style="margin-bottom:5px;">&nbsp;额定每KW日发电量',
            style:{
        		'fontColor':'#333333',
        		'fontSize':'14px'
    		}
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
                '06:00',
                '18:00',
                '06:00'
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
            tickLength: 0,//坐标轴刻度线的长度,
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
            name: '日发电量',
            color:'#eb8b7a',
            data: [27, 29,87]
        }]
    });
    //NO.2
    $('.txtf-same-charts-one').highcharts({
    	credits: {//禁用版权信息
            enabled:false
        },
        chart: {
            type: 'column'
        },
        title: {
        	useHTML:true,
			text:'<img src="images/Chart_icon.png" style="margin-bottom:3px;">&nbsp;各路(串)功率日发电量平衡度',
            style:{
        		'fontColor':'#333333',
        		'fontSize':'14px'
    		}
        },
        xAxis: {
            categories: [
                '00:00',
                '06:00',
                '12:00',
                '18:00',
                '24:00'               
            ],
            labels: {
                style: {
                    color: '#888888',//坐标轴颜色
                    fontSize:'12px'
                }
            },
        },
         legend : {
		    itemStyle : {
		        'fontSize' : '12px',
		        'color':'#888888',
		        'fontWeight':'normal'
		    }
		},
        yAxis: {
            min: 0,
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
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
        series: [{
            name: 'PV1',
            data: [49.9, 71.5, 106.4, 129.2, 144.0]

        }, {
            name: 'PV2',
            data: [83.6, 78.8, 98.5, 93.4, 106.0]

        }, {
            name: 'PV3',
            data: [48.9, 38.8, 39.3, 41.4, 47.0]

        }]
    });
    //NO.3
   		 $('.txtf-same-charts-two').highcharts({
   		 	credits: {//禁用版权信息
	            enabled:false
	        }, 
	        chart: {
	            type: 'spline'            
	        },
	        title: {
	        	useHTML:true,
				text:'<img src="images/quxain-icon.png" style="margin-bottom:5px;">&nbsp;功率日发电量与气象指数的比例K值',
	            style:{
	        		'fontColor':'#333333',
	        		'fontSize':'14px'
	    		}
	        },
	        legend: {
	        	/*layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'top',
	            x: 0,
	            y: 10,*/
			    itemStyle : {
			        'fontSize' : '12px',
			        'color':'#888888',
			        'fontWeight':'normal'
			    }
        	},
	        xAxis: {
	            categories: ['00:00','12:00','24:00'],
		            labels: {
	                style: {
	                    color: '#888888',//坐标轴颜色
	                    fontSize:'12px'
	                }
	            }
	        },
	        yAxis: {
	            title: {
	                text: null
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }],
	            labels: {
                style: {
                    color: '#888888',//坐标轴颜色
                    fontSize:'12px'
                }
            },
	        },
	         plotOptions: {
	            spline: {
	                lineWidth: 1,
	                states: {
	                    hover: {
	                        lineWidth: 2
	                    }
	                },
	                marker: {
	                    enabled: false
	                }              
	            }
	        },
	        tooltip: {
	            valueSuffix: 'KW'
	        },
	        series: [{
	            name: 'K值',
	            data: [7.0, 6.9, 9.5]
	        }, {
	            name: 'Power',
	            data: [-0.2, 0.8, 5.7]
	        }, {
	            name: '辐射',
	            data: [-0.9, 0.6, 3.5]
	        }]
    });
})
