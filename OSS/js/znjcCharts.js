var chart2 = null;//IVPV曲线
var chart3 = null;//故障录波曲线
var chart4 = null;//实时录波
var chart5 = null;//一键诊断---IV/PV曲线
var chart6 = null;//一键诊断---电网电压波形
$(function(){
	//I-V曲线
	chart2 = new Highcharts.Chart({
		credits: {//禁用版权信息
            enabled:false
        }, 
	    chart: {
	        renderTo: 'vChart',
	        type: 'spline',
            width: 626,
            height:287
	    },
	    title: {
			text:null,
        },
        legend: {
            enabled:false
        },
        xAxis: {
            labels: {
                style: {
                    color: '#666666',//坐标轴颜色
                    fontSize:'12px'
                },
                formatter: function () {
	                return this.value + 'V';
	            }
            },
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
                    color: '#666666',//坐标轴颜色
                    fontSize:'12px'
                },
                formatter: function () {
	                return this.value + 'A';
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
	        headerFormat: '<b>{series.name}</b><br/>',
	        pointFormat: '{point.x}V, {point.y}A'
	    },
        series: [{
            name: 'MPPT1',
            color:'#d06b6b',
            data: [[0, 15], [10, 50], [18, 32.5], [15, 6], [20, 3]]
        	},
        	{
            name: 'MPPT2',
            color:'#d9bd3c',
            data:[[5, 35], [1, 5], [20, 44.5], [38, 7.3], [40, 5]]
        	},
        	{
            name: 'MPPT3',
            color:'#55cf55',
            data: [[8, 25], [10, 50], [32, 28.9], [49, 9.8], [30, 2]]
        	},
        	{
            name: 'MPPT4',
            color:'#557acf',
            data: [[9, 25], [10, 50], [48, 56.5], [64, 1.8], [28, 9]]
        	},
        	{
            name: 'MPPT5',
            color:'#4fd0ce',
            data: [[0, 15], [10, 50], [35, 50], [33, 6.5], [35, 8]]
        	},
        	{
            name: 'MPPT6',
            color:'#925bca',
            data: [[0, 15], [10, 50], [29, 33.5], [28, 9.2], [44, 7]]
        	},
        	{
            name: 'MPPT7',
            color:'#a1b137',
            visible: false,  
            data: [[0, 150], [10, 50], [20, 56.5], [30, 6.5], [40, 2.1]]
        	},
        	{
            name: 'MPPT8',
            color:'#634fd0',
            visible: false,  
            data: [[0, 20], [100, 50], [20, 95.5], [30, 36.5], [40, 42.1]]
        }],
        lang: {
            noData: '亲,暂无数据哦...',
        },
        noData:{
        	style:{
        		fontWeight:'bold',
        		fontSize:'35px',
        		color:'#dedede'
        	}
        }
	})
	//故障录波
	$.getJSON("./js/testZn.json/",function(data){
		chart3 = new Highcharts.Chart({
			credits: {//禁用版权信息
	            enabled:false
	        }, 
		    chart: {
		        renderTo: 'gzChart',
		        type: 'spline',
	            width: 410,
	            height:287
		    },	
	        title: {
				text:null,
	        },
	        legend: {            
	           enabled:false
	        },
	        xAxis: {
	            labels: {
	                style: {
	                    color: '#666666',//坐标轴颜色
	                    fontSize:'12px'
	                },
	                formatter: function () {
		                return this.value + 'V';
		            }
	            },
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
	                    color: '#666666',//坐标轴颜色
	                    fontSize:'12px'
	                },
	                formatter: function () {
		                return this.value + 'A';
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
		        headerFormat: '<b>{series.name}</b><br/>',
		        pointFormat: '{point.x}V, {point.y}A'
		    },
	        series: [{
	            name: 'MPPT1',
	            color:'#d06b6b',
	            //data: [[0, 15], [10, 50], [18, 32.5], [15, 6], [20, 3]]
	            data: data.name[0].real1.data
	        	},
	        	{
	            name: 'MPPT2',
	            color:'#d9bd3c',
	            //data:[[5, 35], [1, 5], [20, 44.5], [38, 7.3], [40, 5]]
	            data: data.name[1].real2.data
	        	},
	        	{
	            name: 'MPPT3',
	            color:'#55cf55',
	            //data: [[8, 25], [10, 50], [32, 28.9], [49, 9.8], [30, 2]]
	            data: data.name[2].real3.data
	        	},
	        	{
	            name: 'MPPT4',
	            color:'#557acf',
	            //data: [[9, 25], [10, 50], [48, 56.5], [64, 1.8], [28, 9]]
	            data: data.name[3].real4.data
	        }],
	        lang: {
	            noData: '亲,暂无数据哦...',
	        },
	        noData:{
	        	style:{
	        		fontWeight:'bold',
	        		fontSize:'35px',
	        		color:'#dedede'
	        	}
	        }
		});
	})
	
	//实时录波
	chart4 = new Highcharts.Chart({
		credits: {//禁用版权信息
            enabled:false
        }, 
	    chart: {
	        renderTo: 'ssChart',
	        type: 'spline',
            width: 410,
            height:350
	    },		
        title: {
			text:null,
        },
        legend: {            
           enabled:false
        },
        xAxis: {
            labels: {
                style: {
                    color: '#666666',//坐标轴颜色
                    fontSize:'12px'
                },
                formatter: function () {
	                return this.value + 'V';
	            }
            },
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
                    color: '#666666',//坐标轴颜色
                    fontSize:'12px'
                },
                formatter: function () {
	                return this.value + 'A';
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
	        headerFormat: '<b>{series.name}</b><br/>',
	        pointFormat: '{point.x}V, {point.y}A'
	    },
        series: [{
            name: 'MPPT1',
            color:'#d06b6b',
            data: [[0, 15], [10, 50], [18, 32.5], [15, 6], [20, 3]]
        	},
        	{
            name: 'MPPT2',
            color:'#d9bd3c',
            data:[[5, 35], [1, 5], [20, 44.5], [38, 7.3], [40, 5]]
        	},
        	{
            name: 'MPPT3',
            color:'#55cf55',
            data: [[8, 25], [10, 50], [32, 28.9], [49, 9.8], [30, 2]]
        	},
        	{
            name: 'MPPT4',
            color:'#557acf',
            data: [[9, 25], [10, 50], [48, 56.5], [64, 1.8], [28, 9]]
        }],
        lang: {
            noData: '亲,暂无数据哦...',
        },
        noData:{
        	style:{
        		fontWeight:'bold',
        		fontSize:'35px',
        		color:'#dedede'
        	}
        }
	});
	//一键诊断--- I-V/P-V曲线
	chart5 = new Highcharts.Chart({
		credits: {//禁用版权信息
            enabled:false
        }, 
	    chart: {
	        renderTo: 'zdChart_one',
	        type: 'spline',
            width: 626,
            height:300
	    },			
        title: {
			text:null,
        },
        legend: {            
           enabled:false
        },
        xAxis: {
            labels: {
                style: {
                    color: '#666666',//坐标轴颜色
                    fontSize:'12px'
                },
                formatter: function () {
	                return this.value + 'V';
	            }
            },
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
                    color: '#666666',//坐标轴颜色
                    fontSize:'12px'
                },
                formatter: function () {
	                return this.value + 'A';
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
	        headerFormat: '<b>{series.name}</b><br/>',
	        pointFormat: '{point.x}V, {point.y}A'
	    },
        series: [{
            name: 'MPPT1',
            color:'#d06b6b',
            data: [[0, 15], [10, 50], [18, 32.5], [15, 6], [20, 3]]
        	},
        	{
            name: 'MPPT2',
            color:'#d9bd3c',
            data:[[5, 35], [1, 5], [20, 44.5], [38, 7.3], [40, 5]]
        	},
        	{
            name: 'MPPT3',
            color:'#55cf55',
            data: [[8, 25], [10, 50], [32, 28.9], [49, 9.8], [30, 2]]
        	},
        	{
            name: 'MPPT4',
            color:'#557acf',
            data: [[9, 25], [10, 50], [48, 56.5], [64, 1.8], [28, 9]]
        	},
        	{
            name: 'MPPT5',
            color:'#4fd0ce',
            data: [[0, 15], [10, 50], [35, 50], [33, 6.5], [35, 8]]
        	},
        	{
            name: 'MPPT6',
            color:'#925bca',
            data: [[0, 15], [10, 50], [29, 33.5], [28, 9.2], [44, 7]]
        	},
        	{
            name: 'MPPT7',
            color:'#a1b137',
            data: [[0, 150], [10, 50], [20, 56.5], [30, 6.5], [40, 2.1]]
        	},
        	{
            name: 'MPPT8',
            color:'#634fd0',
            data: [[0, 20], [100, 50], [20, 95.5], [30, 36.5], [40, 42.1]]
        }],
        lang: {
            noData: '亲,暂无数据哦...',
        },
        noData:{
        	style:{
        		fontWeight:'bold',
        		fontSize:'35px',
        		color:'#dedede'
        	}
        }
	});
	//一键诊断--- 电网电压波形
	chart6 = new Highcharts.Chart({
		credits: {//禁用版权信息
            enabled:false
        }, 
	    chart: {
	        renderTo: 'acChart',
	        type: 'spline',
            width: 410,
            height:300
	    },			
        title: {
			text:null,
        },
        legend: {            
           enabled:false
        },
        xAxis: {
            labels: {
                style: {
                    color: '#666666',//坐标轴颜色
                    fontSize:'12px'
                },
                formatter: function () {
	                return this.value + 'V';
	            }
            },
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
                    color: '#666666',//坐标轴颜色
                    fontSize:'12px'
                },
                formatter: function () {
	                return this.value + 'A';
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
	        headerFormat: '<b>{series.name}</b><br/>',
	        pointFormat: '{point.x}V, {point.y}A'
	    },
        series: [{
            name: 'MPPT1',
            color:'#d06b6b',
            data: [[0, 15], [10, 50], [18, 32.5], [15, 6], [20, 3]]
        	},
        	{
            name: 'MPPT2',
            color:'#d9bd3c',
            data:[[5, 35], [1, 5], [20, 44.5], [38, 7.3], [40, 5]]
        	},
        	{
            name: 'MPPT3',
            color:'#55cf55',
            data: [[8, 25], [10, 50], [32, 28.9], [49, 9.8], [30, 2]]
        }],
        lang: {
            noData: '亲,暂无数据哦...',
        },
        noData:{
        	style:{
        		fontWeight:'bold',
        		fontSize:'35px',
        		color:'#dedede'
        	}
        }
	});
	//一键诊断--- 电网电压谐波
	$('.thdvChart').highcharts({
	 	credits: {//禁用版权信息
            enabled:false
        }, 
        chart: {
            type: 'column',
            width: 410,
            height:300
        },
        title: {
			text:null,
        },
        legend: {            
           enabled:false
        },
        xAxis: {
            labels: {
                style: {
                    color: '#666666',//坐标轴颜色
                    fontSize:'12px'
                },
                formatter: function () {
	                return this.value + 'V';
	            }
            },
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
                    color: '#666666',//坐标轴颜色
                    fontSize:'12px'
                },
                formatter: function () {
	                return this.value + 'A';
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
	        headerFormat: '<b>{series.name}</b><br/>',
	        pointFormat: '{point.x}V, {point.y}A'
	    },
        series: [{
            name: 'MPPT1',
            color:'#d06b6b',
            data: [[0, 0.015], [10, 0.050], [18, 0.032], [15, 0.06], [20, 0.03]]
        	},
        	{
            name: 'MPPT2',
            color:'#d9bd3c',
            data:[[5, 35], [1, 5], [20, 44.5], [38, 7.3], [40, 5]]
        	},
        	{
            name: 'MPPT3',
            color:'#55cf55',
            data: [[8, 25], [10, 50], [32, 28.9], [49, 9.8], [30, 2]]
        	}]
	});
})
