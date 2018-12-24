layui.use(['element','layer','table'], function(){
  var element = layui.element;
  var layer = layui.layer;
	var table = layui.table;
});
//提示型
let dialogTips = function(text='请传参!'){
	layer.msg(text);
}
//加载层
let dialogLoading = function(load=0){//0表示关闭,1表示开启
	let index;
	if(load=='1'){
		index = layer.load(0, {
		  shade: [0.1,'#fff']
		});
	}else{
		layer.close(index);
	}
}
//显示时间
let showTime = function(type=1){
	let d = new Date();
	let day = d.getDate().toString().padStart(2,'0');
	let month = (d.getMonth()+1).toString().padStart(2,'0');
	let year = d.getFullYear();//年
	if(type == 1){
		return year+"-"+month+"-"+day
	}else if(type == 2){
		return year+"-"+month;
	}else if(type == 3){
		return year;
	}
}
