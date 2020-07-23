@extends('default.layouts.main')
@section('title') 
{{ trans('layouts.invokeemail') }}-博客中国
@stop

@section('styles') 
<link href="{{ asset('public/assets/default/css/adetails.css') }}" rel="stylesheet">
<link href="{{ asset('public/assets/default/css/red.css') }}" rel="stylesheet"> 
@stop

@section('content')
<body class="details per_main">
<div class="notybox"></div>
<div class="resetbox plusf">

    <div class="headerBox">
        <div class="header clearfix">
            <div class="l_box"><a class="brand" href="{{trans('layouts.home')}}" target="_blank">
                <img src="{{trans('layouts.public_default_url')}}/images/logo_red.png" class="logo_red" title="博客中国"><img src="{{trans('layouts.public_default_url')}}/images/blogchina_black.png"
                                                                                  class="blogchina_bl" alt=""/><span>每天五分钟 给思想加油</span>
            </a>
            </div>
            <div class="resetmain">
                <div class="text-center resetpw jhmail">
                    <h3 style="margin-top: 30px;margin-bottom:30px;font-weight: bold">重新发送激活邮件</h3>
                    <div class="input-group domestic ">
                        <input type="text"  class="span2" placeholder="" style="background-color: #eee" value="{{$data['data']['accout']}}"  readonly></div>
                    <button class="submit-button btn" id='regsendemail' data-color="blue" >
                        <span class="ladda-label">重新发送激活邮件</span>
                    </button>
                    <a href="{{trans('layouts.uc5_url')}}/sign/in"><button class="submit-button btn wbtn" data-color="blue" >
                        <span class="ladda-label">老用户登录</span>
                    </button></a>
                     <a href="{{trans('layouts.uc5_url')}}/sign/in"><button class="submit-button btn wbtn" data-color="blue" >
                       <span class="ladda-label">注册</span>
                    </button></a>
                    <p class="text-left"><a class="forgetpassw" href="/user/password/forget">忘记密码?</a></p>
                    <p class="text-left">客服咨询：15110263473</p>
                </div>
            </div>
        </div>
    </div>

<input type='hidden' id='code' value="{{$data['data']['code']}}">
<input type='hidden' id='email' value="{{$data['data']['accout']}}">
</div>
@include('default.partials.footer')
@stop
@section('scripts')
<script src="{{ asset('public/assets/default/js/jquery.noty.packaged.min.js') }}"></script>
<script src="{{ asset('public/assets/default/js/icheck.min.js') }}"></script> 
<script src="{{ asset('public/assets/default/js/regsendemail.js') }}"></script> 
<script>
    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    /*   $(document).ready(function(){
     $('input').iCheck({
     checkboxClass: 'icheckbox_minimal',
     radioClass: 'iradio_minimal',
     increaseArea: '20%' // optional
     });

     });*/
    $(document).ready(function () {
        $('.icheck').iCheck({
            checkboxClass: 'icheckbox_flat-red',
            radioClass: 'iradio_flat-red'
        });
    });


    $(document).ready(function(){
        $(window).resize();
    });
    $(window).resize(function(){
        /* 保持底部位置合适*/
        var H=$(".plusf").height(),F=$(".footer").height();
        if(H+F>$(window).height()){
            $(".footer").css({"position":"relative"});
        }else{
            $(".plusf,.footer").attr({"style":""});
        }
    });

</script>
@stop 

