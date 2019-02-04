define(['jquery','cookie','jquery.cookie'],function(){
	return{
		suoyou:!function(){
				//console.log(location.search);测试
				//console.log(location.search.substring(1).split('=')[1]);测试
				var $Sid=location.search.substring(1).split('=')[1];//给jquery获取索引 用的。				
				var Sid=location.search.substring(1).split('=')[1]; //给数据请求用的				
				var addcart=document.querySelector('.add-cart');					
				var Simg=document.querySelector('.xiaofangtu img');
				var Daimg=document.querySelector('.dafang .dafangtu');
												
			//-------------------------------------------给放大镜用的---------------------------------------------------
				var Detailswrap=document.querySelector('#Details-wrap');
				var Detailsmain=document.querySelector('#Details-main');	
				var shangpintu=document.querySelector('.shangpintu');
				var xiaofangtu=document.querySelector('.xiaofangtu');
				var xiaofang=document.querySelector('.xiaofang');
				var Dafang=document.querySelector('.dafang');
				    $(".xiaofang").css({
				    	width:($(".dafang").width()*$(".xiaofangtu").width())/$(".dafang .dafangtu").width()+'px',
				    	height:($(".dafang").height()*$(".xiaofangtu").height())/$(".dafang .dafangtu").height()+'px',
				    });				    
				var bili=$(".dafang").width()/$(".xiaofang").width();
				   //比例是用来作用 大图 对应的小放大镜的偏移值的比例。
				  $(".xiaofangtu").mouseover(function(){
				  	   $(".xiaofang").css("visibility","visible");
				  	   $(".dafang").css("visibility","visible");
				  	   $(document).mousemove(function(ev){
				  	   	    var ev=ev||window.event;
					   	    // var scrollTop2=document.documentElement.scrollTop||document.body.scrollTop;
					   	    //上面为js兼容写法。
					   	    var scrollTop2=$(document).scrollTop();
					   	    //clientX Y  是相对于可视区的高度 不能代表鼠标的top值，当页面足够大，滚动滑动条的时候、
				 	        //单独用 clientX Y获取偏移值将失效，所以要加上窗口的 scrollTop 滚动条的值，如果横向有
				 	        //滚动条，还要加横向 scrollLeft 值。
				 	        //本处需要加 scrollTop
				 	        var lf=ev.clientX-Detailswrap.offsetLeft-Detailsmain.offsetLeft-shangpintu.offsetLeft-xiaofangtu.offsetLeft-xiaofang.offsetWidth/2;
					   	    // var lf=ev.pageX-Detailswrap.offsetLeft-Detailsmain.offsetLeft-shangpintu.offsetLeft-xiaofangtu.offsetLeft-xiaofang.offsetWidth/2;
					   	    var tp=scrollTop2+ev.clientY-Detailswrap.offsetTop-Detailsmain.offsetTop-shangpintu.offsetTop-xiaofangtu.offsetTop-xiaofang.offsetHeight/2;
					   	    // var tp=ev.pageY-Detailswrap.offsetTop-Detailsmain.offsetTop-shangpintu.offsetTop-xiaofangtu.offsetTop-xiaofang.offsetHeight/2;
					   	      if(lf>$(".xiaofangtu").width()-$(".xiaofang").width()){
							 	    	lf=$(".xiaofangtu").width()-$(".xiaofang").width();
							  } else if(lf<0){
							 	    	lf=0;			 	    	
							  }
					 	      if(tp>$(".xiaofangtu").height()-$(".xiaofang").height()){
					 	           tp=$(".xiaofangtu").height()-$(".xiaofang").height();
					 	      }else if(tp<0){
					 	    	tp=0;			 	    	
					 	      }
						   	 
						   	 $(".xiaofang").css({
						   	 	left:lf+'px',
						   	 	top:tp+'px'
						   	 });
						   	 $(".dafang .dafangtu").css({
						   	 	left:-lf*bili+'px',
						   	 	top:-tp*bili+'px'
						   	 });	
					   	 
				  	   });
				  	   
				  });
				  $(".xiaofangtu").mouseout(function(){
				   	  $(".xiaofang").css("visibility","hidden");
				  	   $(".dafang").css("visibility","hidden");
				  });
				  
					    
				//---------------------------渲染出来商品数据-----------------------------------------------------
				var Title=document.querySelector('.biaoti .da-biao');
				var Price=document.querySelector('.jiage .ziti3');
				var Delprice=document.querySelector('.jia-left del');
				  //------------给渲染出来 获取使用 Li做准备的------------------------------
				 var Ul=document.querySelector('.suolue-ul');
			     var Li=document.querySelectorAll('.suolue-ul li');
			      var zuojiantou=document.querySelector('.jiantouzuo p');
				  var youjiantou=document.querySelector('.jiantouyou p');
			      var leftbtn=document.querySelector('.jiantouzuo');
				  var rightbtn=document.querySelector('.jiantouyou');
				
				
				$.ajax({
					type:"POST",
					url:"http://127.0.0.1/11HuqQiangBeishangcheng/php/details.php",
					data:"sid="+Sid,
					success:function(ms){
						var $result2= $.parseJSON(ms);
						console.log($result2);
						$(".xiaofangtu img").attr('src',$result2.url);
						$(".dafang .dafangtu").attr('src',$result2.url);
						$(".biaoti .da-biao").html($result2.title);
						$(".jiage .ziti3").html($result2.price);
						$(".jia-left del").html($result2.delprice);
						var URLs=$result2.urls;
						var URLarray=(URLs||"").split(',');
						//console.log('kkk'+URLs.split(','));测试
						//console.log("nihao"+URLarray.length);测试，存长度给下面的li滚动数量判断
						var $Li=URLarray.length;//存长度给下面的缩略图li数量判断
						var suolueLi='';
						$.each(URLarray,function(i,element){
							suolueLi+=`
						        			<li>
						        			<img src="${element}"/> 
						        			</li>	        			
						        			`;	
						});
						$(".suolue-ul").html(suolueLi);												
			        	//缩略图 刚开始是放在数据渲染外面的 然后没有连数据正常的，连上数据就错，然后console.log 
			        	//一步一步的测试，发现，把这些元素获取放在外面是先执行的，而数据渲染是后执行的，所以放外面，先执行了获取，
			        	//后执行渲染，获取不到渲染出来的 li  ,所以测试到 数据渲染的地方可以获取到li 即程序中的 Li2=Ul.children;后面迎刃而解。
						  //-------------------缩略图------------------------------------------------------
					 	  
					     //------------滑过缩略图 放大镜换成对应图。-----------------------
					    
					     $(".suolue-ul li").mouseover(function(){
					         
					     	var url2=$(this).find('img').attr('src');
					     	//console.log('999'+url2);测试
					     	$(".xiaofangtu img").attr('src',url2);
				            $(".dafang .dafangtu").attr('src',url2);
					     	$(this).css("border","2px solid #e10808");
					     	$(this).find('img').css({
					     		width:60+'px',
					     		height:60+'px'
					     	});
					     	$(this).siblings('li').css("border","2px solid #e1e1e1");
					     	$(this).siblings('li').find('img').css({
					     		width:58+'px',
					     		height:58+'px'
					     	})
					     });
						//--------------判断缩略图个数 大于4 。ul left=0;则右箭头工作，如果left=-xx 左箭头工作，介于之间，都工作 --------
								  var xx=0;//xx待会给ul 当 left 用
								  if($Li>4){
									  	$(".jiantouyou p").css("color","red");
									  	$(".jiantouzuo p").css("color","gray");
								  }else{
									  	$(".jiantouyou p").css({
									  		color:"gray",
									  		cursor:"not-allowed"
									  	});									  
									  	$(".jiantouzuo p").css({
									  		color:"gray",
									  		cursor:"not-allowed"
									  	});
									  	 $(".jiantouzuo").click(function(){
									  	 	return null;
									  	 });
									  	 $(".jiantouyou").click(function(){
									  	 	return null;
									  	 });
								  }
								 //-------右箭头----xx相当于Ul 的左偏移 left----------
								 $(".jiantouyou").click(function(){
										  	if($Li>4){
										  		if(xx==-($(".suolue-ul li").width()+8)*($Li-4)){
										  			xx=-($(".suolue-ul li").width()+8)*($Li-4);										  			
										  			$(".jiantouyou p").css({
												  		color:"gray",
												  		cursor:"not-allowed"
												  	}); 
										  	        $(".jiantouzuo p").css({
												  		color:"red",
												  		cursor:"pointer"
												  	});
										  	        console.log(xx);//测试
										  		}else{
										  			$(".jiantouyou p").css({
												  		color:"red",
												  		cursor:"pointer"
												  	});
										  			$(".jiantouzuo p").css({
												  		color:"red",
												  		cursor:"pointer"
												  	});
										  			xx-=($(".suolue-ul li").width()+8);	
										  			console.log(xx);//测试
										  		}		  									    										   	
										    $(".suolue-ul").animate({
										    	left:xx+'px'
										    });
										    //如果xx经过上述过程 值没有改变 则 不运动，，或者继续运动到 left:0;
										    //如果上面的过程 xx发生了改变，则运动到目标值  也是left:xx
										    //运动执行完，要再判断一下 左右 是否能点击 
									        if(xx==-($(".suolue-ul li").width()+8)*($Li-4)){
										  			xx=-($(".suolue-ul li").width()+8)*($Li-4);
										  			$(".jiantouyou p").css({
												  		color:"gray",
												  		cursor:"not-allowed"
												  	});
										  	        $(".jiantouzuo p").css({
												  		color:"red",
												  		cursor:"pointer"
												  	});
									  		}
									    }
								  });
								//-------左箭头-----
								  $(".jiantouzuo").click(function(){
										  	if($Li>4){
											  	    if(xx==0){
											  			xx=0;
											  	        $(".jiantouzuo p").css({
													  		color:"gray",
													  		cursor:"not-allowed"
													  	});
											  	        $(".jiantouyou p").css({
													  		color:"red",
													  		cursor:"pointer"
													  	});
											  	        console.log(xx);
											  		}else{
											  			$(".jiantouzuo p").css({
													  		color:"red",
													  		cursor:"pointer"
													  	});
											  			$(".jiantouyou p").css({
													  		color:"red",
													  		cursor:"pointer"
													  	});
											  			xx+=($(".suolue-ul li").width()+8);
											  			console.log(xx);
											  		}
									  	        $(".suolue-ul").animate({
											    	left:xx+'px'
											    });
									  	        if(xx==0){
										  			xx=0;
										  	        $(".jiantouzuo p").css({
														  		color:"gray",
														  		cursor:"not-allowed"
													});
										  	        $(".jiantouyou p").css({
												  		color:"red",
												  		cursor:"pointer"
												  	});
										  		}
								  	       }
								  });
								  					      				        	    						
					}					
			});
											     				      	        
				        //点击 加减号  让sid 对应的商品选购数量存到cookie中。然后购物车取cookie .cookie存在说明购物车有商品，
				       // 然后请求数据库,渲染出来这个商品				       
				       var arrsid=[];  //一串的商品存到一条cookie中 以字符串的形式  所以给取到，通过索引一一获取。
				       var arrnum=[];
				       function cookietoarray(){
				       	  if($.cookie('cookiesid') && $.cookie('cookienum')){
						       	  arrsid=$.cookie('cookiesid').split(',');
						       	  arrnum=$.cookie('cookienum').split(',');
						       	  var num1=0;
						       	  /*for(var i=0;i<arrnum.length;i++){
						       	  	num1+=parseInt(arrnum[i]);
						       	  }*/
						       	 $.each(arrnum,function(i,element){
						       	  	num1+=parseInt(element);
						       	  });
						       	 $(".Gouwu .cart_num").css("background","green").html(num1);
						       	  $("#rightbar").find(".fast-cart").find(".cart-num").css("background","green").html(num1);		       
				           }
				       }
				       cookietoarray();
				       //---------------------点击加减号，改变眼前数量，不改变cookie----------------------
				       //--jia--
					       $(".liang").find(".jia").click(function(){
					       	var ss=parseInt($('.liang .jiajian').val())+1;
					       	 $(".liang").find(".jiajian").val(ss);
					       });
				       //--jian--
					       $(".liang").find(".jian").click(function(){
						       	if($('.liang .jiajian').val()>0){
						       		var ss=parseInt($('.liang .jiajian').val())-1;
						       	        $(".liang").find(".jiajian").val(ss);
						       	}else{
						       		alert("不能再减了")
						       	}		       	
					       });
					   //--------------加入购物车用的抛物线需要跟着scrolltop变动-----------------------------
					   var $paowu=-285+'px';
					    $(window).scroll(function(){
					       var $paowutop=$(window).scrollTop();
					        console.log("paowu"+$paowutop);	
					        $paowu=$paowutop-285+'px';
					        console.log($paowu);
					   });
				      //----------------加入购物车------------------------ 
				       $('.gouwuche .add-cart').click(function(){	       	     
				       	     if($('.gouwuche .liang .jiajian').val()==0){
				       	     	alert('商品数量不能为空！');
				       	     }else{	 
				       	     	//
				       	     	var $clonetu=$(".suolue .suolue-ul li").clone(true,true);
				       	     	  $clonetu.css({
					       	     	  	width:"58px",
					       	     	  	height:"58px",
					       	     	  	"border-radius":"50%",
					       	     	  	position:"absolute",
					       	     	  	left:0,
					       	     	  	top:0,
					       	     	  	background:"red"
				       	     	  });
				       	     	  $clonetu.children('img').css("width","58px");
				       	     	  $clonetu.appendTo('.add-cart');
				       	     	  $clonetu
					       	     	  .animate({
					       	     	  	top:"15px"
					       	     	    })
					       	     	  .animate({
					       	     	  	left:"780px",
								         top:$paowu,
								          opacity:0
					       	     	  });
				       	     	cookietoarray();
				       	     	if($.inArray(Sid,arrsid)!=-1){  //如果存在  则 sid不变  对应的商品数量增加
				       	     		var num=parseInt(arrnum[$.inArray(Sid,arrsid)])+parseInt($('.gouwuche .liang .jiajian').val());
				       	     		arrnum[$.inArray(Sid,arrsid)]=num;
				       	     		
				       	     		$.cookie('cookienum', arrnum.toString(), 10);
				       	     		cookietoarray();
				       	     	}else{
				       	     		arrsid.push($Sid);
				       	     		arrnum.push($('.gouwuche .liang .jiajian').val());
				       	     		addcookie('cookiesid',arrsid.toString(),10);
				       	     		//$.cookie('cookiesid', arrsid.toString(), 10);
				       	     		addcookie('cookienum',arrnum.toString(),10);
				       	     		//$.cookie('cookienum', arrnum.toString(),10);
				       	     		
				       	     		cookietoarray();
				       	     		
				       	     	}
				       	     	
				       	     }
				       });
				       								
			}()
	}
});




