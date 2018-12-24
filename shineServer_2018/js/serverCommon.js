layui.use(['laypage', 'layer'], function(){})
var form = layui.form,
laydate = layui.laydate,
laypage = layui.laypage,
layer = layui.layer;
$(function(){
	//自定义选择搜索框
	$(".searchBox").click(function(e){
		e.stopPropagation();
		$(this).find("ul").toggleClass("showH");
		$(this).toggleClass("selected-search");
	});
	$(".searchContent li").click(function(){
		$(this).parent("ul").siblings().val($(this).text());
	});
	$(document).click(function(){
	    $(".searchBox").find("ul").removeClass("showH");
		$(".searchBox").removeClass("selected-search");
	});
	$(".menueBox").click(function(){
		$(".menueBox").removeClass("selectedM")
		$(this).addClass("selectedM");
	})
	//隐藏菜单栏
	$(".menuBg-x").click(function(){
		if($(this).siblings(".menuBg-c").is(":hidden")){
			$(this).siblings(".menuBg-c").slideDown();
			$(this).css("background-image","url(images/t_1.png)")
		}else{
			$(this).siblings(".menuBg-c").slideUp().find("a").removeClass("menuBg-select");
			$(this).css("background-image","url(images/s_shrink.png)")
		}
	});
	//退出
	$(".logout").click(function(){
		window.location.href="./login.html"
	})
	//搜索
	$(".menu-searchImg").click(function(){
		if($(this).siblings(".menu-searchBox").is(":hidden")){
			$(".menu-searchBox").show();
			$(this).find(".openSearch").hide().siblings(".closeSearch").show();
		}else{
			$(".menu-searchBox").hide();
			$(this).find(".openSearch").show().siblings(".closeSearch").hide();
		}
	})
	//添加电站
	$(".addPlant-img").click(function(e){
		e.stopPropagation();
		if($(this).siblings(".addPlant-content").is(":hidden")){
			$(this).addClass("openAddplant");
			$(".addPlant-content").show();
		}else{
			$(this).removeClass("openAddplant");
			$(".addPlant-content").hide();
		}
	})
	$(document).click(function(e){
		e.stopPropagation();
		if($(".addPlant-content").is(":visible")){
			$(".addPlant-content").hide();
			$(".addPlant-img").removeClass("openAddplant");
		}
	});
	//轮播
	/*$("#weather-banner").FtCarousel({
		index: 0,
		auto: true,
		time: 3000,//轮播时间
		indicators: false,//是否显示圆点
		buttons: true //是否显示左右箭头
	});*/
	//菜单栏背景
	/*$(".menuBg-c>li>a").click(function(){
		$(".menuBg-c>li>a").removeClass("menuBg-select");
		$(this).addClass("menuBg-select");
		
	})*/
	//手机端显示菜单
	$(".toogleMenue").click(function(){
		var m = $(this).siblings(".phone-menu");
		if(m.is(":hidden")){
			m.slideDown();
			$(this).addClass("toogleSelected");
		}else{
			m.slideUp();
			$(this).removeClass("toogleSelected");
		}
	});
	//添加电站
	$(".addPlant-content .ac-one").unbind("click").bind("click",function(){
		dialogContent(".addPlant-dialog","添加电站");
	});
	//添加设备
	$(".addPlant-content .ac-two").unbind("click").bind("click",function(){
		dialogContent(".addDevice-dialog","添加设备");
	});
	/*自定义开关事件1*/
	$(document).on("click",".switchClick",function(){
		var dt = $(this).attr("data-name");
		if(dt == 0){
			$(this).attr("data-name",1);
		}else{
			$(this).attr("data-name",0);
		}
	});
	loadScroll(".same-menuBox-content");
	$(".sameTitle-t li").click(function(){
		$(this).addClass("same-textS").siblings("li").removeClass("same-textS");
		//$(".sameTab-box").eq($(this).index()).removeClass("hide").siblings(".sameTab-box").addClass("hide");
	});
	//所有表格鼠标经过背景
	$(".allTable tbody tr").hover(function(){
		$(this).addClass("trBg")
	},function(){
		$(this).removeClass("trBg")
	})
	//设置可视内容最小高度
	$(window).resize(function() {
	  setMinHeight();
	});
	//自定义开关事件
	$(".switch").click(function(){
		var dt = $(this).attr("data-name");
		if(dt == 0){
			$(this).attr("data-name",1);
		}else{
			$(this).attr("data-name",0);
		}
	});
	//选择日期
	$(".allDate-select>div").click(function(){
		$(this).addClass("dsSelect").siblings("div").removeClass("dsSelect");
	})
})
setMinHeight();
//设置页面最小高度
function setMinHeight(){
	var h = $(window).height();//获取页面可视频区域的高
	var a = $(".sameBox").offset().top;//元素距离页面顶部的距离
	$(".sameBox").css('minHeight',h-a-50);
}





//普通弹框
function dialogContent(obj,title){
	if(title == undefined)title = null
	else title = title;
	layer.open({
		type:1,
		anim: 0,
		resize:false,
		title: title,
		shadeClose: true, //开启遮罩关闭
		shade:0.4,
		content: $(obj).html(),
		success:function(){
			// 弹框添加自定义滚动条loadScroll(".allDialog-content");
			/*重新渲染 */
        	form.render();
		}
	})
}
//滚动条
function loadScroll(obj){
	//销毁滚动条 $(obj).mCustomScrollbar("destroy"); 
	//重新加载滚动条 $(obj).mCustomScrollbar("update");
	$(obj).mCustomScrollbar("destroy");
	$(obj).mCustomScrollbar({
		scrollButtons:{
			enable:false
		},
		scrollInertia:600,//滚动的速度
	    theme:"dark",
	    autoHideScrollbar:false, //设置是否自动隐藏滚动条
		mouseWheel:{
			preventDefault:false//阻止容器父元素的滚动事件
		},
		advanced:{ 
		    updateOnContentResize:true
		}
	});
}
//日期加减
function addTime(days,dateTime){//days--要加减的天数,减的话就传入负数,dateTime--要进行加减的日期
	var d;
	if(dateTime == undefined) d = new Date();
	else d = new Date(dateTime);
	if(dateTime.length>8){
		d.setDate(d.getDate()+days);
		return d.getFullYear()+"-"+addZero(d.getMonth()+1)+"-"+addZero(d.getDate());
	}else if(dateTime.length<8 && dateTime.length>5){
		d.setMonth(d.getMonth()+days);
		return d.getFullYear()+"-"+addZero(d.getMonth()+1);
	}else if(dateTime.length<5 && dateTime.length>0){
		d.setYear(d.getFullYear()+days);
		return d.getFullYear();
	}else{
		return;
	}
}
function addZero(v){return v>9?v:"0"+v;}
function doTime(num,obj){
	var time = $(obj).siblings("input").val();
	$(obj).siblings("input").val(addTime(num,time))
}
function showTime(type){
	var d = new Date();
	var day = addZero(d.getDate());
	var month = addZero(d.getMonth()+1);
	var year = d.getFullYear();//年
	if(type == 1 || type == undefined){
		return year+"-"+month+"-"+day
	}else if(type == 2){
		return year+"-"+month;
	}else if(type == 3){
		return year;
	}
}
