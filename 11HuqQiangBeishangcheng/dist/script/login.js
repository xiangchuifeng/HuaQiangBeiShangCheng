define(['jquery','cookie','jquery.cookie'],function(){
	return{
		denglu:!function(){
				
			          $(".tijiao .Subm").click(function(){
						    var name=$(".Username").val();
						    var word=$(".Password").val();
							$.ajax({
								type:"POST",
								url:"http://127.0.0.1/11HuqQiangBeishangcheng/php/login.php",
								data:'shoujihao='+name+'&mima='+word,
								success:function(mess){
									console.log('数据传输成功');
					    	        console.log(mess);
					    	        //php 中echo 返回数值为false 假  则html console.log 输出为 空
					    	        var shuju=mess;
					    	        if(shuju){//输出为真 1 说明php中 echo true,即已经有这个账户，登录成功
					    	        	alert("登录成功")
					    	        	$.cookie('shoujihao',name,10);
					    	        	location.href="index.html";						    	        
					    	        }else{    //如果不为真 或 1   则 这个用户名或者密码错误
					    	    			alert("用户名或者密码错误");     
					    	    		}
								}
							});
						    	   					
				      });					
			}()
	}
});





			    	    