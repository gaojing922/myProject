$(function(){
	//no.1
	$('.yhtjfx-all-charts').highcharts({
		credits: {//禁用版权信息
	        enabled:false
	    },
		chart:{//规定图表类型
			type:'column'
		},
		title: {
        	useHTML:true,
			text:'<img src="images/Chart_icon.png" style="margin-bottom:0px;">&nbsp;用户数量统计',
            style:{
        		'fontColor':'#333333',
        		'fontSize':'14px'
    		}
        },
		xAxis:{//显示x轴信息
			categories:['美国','澳大利亚','其它','非洲','欧洲','亚洲','中国'],
			 tickLength: 0,//坐标轴刻度线的长度,
		},
		yAxis:{//显示y轴信息
			title:{
				text:'数量(人)'
			}
		},		
		series:[{//数据列
			name:'用户数量',
			colorByPoint:true,//给数据列设置不同的颜色
			data:[400,200,200,300,100,232,422]
		}],
		legend: {
	        itemStyle : {
		        'fontSize' : '12px',
		        'color':'#888888',
		        'fontWeight':'normal'
		    }
		}
	});
	//no.2
    $('.yhtjfx-charts-two').highcharts({
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
			text:'<img src="images/Chart_icon.png" style="margin-bottom:0px;">&nbsp;登录人数',
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
                    {name:'半小时内登录人数',y:20},  
                    {name:'5小时内登录人数',y:30},
                    {name:'24小时内登录人数',y:40},
                    {name:'30天内登录人数',y:50},
                    {name:'以上',y:50}
                ]               
        }]
    });
    //no.3
    $('.yhtjfx-charts-three').highcharts({
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
			text:'<img src="images/Chart_icon.png" style="margin-bottom:0px;">&nbsp;登录频率',
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
                    {name:'1次登录人数',y:20},  
                    {name:'2次登录人数',y:30},
                    {name:'5次登录人数',y:40},
                    {name:'10次登录人数',y:50},
                    {name:'以上',y:50}              
                ]               
        }]
    });
});
