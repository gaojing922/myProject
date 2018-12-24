//主菜单事件
//主菜单定义滚动条
$('.main-left,.main-qxsz-serverU-ul,.main-qxsz-manageMenu').perfectScrollbar({
  wheelSpeed: 20,
  wheelPropagation: true
});
$('.main-left,.main-qxsz-serverU-ul,.main-qxsz-manageMenu').perfectScrollbar('update');
//一级菜单点击更换背景
$(".main-leftLi>div").unbind('click').bind("click",function(){
	$(this).addClass('main-leftLi-box').parent("li").siblings("li").children("div").removeClass("main-leftLi-box");
	//展开二级菜单
	var thisUl = $(this).siblings("ul");
	if(thisUl.length>0){
		$(this).siblings("ul").show().parent("li").siblings("li").find("ul").hide().siblings("div").children("em").text("+");
		$(this).children("em").text("-");
	}else{
		$(this).parent(".main-leftLi").siblings(".main-leftLi").children("ul").children("li").removeClass("secondLibg");
		return;
	}
});
//二级菜单点击事件
$(".main-leftLi ul li").unbind("click").bind("click",function(){
	$(this).addClass("secondLibg").siblings("li").removeClass("secondLibg");
	$(this).parent("ul").parent(".main-leftLi").siblings(".main-leftLi").children("ul").children("li").removeClass("secondLibg");
})