<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class SignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('sign.in');
    }
    //邮箱注册 发邮件
    public function register(Request $request){
        $validator = \Validator::make($request->all(), [
            'accout' => 'required|min:3|max:30|',
            'nickname'  => 'required|min:2|max:30',
            'password' => 'required|min:6|max:20',  
            // 'captcha' => 'required|captcha'
        ]);
        if ($validator->fails()) { 
            return  $validator->errors()->all(); 
        }
        $params = [
            'accout' => $request->input('accout'),
            'nickname' =>$request->input('nickname'),
            'password' => $request->input('password'),
        ];
        //判断是否是邮箱
        if(filter_var($params['accout'], FILTER_VALIDATE_EMAIL)) { 
            //邮箱是否存在
            $accoutexiste = User::getAccoutexists($params['accout']);
            if($accoutexiste['meta']['code'] == 200){
                $info = [
                    'meta'=>[
                        'code' => '700' //email重复
                    ],
                ];
                return response()->json($info)->setCallback($request->input('callback'));
            } 
            //生成uid
            $data = array(
                'uid' =>$this->getUid(),
                'accout' =>$params['accout'],
                'nickname' =>$params['nickname'],
                'password' =>md5($params['password']),
                'ip'=>$request->getClientIp(),
            );
            //添加操作
            $data = User::registeremail($data);
            if($data){
                $info = [
                    'meta'=>[
                        'code' => 200
                    ],
                    'data'=>$data
                ];
            }else{
                 $info = [
                    'meta'=>[
                        'code' => 404//
                    ],
                ];
            }
        }else{
            $info = [
                'meta'=>[
                    'code' => 400   
                ],
            ];
        }
        return response()->json($info)->setCallback($request->input('callback')); 
    }
    public function Sentemail(Request $request,$code){
        return view('default.sign.sentemail',compact('code'));
    }
    /**
     *  生成随机的uid
     *
     */
    public function getUid(){
        return uniqid().rand(1, 100000);
    }
    /**
     * 发送邮件模板
     *
     */
    public function getSentemail(Request $request,$code)
    { 
        return view('default.sign.sentemail',compact('code')); 
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
