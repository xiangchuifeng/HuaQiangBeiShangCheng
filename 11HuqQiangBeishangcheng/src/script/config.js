//配置模块
require.config({
	baseUrl:'https://cdnjs.cloudflare.com/ajax/libs/',//共有的路径
	paths:{
		'jquery':'jquery/1.12.4/jquery.min',//名称一定是jquery
		'jqcookie':'jquery-cookie/1.4.1/jquery.cookie.min',//约定的名称和文件名
		'validate':'jquery-validate/1.17.0/jquery.validate.min'
	}
});

//路径文件的扩展名.js必须省略