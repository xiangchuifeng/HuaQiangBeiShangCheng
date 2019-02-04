function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
function bufferMove(obj,json,fn){
	var speed=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bstop=true;
		for(var attr in json){
			var currentvalue=0;
			if(attr=='opacity'){
				currentvalue=Math.round(getStyle(obj,attr)*100);
			}else{
				currentvalue=parseInt(getStyle(obj,attr));
			}
			speed=(json[attr]-currentvalue)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(currentvalue!=json[attr]){
				if(attr=='opacity'){
					obj.style.opacity=(currentvalue+speed)/100; 
					obj.style.filter='alpha(opacity='+(currentvalue+speed)+')';
				}else{
					obj.style[attr]=currentvalue+speed+'px';
				}
				bstop=false;
			}
		}
		if(bstop){
			clearInterval(obj.timer);
			fn&&fn();
		}
	},10);
}