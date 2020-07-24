;(function($,window,document){  
	var register_name = false;
	var register_nickname = false;
	var register_pass =  false;
	var localyzm = false;
//	var loginstate = true;
	var regfy = /^([a-zA-Z0-9]){4}$/;
	var regyzmcode = /^(\d){6}$/;   //匹配验证码
	var localyzm = false;
	var loginyzmerror = false;
	var regyzmcode = /^(\d){6}$/;   //匹配验证码
	var timeout = 0; 
	var regcolumnname = /^.{2,20}$/ ;
	var regemail = /^[a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9\-\_]+\.[a-zA-Z0-9\-\.]+$/;//验证邮箱
	var phonereg = /^(?:13\d|14\d|15\d|16\d|17\d|18\d|19\d)-?\d{5}(\d{3}|\*{3})$/;//验证手机号
	var usernamereg =  /^[a-z0-9-_]{3,30}$/i; 
	var Login = {
		init:function(){ 
			this.userRegister();//用户手机号邮箱注册
			this.userMouseover();//用户注册表单验证信息
		},
		//用户注册表单验证信息
		userMouseover:function(){ 
			$('.logupyzm').blur(function(){
				if(!regfy.test($.trim($(this).val()))){
					localyzm = false;
					var message = '验证码错误,请重新输入';
				    Login.commonnoty(message); 
				}else{
					localyzm = true;
				} 
			}),
			//用户名
			$('#sign_up_email_mobile').blur(function(){ 
				var obj = $(this); 
				if (regemail.test($.trim($(this).val()))){
					 register_name =true;  
				} else if (phonereg.test($.trim($(this).val()))) {
					 register_name =true;  
				}else{
					register_name = false;
					var message = '邮件地址/手机号码错误,请重新输入';
				    Login.commonnoty(message);
				}
			}); 
			//昵称
			$(document).on('blur', '#nickname', function () {
				var nickname =$.trim($('#nickname').val());
				if(!regcolumnname.test(nickname)){ 
					var message = '昵称长度２～２０字符';
				    Login.commonnoty(message);
				    register_nickname = false; 
				}else{
					register_nickname = true;
				}
			}); 
			//密码
			$(document).on('blur', '#sign_up_password', function () {
				var password =$('#sign_up_password').val();
				if(password == '' ||  password.length<6 ||  password.length >20){
					var message = '密码长度不符,请重新输入';
				    Login.commonnoty(message); 
				}else{
					register_pass = true; 
				}
			});
		},
		userRegister:function(){
			$(document).on('click','#logon_btn',function(){
				var obj = $(this);
				//邮箱注册
				if(regemail.test($.trim($('#sign_up_email_mobile').val()))){  
					if(register_name == true && register_nickname == true  && register_pass == true && localyzm == true){
						return true; 
					}else{
						if(register_name == false){ 
							var message = '邮箱填写错误，请正确填写';
						    Login.commonnoty(message); 
						}
						if(register_nickname == false){ 
							var message = '昵称长度２～２０字符，请请正确填写';
						    Login.commonnoty(message); 
						}
						if(register_pass == false){ 
							var message = '密码长度不得小于6位，请请正确填写';
						    Login.commonnoty(message); 
						}
						if(localyzm == false){ 
							var message = '验证码错误，请重新填写';
						    Login.commonnoty(message); 
						}
					} 
				}else if(phonereg.test($.trim($('#sign_up_email_mobile').val()))){ 
					
				}
				
			}); 
		},
		commonnoty:function(message){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				$(".notybox").noty({
					layout: 'topCenter',//布局 就是信息提示框放在哪儿
					text: message,//提示内容 
					type: "confirm",//默认类型 内建了alert，warning和error，success，information和confirm对话框
					animation: {	//默认的显示和关闭动画
						open: {height: 'toggle'}, // jQuery animate function property object
						close: {height: 'toggle'}, // jQuery animate function property object
						easing: 'swing', // easing
						speed: 200 // opening & closing animation speed
					},
					timeout: 2000,
				});
			},500); 
		},	
		
	}


	window.Login = Login;
	$(function(){
		Login.init();
	}) 
}(jQuery,window,document));