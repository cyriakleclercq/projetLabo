var source = document.getElementById('src_ko');
var lecteur = document.getElementById('audio_ko');
table_musique = ['../audio/mairie.mp3','../audio/labo.mp3','../audio/mediatheque.mp3','../audio/ecomusee.mp3','../audio/mde.mp3','../audio/map.mp3'];


// 'For' mouvements perso

document.getElementById('btn_labo').style.display = 'none';

    for (let i = 0; i <= 4; i++) {

        document.getElementById('cadre'+i).addEventListener('click',function () {

            //mairie

            ajaxRequest0({
                'id_event' : i+1,
                'id_story' : document.getElementById('id_story').innerHTML,
            } );

            if (i == 0) {

                //depart initiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_mairie");

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToM");

                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoM");

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToM");

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToM");

                }

            }

            //labo

            if (i == 1) {

                document.getElementById('btn_labo').style.display = 'block';


                //depart intiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_labo");

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToL");


                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoL");

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToL");

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToL");

                }
            }

            //mediatheque

            if (i == 2) {

                //depart intiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_mediatheque");

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToME");

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToME");

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToME");

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToME");

                }

            }

            //ecomusee

            if (i == 3) {

                //depart intiale

                if ($ ("#perso").hasClass ("perso_init")) {

                    $ ('#perso').removeClass ("perso_init");
                    $ ('#perso').addClass ("dep_Ecomusée");

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToEM");

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToEM");

                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoEM");

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToEM");

                }


            }

            //maison de l'europe

            if (i == 4) {

                //depart intiale

                if ($ ("#perso").hasClass ("perso_init")) {

                    $ ('#perso').removeClass ("perso_init");
                    $ ('#perso').addClass ("dep_MDE");

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToMDE");

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToMDE");

                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoMDE");

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToMDE");

                }


            }

            setTimeout( function () {
                source.src = table_musique[i];
                lecteur.load();
                lecteur.play();
                move(i)
            }, 6000);


        })

    }

// Redirection du personnage vers batiment cliqué  :

function move(i) {

    $('#map_page').hide();
    $('#dialogue_page').show();
    document.body.style.background = 'black';

    $('#perso').removeClass("LToM");
    $('#perso').removeClass("METoM");
    $('#perso').removeClass("EMToM");
    $('#perso').removeClass("MDEToM");
    $('#perso').removeClass("MToL");
    $('#perso').removeClass("METoL");
    $('#perso').removeClass("EMToL");
    $('#perso').removeClass("MDEToL");
    $('#perso').removeClass("MToME");
    $('#perso').removeClass("LToME");
    $('#perso').removeClass("EMToME");
    $('#perso').removeClass("MDEToME");
    $('#perso').removeClass("MToEM");
    $('#perso').removeClass("LToEM");
    $('#perso').removeClass("METoEM");
    $('#perso').removeClass("MDEToEM");
    $('#perso').removeClass("MToMDE");
    $('#perso').removeClass("LToMDE");
    $('#perso').removeClass("METoMDE");
    $('#perso').removeClass("EMToMDE");


// click on mairie
    if (i == 0) {

        $('#perso').removeClass("dep_mairie");
        $('#perso').addClass("mairie_init");

    }

    //click on labo
    else  if (i == 1) {

        $('#perso').removeClass("dep_labo");
        $('#perso').addClass("labo_init");

    }

    //click on mediatheque
    else  if (i == 2) {


        $('#perso').removeClass("dep_mediatheque");
        $('#perso').addClass("mediatheque_init");

    }

    //click on ecomusee
    else  if (i == 3) {

           $('#perso').removeClass("dep_Ecomusée");
        $('#perso').addClass("ecomusee_init");

    }

    //click on maison de l'europe
    else  if (i == 4) {

               $('#perso').removeClass("dep_MDE");
        $('#perso').addClass("mde_init");

    }

}


// Redirection des batiments vers la map :

    $('#bouton_dialogue').click(function () {

        $('#map_page').show();
        $('#dialogue_page').hide();
        source.src = table_musique[5];
        lecteur.load();
        lecteur.play();
        document.body.style.backgroundImage = "url('../image/Background_map.jpg')";
    });




