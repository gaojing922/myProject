$(function(){
	//页面背景图
	autoH();
	function autoH(){
		var wh=$(window).height();
		var wW=$(window).width();
		$(".bodyH").height(wh);
		$(".TimeArea").css("visibility",wW<1280? "hidden":"visible");//小屏幕把时间功能隐藏
	}
	$(window).resize(function(){
		autoH();
	})

	//顶部导航栏
	Topmenu();
	function Topmenu(){
		var Navcolumn=$(".Navcolumn");
		Navcolumn.hover(function(){
			$(this).find(".DorpNav").stop(true,true).slideDown();
			$(this).find(".flicker").stop(true,true).show();
		},function(){
			$(this).find(".DorpNav").stop(true,true).slideUp();
			$(this).find(".flicker").stop(true,true).hide();
		})
		//个人资料
		var datambtn=$(".UserInfo_name");
		var datam=$(".UserInfo_operate");
		datambtn.hover(function(){
			$(this).addClass("cur");
			datam.stop(true,true).slideDown(300);
		},function(){
			$(this).removeClass("cur");
			datam.stop(true,true).slideUp(300);
		})
		//收起导航栏按钮
		var Pem_header_menubtn=$(".MainNavbtn");
		Pem_header_menubtn.click(function(){
			$(this).toggleClass("curmenu");
			$(".header").animate({"margin-top":$(this).hasClass("curmenu")? "-6.4vh":"0"},500);
			if($(this).hasClass("curmenu")){
				setTimeout(function(){ $(".TimeArea").hide()},1000);
				setTimeout(function(){ $(".Navcolumn").hide()},1000);
			}else{
				$(".TimeArea").show();
				$(".Navcolumn").show()
			}
		})
	}
	//换皮肤
	skinFn();
})
// =============================以上是所有页面都有调用到===============================================//


// =============================部分需要调用的js===============================================//
//系统时间、日期
function getCurDate(){
 var d = new Date();
 var week;
 switch (d.getDay()){
 case 1: week="星期一"; break;
 case 2: week="星期二"; break;
 case 3: week="星期三"; break;
 case 4: week="星期四"; break;
 case 5: week="星期五"; break;
 case 6: week="星期六"; break;
 default: week="星期天";
 }
 var years = d.getFullYear();
 var month = add_zero(d.getMonth()+1);
 var days = add_zero(d.getDate());
 var hours = add_zero(d.getHours());
 var minutes = add_zero(d.getMinutes());
 var seconds=add_zero(d.getSeconds());
 var str1=years+"-"+month+"-"+days;//年份
 var str2=hours+"-"+minutes+"-"+seconds;//时间

$(".TimeArea .division").text(str2);
$(".TimeArea .years span").text(str1);
$(".TimeArea .years p").text(week);
}

function add_zero(temp){//单数补零
 if(temp<10) return "0"+temp;
 else return temp;
}
setInterval("getCurDate()",1000);

// 滚动动画
function scrollanimate(){
	window.scrollReveal = new scrollReveal({
		reset: false,
		move: '50px'
	});
}

//首页中间菜单栏
function centermenu(obj){
	var oul=obj.find(".columnwrap");
	var oli=oul.find("p");
	var ocls=obj.find(".columnwrap").attr("name");
	oli.hover(function(){
		var i=$(this).index();
		oul.attr("class","");
		oul.addClass(ocls+i);
	},function(){
		oul.attr("class","");
		oul.addClass(ocls);
	})
}

// 字体滚动效果
function fontFn(obj,otext,pt){
	var options = {
	  useEasing : true, 
	  useGrouping : true, 
	  separator : pt||"", 
	  decimal : '.', 
	  prefix : '', 
	  suffix : '' 
	};
	var demo = new CountUp(obj, 0, otext, 2, 3, options);
	demo.start();
}

// -- 换皮肤 --
function skinFn(){
	var skintab=$(".skin .skintab");
	var skinbox=$(".skin ul");
	var triangle_up=$(".skin .triangle-up");
	var skinli =$(".skin ul li");
	skintab.on("click",function(){
		skinbox.toggleClass("on");
		triangle_up[skinbox.hasClass("on")?"show":"hide"]();
	})
	skinli.on("click",function(){
		switchSkin( this.id );
		skinbox.removeClass("on");
		triangle_up[skinbox.hasClass("on")?"show":"hide"]();
	})
    var cookie_skin = $.cookie( "MyCssSkin");
    if (cookie_skin) {
        switchSkin( cookie_skin );
    }
}
function switchSkin(skinName){
    $("#cssfile").attr("href","hzcfile/css/"+ skinName +".css"); //设置不同皮肤
    $.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 365});//有效期一年
}
// ==================首页_end========================//

//时日月年切换
function LayDateTab(){
	var oTimeTab=$(".TimeTab span");
	oTimeTab.on("click",function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".TimeSearchbox input").val("");
	})
}
//时间搜索功能
function LayDatefn(){
	var arr=['YYYY-MM-DD hh:mm','YYYY-MM-DD','YYYY-MM']//时、日、月查找
	$(".TimeTab span").each(function(){
		var hasCs=$(this).hasClass("cur");
		if(hasCs){
			laydate({istime: true, format:arr[$(this).index()]});
		}
	})
}
//时间搜索功能（多了一个按年查找）
function LayDatefn2(){
	var arr=['YYYY-MM-DD','YYYY-MM','YYYY']//当日、当月、当年查找
	$(".TimeTab span").each(function(){
		var hasCs=$(this).hasClass("cur");
		if(hasCs){
			laydate({istime: true, format:arr[$(this).index()]});
		}
	})
}

//公用的切换内容js（切换后刷新页面不会跳回最初内容）
 function publictab(){
 	var hdtab = $(".hdtab");//切换按钮
 	var hdcon = $(".hdcon");//切换内容框
 	var hdlen=$(".hdtab").length;//获取有几个切换内容区域
	var oHash = window.location.hash;//获取页面url
	var arrUrl = [];//"#1","#2","#3","#4"
	for(var i=0;i<hdlen;i++){ //给url加上伪标签
		arrUrl.push("#"+i);
	}
	//alert(arrUrl);
	for (var i = 0; i < arrUrl.length; i++) {
	    if (oHash == arrUrl[i]) {
	       hdtab.eq(i).addClass("cur").siblings().removeClass("cur");
 		   hdcon.eq(i).show().siblings().hide();
	    }
	    else{
	    	hdtab.click(function(){
				var n = $(this).index();
				$(this).addClass("cur").siblings().removeClass("cur");
 		        hdcon.eq(n).show().siblings().hide();
				window.location.hash = arrUrl[n];
			});
	    }
   }
 }


