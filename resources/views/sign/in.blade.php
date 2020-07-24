<!DOCTYPE html>
<html class="screen-scroll">
    <head lang="en">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
        <meta name="copyright" content="www.blogchina.com,博客中国,版权所有">
        <meta name="keywords" content="blog,weblog,blogger,bokee.com,www.bokee.com,博客中国,中国博客,博客,我的博客,自媒体,社会网络, IT,方兴东,科技,新知,生活, IT业界,互联网实验室,新媒体,博客研究,博客营销">
        <meta name="description" content="博客中国于2002年8月由博客教父方兴东创立。作为中国博客发源地，博客中国汇聚国内众多具新锐思想的意见领袖，是中国最具影响力的博客平台。“每天5分钟，给思想加油”是我们的宗旨，“博客改变中国”是我们的使命！">
        <meta name="author" content="www.blogchina.com,博客中国">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title> {{getenv('APP_NAME')}}</title>
        <link rel="stylesheet" href="/css/bootstrap.min.css?{{time()}}">
        <link rel="stylesheet" href="/css/font-awesome.min.css?{{time()}}" rel="stylesheet">
        <link rel="stylesheet" href="/css/bootstrap-tagsinput.css?{{time()}}">
        <link rel="stylesheet" href="/css/share/css/share.min.css?{{time()}}">
        <style type="text/css">
            .social-share .social-share-icon{
                width: 40px !important;
                height: 40px !important;
                line-height: 40px !important;
                margin-left: 0.5rem;
            } 
            .share_title{
                color:#c01414;
                text-align: center;
                font-size: 0.38rem;
                line-height: 1rem;
            }
        </style>
        <link rel="stylesheet" type="text/css" href="/css/adetails.css?{{time()}}">
        <link rel="stylesheet" type="text/css" href="/css/red.css?{{time()}}">
        <script src="/js/jquery.min.js"></script>
        <!--[if lt IE 9]>
            <script src="http://post.blogchina.com/public/assets/default/js/jquery19.min.js"></script>
            <script src="http://post.blogchina.com/public/assets/default/js/html5shiv.min.js"></script>
            <script src="http://post.blogchina.com/public/assets/default/js/respond.min.js"></script>
        <![endif]-->
        <script src="/js/bootstrap.min.js?{{time()}}"></script>
        <!--[if IE 8]>
            <link rel="stylesheet" type="text/css" href="http://post.blogchina.com/public/assets/default/css/ie8.css">
        <![endif]-->
        <script>var _hmt = _hmt || []; (function() {
                var hm = document.createElement("script");
                hm.src = "//hm.baidu.com/hm.js?095985877fc79b795111ef380b4e6d79";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();</script>
    </head>
    
    <body class="per_main details">
        <!--内容部分开始-->
        <div class="notybox"></div>
            <div class="mailLoginBox">
                <div class="mailLogin plusf">
                    <div class="headerBox">
                        <div class="header clearfix">
                            <div class="l_box">
                                <a class="brand" href="http://www.blogchina.com" target="_blank">
                                    <img src="/images/logo_red.png" class="logo_red" title="博客中国">
                                    <img src="/images/blogchina_black.png" class="blogchina_bl" alt="" />
                                    <span>每天五分钟 给思想加油</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="mainBox">
                        <div class="main">
                            <div class="positionBox clearfix">
                                <div class="loginBox" data-sudaclick="loginBox" style="cursor:default">
                                    <ul class="tit clearfix nav-tabs unlist" id="myTab">
                                        <!--被选中的情况，在li上加入class为current-->
                                        <li class="active">
                                            <a href="#login" data-toggle="tab">登录</a></li>
                                        <li class="">
                                            <a href="#logup" data-toggle="tab">注册</a></li>
                                    </ul>
                                 
                                        <div class="tab-content">
                                           
                                            <div class="tab-pane active freeMailbox" id="login">
                                                <form action="sign/in" method="post">
                                                    <div class="input-group domestic">
                                                        <span class="input-group-addon">
                                                            <i class="fa fa-user"></i>
                                                        </span>
                                                        <input type="text" id="sign_in_name" value="" class="span2" placeholder="用户名/手机号/电子邮件" aria-describedby="basic-addon1" value=''></div>
                                                    <div class="input-group password">
                                                        <span class="input-group-addon">
                                                            <i class="fa fa-unlock-alt"></i>
                                                        </span>
                                                        <input type="password" id="sign_in_password" class="span2" placeholder="密码" aria-describedby="basic-addon1" value=''>
                                                        <i class="fa fa-eye"></i>
                                                    </div>
                                                    <div class="input-group loginyzmerror" style="display:none;">
                                                        <input type="text" name="cpt" id="logincptimg" placeholder="验证码" value="" class="form-control" style="width:133px;height:40px;border-radius: 4px 0 0 4px">
                                                        <img  style="border-radius: 0 4px 4px 0" src="{{ captcha_src('flat') }}" onclick="this.src='/captcha/flat?'+Math.random()" title="点击图片重新获取验证码"></div>
                                                    <div class="control-group text-left">
                                                       
                                                        <a class="pull-right forgetpassw" href="/user/password/forget">忘记密码?</a></div>
                                                    <button type="submit" class="ladda-button submit-button btn " data-color="blue" id="login_btn">
                                                        <span class="ladda-label">登 录</span></button>
                                                    <div class="login_ways">
                                                        <ul class="login_ways_ul unlist">
                                                            <li class="weibo">
                                                                <a href="javascript:;">
                                                                    <i class="fa fa-weibo"></i>
                                                                </a>
                                                            </li>
                                                            <!-- <li class="qq">
                                                            <a href="/auth/qq?state=n"><i class="fa fa-qq"></i></a></li>-->
                                                            <li class="wechat">
                                                                <a href="javascript:;">
                                                                    <i class="fa fa-wechat"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </form>
                                            </div>
                                           
                                        <div class="tab-pane vipMailbox" id="logup">
                                            <form action="sign/up" method="post">
                                                <div class="input-group">
                                                    <span class="input-group-addon">
                                                        <i class="fa fa-envelope-o"></i>
                                                    </span>
                                                    <input type="text" name="email" id="sign_up_email_mobile" value="" class="span2" autocomplete='off' placeholder="邮件地址/手机号码" aria-describedby="basic-addon1"></div>
                                                <div class="input-group">
                                                    <span class="input-group-addon">
                                                        <i class="fa fa-user"></i>
                                                    </span>
                                                    <input type="text" name="nickname" id="nickname" value="" class="span2" autocomplete='off' placeholder="昵称" aria-describedby="basic-addon1"></div>
                                                <div class="input-group password">
                                                    <span class="input-group-addon">
                                                        <i class="fa fa-unlock-alt"></i>
                                                    </span>
                                                    <input type="password" name="password" id="sign_up_password" class="span2" autocomplete='off' placeholder="密码（6~20个字符）" aria-describedby="basic-addon1">
                                                    <i class="fa fa-eye"></i>
                                                </div>
                                                <div class="input-group logupyzmerror {{ $errors->has('captcha') ? ' has-error' : '' }}" >
                                                    <input type="text" name="cpt" placeholder="验证码" value="" class="form-control logupyzm" style="width:133px;height:40px;border-radius: 4px 0 0 4px">
                                                    <!-- <img src="javascript:;" style="border-radius: 0 4px 4px 0" onclick="this.src='http://post.blogchina.com/captcha/create?r='+Math.random();"> -->
                                                    <img  style="border-radius: 0 4px 4px 0" src="{{ captcha_src('flat') }}" onclick="this.src='/captcha/flat?'+Math.random()" title="点击图片重新获取验证码">
                                                </div>


                                                <button class="ladda-button submit-button btn" data-color="blue" id="logon_btn">
                                                    <span class="ladda-label">下一步</span>
                                                </button>
                                            </form>
                                            
                                        </div>
                            
                                        <div id="logon_mail" class="modal fade logon_phone logon_mail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                            <div class="modal-dialog modal-sm">
                                                <div class="modal-content">
                                                    <button type="button" class="close" data-dismiss="modal">
                                                        <span aria-hidden="true">&times;</span>
                                                        <span class="sr-only">Close</span></button>
                                                    <h4>恭喜您注册成功!</h4>
                                                    <p>已将激活邮件发送至您填写的邮箱中，请及时处理！</p>
                                                    <div class="text-center">
                                                        <button type="button" data-color="blue" class="ladda-button submit-button btn " data-dismiss="modal">确 定</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <input type='hidden' id='from' value="http://www.blogchina.com/" />
    <div class="footer footmain">© Copyright 2001 - 2020 blogchina.com, All Rights Reserved
        <br>
        <a target='_blank' href='http://beian.miit.gov.cn'>京ICP证120511号</a>　
        <a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020321'>京公网安备 11010802020321号</a>
        <br>客户服务热线：15110263473　客服邮箱：help@blogchina.com　 违法和不良信息举报电话：15110263473　举报邮箱：help@blogchina.com
    </div>
    <div class="footer footmain p_footer">© Copyright 2001 - 2020 blogchina.com</div>
</body>
<script src="/js/jquery.noty.packaged.min.js"></script>  
<script src="/js/icheck.min.js?{{time()}}"></script>
<script src="/js/login.js?{{time()}}"></script>
<script>
    $('a[data-toggle="tab"]').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $(document).ready(function() {
        $('.icheck').iCheck({
            checkboxClass: 'icheckbox_flat-red',
            radioClass: 'iradio_flat-red'
        });
    });
</script>

</html>