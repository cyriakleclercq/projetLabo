var source = document.getElementById('src_ko');
var lecteur = document.getElementById('audio_ko');

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
                move(i)
            }, 10000);


        })

    }

    table_musique = ['../audio/Komiku_-_06_-_School.mp3','../audio/Komiku_-_59_-_Together_we_are_stronger.mp3',];

    function  play() {

        lecteur.load();
        lecteur.play();


    }

// Redirection du personnage vers batiment cliqué  :

function move(i) {

    $('#map_page').hide();
    $('#dialogue_page').show();

    $('#perso').removeClass("LToM");
    $('#perso').removeClass("METoM");
    $('#perso').removeClass("EMToM");
    $('#perso').removeClass("MDEToM");
    $('#perso').removeClass("dep_mairie");
    $('#perso').removeClass("dep_labo");
    $('#perso').removeClass("dep_mediatheque");
    $('#perso').removeClass("dep_Ecomusée")
    $('#perso').removeClass("dep_MDE");

// click on mairie
    if (i == 0) {

        $('#perso').addClass("mairie_init");
        source.src = table_musique[1];
        play();

    }

    //click on labo
    else  if (i == 1) {

        $('#perso').addClass("labo_init");

    }

    //click on mediatheque
    else  if (i == 2) {

        $('#perso').addClass("mediatheque_init");

    }

    //click on ecomusee
    else  if (i == 3) {

        $('#perso').addClass("ecomusee_init");

    }

    //click on maison de l'europe
    else  if (i == 4) {

        $('#perso').addClass("mde_init");

    }

}


// Redirection des batiments vers la map :

    $('#bouton_dialogue').click(function () {

        $('#map_page').show();
        $('#dialogue_page').hide();
        source.src = table_musique[0] ;
        play();
    });




