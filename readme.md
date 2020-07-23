<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## 创建快捷键

- php artisan make:controller xxxxController --resource [创建资源控制器]

- php artisan make:model Models/Category[创建model]

## 辅助函数
	1、touch app/helpers.php
	2、composer.json
		{
		    ...

		    "autoload": {
		        "psr-4": {
		            "App\\": "app/"
		        },
		        "classmap": [
		            "database/seeds",
		            "database/factories"
		        ],
		        "files": [
		            "app/helpers.php"
		        ]
		    }
		    ...
		}
	3、composer dump-autoload
## 用户认证脚手架
- php artisan make:auth[创建用户认证脚手架]

- 路由等同于

- Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
- Route::post('login', 'Auth\LoginController@login');
- Route::post('logout', 'Auth\LoginController@logout')->name('logout');

- Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
- Route::post('register', 'Auth\RegisterController@register');

- Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
- Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
- Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
- Route::post('password/reset', 'Auth\ResetPasswordController@reset');



## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of any modern web application framework, making it a breeze to get started learning the framework.

If you're not in the mood to read, [Laracasts](https://laracasts.com) contains over 1100 video tutorials on a range of topics including Laravel, modern PHP, unit testing, JavaScript, and more. Boost the skill level of yourself and your entire team by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for helping fund on-going Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell):

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[British Software Development](https://www.britishsoftware.co)**
- [Fragrantica](https://www.fragrantica.com)
- [SOFTonSOFA](https://softonsofa.com/)
- [User10](https://user10.com)
- [Soumettre.fr](https://soumettre.fr/)
- [CodeBrisk](https://codebrisk.com)
- [1Forge](https://1forge.com)
- [TECPRESSO](https://tecpresso.co.jp/)
- [Pulse Storm](http://www.pulsestorm.net/)
- [Runtime Converter](http://runtimeconverter.com/)
- [WebL'Agence](https://weblagence.com/)


