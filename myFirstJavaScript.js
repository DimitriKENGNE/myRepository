
"use strict";

/* *************************AFFICHAGE DE LA DATE*******************************/
/* ****************************************************************************/

function displayDate() {
	var d = new Date(), day = "Sunday", month = "January", curentTime;
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



/* *************ANIMATION DE L'ENTETE ****************************************/
/* ***************************************************************************/

function modifierImage () {
	var imgs = ["url(salon.jpg)", "url(arrierePlan.jpg)", "url(codage.jpg)", "url(codeur.jpg)", "url(ordinateur.jpg)" ];
	var i = 0;
	var myVar = setInterval(function(){
		afficherImage(imgs[i]);
		i++;
		if (i == 5) {
			i = 0;
		}
		console.log(imgs[i]);
	},10000);

}

function afficherImage(x) {
	var y = document.getElementById("entete");
	y.style.backgroundImage = x;
}


/*

function changerImage() {
	setTimeout(firstImage, 2000)
	setTimeout(secondImage, 4000)
	setTimeout(thirdImage, 6000)
	setTimeout(fourthImage, 8000)
	setTimeout(fifthImage, 10000)
}

}
function secondImage() {
	var y = document.getElementById("entete");
	y.style.backgroundImage = "url(arrierePlan.jpg)";
}
function thirdImage() {
	var y = document.getElementById("entete");
	y.style.backgroundImage = "url(codage.jpg)";
}
function fourthImage() {
	var y = document.getElementById("entete");
	y.style.backgroundImage = "url(codeur.jpg)";
}
function fifthImage() {
	var y = document.getElementById("entete");
	y.style.backgroundImage = "url(ordinateur.jpg)";
}

*/

function surbriance() {
	var page = document.getElementsByTagName("DIV")[0];
	var accueil = document.getElementById("accueil");
	var present = document.getElementById("presentationUniv");
	var	preinscript = document.getElementById("preinscriptionEtudiant");
	var	advice = document.getElementById("conseilsOrientation");
	var	inscript = document.getElementById("inscriptionEtudiant");
	var	student = document.getElementById("compteEtudiant");
	var	lecturer = document.getElementById("compteEnseignant");

	if (page.id === "index") {
		accueil.style.backgroundColor = "green";
	}
	else if (page.id === "presentation") {
		present.style.backgroundColor = "green";
	}
	else if (page.id === "preinscription") {
		preinscript.style.backgroundColor = "green";
	}
	else if (page.id === "conseils") {
		advice.style.backgroundColor = "green";
	}
	else if (page.id === "inscription") {
		inscript.style.backgroundColor = "green";
	}
	else if (page.id === "etudiant") {
		student.style.backgroundColor = "green";
	}
	else if (page.id === "enseignant") {
			lecturer.style.backgroundColor = "green";
	}
	console.log(page.id);
	console.log(accueil);
}


/* *************AFFICHAGE DU FORMULAIRE DE CONNECTION A UN COMPTE ************/
/* ***************************************************************************/

function afficher(){
	var x= document.getElementById("box");
	x.style.display="block";
}
function cacher(){
	var x= document.getElementById("box");
	x.style.display="none";
}


/* ************* METTRE CERTAINES ENTREES EN MAJUSCULE ***********************/
/* ***************************************************************************/


function majusCule(formField) {
	var x = document.getElementById(formField.id);
	x.value = x.value.toUpperCase();
}



/* ************* VALIDATION DU FORMULAIRE DE CREATION D'UN COMPTE ************/
/* ***************************************************************************/



function nameLength(formField) { // Vérification des longueurs des noms et des prénoms
    var nom, longueur,champ,nameError, firstNameError;
    nameError = document.getElementById("message_nom");
    firstNameError = document.getElementById("message_prenom");
    champ = document.getElementById(formField.id);
    nom = champ.value;
	longueur = nom.length;

    if (formField.id == "fname1") {
        if (longueur < 2) {
			champ.style.borderColor= "red";
			nameError.innerHTML = "Ce champs requiert au moins 2 charactères.";
		}else if (longueur > 12){
			champ.style.borderColor= "red";
			nameError.innerHTML = "Veuillez entrer un nom de moins de 12 charactères.";
        }else {
			champ.style.borderColor= "lightgray";
			nameError.innerHTML = "";
		}
    }

    if (formField.id == "fname2") {
        if (longueur < 3 ) {
			champ.style.borderColor= "red";
			firstNameError.innerHTML = "Le prénom requiert au moins 3 charactères.";
		}else if (longueur > 12){
			champ.style.borderColor= "red";
			firstNameError.innerHTML = "Veuillez entrer un prénom de moins de 12 charactères.";
        }else {
			champ.style.borderColor= "lightgray";
			firstNameError.innerHTML = "";
		}
    }

}

function motDePasse()  {  //verification de la longueur des mots de passe
	var message, myPass, longueur, champ;
	message = document.getElementById("message_motDePasse");
	champ = document.getElementById("myPass");
	myPass = champ.value;
	longueur = myPass.length;
	if(longueur < 6) {
		champ.style.borderColor = "red";
		message.innerHTML = " Le mot de passe requiert au moins 6 charactères.";
	}else {
		champ.style.borderColor= "lightgray";
		message.innerHTML = "";
	}
}

function passMatche()  {   // On vérifie si les mots de passe sont égaux
	var message, myPass, myPassAgain, champ;
	message = document.getElementById("message_comparaison");
	myPass = document.getElementById("myPass").value;
	champ = document.getElementById("myPassAgain");
	myPassAgain = champ.value;
	if(myPass != myPassAgain) {
		message.innerHTML="Les mots de passe sont différents.";
		champ.style.borderColor = "red";
	}
}
function ageVerification()  {
	var today = new Date(), message, champ, dateDeNaissance, anneeDeNaissance, annee, age;
	message = document.getElementById("message_age");
	champ = document.getElementById("bday");
	dateDeNaissance = champ.value;
	anneeDeNaissance = dateDeNaissance.slice(0,4);
	anneeDeNaissance = Number(anneeDeNaissance);
	annee = today.getFullYear();
	
	console.log(dateDeNaissance);
    console.log(annee);
    console.log(anneeDeNaissance);
	
	
	age = annee - anneeDeNaissance;
	console.log(age);
	if ( age < 15 || age > 35 ) {
		message.innerHTML="Veuillez vérifier votre année de naissance.";
		champ.style.borderColor = "red";
	}else {
		message.innerHTML="";
		champ.style.borderColor = "lightgray";
	}
}

/* ************* VALIDATION DU FORMULAIRE DE CREATION D'UN COMPTE ************/
/* ***************************************************************************/

//function validateForm()