layui.use(['layer','form','layedit','laydate','element'], function(){ //独立版的layer无需执行这一句
	var form = layui.form(),//form表单模块
  	layer = layui.layer; //独立版的layer无需执行这一句
  	layedit = layui.layedit,//编辑器模块
  	laydate = layui.laydate,//时间日期模块
  	element = layui.element();//tab选项卡模块
  	//创建常见问题编辑器
  	var editIndex = layedit.build('cjwt_editor');
  	//问题详情回复
  	var editIndex = layedit.build('reply-user');
	//代理商tips
	$(document).on("mouseover",".bm-img",function(){
	  	layer.tips('终端客户可使用代理商编码或此别名关联该代理商',$(this), {
			  tips: [4, '#6987ab'],
			  time: 0
		});
	});
	$(document).on("mouseout",".bm-img",function(){
	  	layer.tips();
	});
	//采集器信号显示
	$(document).on("mouseover",".showSign",function(){
		var text;
		var count = $(this).attr('data-name');
		if(count == 4 || count == 3) text = '强';
		else if(count == 2 || count == 1 || count == 0) text = '弱';
		else text = '未知';
	  	layer.tips('信号:'+text,$(this), {
			  tips: [2, '#6987ab'],
			  time: 0
		});
	});
	$(document).on("mouseout",".showSign",function(){
	  	layer.tips();
	});
	
	
	
	
	
	//编辑短信提示
	$(document).on("mouseover",".amIfno-btn img",function(){
	  	layer.tips('点此增加下划线,三个下划线表示输入域!',$(this), {
			  tips: [4, '#6987ab'],
			  time: 0
		});
	});
	$(document).on("mouseout",".amIfno-btn img",function(){
	  	layer.tips();
	});
	
	//显示所有表格溢出信息
	$(document).on("mouseover",".table-hide-td",function(){
	  	layer.tips($(this).html(),$(this), {
			  tips: [2, '#6987ab'],
			  time: 0
		});
	});
	$(document).on("mouseout",".table-hide-td",function(){
	  	layer.tips();
	});
	
	$(document).on("mouseover",".gsmc-img",function(){
	  	layer.tips('将使用在设备管理处显示设备所属代理商',$(this), {
			tips: [4, '#6987ab'],
			time: 2000
		});
	});
	$(document).on("mouseout",".wtzs-all-ul .gsmc-img",function(){
	  	layer.tips();
	});
	//问题追溯
	$(document).on("mouseover",".wtzs-all-ul .show-tips-img",function(){
	  	layer.tips('结果可能不是百分百准确哦',$(this), {
			tips: [4, '#6987ab'],
			time: 0
		});
	});
	$(document).on("mouseout",".wtzs-all-ul .show-tips-img",function(){
	  	layer.tips();
	});
	//问题大厅转移问题弹框
	$(document).on("click",".wtdtTran-btn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '转移',
			area: ['350px'],
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.wtdt-tranDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
		//select通用事件
		$(".regist-select-type").bind("change",function(){
			$(this).siblings("span").text($(this).val());
			//$("#s option:selected").val();
		})
	});
	//问题大厅删除弹框
	$(document).on("click",".wtdtDelete-btn-c",function(){
		layer.open({
			type: 1, //Page层类型
			title: '删除',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			resize:false,
			content: $('.wtdt-deleteDialog'),
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//提示信息
		$(".delete-tip-message").html("确定要删除吗?");
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
		//select通用事件
		$(".regist-select-type").bind("change",function(){
			$(this).siblings("span").text($(this).val());
			//$("#s option:selected").val();
		})
	});
	//新增派单弹框
	$(document).on("click",".addPd-Btn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '新增派单',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.pd-addpdDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//问题追溯用户信息启用禁用
	$(document).on("click",".enabledBtn",function(e){
		layer.open({
			type: 1, //Page层类型
			title: '启用/禁用',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.wtzs-enabledDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//提示信息
		$(".delete-tip-message").html("确认禁用?");
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			$(e.target).css("background-position","center -550px");
			layer.closeAll();
		});
	});
	//问题追溯用户信息重置
	$(document).on("click",".resetBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '重置',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.wtzs-enabledDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//提示信息
		$(".delete-tip-message").html("确认重置?");
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//问题追溯用户信息修改
	$(document).on("click",".proeditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.wtzs-editDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//问题追溯用户电站转移
	$(document).on("click",".planttranBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '转移',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.wtzs-planttranDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//问题追溯用户电站删除
	$(document).on("click",".plantdeleteBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '删除',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.wtzs-enabledDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//提示信息
		$(".delete-tip-message").html("确定要删除吗?");
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//问题追溯用户电站修改
	$(document).on("click",".plantEditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '修改',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.wtzs-plantEditDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//问题追溯采集器修改
	$(document).on("click",".cjqZsEditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '采集器修改',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.cjq-sameDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//问题追溯逆变器修改
	$(document).on("click",".nbqZsEditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '逆变器修改',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.nbq-sameDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//问题追溯储能机修改
	$(document).on("click",".cnjZsEditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '储能机修改',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.cnj-sameDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//问题追溯采集器设置
	$(document).on("click",".cjqSetBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '采集器设置',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.cjq-SetDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			/*$("#cjq-iframe").contents().find(".cjq-pasd-box").show(function(){
				$(this).children(".cjq-input-pasd").addClass("cjq-input-pasdShow")
			});*/
			//$("#cjq-iframe").contents().find(".cjq-pasd-box").show();
			layer.closeAll();
		});
	});
	//问题追溯逆变器设置
	$(document).on("click",".nbqZsSetBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '逆变器设置',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.nbq-SetDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			/*$("#cjq-iframe").contents().find(".cjq-pasd-box").show(function(){
				$(this).children(".cjq-input-pasd").addClass("cjq-input-pasdShow")
			});*/
			//$("#cjq-iframe").contents().find(".cjq-pasd-box").show();
			layer.closeAll();
		});
	});
	//问题追溯储能机设置
	$(document).on("click",".cnjZsSetBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '储能机设置',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.cnj-SetDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			/*$("#cjq-iframe").contents().find(".cjq-pasd-box").show(function(){
				$(this).children(".cjq-input-pasd").addClass("cjq-input-pasdShow")
			});*/
			//$("#cjq-iframe").contents().find(".cjq-pasd-box").show();
			layer.closeAll();
		});
	});
	
	//创建知识分类弹框
	$(document).on("click",".createfxTypeBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '创建知识分类',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.zs-createTypeDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//编辑知识分类
	$(document).on("click",".editzsTypeBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.zs-editTypeDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//创建手册弹框
	$(document).on("click",".createScbtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '创建手册',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.sc-createDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//创建手册分类弹框
	$(document).on("click",".createTypeBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '创建分类',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.sc-createTypeDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//编辑手册分类
	$(document).on("click",".editTypeBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.sc-editTypeDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//质保开关
	$(document).on("click",".zbOnoffBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '质保开关',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.zb-onoffDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//代理商修改弹框
	$(document).on("click",".dlseditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '修改',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.uc-dlsEditDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//代理商下级用户弹框
	$(document).on("click",".juniorBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '用户列表',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.uc-juniorUserDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//启用
	$(document).on("click",".startProBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '启用/禁用',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.wtzs-enabledDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//提示信息
		$(".delete-tip-message").html("确认启用?");
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//添加分组弹框
	$(document).on("click",".addfzBtn",function(){
		alert(1);
		layer.open({
			type: 1, //Page层类型
			title: '添加分组',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.server-addfzDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//分配客服弹框
	$(document).on("click",".fpServerClickBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '分配客服',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.server-fpServerDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//用户中心-审核
	$(document).on("click",".userDobtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '审核',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.qxsz-tranDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//集成商管理编辑弹框
	$(document).on("click",".jcsEditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.jcs-editDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//集成商管理取消集成商
	$(document).on("click",".jcsCanelBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '撤除集成商',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.wtdt-deleteDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//提示信息
		$(".delete-tip-message").html("确认撤除该集成商吗?");
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//集成商管理导入设备
	$(document).on("click",".jcsimportdBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '导入设备',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.jcs-importdDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//提示信息
		$(".delete-tip-message").html("确认撤除该集成商吗?");
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
		//下拉输入选择
		$(".select-box").unbind("click").bind("click",function(){
			if($(this).siblings("ul").is(":hidden")){
				$(this).addClass("select-box-selected").siblings("ul").show().find("li").click(function(){
					$(this).parents("ul").siblings(".select-box").find(".selectDwon-input").val($(this).text());
				})
			}else{
				$(this).removeClass("select-box-selected").siblings("ul").hide()
			}
		})
	});
	//权限设置-修改权限弹框
	$(document).on("click",".qxEditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '权限修改',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.qxsz-editDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//权限设置-转移权限弹框
	$(document).on("click",".qxtranBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '权限转移',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.qxsz-tranDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//权限设置-添加角色弹框
	$(document).on("click",".qxaddUserBtn",function(){
		e.stopImmediatePropagation();
		layer.open({
			type: 1, //Page层类型
			title: '添加角色',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.qxsz-addUserDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//故障列表-查看弹框
	$(document).on("click",".gzlb-query-btn",function(){
		layer.open({
			type: 1, //Page层类型
			shade: 0.4, //遮罩透明度
			title: false,
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.gzlb-querycontent-box'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//关闭
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//故障列表-设置弹框
	$(document).on("click",".gzlb-set-btn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '逆变器设置',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.gzlb-setcontent-box'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//个人资料-手机修改弹框
	$(document).on("click",".grzlEdit",function(){
		layer.open({
			type: 1, //Page层类型
			title: '手机号修改',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.grzl-editDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//个人资料-手机号认证弹框
	$(document).on("click",".grzlApprove",function(){
		layer.open({
			type: 1, //Page层类型
			title: '手机号认证',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.grzl-approveDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//个人资料-邮箱修改弹框
	$(document).on("click",".emailEditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '邮箱修改',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.email-editDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//个人资料-邮箱认证弹框
	$(document).on("click",".emailAppBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '邮箱认证',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.email-approveDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//个人资料-修改密码弹框
	$(document).on("click",".pawdEditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '邮箱认证',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.pasd-editDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//个人资料-手机号添加弹框
	$(document).on("click",".grzlAddBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '邮箱认证',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.grzl-addDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//供货记录查看
	$(document).on("click",".ghjlSeeBtn",function(){
		$(this).parents("tr").addClass("trSelectdBg").siblings("tr").removeClass("trSelectdBg");
		layer.open({
			type: 1, //Page层类型
			title: '订单详情',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.ghjl-queryDialog'),
			resize:false,
			cancel: function(){ 
				parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
			layer.closeAll();
		});
	});
	//质保查询替换机
	$(document).on("click",".zbQuery-thBtn",function(){
		$(this).parents("tr").addClass("trSelectdBg").siblings("tr").removeClass("trSelectdBg");
		layer.open({
			type: 1, //Page层类型
			title: '替换机',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.zbQuery-thDialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//用户管理-新增用户
	$(document).on("click",".addUserBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '新增用户',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.addUser-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//电站管理-新增电站
	$(document).on("click",".addPlantBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '新增电站',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.addPlant-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
			/*$("#iframe的ID").contents().find("#iframe中的控件ID").click()
			var a = $(window.frames["addPlant-box"].document).find(".aaaa").val();
			$("#addPlant-box",document.frames('addPlant-box').document)
			alert(a)*/
		});
	});
	//电站管理-编辑电站
	$(document).on("click",".editPlantBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑电站',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.editPlant-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
			/*$("#iframe的ID").contents().find("#iframe中的控件ID").click()
			var a = $(window.frames["addPlant-box"].document).find(".aaaa").val();
			$("#addPlant-box",document.frames('addPlant-box').document)
			alert(a)*/
		});
	});
	//电站管理-新增设备
	$(document).on("click",".addDeviceBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '新增设备',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.addDevice-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		/*$(".all-bottom-btn0").click(function(){
			layer.closeAll();
			var stepValue = $("#addPlant-box").contents().find("#stepValue").val();
			var oneStep = $("#addPlant-box").contents().find(".addDevice-StepOne");
			var twoStep = $("#addPlant-box").contents().find(".addDevice-StepTwo");
			var threeStep = $("#addPlant-box").contents().find(".addDevice-StepThtree");
			if(stepValue == 1){
				$("#addPlant-box").contents().find(".addDevice-StepTwo").show().siblings(".sameStep-device").hide();
			}else{
				$("#addPlant-box").contents().find(".addDevice-StepTwo").show().siblings(".sameStep-device").hide();
			}
		});*/
	});
	//用户管理-用户信息修改
	$(document).on("click",".userInfoEdit",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.userInfo-editDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//安装商管理-新增安装商
	$(document).on("click",".addAzsBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '新增安装商',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.azs-addDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//客诉表-支付
	$(document).on("click",".ksbPay",function(){
		layer.open({
			type: 1, //Page层类型
			title: '支付',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.pay-ksbDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//创建客诉链接
	$(document).on("click",".createKsljBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '生成客户申请链接',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.Create-ksljDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//设备管理-编辑
	$(document).on("click",".nbqEditBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.nbq-editDialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//电站管理-添加采集器
	$(document).on("click",".addCjqBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '添加采集器',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.addCjq-Dialog'),
			resize:false,
			cancel: function(){ 
	    		//右上角关闭回调
	    		alert(1);
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//派单弹框
	$(document).on("click",".pdBtnPro",function(){
		layer.open({
			type: 1, //Page层类型
			title: '派单',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.pd-dialogBox'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		/*$(".all-bottom-btn0").click(function(){
			layer.closeAll();
			var stepValue = $("#addPlant-box").contents().find("#stepValue").val();
			var oneStep = $("#addPlant-box").contents().find(".addDevice-StepOne");
			var twoStep = $("#addPlant-box").contents().find(".addDevice-StepTwo");
			var threeStep = $("#addPlant-box").contents().find(".addDevice-StepThtree");
			if(stepValue == 1){
				$("#addPlant-box").contents().find(".addDevice-StepTwo").show().siblings(".sameStep-device").hide();
			}else{
				$("#addPlant-box").contents().find(".addDevice-StepTwo").show().siblings(".sameStep-device").hide();
			}
		});*/
	});
	//浏览下级用户
	$(document).on("click",".juniorUserBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '下级用户',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.juniorUser-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//问题分流-全部类型-新增
	$(document).on("click",".problemFl-add",function(){
		layer.open({
			type: 1, //Page层类型
			title: '新增问题类型',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.addProblemType-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	}); 
	//问题分流-全部类型-编辑
	$(document).on("click",".problemFl-edit",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑问题类型',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.editProblemType-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	}); 
	//全部问题-添加
	$(document).on("click",".allProblemAddFl-Btn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑问题类型',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.addAllProblem-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//问题分流-全部问题-新增问题
  		var editIndex = layedit.build('fl-addProblem');
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	}); 
	//全部问题-添加addMbBtn
	$(document).on("click",".allProblemEditFl-Btn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑问题类型',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.editAllProblem-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//问题分流-全部问题-编辑问题
  		var editIndex = layedit.build('fl-editProblem');
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//新增模版
	$(document).on("click",".addMbBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '新增模版',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.createMb-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//弹出图片通用
	$(document).on("click",".sameImgClick",function(){
		var src;
		if($(this).hasClass("replyF-c-img")){
			src = $(this).find("img").attr("src");
		}else{
			src = $(this).attr("src");
		}
		layer.open({
			type: 1,
			title:null,
			shade: 0.4, //遮罩透明度
			shadeClose:true,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: '<div style="border-radius:3px;"><img style="max-width:1024px;height:auto;border-radius:3px;" src="'+src+'"/></div>',
			resize:false,
			closeBtn: 0,//不显示关闭按钮
		});
	});
	//编辑模版内容
	$(document).on("click",".editzsMbBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑模版',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.editMb-dialog'),
			resize:false,
			cancel: function(){ 
				//parent.top.$(".ghjlSeeBtn").parents("tr").removeClass("trSelectdBg");
	    		//右上角关闭回调
	    		
	    		//return false 开启该代码可禁止点击该按钮关闭
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//新增短信模版
	$(document).on("click",".addMessageBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '新增短信模版',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.Add-messageDialog'),
			resize:false,
			cancel: function(){ 
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//使用短信模版
	$(document).on("click",".useInfoBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '使用短信模版',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.Use-messageDialog'),
			resize:false,
			cancel: function(){ 
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//编辑短信模版
	$(document).on("click",".messageEdit",function(){
		layer.open({
			type: 1, //Page层类型
			title: '编辑短信模版',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.Edit-messageDialog'),
			resize:false,
			cancel: function(){ 
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//续费订单详情查看
	$(document).on("click",".reeSeeBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '续费订单详情',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.flow-reeDialog'),
			resize:false,
			cancel: function(){ 
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//api管理 导入设备
	$(document).on("click",".apiEbtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '导入设备',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.urlEbtn-tranDialog'),
			resize:false,
			cancel: function(){ 
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//mix设置
	$(document).on("click",".mixSetBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '混储一体机设置',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.mixDialog-tranDialog'),
			resize:false,
			cancel: function(){ 
	  		}
		});
		//取消
		$(".all-bottom-btn1").click(function(){
			layer.closeAll();
		});
		//确定
		$(".all-bottom-btn0").click(function(){
			layer.closeAll();
		});
	});
	//智能检测
	$(document).on("click",".znCheckBtn",function(){
		layer.open({
			type: 1, //Page层类型
			title: '混储一体机设置',
			shade: 0.4, //遮罩透明度
			shadeClose:false,//点击遮罩关闭弹框
			anim: 0, //0-6的动画形式，-1不开启
			content: $('.znBox-tranDialog'),
			resize:false,
			cancel: function(){ 
	  		}
		});
	});
	//运行统分下拉年月日
	form.on('select(selectDateType)', function(data){
		//alert("原始对象:"+$(data.elem).text()); //得到select原始DOM对象
		//$(data.elem).find("option:selected").text() 获取选中的文本
		//alert("被选中的值:"+data.value); //得到被选中的值
		//alert("美化后的dom对象"+data.othis); //得到美化后的DOM对象
		var selectValue = data.value;//获取被选中的值
		var selectText = $(data.elem).find("option:selected").text();
		$(".show-date-time").text("当"+selectText);
		if(selectValue==1){
			loadDateCharts();
		}else if(selectValue == 2){
			loadMonthCharts();
		}else{
			loadYearCharts();
		}
	});
	//新增服务记录
	form.on('select(selectT)', function(data){
		//alert("原始对象:"+$(data.elem).text()); //得到select原始DOM对象
		//$(data.elem).find("option:selected").text() 获取选中的文本
		//	
		//alert("美化后的dom对象"+data.othis); //得到美化后的DOM对象
		var selectValue = data.value;//获取被选中的值
		var selectText = $(data.elem).find("option:selected").text();
		if(selectValue == 1){
			$("#messageC").val("这里是模版一的内容");
		}else if(selectValue == 2){
			$("#messageC").val("这里是模版二的内容");
		}else{
			$("#messageC").val("");
		}
		
	});
	
	//问题追溯采集器设置-监听单选框
	form.on('radio(cjq-radio)', function(data){
		if($(data.elem).is(":checked")){
			$(".cjq-pasd-box").show();
			$(this).parents("td").siblings("td").find("input").removeAttr("readonly").focus();
			$(this).parents("td").siblings("td").find("button").removeClass("allDisabledBtn");
			$(this).parents("tr").siblings("tr").find(".allInputHover").attr("readonly",true);
			$(this).parents("tr").siblings("tr").find("button").addClass("allDisabledBtn");
			
		}
		//console.log(data.elem); //得到radio原始DOM对象
		//console.log(data.value); //被点击的radio的value值
	});  
	//问题追溯逆变器设置-监听单选框
	form.on('radio(nbq-radio)', function(data){
		if($(data.elem).is(":checked")){
			$(".nbq-pasd-box").show();
			/*$(this).parents("td").siblings("td").find("input").removeAttr("readonly").focus();
			$(this).parents("td").siblings("td").find("button").removeClass("allDisabledBtn");
			$(this).parents("tr").siblings("tr").find(".allInputHover").attr("readonly",true);
			$(this).parents("tr").siblings("tr").find("button").addClass("allDisabledBtn");*/
			
		}
		//console.log(data.elem); //得到radio原始DOM对象
		//console.log(data.value); //被点击的radio的value值
	});  
});
//右键禁止查看源码
/*window.onload=function(){
	document.onkeydown=function(){
		var e=window.event||arguments[0];
		if(e.keyCode==123){
			alert("禁止查看!");
			return false;
		}else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
			alert("禁止查看!");
			return false;
		}
	};
	document.oncontextmenu=function(){
		alert("禁止查看!");
	return false;
	}
}*/
var loadFun=null;
var pregress = 0;	
//处理表格溢出部分
$(function(){
	var tdLength = $(".all-table tbody tr td").not(".notHide");
	$.each(tdLength, function(index,value) {
		if($(value).text().length>20){
			$(value).addClass("table-hide-td");
		}
	});
	//安装商登录提示
	setTimeout(function(){
		$(".login-input").fadeOut();
	},3000);
	$(".message-zero").hover(function(){
		$(".login-input").show();
	},function(){
		$(".login-input").fadeOut();
	});
	//智能检测
	//选择目录
	$(".check-same-box").each(function(i,v){
		$(v).click(function(){
			//alert($(".sameBox").size())
			$(".check-title span").text($(v).find("p:nth-child(1)").text());
			$(".check-same-box").removeAttr("name").find("p:nth-child(1)").removeAttr("name");
			$(v).attr("name",i).find("p:nth-child(1)").attr("name",i);
			$(".sameBox[name='"+i+"']").removeClass('znCheck-hide').siblings(".sameBox").addClass('znCheck-hide')
			//显示进度条
			/*window.parent.pregress=0//获取父页面变量		
			$(".zp_box",parent.document).css({width:0+"%"})
			$(".start_load",parent.document).text("开始").siblings("#zpCount").text("").siblings(".canle_load").text("");
			window.parent.loadFun = null;
			clearInterval(loadFun)*/
		})
	})	
	//智能检测开始检测 
	$(".znClick").on("click",function(){
		if($(".canle_load").text().length<=0){
			loadFun=setInterval(function(){
				pregress++;
				if(pregress>100){
					$(".start_load").text("开始").siblings("#zpCount").text("").siblings(".canle_load").text("");
					pregress=0;
					clearInterval(loadFun);
				}else{
					$(".start_load").text("读取中...").siblings("#zpCount").text(pregress+"%").siblings(".canle_load").text("(点击取消加载!)");
					$(".zp_box").css({width:pregress+"%"});
				}
			},150)
		}else{
			pregress=0;
			$(".zp_box").css({width:pregress+"%"});
			$(".start_load").text("开始").siblings("#zpCount").text("").siblings(".canle_load").text("");
			clearInterval(loadFun);
		}
	})
})


