;(function($,window,document){  
	var register_name = false;
	var register_nickname = false;
	var register_pass =  false;
//	var loginstate = true;
	var regfy = /^([a-zA-Z0-9]){5}$/;
	var regyzmcode = /^(\d){6}$/;   //匹配验证码
	var localyzm = false;
	var loginyzmerror = false;
	var loginnum = 0;
	var timeout = 0; 
	var regcolumnname = /^.{2,20}$/ ;
	var regemail = /^[a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9\-\_]+\.[a-zA-Z0-9\-\.]+$/;//验证邮箱
	//var phonereg = /^(?:13\d|14\d|15\d|17\d|18\d)-?\d{5}(\d{3}|\*{3})$/;//验证手机号
	var phonereg = /^(?:13\d|14\d|15\d|16\d|17\d|18\d|19\d)-?\d{5}(\d{3}|\*{3})$/;//验证手机号
	var usernamereg =  /^[a-z0-9-_]{3,30}$/i; 
	var patrn=/^(\S){6,16}$/;  

	var Login = {
		init:function(){ 
			this.userMouseover();//鼠标离开事件
			this.userLogin();//用户登录
			this.userRegister()//用户注册 
			this.seepassword();//查看密码
			this.phonereg();//phone注册验证码
			this.phoneregister();//手机注册入库
			this.thirdpartyurls();//第三方路径设置
			
		 	setTimeout(function(){
                $('.span2').val(''); 
            },500);  
             
		},
		
		
		thirdpartyurls:function(){
        	var from = $.trim($('#from').val()); 
            if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
            	if(from == '' || from == undefined || from == null){ 
		        	$('.wechat').find('a').attr('href',UC_URL+'weixinapi/login');
		        	$('.weibo').find('a').attr('href',UC_URL+'auth/weibo?state=n');
            	}else{ 
            		var aurl = window.location.search.substring(window.location.search.lastIndexOf('=')+1); 
            		$('.wechat').find('a').attr('href',UC_URL+'weixinapi/login?weixinarticleurl='+aurl);
            		$('.weibo').find('a').attr('href',UC_URL+'auth/weibo?state=n&articleurl='+aurl);
            	}
	        }else{
	        	if(from == '' || from == undefined || from == null){ 
	        		$('.wechat').find('a').attr('href',UC_URL+'auth/weixinweb?state=n');
	        		$('.weibo').find('a').attr('href',UC_URL+'auth/weibo?state=n');
	        	}else{ 
	        		var aurl = window.location.search.substring(window.location.search.lastIndexOf('=')+1); 
		        	$('.wechat').find('a').attr('href',UC_URL+'auth/weixinweb?state=n&articleurl='+aurl);
		        	$('.weibo').find('a').attr('href',UC_URL+'auth/weibo?state=n&articleurl='+aurl);
	        	}
	        } 
		},
		
		
		
		seepassword:function(){
			$('.fa-eye').click(function(){
            	if($(this).prev().attr('type') == 'text'){
            		$(this).prev().attr('type','password');
            	}else{
            		$(this).prev().attr('type','text');
            	} 
            }) 
		},
		
		
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
		
			 
		
		
			
			//注册
			$('#sign_up_email_mobile').blur(function(){ 
				var obj = $(this); 
				if (regemail.test($.trim($(this).val()))){
					 register_name =true;  
				} else if (phonereg.test($.trim($(this).val()))) {
					 register_name =true;  
				}else{
					register_name = false;
					var message = '邮件地址/手机号码错误,请重新输入';
				    Login.commonnoty(message);return false;
				}
				
				
				
				
				
				 
				//if(fag ==  true){
//					$.ajax({
//						url:UC_URL + 'sign/accoutexists',
//					    type:'get',
//					    dataType:'jsonp',
//					    data:{'accout':obj.val()},
//						beforSend:function(){
//							obj.parents('.vipMailbox').find('.submit-button').attr("disabled",true);
//						},
//					    success:function(data){
//						  obj.parents('.vipMailbox').find('.submit-button').attr("disabled",false);
//					      if(data.meta.code == 200){
//							 var message = '用户名已存在,请重新输入';
//				    		 Login.commonnoty(message);return false;
//					      }else{
//							  register_name = true;
//						  }
//					    },
//					    error:function(data){
//					    	  console.log("请联系管理员");
//					    }
//				   }); 
//				}  
			}); 
			
			
			$(document).on('blur', '#nickname', function () {
				var nickname =$.trim($('#nickname').val());
				if(!regcolumnname.test(nickname)){ 
					var message = '昵称长度２～２０字符';
				    Login.commonnoty(message);
				    register_nickname = false; 
				}else{
					register_nickname = true;
					//$.ajax({
//						url:UC_URL+'apply/nnexists',
//					    type:'get',
//					    dataType:'jsonp', 
//					    jsonp:'callback',
//					    data:{'nickname':nickname}, 
//					    success:function(msg){  
//					      if(msg.meta.code == 200){
//					      	 var message = '用户笔名已存在,请重新填写';
//				    		 Login.commonnoty(message);
//				    		 register_nickname = false; 
//					      }else if(msg.meta.code == 400){ 
//							 register_nickname = true;
//						  }else{
//						  	 var message = '服务器内部错误,请稍后重新填写';
//				    		 Login.commonnoty(message);
//				    		 register_nickname = false; 
//						  }
//					    },
//					    error:function(erroe){
//					    	  console.log("请联系管理员");
//					    }
//				   });  
				}
			}); 
			
			
			
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
		
	
		userLogin:function(){
			$(document).on('click','#login_btn',function(){ 
				Login.eventLogin();
			});
			
			
			
			//event事件登录
			 $(document).keydown(function(event){ 
				  if(event.keyCode == 13){     //仅仅允许登录回车事件
					  $('#myTab li').each(function(){
					  	 if($(this).hasClass('active')){
					  	 	if($(this).find('a').html() == '登录'){
							  Login.eventLogin(); 
					  	 	} 
					  	 } 
					  })
				  } 
			  });
			  
			   $('#myTab li').click(function(){			//注册加载验证码
				   	if($(this).find('a').html() == '注册'){
			  	 		$('.logupyzmerror').find('img').attr('src',UC_URL+'/captcha/create?r='+Math.random());
			  	 		setTimeout(function(){
							$('.logupyzmerror').show(); 
						},800);
			  	 	}else{
			  	 		$('.logupyzmerror').hide(); 
			  	 	} 
			   })
			  
			    
		},
		
		
		//正式登陆方法 让click keyCode执行登陆操作
		eventLogin:function(){ 

			if(loginnum == 3){
				$('#logincptimg').next().attr('src',UC_URL+'/captcha/create?r='+Math.random());
				setTimeout(function(){
					$('.loginyzmerror').show(); 
				},800);
			}
			if ((regemail.test($.trim($('#sign_in_name').val())) || phonereg.test($.trim($('#sign_in_name').val())) || usernamereg.test($.trim($('#sign_in_name').val()))) && patrn.test($.trim($('#sign_in_password').val()))){
				if($(".loginyzmerror").is(":visible")){
					if($.trim($('#logincptimg').val()).length != 5){
						var message = '请正确输入验证码';
				    	Login.commonnoty(message);return false;
					}else{
						var loginyzm = $.trim($('#logincptimg').val());
					}
				}else{
					var loginyzm = '';
				}
				var accout = $('#sign_in_name').val();
				var password = $('#sign_in_password').val();  


				$.ajax({ 
					 url:UC_URL+'sign/in',
					 data:{accout:accout,password:password,loginyzm:loginyzm}, 
					 type:'post',
					 beforeSend:function(){ 
					 	$('#login_btn').attr("disabled",true);
					 	$('#login_btn').children('.ladda-label').html('登录中...');
					 }, 
					 success:function(msg){ 
					 	console.log(msg)
					 	var msg = eval('('+msg+')'); 
					 	
					 	if(msg.meta.code == 200){  
					 		var from = $('#from').val(); 
					 		var fromreg = /^http:\/\//i;
					 		if(msg.data.group_id == 200){
						 		if(from == '' || from == undefined || from == null || !fromreg.test(from)){   
									var referrer = document.referrer;  
									// || (referrer.indexOf('revamp') > 0)
									if(referrer == '' || referrer == undefined || referrer == null || (referrer.indexOf('revamp') > 0) || (referrer.indexOf('didsendemail') > 0) || (referrer.indexOf('sign') > 0) || (referrer.indexOf('password') > 0) || (referrer.indexOf('apply') > 0)){ 
										window.location.href='http://'+msg.data.name+BLOG_DOMAIN;
									}else{
										var referrers = referrer.split('//');
										var referrerone = referrers[1].split('/'); 
										if(referrerone.indexOf(BLOG_DOMAIN)){ 
											window.location.href=document.referrer;//返回上一页并刷新
										}else{ 
											window.location.href='http://'+msg.data.name+BLOG_DOMAIN;
										} 
									}
						 		}else{
							 		window.location.href = from; 
						 		}
					 		}else{
					 			window.location.href=UC_URL+'setting/index';
					 		}
				 		}else if(msg.meta.code == 402){
				 			
                            loginnum+=1;
                            $('#login_btn').attr("disabled",false);
                            $('#login_btn').children('.ladda-label').html('登录');
                            var message = '当前账号异常，请联系客服';
                            
                            Login.commonnoty(message);return false;

                        }else if(msg.meta.code == 700){
                            loginnum+=1;
                            $('#login_btn').attr("disabled",false);
                            $('#login_btn').children('.ladda-label').html('登录');
                            var message = '验证码错误,请重新输入';
                            Login.commonnoty(message);return false;
                        }else{
                            loginnum+=1;
                            $('#login_btn').attr("disabled",false);
                            $('#login_btn').children('.ladda-label').html('登录');
                            var message = '用户名或密码错误,请重新输入';
                            Login.commonnoty(message);return false;
                        }
					 },
					 error: function(xhr, type){ 
						console.log(xhr+'请联系开发员') ;
					}
				}) ;  
			}else{
				console.log("验证身份异常")
				var message = '用户名或密码错误,请重新输入';
			    Login.commonnoty(message);return false;
			}   
		},
		
		
		//手机注册验证码
		phonereg:function(){
			$(document).on('click','.logon_yzm_btn',function(){
				var obj1 = this; 
				var mobile_num = Commom.getCookie('login_'+$.trim($('#sign_up_email_mobile').val()));
				if(mobile_num && parseInt(mobile_num) >= confinenum){
					var message = '今日您的手机短信下发已达上限,请明日再进行操作';
	    			Login.commonnoty(message); 				
				}else{	
					$.ajax({
						url:UC_URL+'user/mobile/sendsns',
						type:"post",
						data:{mobile:$.trim($('#sign_up_email_mobile').val()),'permission':'y',cptimg:$.trim($('.logupyzm').val())},
						dataType:"json",   
						beforeSend:function(){  
						},
						success:function(msg) {  
							if(msg.meta.code == 200){ 
								var mobilevalue = mobile_num != null ? parseInt(mobile_num)+1 : 1;
								Commom.setCookie('login_'+$.trim($('#sign_up_email_mobile').val()),mobilevalue);
								time1(obj1); 
							}else if(msg.meta.code == 404){ 
								var message = '内容填写器错误，请确认填写信息';
	    						Login.commonnoty(message); 
							}else if(msg.meta.code == 911){ 
								var message = '短信服务器错误，请联系客服！！';
	    						Login.commonnoty(message); 
							}else if(msg.meta.code == 912){ 
								$('.logupyzm').next().attr('src',UC_URL+'/captcha/create?r='+Math.random());  
								var message = '验证码错误，请重新输入';
	    						Login.commonnoty(message); 
	    						$('#logon_phone').modal('hide'); 
							}else{ 
								var message = '服务器错误，请重新输入';
	    						Login.commonnoty(message);  
							}
						 
							 
						},
						error:function(msg){ 
							console.log('服务器错误'+msg);
						},  
					});
				}  
			}) 
		},
		
		
		
		
		
		phoneregister:function(){
			$('.logon_yzm_input').click(function(){
				$('.is-visible').html('');
			})
		
		
			$(document).on('click','.phoneregister',function(){
				var obj = $(this);
				if(!regyzmcode.test($('.logon_yzm_input').val())){
					$('.is-visible').html('验证码错误');
				}else{ 
					if(register_name == true && register_nickname == true  && register_pass == true){
						$.ajax({
						    url:UC_URL+'sign/phonevalidatorregister',
						    type:'get',
						    dataType:'json',
						    data:{'accout':$("#sign_up_email_mobile").val(),'nickname':$("#nickname").val(),'password':$("#sign_up_password").val(),'code':$.trim($('.logon_yzm_input').val())},
							beforeSend:function(){
								obj.attr("disabled",true);
								obj.children('.ladda-label').html('注册中...');
							},
							success:function(data){   
							  obj.attr("disabled",false);
							  obj.children('.ladda-label').html('注 册');
						      if(data.meta.code == 200){  
						      	 $('#logon_phone').modal('hide'); 
						    	 $('#sign_in_name').val($.trim($("#sign_up_email_mobile").val()));
						    	 $('#myTab > li').removeClass('active'); 
						    	 $('#myTab > li').eq(0).addClass('active'); 
						    	 $('#logup').removeClass('active'); 
						    	 $('#login').addClass('active');  
						      }else if(data.meta.code == 400){
						      	 var message = '参数错误,请重新注册';
					    		 Login.commonnoty(message);  
					    		 $('#logon_phone').modal('hide'); 
						      }else if(data.meta.code == 700){
						      	 var message = '手机号码已存在,请重新注册';
					    		 Login.commonnoty(message);  
					    		 $('#logon_phone').modal('hide'); 
						      }else if(data.meta.code == 913){ 
								 $('.is-visible').html('验证码错误'); 
						      }else{ 
								 var message = '服务器响应失败,请稍后重新注册';
					    		 Login.commonnoty(message); 
						      }
						    },
						    error:function(data){
						    	  console.log("请联系管理员");
						    }
						}); 
					}else{
						var message = '注册信息填写错误,请重新输入';
					    Login.commonnoty(message); 
					}   
					/////////////////////////////////////////////////////////////////////
				}
			
			})
		
		},
		
		
		
		
		 
		userRegister:function(){
			$(document).on('click','#logon_btn',function(){
				
				var obj = $(this); 
				if(regemail.test($.trim($('#sign_up_email_mobile').val()))){  
					if(register_name == true && register_nickname == true  && register_pass == true && localyzm == true){
						$.ajax({
						    url:UC_URL+'sign/registeremail',
						    type:'get',
						    dataType:'json',
						    data:{'accout':$("#sign_up_email_mobile").val(),'nickname':$("#nickname").val(),'password':$("#sign_up_password").val(),'logupyzm':$.trim($('.logupyzm').val())},
							beforeSend:function(){
								obj.attr("disabled",true);
								obj.children('.ladda-label').html('注册中...');
							},
							success:function(data){  
							  obj.attr("disabled",false);
							  obj.children('.ladda-label').html('注 册');
						      if(data.meta.code == 200){ 
						    	//$('#logon_mail').modal('show');
//								$('#logon_mail').on('hidden.bs.modal', function (e) {
							     	window.location.href=UC_URL+'sign/sentemail/'+data.data;
							    //});  
						      }else if(data.meta.code == 400){
						      	 var message = '参数错误,请重新注册';
					    		 Login.commonnoty(message);  
						      }else if(data.meta.code == 700){
						      	 var message = '邮箱已存在,请重新注册';
					    		 Login.commonnoty(message);  
						      }else if(data.meta.code == 701){
						      	 var message = '验证码错误,请重新填写';
					    		 Login.commonnoty(message);  
						      }else{ 
								 var message = '服务器响应失败,请稍后重新注册';
					    		 Login.commonnoty(message); 
						      }
						    },
						    error:function(data){
						    	  console.log("请联系管理员");
						    }
						}); 
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
					if(register_name == true && register_nickname == true  && register_pass == true && localyzm == true){
						//$.ajax({
//							url:UC_URL + 'setting/mobile/exists',
//						    type:'get',
//						    dataType:'json', 
//						    data:{'mobile':$.trim($('#sign_up_email_mobile').val())},
//							beforSend:function(){ 
//							},
//						    success:function(msg){ 
//						    	if(msg.meta.code == 200){
//						    		var message = '手机号码已存在,请重新输入';
//					    			Login.commonnoty(message); 
//						    	}else{ 
						 
						var mobile_num = Commom.getCookie('register_'+$.trim($('#sign_up_email_mobile').val()));
						if(mobile_num && parseInt(mobile_num) >= confinenum){
				    		var message = '今日您的手机短信下发已达上限,请明日再进行操作';
			    			Login.commonnoty(message); 				
						}else{	
							$.ajax({
								url:UC_URL+'user/mobile/sendsns',
								type:"post",
								data:{mobile:$.trim($('#sign_up_email_mobile').val()),'permission':'y',cptimg:$.trim($('.logupyzm').val()),'lcptimg':'y','suffix':'mobile_reg'},
								dataType:"json",   
								beforeSend:function(){  
								},
								success:function(msg) {  
									if(msg.meta.code == 200){ 
										var mobilevalue = mobile_num != null ? parseInt(mobile_num)+1 : 1;
										Commom.setCookie('register_'+$.trim($('#sign_up_email_mobile').val()),mobilevalue);
										jtime($('.logon_yzm_btn')); 
										$('#logon_phone').modal('show'); 
						 				$('.phonereg').val($.trim($('#sign_up_email_mobile').val()));
									}else if(msg.meta.code == 400){ 
										var message = '参数错误，请确认填写信息';
			    						Login.commonnoty(message); 
									}else if(msg.meta.code == 404){ 
										var message = '内容填写器错误，请确认填写信息';
			    						Login.commonnoty(message); 
									}else if(msg.meta.code == 700){ 
										var message = '手机号码已存在,请重新输入';
			    						Login.commonnoty(message); 
									}else if(msg.meta.code == 911){ 
										var message = '短信服务器错误，请联系客服！';
			    						Login.commonnoty(message); 
									}else if(msg.meta.code == 912){ 
										$('.logupyzm').next().attr('src',UC_URL+'/captcha/create?r='+Math.random());  
										var message = '验证码错误，请重新输入';
			    						Login.commonnoty(message); 
			    						$('#logon_phone').modal('hide'); 
									}else{ 
										var message = '服务器错误，请重新输入';
			    						Login.commonnoty(message);  
									} 
								},
								error:function(msg){ 
									console.log('服务器错误'+msg);
								},  
							});
						}  
						    //	}
						   // } 
						//});   
					}else{
						if(register_name == false){ 
							var message = '手机号码请正确填写';
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
				}
				
			}); 
		} 
		
		
		 
	} 
	
	
	
	 
    
	
	
	


	window.Login = Login;
	$(function(){
		Login.init();
	}) 
}(jQuery,window,document));


//倒计时函数
var wait=60;
function time1(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");    
        o.innerHTML="再次发送";
        wait = 60;
    } else {
        o.setAttribute("disabled", true);   
        o.innerHTML=("重新发送(" + wait + ")");
        wait--;
        setTimeout(function() {
            time1(o)
        },
        1000)
    }
} 

function jtime(o) {
    if (wait == 0) {
        o.attr("disabled",false);
        o.html("再次发送");
        wait = 60;
    } else {
        o.attr("disabled",true);
        o.html("重新发送(" + wait + ")");
        wait--;
        setTimeout(function() {
            jtime(o)
        },
        1000)
    }
} 


$(window).resize();
$(window).resize(function(){ 
    /* 保持底部位置合适*/
    var H=$(".plusf").height(),F=$(".footer").height();
    if(H+F>$(window).height()){
        $(".plusf").css({"position":"relative","top":"14px","margin-top":0});
        $(".footer").css({"position":"relative"});
    }else{
        $(".plusf,.footer").attr({"style":""});
    }
});