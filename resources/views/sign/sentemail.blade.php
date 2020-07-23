<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>提示</title>
    <link rel="stylesheet" href="{{asset('public/assets/default/css/warn.css')}}">
</head>
<body>
<div class="error_box yzmail">
    <h1>发送成功</h1>
    <div class="mess_box">
        <div class="mess_h">
            <div class="mess_c mess_b success">
                <img src="{{trans('layouts.public_default_url')}}/images/mail.png" alt=""/>
                <p>恭喜您注册成功!</p>
                <p>已将激活邮件发送至您填写的邮箱中，请及时处理！</p>
            </div>
        </div>
        <div class="mess_f">
            <h3>没有收到邮件？</h3>
            <ol>
                <li>检查你的邮件垃圾箱</li>
                <li>若仍未收到确认，请尝试<a href="{{trans('layouts.uc5_url')}}/sign/resetregemail/{{$code}}">重新发送</a></li>
            </ol>
            <h3>您还可以：</h3>
            <ol>
                <li>
                    直接去<a href="{{trans('layouts.uc5_url')}}/sign/in">网站『登录』</a>
                </li>
                <li>
                    打开<a href="{{trans('layouts.home')}}">博客中国首页</a>
                </li>
            </ol>
        </div>
    </div>
</div>
</body>
</html>


