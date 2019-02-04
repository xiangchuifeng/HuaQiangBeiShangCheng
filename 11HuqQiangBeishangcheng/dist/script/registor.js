define(['jquery','jquery.validate'],function(){
	return{
		zhucebiao:!function(){
					$(".tel").focus(function(){	
						$(".userspan").css({
							visibility:"visible",
							color:"red"
						});
					});
					$(".tel").blur(function(){
						if($(this).val()==''){
							$(".userspan").css({
							visibility:"hidden",						
						});
						}else{
							var name=$(".tel").val();
							$.ajax({
								type:"POST",
								url:"http://127.0.0.1/11HuqQiangBeishangcheng/php/registor.php",
								data:"shoujihao="+name,
								success:function(msgg){  
									var shuju=msgg;								
							    		if(shuju){			    																					
											$(".userspan").css({
												visibility:"visible",
												color:"red",
												fontSize:"20px"
											}).html("✘此用户名已经存在!!!");
							    	    }else{
											$(".userspan").css({
												visibility:"visible",
												color:"green",
												fontSize:"20px"
											}).html("✔此用户名可以注册！");
											
							        }							    									    									    	
								}//success结尾
							});//ajax尾部
							    							    							    		
						}//else尾部			
				    });	
				}(),
	 zhengzechajian:!function(){
					$("#zhuce1").validate({
						rules:{	
							yanma:{
								required:true,
								maxlength:4
							},
							telma:{
								required:true,
								minlength:6
							},
							pass:{
								required:true,
								minlength:6
							},
							aginpass:{
								required:true,
								equalTo:'#pass'
							}														
						},
						messages:{	
							yanma:{
								required:'验证码不能为空',
								maxlength:'验证码不能大于四位'
							},
							telma:{
								required:'手机验证码不能为空',
								minlength:'手机验证码不能少于6位'
							},
							pass:{
								required:'密码不能为空',
								minlength:'密码要大于6位'
							},
							aginpass:{
								required:'重复密码不能为空'
							}
										
						}
					});
					
					$.validator.setDefaults({
						success:function(label){
							label.html('√').css({color:"green"}).addClass('valid');
						}
					});
					
					
				}()
	}
});



