
"use strict";

/* *************************AFFICHAGE DE LA DATE*******************************/
/* ****************************************************************************/

function displayDate(){
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
	var tuto = document.getElementById("tuto")

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
	else if (page.id === "tutoriel") {
		tuto.style.backgroundColor = "green";
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


/**
function formatEmail(formField) {  // Validation de l'email.
	var email, emailError, champ;
	emailError = document.getElementById("message_email");
	champ = document.getElementById(formField.id);
	email = champ.value;
}
 */


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
			champ.style.backgroundColor= "#efc2c2";

			nameError.innerHTML = "Ce champs requiert au moins 2 charactères.";
		}else if (longueur > 12){
			champ.style.borderColor= "red";
			champ.style.backgroundColor= "#efc2c2";
			nameError.innerHTML = "Veuillez entrer un nom de moins de 12 charactères.";
        }else {
			champ.style.borderColor= "lightgray";
			champ.style.backgroundColor= "";
			nameError.innerHTML = "";
		}
    }

    if (formField.id == "fname2") {
        if (longueur < 3 ) {
			champ.style.borderColor= "red";
			champ.style.backgroundColor= "#efc2c2";
			firstNameError.innerHTML = "Le prénom requiert au moins 3 charactères.";
		}else if (longueur > 12){
			champ.style.borderColor= "red";
			champ.style.backgroundColor= "#efc2c2";
			firstNameError.innerHTML = "Veuillez entrer un prénom de moins de 12 charactères.";
        }else {
			champ.style.borderColor= "lightgray";
			champ.style.backgroundColor= "";
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
		champ.style.backgroundColor= "#efc2c2";
		message.innerHTML = " Le mot de passe requiert au moins 6 charactères.";
	}else {
		champ.style.borderColor= "lightgray";
		champ.style.backgroundColor= "";
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
		champ.style.backgroundColor= "#efc2c2";
	}
	else {
		message.innerHTML="";
		champ.style.borderColor = "lightgray";
		champ.style.backgroundColor= "";
	}
}
function ageVerification()  {
	var today = new Date(), message, champ, anneeDeNaissance, annee, age;
	message = document.getElementById("message_age");
	champ = document.getElementById("bday");
	anneeDeNaissance = champ.value;
	anneeDeNaissance = Number(anneeDeNaissance);
	annee = today.getFullYear();

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

function jrEtMois () {
	var mois, jour, messageJR, messageMois, jrPermi, moisPermi, jrValide, moisValide, anneeDeNaissance, champ;
	champ = document.getElementById("bday");
	anneeDeNaissance = champ.value;
	jour= document.getElementById("jr").value;
	jour= Number(jour);
	mois= document.getElementById("mois").value;
	mois= Number(mois);
	messageJR = document.getElementById("message_jr");
	messageMois = document.getElementById("message_mois");
	jrPermi = true;
	if ( jour < 1 || jour > 31 ){
		jrPermi = false;
		messageJR.innerHTML = "Le jour de naissance doit être > ou = à 1 et < ou = à 31";
		document.getElementById("jr").style.borderColor = "red";
	}else {
		messageJR.innerHTML="";
		document.getElementById("jr").style.borderColor = "lightgray";
	}
	if ( mois < 1 || mois > 12 ){
		moisPermi = false;
		messageMois.innerHTML = "Le mois de naissance doit être > ou = à 1 et < ou = à 12";
		document.getElementById("mois").style.borderColor = "red";
	}else {
		messageMois.innerHTML="";
		document.getElementById("mois").style.borderColor = "lightgray";
	}

	if (jrPermi){

			jrValide = true;
			if ((mois === 4 || mois === 6 || mois === 9 || mois === 11) && (jour>30)) {
				jrValide = false;
				messageJR.innerHTML = "Ce jour est incompatible avec le mois.";
				document.getElementById("jr").style.borderColor = "red";
			} else if (mois = 2 && jour > 29) {
				jrPermi = false;
				messageJR.innerHTML = "Pour le mois de février, le jour est < ou = à 29";
				document.getElementById("jr").style.borderColor = "red";
			}
			else if ( (anneeDeNaissance%4 > 0) && (mois == 2) && (jour > 28)) {
				jrValide = false;
				messageJR.innerHTML = "L'année de naissance n'est pas bissectile";
				document.getElementById("jr").style.borderColor = "red";
			}else {
				messageJR.innerHTML="";
				document.getElementById("jr").style.borderColor = "lightgray";
			}
	}
}

/* ******************************* LES EVENEMENTS ****************************/
/* ***************************************************************************/

//Cette fonction utilise window.onload et addEventListener('DOMContentLoaded' ... pour s'assurer que la page est prete, avant de commencer a executer les fonctions
function documentReady(func){
	var last = window.onload;
	var isReady = false;
	//for cross browser support
	document.addEventListener('DOMContentLoaded', function(){
		console.log("All DOM resources finished loading");
		isReady = true;
		func();
	})

	window.onload = function(){
		//if another script was calling onload, let's run it
		if(last) last();
		//then run our function;
		if(isReady) func();
	}
}


documentReady(function(){
	modifierImage();
	w3.includeHTML();

	setTimeout(function(){
		surbriance();
		//document.getElementById("compte1").onclick = function(){afficher()};
		//document.getElementById("compte2").onclick = function(){afficher()};
		//document.getElementById("box").addEventListener("onmouseleave", function(){cacher()});
		showAndHide('account', 'box');
		selectPage("miniature");
	},100);
});

//cette fonction cache ou affiche une autre zone quand on clique sur un lien.
//la classe du lien a cliquer est le premier parametre de la fonction, et l'id de la zonne a affichee est le deuxieme parametre
function showAndHide(linkClass, areaId) {
	//le lien qu'on va cliquer pour afficher la zonne cachee (Le formulaire de login)
	//tous les liens on la meme classe
	var links  = document.getElementsByClassName(linkClass);
	for(var i=0; i<links.length; i++) {
		links[i].addEventListener('click', function(e){
			//chaque foi qu'un lien est clique, on pass l'element en question a une autre fonction pour afficher ou cacher la zone cachee
			showOrHide(this, areaId);
		});

	}

}


//cette fonction recoit en paramettre un element sur lequel on a clique, et affiche une zone, .
//Si on clique hors de la zone affichee, elle disparait, mais la zone reste visible tant qu'on clique dessus.
function showOrHide(elmt, areaId){

	//on selectionne la zone qu'on souhaite affichee, et on affiche
	var area= document.getElementById(areaId);
	area.style.display="block";

	//toute la page ecoute le click.
	document.addEventListener('click', function(e){
		//la zonne sible est cliquee, si son id est dans l'espace du click.
		var isAreaClicked = area.contains(e.target);
		console.log("The id is ",e.target.id);
		var t = e.target.id
		if (t == elmt.id) {
			//si le click est sur le lien, la zone a affichee reste visible
			area.style.display = "block";
			//return false;
		} else {
			//sinon, si la zonne sible n'est pas cliquee, on fait disparaitre
			if(!isAreaClicked){
				console.log("The area is not clicked");
				area.style.display = "none";
			}
		}
	});

}

function selectPage(imgClass) {
	var pages  = document.getElementsByClassName(imgClass);
	for(var i=0; i<pages.length; i++) {
		pages[i].addEventListener('click', function(){
			showPage(this);
		});
	}
}

function showPage(elt) {
	var contenu = document.getElementById(elt.id).src;
	var image= document.getElementById("currentPage").src;
	image = contenu;
}



//document.getElementsByTagName("BODY").addEventListener("load", function(){modifierImage(); surbriance();});

//document.getElementById("compte").addEventListener("click", function(){afficher()});


