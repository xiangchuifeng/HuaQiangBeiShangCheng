define(['jquery','jquery.cookie','cookie'],function(){
	return{
		shangpinheyonghu:!function(){
					//检测是否有用户信息。登录 或者退出
					        
					        //alert($.cookie('shoujihao')); 测试
							if($.cookie('shoujihao')){
								$(".notlogined").css("display","none");										
								$(".logined").css("display","block");										
								$(".logined .yonghu").css("color","red").html(getcookie('shoujihao'));																				
							}
							$(".logined a").click(function(){
								$(".notlogined").css("display","block");
								$(".logined").css("display","none");
								delcookie('shoujihao');
							});
				           
				     //------蒙版隐藏----------------------------------------
				        $(".guanbi").click(function(){
				        	//alert("你好"); 测试
				        	$("#mengbanwrap").hide();
				        });
				
				      //------------渲染后端数据的商品信息---------------------------------------------							           
				           $.ajax({
				           	   type:"POST",
				           	   url:"http://127.0.0.1/11HuqQiangBeishangcheng/php/index1.php",
				           	   data:"",
				           	   success:function(msg){
					           	   	var $result= $.parseJSON(msg);
					           	   	console.log($result);//测试
					           	   	console.log($result.length);//测试
					           	   	var $str='';	
					           	   	$.each($result,function(i,element){
					           	   	    $str+=`
					        			    <li>
						        				<div class="list2-xiaotu">
						        					<a href="http://127.0.0.1/11HuqQiangBeishangcheng/src/details.html?sid=${element.sid}" target="_blank">
							        				 <img class="lazy" width="160" src="${element.url}" />
							        			    </a>
						        				</div>
						        				<div class="miaoshu2">
						        					<p>
						        						￥<i>${element.price}</i><del>市场价：${element.delprice}</del>
						        					</p>
						        					<a href="http://127.0.0.1/11HuqQiangBeishangcheng/src/details.html?sid=${element.sid}" target="_blank">${element.title}</a>
						        				</div>			        			
							        		</li>	        			
							        			`;	  
					           	   	});
					           	  
					           	   	$(".f2list2 ul").html($str);				           	   							           	   	
				           	   }
				           });						  					      
					
				}(),
    //------------------------轮播图----------------------------------------------------------------				
			lunbo:!function(){
				var $count=0;
				$(".xiaoyuan:first").addClass('active2');		
				 //---------点击的时候--------------
				$(".xiaoyuan").click(function(){
					$(this).addClass('active2');
					$(this).siblings('.xiaoyuan').removeClass('active2');
				    //---点击小圆 对应的图片出现。-------
				    var $nowindex=$(this).index();
					if($(this).index()>$count){
						//------------------------------------------------------
						//判断 眼前 点击 要出现的图片，是否在右边，如果在，则默认处理，如果不在，则不通过动画，
						//而是瞬间赋值left 给它，以至于让运动看起来是同一个方向不冲突的。
                        $(".Pic-big[count="+$count+"]").animate({left:"0px"});
						if($(".Pic-big[count="+$nowindex+"]").offset().left<=2698){
							$(".Pic-big[count="+$nowindex+"]").offset({ left:"2698px"}).animate({left:"1349px"});
							console.log('1');
						}else{
							$(".Pic-big[count="+$nowindex+"]").animate({left:"1349px"});
						}
																		
						//[atrribute=value]  value是变量时候  则 "+bianliang+" 这样表示
			            //反复测试发现 xiaoyuan 的index 是不变的，而tupian li 的序列会随着左右移动而改变，
			            //应该给其添加带有index 的属性标记，或者写固定都可以，这里不涉及数据处理。
					     $count=$nowindex;
					}else if($(this).index()<$count){	

						//判断 眼前 点击 要出现的图片，是否在 左 边，如果在，则默认处理，如果不在，则不通过动画，
						//而是瞬间赋值left 给它，以至于让运动看起来是同一个方向不冲突的。
						/*if($(".Pic-big[count="+$nowindex+"]").offset().left>=0){//left>=0
							$(".Pic-big[count="+$nowindex+"]").offset({left:0 });
							console.log('2');
						}
						$(".Pic-big[count="+$count+"]").animate({left:"2698px"});
						
						$(".Pic-big[count="+$nowindex+"]").animate({left:"1349px"});						
						$count=$nowindex;*/
						$(".Pic-big[count="+$count+"]").animate({left:"2698px"});
						if($(".Pic-big[count="+$nowindex+"]").offset().left>=0){//left>=0
							$(".Pic-big[count="+$nowindex+"]").offset({left:0 }).animate({left:"1349px"});
							console.log('2');
						}else{
							$(".Pic-big[count="+$nowindex+"]").animate({left:"1349px"});
						}												
						$count=$nowindex;
					}else{
						$count=$nowindex;
					}		
				});
				//---------------------------自动播放的时候------------------------------------------------------
				//--定时每个一段时间切换一张，然后如果点击 小圆圈 或者箭头  或者鼠标移进图片 则定时器结束，------
			      //----------------------否则定时器开始，--------------------------------------------
			        var $dingshi=null;			      
			        	$dingshi=setInterval(function(){	        	
					        $(this).css({border:"1px solid red"});//测试
			        	    //console.log($count);//测试       
						    $(".Pic-big[count="+$count+"]").animate({left:"0px"},"normal",function(){
				        		 $(".Pic-big[count="+(($count+1)>5?0:($count+1))+"]").css("left","2698px");
				        	});        	
					        	$count++;
					        	if($count>5){
					        		$count=0;	        		
					        	}
					        	console.log($count);
					        	//小圆圈对应的切换响应
					        	$(".xiaoyuan").eq($count).addClass('active2');
					        	$(".xiaoyuan").eq($count).siblings().removeClass('active2');
					        	//要切换的运动完，让刚刚被切换的图片从新赋值 left 2698
					        	$(".Pic-big[count="+$count+"]").animate({left:"1349px"});
			           },3000);
			        
				//---------鼠标经过空盒子，空盒子隐藏，大图 箭头出现，鼠标经过箭头变宽 ，点击切换图片-------------------------
				    
				      //-------------解决轮播冲突--------------
			      $(".jiejuelunbochongtu").mouseover(function(){
			      	  $(this).css("visibility","hidden");//空盒子隐藏
			      	  $(".jiantou").css("visibility","visible");//箭头显示出来
			      	  clearInterval($dingshi);//鼠标移上，停止自动播放定时器
			      });
			      $(".main-ban").mouseleave(function(){
			      	  $(".jiejuelunbochongtu").css("visibility","visible");//鼠标移开，自动播放
			      	  $(".jiantou").css("visibility","hidden"); //箭头隐藏起来
			      	  $dingshi=setInterval(function(){	        	
					        $(this).css({border:"1px solid red"});//测试
			        	    //console.log($count);//测试       
						    $(".Pic-big[count="+$count+"]").animate({left:"0px"},"normal",function(){
				        		 $(".Pic-big[count="+(($count+1)>5?0:($count+1))+"]").css("left","2698px");
				        	});      	
				        	$count++;
				        	if($count>5){
				        		$count=0;	        		
				        	}
				        	console.log($count);
				        	//小圆圈对应的切换响应
				        	$(".xiaoyuan").eq($count).addClass('active2');
				        	$(".xiaoyuan").eq($count).siblings().removeClass('active2');
				        	//要切换的运动完，让刚刚被切换的图片从新赋值 left 2698
				        	$(".Pic-big[count="+$count+"]").animate({left:"1349px"});
			           },3000);
			      });				  
			    //---------------------点击左右箭头---------------  
			    $(".banleft").click(function(){
			        	//$(this).css({border:"1px solid red"});//测试
			        	$(".Pic-big[count="+$count+"]").animate({left:"2698px"},"normal",function(){
			        		 $(".Pic-big[count="+(($count-1)<0?5:($count-1))+"]").css("left","0px");
			        	});
			        	$count--;
			        	if($count<0){
			        		$count=5;
			        	}
			        	console.log($count);
			        	//小圆圈对应的切换响应
			        	$(".xiaoyuan").eq($count).addClass('active2');
			        	$(".xiaoyuan").eq($count).siblings().removeClass('active2');       	
			        	$(".Pic-big[count="+$count+"]").offset({left:"0px"}).animate({left:"1349px"});
			    });
			    //--------------------------------
			       $(".banright").click(function(){

			        	//$(this).css({border:"1px solid red"});//测试
			        	//console.log($count);//测试       
					    $(".Pic-big[count="+$count+"]").animate({left:"0px"},"normal",function(){
			        		 $(".Pic-big[count="+(($count+1)>5?0:($count+1))+"]").css("left","2698px");
			        	});      	
			        	$count++;
			        	if($count>5){
			        		$count=0;	        		
			        	}
			        	console.log($count);
			        	//小圆圈对应的切换响应
			        	$(".xiaoyuan").eq($count).addClass('active2');
			        	$(".xiaoyuan").eq($count).siblings().removeClass('active2');
			        	//要切换的运动完，让刚刚被切换的图片从新赋值 left 2698
			        	$(".Pic-big[count="+$count+"]").animate({left:"1349px"});		        	               
			        });
			                
			}(),
			//-------------------------------楼梯--------------------------------------------------------------
				louti:!function(){
						$(window).scroll(function(){
							var scrolltop=$(window).scrollTop();
							if(scrolltop>=660){
								$("#leftfixed").show();
							}else{
								$("#leftfixed").hide();
						    }
									
							//滚动楼层，对应的楼梯给出响应。--------------------------------------------
							$('.louceng').each(function(index,element){
							    var loucengtop=$(element).offset().top+$(element).height()-100;
							    //等高的盒子后面可以+800 等等 写成固定值，如果盒子不等高，
							    //后面加的应该是盒子的高度,最好是同辈元素 ，。
							    //然后测试了一下 不同辈的元素  也是可以一起使用的
								if(loucengtop>scrolltop){
									$('.louti').removeClass('active');
									$('.louti').eq(index).addClass('active');
									return false;
								}
						    })
						});
						//---点击楼梯 运动到对应的楼层----------------------------------------------------
						$('.louti').click(function(){
						  	 $(this).addClass('avtive');
						  	 $(this).siblings('.louti').removeClass('active');
						  	 var loutop=$('.louceng').eq($(this).index()).offset().top;
						  	 $('body,html').animate({
						  	 	scrollTop:loutop
						  	 });
						});
					    //------返回顶部----------------------------------------------------------------	
						$('#leftfixed a:last').click(function(){
							$('body,html').animate({
								scrollTop:0
							},1000);
						});						
				}()
		
	}
});






