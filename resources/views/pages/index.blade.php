@extends('layouts.app')

@section('title', '首页')

<!-- 焦点图 -->
@section('focusmap')
    <!-- 焦点图 -->
    @include('index._focusmap', ['focusmap' => '我是传值'])
@endsection
@section('leftcontent')
    <!-- 左边内容 -->
    @include('index._leftcontent', ['data' => '我是传值'])
@endsection
@section('rightcontent')
    <!-- 右边内容 -->
    @include('index._rightcontent', ['data' => '我是传值'])
@endsection