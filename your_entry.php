
<!DOCTYPE html>
<html>
<head>
    <title> Inscription</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="mon1erStyle.css">
    <script src="myFirstJavaScript.js"></script>
    <script src="w3.js"></script>
</head>


<body>


<?php
// define variables and set to empty values
$prenom = $nom = $ecole = $matricule = $bday = $bmonth = $byear = $bplace = "";
$town = $nation = $status = $region = $departement = $langP = $tel = $bp = $mailbox = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {    // On stocke les données du client.
    $prenom = test_input($_POST["prenom"]);
    $nom = test_input($_POST["nom"]);
    $ecole = test_input($_POST["ecole"]);
    $matricule = test_input($_POST["matricule"]);
    $bday = test_input($_POST["bday"]);
    $bmonth = test_input($_POST["bmonth"]);
    $byear = test_input($_POST["byear"]);
    $bplace = test_input($_POST["bplace"]);
    $town = test_input($_POST["town"]);
    $nation = test_input($_POST["nation"]);
    $status = test_input($_POST["status"]);
    $region = test_input($_POST["region"]);
    $departement = test_input($_POST["departement"]);
    $langP = test_input($_POST["langP"]);
    $tel = test_input($_POST["tel"]);
    $bp = test_input($_POST["bp"]);
    $mailbox = test_input($_POST["mailbox"]);
}

function test_input($data) {
    $data = trim($data);       // trim() est une function PHP qui supprime les caractère inutiles tels que les espace en trop et les tabulations
    $data = stripslashes($data);     // stripslashes() supprime les antislash
    $data = htmlspecialchars($data);    //  htmlspecialchars() empêche aux hackers d'introduire du code JAVASCRIPT.
    return $data;
}
?>


<div id="inscription" class="contenu">
    <div w3-include-html = "entete.html"></div>

    <div w3-include-html ="navbar.html" class="navig"></div>

    <div class="formulaire">
        <div class="student">
            <div class="connexion">
                <div class="centre myAcount">
                    <img src="webDeveloper.jpg" alt="une Icone">
					<span>
						Cameroun
					</span>
                    <div class="titre">
                          Mon inscription académique
                    </div>
                </div>
                <div>
                    <span> Veuillez vérifier vos informations. </span>
                </div>


                <span class="court">
                    Nom:
                </span>
                <span class="court">
                    <b> <?php echo $prenom." ".$nom; ?></b>
                </span>

                <span class="court">
                    Ecole:
                </span>
                <span class="court">
                    <b><?php echo $ecole; ?></b>
                </span>

                <span class="court">
                    Matricule:
                </span>
                <span class="court">
                    <b><?php echo $matricule; ?></b>
                </span>

                <span class="court">
                    Date de Naissance:
                </span>
                <span class="court">
                    <b><?php echo $bday."/".$bmonth."/".$byear; ?></b>
                </span>

                <span class="court">
                    Lieu de Naissance:
                </span>
                <span class="court">
                    <b><?php echo $bplace; ?></b>
                </span>

                <span class="court">
                    Ville de Résidence:
                </span>
                <span class="court">
                    <b><?php echo $town; ?></b>
                </span>

                <span class="court">
                    Nationnalité:
                </span>
                <span class="court">
                    <b><?php echo $nation; ?></b>
                </span>

                <span class="court">
                    Situation matrimoniale:
                </span>
                <span class="court">
                    <b><?php echo $status; ?></b>
                </span>

                <span class="court">
                    Région d'origine:
                </span>
                <span class="court">
                    <b><?php echo $region; ?></b>
                </span>

                <span class="court">
                    Département:
                </span>
                <span class="court">
                    <b><?php echo $departement; ?></b>
                </span>

                <span class="court">
                    Langues parlées:
                </span>
                <span class="court">

                </span>

                <span class="court">
                     Votre langue principale:
                </span>
                <span class="court">
                     <b><?php echo $langP; ?></b>
                </span>

                <span class="court">
                    Numéro de téléphone:
                </span>
                <span class="court">
                    <b><?php echo $tel; ?></b>
                </span>

                <span class="court">
                    Boîte postale:
                </span>
                <span class="court">
                    <b><?php echo $bp; ?></b>
                </span>

                <span class="court">
                    Email:
                </span>
                <span class="court">
                    <b><?php echo $mailbox; ?></b>
                </span>


            </div>
            <div class="signUp">


            </div>

        </div>
    </div>




    <hr>

    <hr>

    <!-- Pied de Page -->
    <div w3-include-html = "piedDePage.html"></div>


    <!-- Formulaire de connexion aux compte Etudiant et Enseignant -->
    <div w3-include-html = "login.html"></div>

</div>
</body>
</html>
