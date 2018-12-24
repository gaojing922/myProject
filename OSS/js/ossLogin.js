$(function(){
	$(".login-bg").height($(window).height());
	window.onresize=function(){  
        $(".login-bg").height($(window).height());
    };
    //找回密码事件
    $(".forget-passwd-box li").bind("click",function(){
    	$(this).addClass("lgBg").siblings("li").removeClass("lgBg");
    	$(this).find("span").addClass("spanBg").parent("li").siblings("li").find("span").removeClass("spanBg");
    	if($(this).hasClass("by-userName-btn")){
    		$(".byUsername-pasd").show().siblings("table").hide();
    	}else{
    		$(".byUsername-pasd").hide().siblings("table").show();
    	}
    })
});
//注册弹框
layui.use(['layer','form'], function(){ //独立版的layer无需执行这一句
	var form = layui.form(),
	layer = layui.layer; //独立版的layer无需执行这一句
  	//注册
	$(document).on("click",".regist_btn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '注册',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.dialog-regist'),
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			//alert("取消");
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			//alert("确定");
			layer.closeAll();
		});
		//select通用事件
		$(".regist-select-type").bind("change",function(){
			$(this).siblings("span").text($(this).val());
			//$("#s option:selected").val();
		})
	});
	//忘记密码
	$(document).on("click",".forget-pawd",function(){
		layer.open({
			type: 1, //Page层类型
			title: '找回密码',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.dialog-forgetPassword')
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			//alert("取消");
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			//alert("确定");
			layer.closeAll();
		});
	})
	//登录按钮
	$(".loginInput-btn").unbind("click").bind("click",function(){
		var userName = $("#userName-id").val().toUpperCase();//用户名
		var paswd = $("#passWd-id").val();//密码
		if(userName=="" || userName ==undefined){
			$("#userName-id").addClass("error");
			//layer.msg(['asdfawefawerf', '#userName-id']); //数组第二项即吸附元素选择器或者DOM
			//layer.tips('请输入工号', '#userName-id');
			messageTips('请输入工号','#userName-id',2000)
			return false;
		}else if(paswd == "" || paswd == undefined){
			$("#userName-id").removeClass("error");
			$("#passWd-id").addClass("error");
			messageTips('请输入工号','#passWd-id',2000)
			return false;
		}else{
			$("#userName-id,#passWd-id").removeClass("error");
			$(this).attr("disabled",true).addClass("allBtnnotClick").val("登录中...");
			setTimeout(function(){
				window.location.href="service-Wtdt.html";
			},3000)
			
		}
	})
	//申请集成商提示信息
	$(document).on("mouseover",".integrator-tr img",function(){
	  	layer.tips('没有集成商编码？请先申请为GROWATT集成商',$(this), {
			  tips: [4, '#6987ab'],
			  time: 0
		});
	});
	$(document).on("mouseout",".integrator-tr img",function(){
	  	layer.tips();
	});
	//申请代理商提示信息
	$(document).on("mouseover",".agent-tr img",function(){
	  	layer.tips('暂无编码?请向您的集成商申请',$(this),{
			  tips: [4, '#6987ab'],
			  time: 0
		});
	});
	$(document).on("mouseout",".agent-tr img",function(){
	  	layer.tips();
	});
	//注册下拉事件
	form.on('select(userType)', function(data){
		//alert("原始对象:"+$(data.elem).text()); //得到select原始DOM对象
		//alert("被选中的值:"+data.value); //得到被选中的值
		//alert("美化后的dom对象"+data.othis); //得到美化后的DOM对象
		var selectValue = data.value;//获取被选中的值
		if(selectValue==1){
			$(".integrator-tr,.agent-tr").hide();
		}else if(selectValue == 2){
			$(".integrator-tr").show();
			$(".agent-tr").hide();
		}else{
			$(".agent-tr").show();
			$(".integrator-tr").hide();
		}
	});   
	//注册类型选择
	$(".regist-select li").bind("click",function(){
		$(this).addClass("registTypeBg").siblings("li").removeClass("registTypeBg");
		if($(this).hasClass("employee")){
			$(".employee-box").show().siblings("table").hide();
		}else if($(this).hasClass("integrator")){
			$(".integrator-box").show().siblings("table").hide();
		}else{
			$(".agent-box").show().siblings("table").hide();
		}
	})
});
var countdown=10; 
function settime(obj) { 
    if (countdown == 0) { 
        obj.removeAttribute("disabled"); 
        obj.value="获取验证码"; 
        countdown = 10; 
        return;
    } else { 
        obj.setAttribute("disabled", true); 
        obj.value="已发送(" + countdown + ")"; 
        countdown--; 
    } 
	setTimeout(function(){settime(obj)},1000) 
}
//所有输入验证提示信息
function messageTips(text,content,time){
	if(time==""|| time==undefined){
		time=3
	}
	layer.tips(text,content,{
			  tips: [2, '#6987ab'],
			  time: time
		});
}

