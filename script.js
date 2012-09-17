window.onload=function(){
	var slideshow = document.getElementById("bg");
	var bgimages = ["image/bg/1.jpg","image/bg/2.jpg","image/bg/3.jpg","image/bg/4.jpg","image/bg/5.jpg","image/bg/6.jpg"];
	var	lists = document.getElementById("key").getElementsByTagName('li');
	var	currentSlide = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////	
	var pathToImg=new Array();
	for (i=0;i<bgimages.length;i++) {
		pathToImg[i]=new Image();
		pathToImg[i].src=bgimages[i];
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////
	(go2slide = function (n) {
		if(n>lists.length-1) n=0;
		if(n<0) n=lists.length-1;
		slideshow.style.backgroundImage="url("+pathToImg[n].src+")";
		currentSlide=n;
	})(0);


	nextSlide = function(){
		go2slide(currentSlide+1);
	}

	prvSlide = function(){
		go2slide(currentSlide-1);
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////
	var autoPlayIv = false;
	(autoPlayStart = document.getElementById("play").onclick = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide, 5000);
	})(); // run auto play

	autoPlayStop = document.getElementById("stop").onclick = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////
	document.getElementById("nex").onclick = nextSlide;
	document.getElementById("bac").onclick = prvSlide;
///////////////////////////////////////////////////////////////////////////////////////////////////////
	for (var i=0; i<lists.length; i++) {
		(function(j){
			lists.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}
}
