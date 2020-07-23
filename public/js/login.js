;(function($,window,document){  
	var Login = {
		init:function(){ 
			this.userLogin();//鼠标离开事件
		
		},

		userLogin:function(){
			alert($)
		},
		
		
	}


	window.Login = Login;
	$(function(){
		Login.init();
	}) 
}(jQuery,window,document));