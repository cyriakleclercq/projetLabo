
// 'For' mouvements perso

document.getElementById('btn_labo').style.display = 'none';

    for (let i = 0; i <= 4; i++) {

        document.getElementById('cadre'+i).addEventListener('click',function () {

            //mairie

            ajaxRequest0({
                'id_event' : i+1,
                'id_story' : document.getElementById('id_story').innerHTML
            } );

            if (i == 0) {

                //depart initiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_mairie");

                    setTimeout(move_mairie, 2000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToM");

                    setTimeout(move_mairie, 10000);


                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoM");

                    setTimeout(move_mairie, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToM");

                    setTimeout(move_mairie, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToM");

                    setTimeout(move_mairie, 10000);

                }

            }

            //labo

            if (i == 1) {

                document.getElementById('btn_labo').style.display = 'block';


                //depart intiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_labo");

                    setTimeout(move_labo, 10000);
                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToL");

                    setTimeout(move_labo, 10000);


                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoL");

                    setTimeout(move_labo, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToL");

                    setTimeout(move_labo, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToL");

                    setTimeout(move_labo, 10000);

                }

            }

            //mediatheque

            if (i == 2) {

                //depart intiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_mediatheque");

                    setTimeout(move_media, 10000);

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToME");

                    setTimeout(move_media, 10000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToME");

                    setTimeout(move_media, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToME");

                    setTimeout(move_media, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToME");

                    setTimeout(move_media, 10000);

                }

            }

            //ecomusee

            if (i == 3) {

                //depart intiale

                if ($ ("#perso").hasClass ("perso_init")) {

                    $ ('#perso').removeClass ("perso_init");
                    $ ('#perso').addClass ("dep_Ecomusée");

                    setTimeout (move_ecomusee, 10000);

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToEM");

                    setTimeout (move_ecomusee, 10000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToEM");

                    setTimeout (move_ecomusee, 10000);

                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoEM");

                    setTimeout (move_ecomusee, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToEM");

                    setTimeout (move_ecomusee, 10000);

                }

            }

            //maison de l'europe

            if (i == 4) {

                //depart intiale

                if ($ ("#perso").hasClass ("perso_init")) {

                    $ ('#perso').removeClass ("perso_init");
                    $ ('#perso').addClass ("dep_MDE");

                    setTimeout (move_MDE, 10000);

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToMDE");

                    setTimeout (move_MDE, 10000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToMDE");

                    setTimeout (move_MDE, 10000);

                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoMDE");

                    setTimeout (move_MDE, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToMDE");

                    setTimeout (move_MDE, 10000);

                }

            }


        })

    }

// Redirection du personnage vers batiment mairie  :

    function move_mairie() {

        $('#map_page').hide();
        $('#dialogue_page').show();

        $('#perso').removeClass("LToM");
        $('#perso').removeClass("METoM");
        $('#perso').removeClass("EMToM");
        $('#perso').removeClass("MDEToM");
        $('#perso').removeClass("dep_mairie");


        $('#perso').addClass("mairie_init");


    }



// Redirection du personnage vers batiment l@bo  :

    function move_labo() {

        $('#map_page').hide();
        $('#dialogue_page').show();

        $('#perso').removeClass("MToL");
        $('#perso').removeClass("METoL");
        $('#perso').removeClass("EMToL");
        $('#perso').removeClass("MDEToL");
        $('#perso').removeClass("dep_labo");

        $('#perso').addClass("labo_init");

    }




// Redirection du personnage vers batiment mediatheque  :

    function move_media() {

        $('#map_page').hide();
        $('#dialogue_page').show();

        $('#perso').removeClass("MToME");
        $('#perso').removeClass("LToME");
        $('#perso').removeClass("EMToME");
        $('#perso').removeClass("MDEToME");
        $('#perso').removeClass("dep_mediatheque");


        $('#perso').addClass("mediatheque_init");

    }



// Redirection du personnage vers batiment ecomusee  :

    function move_ecomusee() {

        $('#map_page').hide();
        $('#dialogue_page').show();

        $('#perso').removeClass("MToEM");
        $('#perso').removeClass("LToEM");
        $('#perso').removeClass("METoEM");
        $('#perso').removeClass("MDEToEM");
        $('#perso').removeClass("dep_Ecomusée");


        $('#perso').addClass("ecomusee_init");

    }



// Redirection du personnage vers batiment maison de l'europe  :

    function move_MDE() {

        $('#map_page').hide();
        $('#dialogue_page').show();

        $('#perso').removeClass("MToMDE");
        $('#perso').removeClass("LToMDE");
        $('#perso').removeClass("METoMDE");
        $('#perso').removeClass("EMToMDE");
        $('#perso').removeClass("dep_MDE");


        $('#perso').addClass("mde_init");

}


// Redirection des batiments vers la map :

    $('#bouton_dialogue').click(function () {

        $('#map_page').show();
        $('#dialogue_page').hide();
    })




