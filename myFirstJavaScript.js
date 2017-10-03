function displayDate() {
    document.getElementById("time").innerHTML = Date();
}

function hideDate() {
    document.getElementById("time").innerHTML = "Faites passer le curseur ici pour faire apparaitre la date et l'heure";
}


function navigbar(x) {
	if (document.body.scrollTop > 225){
		x.style.position = "fixed";
		x.style.top = "0";
	}
	
}

window.onscroll = function() {navigbar(bar)};	
	
function afficher(x){
	var x= document.getElementById("box");
	x.style.display="block";
}

/*  function cacher(x){
		var x= document.getElementById("box");
		x.style.display="none";
	}

	document.getElementById("box").onmouseleave = cacher();     */
	
	