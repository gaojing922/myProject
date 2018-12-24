function saveCookies(){//保存cookie
	$(".imageSave").hide().siblings(".imageneverSave").show();
	var un = $("#username").val();//获取用户名
	var pw = $("#password1").val();//获取密码
	var uStr = $.cookie("username");//获取保存的用户名cookies
	var pStr = $.cookie("password");//获取保存的密码cookies
	if(un!=""&&un!=null&&pw!=""&&pw!=null){//判断用户名是否为空
		if(!uStr||!pStr){//判断cookies是否存在
			$.cookie("username",un+"_",{expires:7,path:'/'});//保存用户名
			$.cookie("password",pw+"_",{expires:7,path:'/'});//保存用户名
		}else{
			uStr=uStr+un;
			pStr=pStr+pw;
			$.cookie("username",uStr+"_",{expires:7,path:'/'});//保存用户名
			$.cookie("password",pStr+"_",{expires:7,path:'/'});//保存用户名
		}
	}else{
		return;
	}
}
function deleteCookies(){//删除cookie
	$(".imageneverSave").hide().siblings(".imageSave").show();
	var userCookies = $.cookie("username");//获取保存的用户名cookie字符串
	var paswCookies = $.cookie("password");//获取保存的密码cookie字符串
	if(userCookies){
		var uC = userCookies.split("_");//获取用户名数组
		var pC = paswCookies.split("_");//获取密码数组
		for(var i=0;i<uC.length-1;i++){
			if($("#username").val()==uC[i]){
				uC.splice(i,1);
				pC.splice(i,1);
				$.cookie("username",uC.join("_"),{expires:7,path:'/'});//保存用户名
				$.cookie("password",pC.join("_"),{expires:7,path:'/'});//保存用户名
				break;
			}
		}
	}else{
		return;
	}
}
$("#username").bind('input propertychange',function(){//实时监听输入的用户名是否保存在cookie中
	var u = $.cookie("username");
	var p = $.cookie("password");
	if(!u||!p){
		return;
	}else{
		var usreArry = u.split("_");//返回用户名数组
		var passwArry = p.split("_");
		for(var i = 0;i<usreArry.length-1;i++){//去掉数组最后面空元素
			if($(this).val()==usreArry[i]){
				$("#password1").val(passwArry[i]);
				$(".imageSave").hide().siblings(".imageneverSave").show();
				break;
			}else{
				$(".imageSave").show().siblings(".imageneverSave").hide();
				$("#password1").val("");
			}
		}
	}
});
