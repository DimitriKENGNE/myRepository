<php? echo "PHP is running" ?>

<!DOCTYPE html>
<html>
<head>
<title> Bienvenue � l'universit� DIMitri Ier</title>
<meta charset="UTF-8">
<!--   <meta name="viewport" content="width=device-width, initial-scale=1">    -->
<link rel="stylesheet" type="text/css" href="mon1erStyle.css">

<script src="w3.js"></script>
</head>
<body>

<div id="index" class="contenu">
	<header id="entete" >
		<div>
			<h1>Universit� DIMitri I<sup>er</sup></h1>
		</div>
	</header>

	<!-- <div w3-include-html = "navbar.html" class="navig"></div> -->
    <?php require "navbar.php" ?>

	<nav >

		<section class="hide">
			<img src="PHOTO.jpg" alt="Apprendre"><br>
			Le promoteur
		</section><br>

		<section>
			<p id="p01">Sur cette page, vous trouverez:</p>
			<a href="#C1">Pr�sentation G�n�rale</a><br>
			<a href="#C2">Historique</a><br>
			<a href="#C3">Les facult�s</a><br>
			<a href="#C4">Nos grandes �coles</a><br>
		</section>
		<br>

		<section class="borderimg">
			<p class="p01"> Quelques sites int�ressants </p>
	<span class="tooltip">
		w3schools_HTML
		<span class="tooltiptext">
			Excelent pour apprendre le HTML
		</span>
	</span><br><br>

	<span class="tooltip">
		w3schools_HTML
		<span class="tooltiptext">
			Excelent pour apprendre le HTML
		</span>
	</span>
		</section>

	</nav>
	<aside>

		<div class="bottom_space">
			<div class="sujet">
				<h3>LES CONCOURS<h3>
			</div>

		</div><br>
		<div>
			<div class="sujet">
				<h3>A la Une</h3>
			</div>
			<div class="defilement">

				<p>L'universit� DIMitri Ier est une de mes imaginations pour m'exercer � la cr�ation d'un site WEB. En effet je fais mes premiers dans la conception de site WEB et je ne suis actuellement qu'� l'�tape du HTML.
Pour m'exercer je saisi mon code � partir du site de w3schools. Lorsque le code est bon, je le copie dans NOTEPAD++ et je le sauve dans mon repertory.
					Vous pouver acceder au site de w3schools en cliquant sur cette icone: W3Schools.com
				<p>Un autre site qui me permet de bien m'entrainer est celui de la prestigieuse �cole en ligne Open ClassRoom.

				<p>Le texte ci-dessouss est un extrai de cours tir� du site de OpenClassRoom.

				<p>Vous �crivez un peu de code et souhaitez collaborer avec d'autres d�veloppeurs ? Vous voulez toujours savoir pourquoi une modification a �t� faite et ne plus risquer de perdre des jours de travail ? Vous avez clairement besoin de versionner votre code !
				<p>Nos �tudiants en at�lier d'apprentissage


<p>L'universit� DIMitri Ier c'est:

				<p>Un cadre id�al pour les �tudes
<p>Des enseignegnements sp�cialisants
<p>Des partenariats avec les plus grande Universit�s d'Europe et du Canada
				<p>Une formation qualifiante
				<p>Un emploi assur�
				<p>Car comme Ren� Descartes le disait:
				<p>Ce n'est pas assez d'avoir l'esprit bon, mais le principal c'est de l'appliquer bien
<p>Historique

<p>L'universit� DIMitri Ier a �t� imagin�e le 12 ao�t 2017, lorsque le promoteur, Dimitri KENGNE, s'erxer�ait dans le html. Il se proposa alors de construire cette page Web, d'abord en Langage html uniquement, puis d'ajouter le CSS, et ensuite le JavaScript. Juste pour savoir s'il a bien compris. Il compte sur votre soutien et vos conseils pour acquerir de l'experience dans ce domaine.

				<p>Nos missions

<p>Les missions fondamentales de l'Universit� DIMitri Ier sont :
				<p>L'�laboration et la transmission des connaissances ;
				<p>Le d�veloppement de la recherche et la formation des Hommes ;
				<p>Le port au plus haut niveau et au meilleur rythme de progr�s des formes sup�rieures de la culture et de la recherche ;
				<p>La procuration de l'acc�s � la formation sup�rieure � tous ceux qui en ont la vocation et la capacit�;
				<p>Le concours � l'appui, au d�veloppement et � la promotion sociale et culturelle ;
				<p>Le d�veloppement de la pratique du bilinguisme.
				<p>Notre M�thode


