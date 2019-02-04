define(['jquery','cookie','jquery.cookie'],function(){
	return{
		huaqiangcart:!function(){
						if($.cookie('cookiesid')&&$.cookie('cookienum')){
							console.log(getcookie('cookiesid'));//测试
							console.log(getcookie('cookiesid').split(','));//测试
							$(".jiesuan1").css({"position":"fixed","bottom":"0"});
							$("#cart-wrap").show();
							$("#cart-empty").hide();						
							var cookiesd=$.cookie('cookiesid').split(',');
							var cookienm=$.cookie('cookienum').split(',');
											
							$.ajax({
								type:"POST",
								url:"http://127.0.0.1/11HuqQiangBeishangcheng/php/cart.php",
								data:'',
								success:function(msg2){
									var shuju=$.parseJSON(msg2);
									//--------------------------------
									var zongji=0;//初始定义总结算价
									var zongshuliang=0;
									//-----------------------------
									for(var i=0;i<cookiesd.length;i++){
											for(var j=0;j<shuju.length;j++){
												if(shuju[j].sid==cookiesd[i]){
													var $clonebox=$('.cart-list:hidden').clone(true,true);
													//凡是给元素添加suoyin 都是用来处理对应数组cookienm cookiesd数据
													$clonebox.find(".check").find(".check1").attr('suoyin',i);
													$clonebox.find(".tu").find("img").attr("src",shuju[j].url);
													$clonebox.find(".tu").find(".miaoshu").html(shuju[j].title);
													$clonebox.find(".danjia").html(shuju[j].price);
													$clonebox.find(".xiangxi").find(".shanchu").find(".dele").attr('suoyin',i);
													$clonebox.find(".shuliang").find(".zhaobudao").find(".jian").attr('suoyin',i);
													$clonebox.find(".shuliang").find(".zhaobudao").find(".jiajian").val(cookienm[i]);
													$clonebox.find(".shuliang").find(".zhaobudao").find(".jia").attr('suoyin',i);
													$clonebox.find(".xiaoji p").html(shuju[j].price*cookienm[i]);
													$clonebox.css("display","block");
													
													//$(".cart-main").append($clonebox);
													//写完发现少包了一个外部的盒子，试一下外部插入。如下：结果实现了。
													$('.cart-list:hidden').after($clonebox);
													//----------商品总价-------------------
										
													zongji+=cookienm[i]*shuju[j].price;		
													zongshuliang+=parseInt(cookienm[i]);
													console.log("zongji"+zongji);//测试
													
												}
											}
										}
									//-----------总价赋值---------------------
										$('.zongji p').find('span:last').html(zongji);
										//-----------总数量赋值-----------------
										$('.zongji p').find('span:first').html(zongshuliang);
								   
									//----------jiesuan 固定定位-------------------
										var $shuliang=$(".cart-list:visible").length;
											console.log("shuliang"+$shuliang);//测试
											console.log($shuliang*121);
										$(window).scroll(function(){
											var $scrolltop1=$(window).scrollTop();
											console.log($scrolltop1);
											var $gaodu=121*$shuliang-82;//固定定位的滚动条位置是随着商品列表长度变化的
											//辛苦想半天算出来的数值。
											if($scrolltop1<=$gaodu){
												$(".jiesuan1").css({"position":"fixed","bottom":"0"});
											}else{
												$(".jiesuan1").css({"position":"static"});
											
										}
									});
									//------------删除商品-------------------
										$('.dele').click(function(){
												console.log(cookiesd);  
												//这个和下面的console 一起配合测试删除的时候，这个是否给删除了。
												if(window.confirm("确定删除这个商品？")){
													alert($(this).attr('suoyin'));//测试
													cookiesd.splice($(this).attr('suoyin'),1);//从获取到到cookiesd中减掉对应的这个sid
													                                   //同样在cookienum中减掉对应的数量 num
													console.log(cookiesd);                   //然后重新写cookie 刷新页面，重新渲染。
													cookienm.splice($(this).attr('suoyin'),1);
													$.cookie('cookiesid',cookiesd.toString(),10);
													$.cookie('cookienum',cookienm.toString(),10);
												    window.location.reload(true);
					
												}
												
										});
									//-----------------------数量加一-----------------------
										$('.jia').click(function(){																   
											cookienm[$(this).attr('suoyin')]=parseInt(cookienm[$(this).attr('suoyin')])+1;
											//suoyin 并不是sid 的值，是在cookie数组中的位置。																		
											$(this).siblings('.jiajian').val( parseInt($(this).siblings('.jiajian').val())+1 );
											//xxxx.val() 值是运算在括号里的 后面没有等号。							
											$.cookie('cookienum',cookienm.toString(),10);
											//$clonebox.find('.xiangxi').find('.xiaoji p').html(shuju[j].price*nm[i]);
											 window.location.reload(true);
										});
										//----------------商品数量减一---------------
										$('.jian').click(function(){	
											if(cookienm[$(this).attr('suoyin')]==1){
												alert("商品数量为1，不能再减少了,实在想抛弃我就点删除吧")
											}else{
												//alert('1');测试
												//console.log($(this).attr('suoyin'));测试
												cookienm[$(this).attr('suoyin')]=parseInt(cookienm[$(this).attr('suoyin')])-1;
												//nm 数组中对应的值减一  然后再重新覆盖给cookie
												console.log(cookienm);//测试
												console.log($(this).siblings('.jiajian').val());//测试siblings()同辈中含有.jiajian 的元素
												$(this).siblings('.jiajian').val( parseInt($(this).siblings('.jiajian').val())-1 );
												//xxxx.val() 值是运算在括号里的 后面没有等号。
												console.log($(this).siblings('.jiajian').val());//测试，所有的console.log 都是测试用的。
												$.cookie('cookienum',cookienm.toString(),10);
												window.location.reload(true);
											}
											
										});
									    //----------------商品数量减一---------------									
								}//success尾部
						
							});	//ajax尾部															
						}else{
							$("#cart-empty").show();
							$("#cart-wrap").hide();
						}
						
						
					}()
	}
});


