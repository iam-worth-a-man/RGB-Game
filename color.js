var colors= [];

for(var i=0;i<6;i++){
	colors[i]=rand();
}

var sqr=document.querySelectorAll(".all");
var topp=document.getElementById("he");
var h1=document.querySelector("h1");
var str=document.getElementById("str");
var reset=document.getElementById("reset");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");

	for(var i=0;i<3;i++){
	colors[i]=rand();
	sqr[i].style.background=colors[i];
	sahi=colors[Math.floor(Math.random()*3)];
	ans.textContent=sahi;
	h1.style.background="steelblue";
	reset.textContent="New colors";
	}

	for(var i=3;i<6;i++){
	sqr[i].style.background="#232323";
	}
});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");

	for(var i=0;i<6;i++){
	colors[i]=rand();
	sqr[i].style.background=colors[i];
	sahi=colors[Math.floor(Math.random()*6)];
	ans.textContent=sahi;
	h1.style.background="steelblue";
	reset.textContent="New colors";
	}
});

reset.addEventListener("click", function(){
	for(var i=0;i<6;i++){
	colors[i]=rand();
	sqr[i].style.background=colors[i];
	sahi=colors[Math.floor(Math.random()*6)];
	ans.textContent=sahi;
	h1.style.background="steelblue";
	reset.textContent="New colors";
	topp.textContent="";
	}
});

for (var i = 0; i < sqr.length; i++) {
		sqr[i].style.background=colors[i];

		sqr[i].addEventListener("click", function () {
			var corr=this.style.background;
			
		if(corr===sahi){
			for(var j=0;j<sqr.length;j++){
				sqr[j].style.background=sahi;
			}
			topp.textContent="Correct";
			h1.style.background=sahi;
			reset.textContent="Play Again";
		}
		else{
			this.style.backgroundColor= "#232323";
			topp.textContent="Try Again";
		}
});

	}	

var sahi=colors[Math.floor(Math.random()*6)];
var ans=document.getElementById('ans');
ans.textContent=sahi;



function rand(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")"
}