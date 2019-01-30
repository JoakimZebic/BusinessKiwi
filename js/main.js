function mc(){
	var bod=document.querySelector("body");
	var block=document.querySelector("#aa");
	var pop= document.querySelector("#bb");
	var x=document.querySelector(".MenuBtn");
	console.log(x.getAttribute("class"));

	function menuTimer(i,ime){
		setTimeout(function(){document.querySelector(ime).setAttribute("style","transform:translateX(0%); transition:0.5s ease; opacity:1;")},350*i);
	}

	if(x.getAttribute("class")=="MenuBtn"){
		x.classList.add("active");
		pop.setAttribute("style", "left:75px");
		block.setAttribute("style","display:block; left:75px");
		bod.setAttribute("style","overflow-y: hidden");

		for(var i=1; i<=5; i++){ // Radilo bi bez funkcije ako bih koristio LET za i i za ime umesto VAR
			var ime= "#mi" + i;
			menuTimer(i,ime);
		}
	}
	else{
		x.classList.remove("active")
		pop.setAttribute("style", "left:-400px;");
		block.setAttribute("style","display:none; left:-100vw");
		bod.setAttribute("style","overflow-y: scroll");

		for(var i=1; i<=5; i++){
			var ime="#mi" + i;
			document.querySelector(ime).setAttribute("style","transform:translateX(-100%); opacity:0;");
		}
	}
}