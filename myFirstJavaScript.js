
/**************************AFFICHAGE DE LA DATE*******************************/
/*****************************************************************************/

function displayDate() {
	var d = new Date();
	var day = "Sunday";
	switch (d.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
	var month = "January";
	switch (d.getMonth()) {
    case 0:
        month = "January";
        break;
	case 1:
        month = "Febuary";
        break;
    case 2:
        month = "March";
        break;
	case 3:
        month = "April";
        break;
	case 4:
        month = "May";
        break;
	case 5:
        month = "June";
        break;
	case 6:
        month = "July";
        break;
	case 7:
        month = "August";
        break;
	case 8:
        month = "September";
        break;
	case 9:
        month = "October";
        break;
	case 10:
        month = "November";
        break;
	case 11:
        month = "December";
        break;
	}
	
    curentTime = document.getElementById("time");
	curentTime.innerHTML = day  + d.getDate() + month + d.getFullYear()
	+ "<br> <br>" + d.getHours() + "H " + d.getMinutes() + "min " +
	d.getSeconds() + "sec";
	
	/*
	
	document.getElementById("time").style.color = "red";
	document.getElementById("time").style.text-align = "center";
	document.getElementById("time").style.font-size = "200%";            */
}


function hideDate() {
    document.getElementById("time").innerHTML =
	"Faites passer le curseur ici pour faire apparaitre la date et l'heure";
}


/*  			function navigbar(x) {
					if (document.body.scrollTop > 225){
						x.style.position = "fixed";
						x.style.top = "0";
					}
	
				}

				window.onscroll = function() {navigbar(bar)};	   */


/* *************AFFICHAGE DU FORMULAIRE DE CONNECTION A UN COMPTE ************/
/* ***************************************************************************/
				
function afficher(x){
	var x= document.getElementById("box");
	x.style.display="block";
}

/*  			function cacher(x){
					var x= document.getElementById("box");
					x.style.display="none";
				}

				document.getElementById("box").onmouseleave = cacher();     */
	

/* ************* METTRE CERTAINES ENTREES EN MAJUSCULE ***********************/
/* ***************************************************************************/


function majusCule(formField) {
    var x = document.getElementById("formField.id");
    x.value = x.value.toUpperCase();
}



/* ************* VALIDATION DU FORMULAIRE DE CREATION D'UN COMPTE ************/
/* ***************************************************************************/


function nameLength(formField)  { // Vérification des longueurs des noms et des prénoms
	var message, nom, longueur;
	message = document.getElementById("message3");
	message.innerHTML = "";
	nom = document.getElementById("formField.id").value;
	longueur = nom.length;
	try {
		if(longueur < 2) throw "Ce champs requiert au moins 2 charactères";
	}
	catch(err) {
		message.innerHTML= err;
	}
}

function motDePasse()  {  //verification de la longueur des mots de passe
	var message, myPass, longueur;
	message = document.getElementById("message3");
	message.innerHTML = "";
	myPass = document.getElementById("myPass").value;
	longueur = myPass.length;
	try {
		if(l < 6) throw "Le mot de pass doit avoir au moins 6 charactères";
	}
	catch(err) {
		message.innerHTML= err;
	}
}

function passMatche()  {   // On vérifie si les mots de passe sont égaux
	var message, myPass, myPassAgain;
	message = document.getElementById("message2");
	message.innerHTML = "";
	myPass = document.getElementById("myPass").value;
	myPassAgain = document.getElementById("myPassAgain").value;
	try {
		if(myPass != myPassAgain) throw "Les mots de passe sont différents";
	}
	catch(err) {
		message.innerHTML= err;
	}
}


/* ************* VALIDATION DU FORMULAIRE DE CREATION D'UN COMPTE ************/
/* ***************************************************************************/

function validateForm()