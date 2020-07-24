<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
   protected $fillable = [
        'uid', 'accout', 'email', 'mobile', 'nickname','password','name','avatar','ip','created_at','updated_at','is_valid_email','is_valid_mobile','is_allow_comment','gender','is_del'
    ];
    protected $table = 'user';
    /*
        当前已推荐，已发布的 没有被删除的文章
    */
    static public function getAccoutexists($accout){
        $list = User::select('uid','accout')
            ->where('accout',$accout)
            ->count();
        if($list){
        	$data = [
	            'meta'=>[
	                'code' => 200 //email重复
	            ],
	        ];

        }else{
        	$data = [
	            'meta'=>[
	                'code' => 400 //email重复
	            ],
	        ];
        }
        return $data;

        
    }
    //注册
    static public function registeremail($params){
    	return User::create($params);
    }
}