<p>A l'universit� DIMitri Ier les �tudiants sont emmen�s � devenir de vrais autodidactes. Ainsi, nous leur donnons quelques �tapes pour apprendre tout seul le m�tier de leur choix. Par exemple, pour l'apprentissage en conception de site Web, un �tudiant sera dirig� vers les sites suivants:

			</div>
		</div>

		<br>


		<div>
			<div class="sujet">
				<h3>Autres Articles</h3>
			</div>
			<ul>
				<li><a href='nos_majors.html'>Les majors</a></li>
				<li>article2</li>
				<li>article3</li>
			</ul>
		</div>

		<div onmouseenter="displayDate()" onmouseleave="hideDate()">
			<div class="sujet" >Date et l'heure Actuelle</div>
			<p id="time">Faites passer le curseur ici pour faire apparaitre la date et l'heure</p>
		</div>
	</aside>

	<article>
		<h2 id="C1">Pr�sentation G�n�rale</h2>
		<hr>

		<div>
			<p title="First paragraphe of pr�sentation" >L'universit� <b style="color:blue;">DIMitri I<sup>er</sup></b> est une de mes imaginations pour m'exercer � la cr�ation d'un site WEB. En effet je  fais mes premiers dans la conception de site WEB et  je ne suis actuellement qu'� l'�tape du <a href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language">HTML</a>.
				<br>Pour m'exercer je  saisi mon code � partir du site de w3schools. Lorsque le code est bon, je le copie dans NOTEPAD++ et je le sauve dans mon repertory.
				<br>Vous pouver acceder au site de w3schools en cliquant sur cette icone: <a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"><img class="transition_img" src="w3-green-logo.png" alt="W3Schools.com" width="50px"></a>
				<br>Un autre site qui me permet de bien m'entrainer est celui de la prestigieuse �cole en ligne <i>Open ClassRoom</i>.</p>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Wxcso0hoYH1xAkD7yOPjvZJ8C0ygWxOsuP__gHzzmkqg0-ED" width="50%" heigth="150px" alt="Apprendre" style="float:left; padding:10px" >
			<p id="p01">Le texte ci-dessouss est un extrai de cours tir� du site de OpenClassRoom.</p>
			<blockquote cite="https://openclassrooms.com/courses/gerer-son-code-avec-git-et-github">
				Vous �crivez un peu de code et souhaitez collaborer avec d'autres d�veloppeurs ? Vous voulez toujours savoir pourquoi une modification a �t� faite et ne plus risquer de perdre des jours de travail ? Vous avez clairement besoin de versionner votre code !
			</blockquote>

			<p id="#p01" style="clear:left"><i>Nos <cite>�tudiants en at�lier</cite> d'apprentissage</i></p>

			<p>L'universit� <span class="color:blue;"><b>DIMitri I<sup>er</sup></b></span> c'est:
