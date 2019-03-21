
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

<div id="ko_co">

    <h4 id="title0_ko">
        <h5 id="title1_ko"></h5>
    </h4>
    <button id="btn_koco" type="button">Précédent</button>
    <div style="width:100%;height:0;padding-bottom:80%;position:relative;"><iframe src="https://giphy.com/embed/I8Jb9DeQUU3Qs" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/black-and-white-dance-superheroes-I8Jb9DeQUU3Qs">via GIPHY</a></p>
    <audio id="audio_ko" style="display: none" loop preload="metadata">
        <source id="src_ko" src="">
    </audio>
</div>

                <!--div 'second_page' contains the map and dialogues display-->
<div id="second_page">


    <div id="dialogue_page" style="display: none">

        <!--labo_'x' contains the description of labo's rooms -->
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

                         <!--Display avatar picture-->
        <div id="avatar"></div>

                            <!--Display dialogues-->
        <div id="dialogue"></div>

        <div>
            <input id="bouton_dialogue" type="button"  value="suivant">
        </div>


    </div>



                      <!--Contains all elements on the map-->
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

        <!--div 'resume' display all quests from scenario next to the map-->
        <div class="resume" id="summary"> </div>

        <!--span 'id_story' it's for select a scenario-->
        <span id="id_story" style="display:none"><?= $_GET['id_story'] ?></span>

        <!--span 'id_event' it's for select a building on the map-->
       <span id="id_event" style="display:none;"> </span>


    </div>
</div>

<div id="credits" class="first_page">

    <h1>Crédits</h1>

    <h2>Développeurs:</h2>
    <p class="nom_credit">Leclerc Cyriak</p>
    <p class="nom_credit">Dohen Geoffrey</p>
    <p class="nom_credit">Durvin James</p>

    <h2>En coopération avec le labo:</h2>
    <p class="nom_credit">Malcolm</p>
    <p class="nom_credit">Dylan</p>

    <h2>Tileset by:</h2>
    <p class="nom_credit"><a href="https://opengameart.org/users/armm1998">ArMM1998</a></p>
    <p  class="nom_credit"><a href="https://opengameart.org/users/bluecarrot16">"[LPC] Colonial Buildings" by bluecarrot16</a></p>

    <h2>Fond d'écrans :</h2>
    <p class="nom_credit">Photo Mur : Tony Diaz </p>
    <p class="nom_credit">Photo Forêt : Johannes Plenio</p>

    <h2>Musique :</h2>
    <p class="nom_credit"><a href="http://freemusicarchive.org/music/Komiku">Komiku</a></p>
    <p class="nom_credit"><a href="http://freemusicarchive.org/music/Rolemusic/">RoleMusic</a></p>
</div>

<div id="felicitations" style="display: none" class="first_page">

    <h1> Bravo, vous venez de terminer le scénario "<span id="quote"></span>", toutes nos félicitations </h1>

    <div>
        <input type="button" id="bt" name="bt" value="suivant">

    </div>

</div>

<script src="../js/script.js"></script>
<script src="../js/json0.js"></script>
<script src="../js/interaction.js"></script>



</body>
</html>























