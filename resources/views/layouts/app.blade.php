<!DOCTYPE html>
<!-- saved from url=(0021)http://blogchina.com/ -->
<html lang="{{ app()->getLocale() }}">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
     <!-- Basic Page Needs
        ================================================== -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="360_union_verify" content="439d21c889517b8c051bc4c18d6e472d">
    <title>@yield('title', '知识库')</title>

        <!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">
<!-- CSS
================================================== -->
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="{{ asset('headerStyle/headerPc.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('css/index.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('css/reset.css') }}">
<script src="{{ asset('public/assets/default/js/jquery.min.js') }}"></script>   
<!-- Java Script
================================================== -->
@yield('styles')
</head>
<body>
<div class="h_body" id=" {{ route_class() }}-page">
    <!-- PC导航 -->
    @include('layouts._header')
    <div class="h_content">
        <!-- 首页焦点图 -->
        @yield('focusmap')

        <div class="h_con2">
            <!-- 头条左侧区域-->
            @yield('leftcontent')
            <!-- 右侧区域-->
            @yield('rightcontent')
        </div>
    </div>
</div>
@include('layouts._footer')
@yield('scripts')
</body>
</html>