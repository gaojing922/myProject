$(function(){
	//头部信息提示
	showInfo()
	//个人资料页面跳转
	$(".message-four li:nth-child(1),.message-two").click(function(){
		window.location.href="../OSS/usercenter-Grzl.html";
	});
	//退出按钮
	$(".message-same-content li:nth-child(2)").click(function(){
		window.location.href="../OSS/login.html";
	});
	//设定主内容最小高度
	setContentMinheight();
	//加载
	//showLodding(true,"页面正在加载,请稍候!",800);
	//页面左侧自定义滚动条
    $('.main-left,.main-qxsz-serverU-ul,.main-qxsz-manageMenu,.ddh-filter-ul,.show-count-ul,#plantUL,.waring-Cbox,.mainSysBox').perfectScrollbar({
      wheelSpeed: 20,
      wheelPropagation: true
    });
    $('.main-left,.main-qxsz-serverU-ul,.main-qxsz-manageMenu,.ddh-filter-ul,.show-count-ul,#plantUL,.waring-Cbox').perfectScrollbar('update');
  	//返回顶部
	$(".main-right").scroll(function(){
		var t = $(this).scrollTop();
		if(t>200){
			$(".top").stop().fadeIn();
		}else{
			$(".top").stop().fadeOut();
		}
	});
	$(".top").click(function(){
		$(".main-right").stop().animate({
			scrollTop:0
		},300)
	});
	$(".top").mouseover(function(){
		$(this).children("img").show();
		$(this).find("p:nth-child(1)").text("");
		$(this).find("p:nth-child(2)").text("");
	}).mouseout(function(){
		$(this).children("img").hide();
		$(this).find("p:nth-child(1)").text("返回");
		$(this).find("p:nth-child(2)").text("顶部");
	});
	//一级菜单点击更换背景
	$(".main-leftLi>div").unbind('click').bind("click",function(){
		$(this).addClass('main-leftLi-box').parent("li").siblings("li").children("div").removeClass("main-leftLi-box");
		//展开二级菜单
		var thisUl = $(this).siblings("ul");
		if(thisUl.length>0){
			$("em").removeClass("emShow");
			$(this).siblings("ul").show().parent("li").siblings("li").find("ul").hide();
			$(this).children("em").addClass("emShow");
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
	//select通用事件
	$(".all-btn-select>select").bind("change",function(){
		$(this).siblings("span").text($(this).val());
		//$("#s option:selected").val();
	});
	//分配框事件
	$(".main-right-count-allocation ul li").click(function(){
		$(this).addClass("same-allocation-bg").siblings("li").removeClass("same-allocation-bg");
		$(this).children("p").addClass("same-allocation-p-color").parent("li").siblings("li").children("p").removeClass("same-allocation-p-color");
	});
	//按钮全选
	$(".allCheckedBtn").click(function(){
		$(".check-all").click();
	});
	//全选框全选
	$(".check-all").click(function(){
		var ch=$("input[name='same-checkBox']");
		if($(".cancel-checkAll-img").is(":hidden")){
			$(".cancel-checkAll-img").show().siblings(".checkAll-img").hide();
			$(".checkd-img").show().siblings(".check-img").hide();
			$.each(ch,function(index,value){
				$(this).prop("checked",true);
			})
		}else{
			$(".checkAll-img").show().siblings(".cancel-checkAll-img").hide();
			$(".check-img").show().siblings(".checkd-img").hide();
			$.each(ch,function(){
				$(this).prop("checked",false);
			})
		}
	})
	//单选
	$(".check-one").click(function(){
		if($(this).children(".checkd-img").is(":hidden")){
			$(this).children(".checkd-img").show().siblings(".check-img").hide();
			$(this).siblings("input").prop("checked",false);
		}else{
			$(this).children(".checkd-img").hide().siblings(".check-img").show();
			$(this).siblings("input").prop("checked",true);
		}
	});
	//自定义select事件
	$(".inner-select").click(function(){
		if($(this).attr("name")=="0"){
			$(this).attr("name","1");
			$(this).siblings("em").addClass("up").removeClass("down");
		}else{
			$(this).attr("name","0");
			$(this).siblings("em").addClass("down").removeClass("up");
		}
	}).blur(function(){
		$(this).attr("name","0");
		$(this).siblings("em").addClass("down").removeClass("up");
	}).change(function(){
		$(this).siblings("input").val($(this).find("option:selected").text());
	});
	//集成商公司显示
	$(".main-right-head-smallT span img").hover(function(){
		$(this).siblings("ul").addClass("showCompanyClass").find("li").addClass("childrenLiClass");
	},function(){
		$(this).siblings("ul").removeClass("showCompanyClass").find("li").removeClass("childrenLiClass");
	});
	//报警
	$(".wu-toggleI").bind("click",function(){
		var n = $(this).attr("data-name")
		if(n == "0"){
			$(this).attr("data-name",1)
			$(this).siblings("li").find(".wuSameH").show();
			$(this).parents(".allWaring-box").css("width","350px")
		}else{
			$(this).attr("data-name",0)
			$(this).siblings("li").find(".wuSameH").hide();
			$(this).parents(".allWaring-box").css("width","65px")
		}
	});
	$(".hoverMenu").hover(function(){
		if($(".wu-title").is(":visible")){
			$(".waring-content").show().css("top",-$(".waring-content").height()+"px");
		}
	},function(){
		$(".waring-content").hide()
	})
	$(window).resize(function(){
		setContentMinheight();
	});
	//缩放菜单 
	$(".toogleMenu").click(function(){
		var width = $(window).width();
		if($(".main-left").attr("data-name") == "0"){
			$(this).children("div").addClass("selectS");
			$(".main-left").attr("data-name",1).css("overflow","visible");
			$(".main-left").animate({"width":"60px"}).find(".main-left-menu").removeClass("bigMenu").hide().siblings(".samll-menu").show();
			$(".main-right").animate({"padding-left":"60px","width":width - 60},300);
		}else{
			$(this).children("div").removeClass("selectS");
			$(".main-left").attr("data-name",0).css("overflow","hidden");
			$(".main-left").animate({"width":"182px"}).find(".main-left-menu").show().addClass("bigMenu").siblings(".samll-menu").hide();
			$(".main-right").animate({"padding-left":"182px","width":width - 182},300)
		}
	});
	//tab
	$(".sameTab li").click(function(){
		$(this).addClass("same-textS").siblings("li").removeClass("same-textS");
		var index = $(this).index();
		$("div.sameTab-box").eq(index).show().siblings(".sameTab-box").hide();	
	})
	//表格上方tab
	$(".at-other li").click(function(){
		$(this).addClass("selectedA").siblings("li").removeClass("selectedA")
	})
	//列表展示
    $(".sd-box").click(function(e){
		e.stopPropagation();
		if($(this).find(".sd-content").is(":hidden")){
			$(this).find(".sd-content").show();
		}else{
			$(this).find(".sd-content").hide();
		}
	});
	$("body").click(function(e){
		e.stopPropagation();
		$(".sysBox").hide();//关闭系统升级提示
		if($(".sd-content").is(":visible")){
			$(".sd-content").hide();
		}
	});
	//切换显示告警框
    $(".same-fixed").click(function(){
    	if($(this).siblings("div").is(":hidden")){
    		$(this).css("background-image","url(./images/rightD.png)").siblings("div").show();
    	}else{
    		$(this).css("background-image","url(./images/leftD.png)").siblings("div").hide();
    	}
    });
    //表格下方按钮
    $(".bottomBtn").css("width",$(".main-right-content").width());
    //问题大厅条件选 择
    $(".same-filterBox li").click(function(){
    	$(this).addClass("sameFs").siblings("li").removeClass("sameFs");
    });
    //系统所有多选 
    $(".showMitext").click(function(){
		if($(this).attr("data-name") == 0){
			$(this).attr("data-name",1)
		}else{
			$(this).attr("data-name",0)
		}
	});
	var textArr = [];
	$(".miUl li").click(function(){
		if($(this).hasClass("select")){
			$(this).removeClass("select");
			removeArrT(textArr,$(this).text());
			$(this).parents(".sameMiselect").find("input").val(textArr);
		}else{
			$(this).addClass("select");
			textArr.push($(this).text());
			$(this).parents(".sameMiselect").find("input").val(textArr);
		}
	});
	function removeArrT(arr,val){
		for(var i = 0;i<arr.length;i++){
			if(arr[i] == val){
				arr.splice(i,1);
				break;
			}
		}
		return arr;
	}
    //关闭系统更新
    
});
/*自定义下拉搜索*/
   	$(".selectDrow").click(function(e){
		e.stopPropagation();
		$(this).toggleClass("selectedDrow");
	});
	$(".selectContent li").click(function(){
		$(".selectDrow-title").attr("data-value",$(this).attr("name")).text($(this).text());
		$(this).addClass("sda").siblings("li").removeClass("sda");
		//$(this).parent("ul").siblings(".selectDrow").removeClass("selectedDrow");
	});
	$("body").click(function(){
		$(".selectDrow").removeClass("selectedDrow");
	})
//模糊查询
function dimQuery(inputID,ulID){
	var input,inputValue,ul,li,i;
	input = document.getElementById(inputID);//获取input对象
	inputValue = input.value.toUpperCase();//将输入的值转换成大小
	ul = document.getElementById(ulID);//获取过滤框
	li = ul.getElementsByTagName("li");
	if(input.value == ""){
		ul.style.display = "none";
	}else{
		for(i=0;i<li.length;i++){
			if(li[i].innerHTML.toUpperCase().indexOf(inputValue)>-1){
				ul.style.display = 'block';
				li[i].style.display="block";
				li[i].onclick = function(){
					input.value = this.innerHTML;
					ul.style.display = "none";
				}
			}else{
				li[i].style.display="none";	
			}
		}
	}
}


//页面加载提示信息
function showLodding(obj,text,time){
	//var trueT = 1000;//初始化时间
	var allBg = $('<div class="all-lodding-bg"></div>');//加载背景
	//var rightC = $(".main-right"); 
	var allLodd = $('<div id="show-all-lodding"><div class="lodding-content"></div></div>');//加载内容区域
	$("body").append(allBg);
	$("body").append(allLodd);
	
	if(obj==true){
		if(time>0){
			$(".all-lodding-bg").show();
			$("#show-all-lodding").fadeIn(700).children(".lodding-content").text(text);
			setTimeout(function(){
				$("#show-all-lodding,.all-lodding-bg").fadeOut();
			},time)
		}else if(time<=0){
			$(".all-lodding-bg").show();
			$("#show-all-lodding").fadeIn(700).children(".lodding-content").text(text);
		}
	}else{
		$("#show-all-lodding,.all-lodding-bg").fadeOut();
	}
}
function setContentMinheight(){
	var h = $(window).height();//获取页面可视频区域的高
	var a = $(".main-right-content-count").offset().top;//元素距离页面顶部的距离
	$(".main-right-content-count").css('minHeight',h-a-42);
}
//弹框信息提示fun
function dialogMsg(content,title,fn1){
	if(title!=undefined && typeof title != 'string'){
		fn1 = title;
		title=undefined;
	}
	if(title == undefined){
		title='提示信息';
	}
	layer.open({
		type: 1, //Page层类型
		title: title,
		shade: 0.4, //遮罩透明度
		shadeClose:false,//点击遮罩关闭弹框
		anim: 0, //0-6的动画形式，-1不开启
		resize:false,
		content: '<div class="delete-dialog-box">'+
				 '<div class="floatL"></div>'+
				 '<div class="floatL delete-tip-message">'+content+'</div>'+
				 '<div class="clear"></div>'+
				 '</div>'+
				 '<div class="all-bottom-btn">'+
					'<span class="all-bottom-btn1">取消</span>'+
					'<span class="all-bottom-btn0">确定</span>'+
				 '</div>',
		cancel: function(){ 
    		//右上角关闭回调
    		//alert(1);
    		//return false 开启该代码可禁止点击该按钮关闭
  		}
	});
	//判断按钮
	if(fn1==undefined)
		$(".all-bottom-btn0").hide();
	else{
		$(".all-bottom-btn0").show();
		$(".all-bottom-btn0").bind('click',fn1);
	}
}
//头部信息提示
function showInfo(){
	var count = parseInt($(".show-MessageC").text());
	if(count>0){
		$(".show-MessageC").addClass("showCount");
		if(count>9){
			$(".show-MessageC").text(9+'+');
		}
		return;
	}else{
		$(".show-MessageC").hide();
	};
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