
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title> Map </title>
    <script src="../js/jquery.js"></script>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/move.css">
    <link rel="stylesheet" href="../css/mapping.css">

</head>
<body>

<h1></h1>

<div id="second_page">


    <div id="dialogue_page" style="display: none">

        <div id="labo_reunion" class="piece_labo">

            <h3 id="title_labo-room0"></h3>
            <p id="text_labo-room0"></p>

        </div>

        <div id="labo_fablab" class="piece_labo">

            <h3 id="title_labo-room1"></h3>
            <p id="text_labo-room1"></p>

        </div>

        <div id="labo_coworking" class="piece_labo">

            <h3 id="title_labo-room2"></h3>
            <p id="text_labo-room2"></p>

        </div>


        <button type="button" id="btn_labo">Visiter le L@bo</button>


        <div id="avatar"></div>

        <div id="dialogue"></div>

        <div>
            <input id="bouton_dialogue" type="button"  value="suivant">
        </div>


    </div>




    <div id="map_page">

        <div id="maps_elements">

            <div class="perso_init" id="perso"> </div>

            <div class="cadre" id="cadre0"> </div>
            <div class="cadre" id="cadre1"> </div>
            <div class="cadre" id="cadre2"> </div>
            <div class="cadre" id="cadre3"> </div>
            <div class="cadre" id="cadre4"> </div>

            <div class="icone" id="icone0"> </div>
            <div class="icone" id="icone1"> </div>
            <div class="icone" id="icone2"> </div>
            <div class="icone" id="icone3"> </div>
            <div class="icone" id="icone4"> </div>

            <div class="banniere" id="bann0"> </div>
            <div class="banniere" id="bann1"> </div>
            <div class="banniere" id="bann2"> </div>
            <div class="banniere" id="bann3"> </div>
            <div class="banniere" id="bann4"> </div>

        </div>

        <div class="resume" id="summary"> </div>

        <span id="id_story" style="display:none"><?= $_GET['id_story'] ?></span>
       <span id="id_event" style="display:none;"> </span>


    </div>
</div>

<script src="../js/script.js"></script>
<script src="../js/json0.js"></script>
<script src="../js/interaction.js"></script>



</body>
</html>