<pre style="color:green;">
Un cadre id�al pour les �tudes
Des enseignegnements sp�cialisants
Des partenariats avec les plus grande Universit�s d'Europe et du Canada
Une formation qualifiante
Un emploi assur�
</pre>
Car comme Ren� Descartes le disait:
			<br>
			<q><b>Ce n'est pas assez d'avoir l'esprit bon, mais le principal c'est de l'appliquer bien</b></q>

		</div>

		<h2 id="C2">Historique</h2>
		<hr>
		<div>
			<p>L'universit� <b style="color:blue;">DIMitri I<sup>er</sup></b> a �t� imagin�e le 12 ao�t 2017, lorsque le promoteur, Dimitri KENGNE, s'erxer�ait dans le html. Il se proposa alors de construire cette page Web, d'abord en Langage html uniquement, puis d'ajouter le CSS, et ensuite le JavaScript. Juste pour savoir s'il a bien compris. Il compte sur votre soutien et vos conseils pour acquerir de l'experience dans ce domaine.</p>
		</div>

		<h2>Nos missions</h2>
		<hr>
		<div>
			<p>Les missions fondamentales de l'Universit� <b style="color:blue;">DIMitri I<sup>er</sup></b> sont :
				<br>
			<ul style="list-style-type:circle">
				<li>L'�laboration et la transmission des connaissances ;</li>
				<li>Le d�veloppement de la recherche et la formation des Hommes ;</li>
				<li>Le port au plus haut niveau et au meilleur rythme de progr�s des formes sup�rieures de la culture et de la recherche ;</li>
				<li>La procuration de l'acc�s � la formation sup�rieure � tous ceux qui en ont la vocation et la capacit�;</li>
				<li>Le concours � l'appui, au d�veloppement et � la promotion sociale et culturelle ;</li>
				<li>Le d�veloppement de la pratique du bilinguisme.</li>
			</ul>
		</div>

		<h2 id="C2">Notre M�thode</h2>
		<hr>
		<div>
			<p>A l'universit� <b style="color:blue;">DIMitri I<sup>er</sup></b> les �tudiants sont emmen�s � devenir de vrais autodidactes. Ainsi, nous leur donnons quelques �tapes pour apprendre tout seul le m�tier de leur choix. Par exemple, pour l'apprentissage en conception de site Web, un �tudiant sera dirig� vers les sites suivants: </p>


			<iframe src="https://www.w3schools.com/html/default.asp"  name="iframe_a"></iframe>
			<br>
			<table class="sites_utiles">
				<tr>
					<th class="dropdown-text">
						<a href="https://www.w3schools.com/html/default.asp" target="iframe_a">w3schools_HTML</a>
						<div class="dropdown-text-content">
							<span>Pour apprendre le HTML</span>
						</div>
					</th>
					<th class="dropdown-text">
						<a href="https://www.w3schools.com/css/default.asp" target="iframe_a">w3schools_CSS</a>
						<div class="dropdown-text-content">
							<span>Pour apprendre le CSS</span>
						</div>
					</th>
					<th class="dropdown-text">
						<a href="https://www.w3schools.com/js/default.asp" target="iframe_a">w3schools_JAVASCRIPT</a>
						<div class="dropdown-text-content">
							<span>Pour apprendre la JavaScript </span>
						</div>
					</th>
				</tr>
				<tr>
					<th class="dropdown-text">
						<a href="https://www.openclassrooms.com/paths/web-developer-frontend" target="iframe_a">OpenClassroom</a>
						<div class="dropdown-text-content">
							<span>Un parcours bien �labor� pour une carri�re dans le developpement WEB</span>
						</div>
					</th>
					<th class="dropdown-text">
						<a href="https://github.com" target="iframe_a">GitHUB</a>
						<div class="dropdown-text-content">
							<span>Un site pour versionner son code et archiver ses projets</span>
						</div>
					</td>
					<th class="dropdown-text">
						<a href="http://http://www.facsciences-univ-douala.cm/" target="iframe_a">Une page quelconque pour imiter</a>
						<div class="dropdown-text-content">
							<span>C'est le site de l'Universit� de Douala</span>
						</div>
					</td>
				</tr>
			</table>
			<p>Cliquer sur les boutons ci-dessous pour voir appara�tre la page dans la fen�tre.</p>
		</div>


		<h2>Nos Facult�s et Ecoles</h2>
		<hr>
		<div>
			<h4 id="C3">Les Facult�s</h4>

			<p id="p01"> Vous avez la possibilit� de poursuivre vos �dutes dans l'une des facult�s suivantes</p>
			<table class="faculties">
				<tr>
					<th><a href="#">Facult� des sciences</a></th>
					<th><a href="#">Facult� des Lettres</a></th>
					<th><a href="#">Facult� de droit</a></th>
				</tr>
				<tr>
					<th><a href="#">Facult� de sciences juridiques</a></td>
					<th><a href="#">Facult� de sciences �conomiques</a></td>
					<th><a href="#">Facult� des arts et de la culture</a></td>
				</tr>
			</table>



			<h4 id="C4">Nos grandes �coles</h4>

			<p id="p01"> Vous pouvez aussi acceder � l'une des �coles suivantes par concours ou par �tude de dossier</p>
			<table class="faculties">
				<tr>
					<th><a href="#">Facult� des g�nie industriel</a></th>
					<th><a href="#">ENS</a></th>
					<th><a href="#">ENSET</a></th>
				</tr>
				<tr>
					<th><a href="#">ESSEC</a></td>
					<th><a href="#">IUT</a></td>
					<th><a href="#">POLYTECHNIQUE</a></td>
				</tr>
			</table>
		</div>

		<hr>
	</article>

	<!-- Pied de Page -->
	<div w3-include-html = "piedDePage.html"></div>

	<!-- Formulaire de connexion aux compte Etudiant et Enseignant -->
	<div w3-include-html = "login.html"></div>


</div>


</body>

<script src="myFirstJavaScript.js"></script>

</html>


 /**
 * Created by PhpStorm.
 * User: Marie
 * Date: 06/12/2017
 * Time: 15:19
 */