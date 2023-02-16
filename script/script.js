var a=0, b=0, c=-956;
	
q1.onclick=function(){
	if(a != 1){
		pan.style.top="-632px";
		a=1;
		document.getElementById('a2').textContent = 'НАЗАД';
	}else{
		pan.style.top="0px";
		a=0;
		document.getElementById('a2').textContent = 'МЕНЮ';
	}console.log(a);
}
fn=function(){
	if(b == 0){
		sdvig.style.top="0px";
	}else if(b == 1){
		sdvig.style.top=+c+"px";
	}else if(b == 2){
		sdvig.style.top=+c*2+"px";
	}else if(b == 3){
		sdvig.style.top=+c*3+"px";
	}else if(b == 4){
		sdvig.style.top=+c*4+"px";
	}else if(b == 5){
		sdvig.style.top=+c*5+"px";
	}
}
k1.onclick=function(){
	b=0;
	fn();
}
k2.onclick=function(){
	b=1;
	fn();
}
k3.onclick=function(){
	b=2;
	fn();
}
k4.onclick=function(){
	b=3;
	fn();
}
k5.onclick=function(){
	b=4;
	fn();
}
k6.onclick=function(){
	b=5;
	fn();
}