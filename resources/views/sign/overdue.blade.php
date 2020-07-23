<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>提示</title>
    <link rel="stylesheet" href="{{asset('public/assets/default/css/warn.css')}}">
    <script src="{{ asset('public/assets/default/js/jquery.min.js') }}"></script>
    <script src="{{ asset('public/assets/default/js/common.js') }}"></script> 
    <script src="{{ asset('public/assets/default/js/againsendemail.js') }}"></script>
</head>
<body> 
<div class="error_box yzmail">
    <h1>验证失败！</h1>

    <div class="mess_box">
        <div class="mess_h">
            <div class="mess_c">
                <img src="{{asset('public/assets/default/images/stop.png')}}" alt=""/>
                <p>邮箱地址验证失败！</p>
                <p>该链接已失效。</p></div>
        </div>
        <div class="mess_f">
            <h3>您现在可以：</h3>
            <ol>
                <li>
                    <a href="{{trans('layouts.uc5_url')}}/sign/in">重新注册</a>
                </li>
                <li>联系客服进行处理：15110263473</li>
                <li>
                    打开<a href="{{trans('layouts.home')}}">博客中国首页</a>
                </li>
            </ol>
        </div>
    </div>
</div>
</body>
</html>
