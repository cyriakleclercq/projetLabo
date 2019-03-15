$perso = document.getElementById("perso");
$id_bat = document.getElementById('id_bat').innerHTML;


// 'For' mouvements perso

    for (let $i = 0; $i <= 4; $i++) {

        $('#cadre' + $i).click(function () {

            //mairie

            if ($i == 0) {

                //depart initiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_mairie");
                    ajaxRequest0({'id_interaction' : 1} );

                    setTimeout(move_mairie, 2000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToM");
                    ajaxRequest0({'id_interaction' : 1} );

                    setTimeout(move_mairie, 10000);


                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoM");
                    ajaxRequest0({'id_interaction' : 1} );

                    setTimeout(move_mairie, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToM");
                    ajaxRequest0({'id_interaction' : 1} );

                    setTimeout(move_mairie, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToM");
                    ajaxRequest0({'id_interaction' : 1} );

                    setTimeout(move_mairie, 10000);

                }

            }

            //labo

            if ($i == 1) {

                //depart intiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_labo");
                    ajaxRequest0({'id_interaction' : 2} );

                    setTimeout(move_labo, 10000);
                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToL");
                    ajaxRequest0({'id_interaction' : 2} );

                    setTimeout(move_labo, 10000);


                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoL");
                    ajaxRequest0({'id_interaction' : 2} );

                    setTimeout(move_labo, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToL");
                    ajaxRequest0({'id_interaction' : 2} );

                    setTimeout(move_labo, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToL");
                    ajaxRequest0({'id_interaction' : 2} );

                    setTimeout(move_labo, 10000);

                }

            }

            //mediatheque

            if ($i == 2) {

                //depart intiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_mediatheque");
                    ajaxRequest0({'id_interaction' : 3} );

                    setTimeout(move_media, 10000);

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToME");
                    ajaxRequest0({'id_interaction' : 3} );

                    setTimeout(move_media, 10000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToME");
                    ajaxRequest0({'id_interaction' : 3} );

                    setTimeout(move_media, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToME");
                    ajaxRequest0({'id_interaction' : 3} );

                    setTimeout(move_media, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToME");
                    ajaxRequest0({'id_interaction' : 3} );

                    setTimeout(move_media, 10000);

                }

            }

            //ecomusee

            if ($i == 3) {

                //depart intiale

                if ($ ("#perso").hasClass ("perso_init")) {

                    $ ('#perso').removeClass ("perso_init");
                    $ ('#perso').addClass ("dep_Ecomusée");
                    ajaxRequest0({'id_interaction' : 4} );

                    setTimeout (move_ecomusee, 10000);

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToEM");
                    ajaxRequest0({'id_interaction' : 4} );

                    setTimeout (move_ecomusee, 10000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToEM");
                    ajaxRequest0({'id_interaction' : 4} );

                    setTimeout (move_ecomusee, 10000);

                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoEM");
                    ajaxRequest0({'id_interaction' : 4} );

                    setTimeout (move_ecomusee, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEToEM");
                    ajaxRequest0({'id_interaction' : 4} );

                    setTimeout (move_ecomusee, 10000);

                }

            }

            //maison de l'europe

            if ($i == 4) {

                //depart intiale

                if ($ ("#perso").hasClass ("perso_init")) {

                    $ ('#perso').removeClass ("perso_init");
                    $ ('#perso').addClass ("dep_MDE");
                    ajaxRequest0({'id_interaction' : 5} );

                    setTimeout (move_MDE, 10000);

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MToMDE");
                    ajaxRequest0({'id_interaction' : 5} );

                    setTimeout (move_MDE, 10000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LToMDE");
                    ajaxRequest0({'id_interaction' : 5} );

                    setTimeout (move_MDE, 10000);

                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("METoMDE");
                    ajaxRequest0({'id_interaction' : 5} );

                    setTimeout (move_MDE, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMToMDE");
                    ajaxRequest0({'id_interaction' : 5} );

                    setTimeout (move_MDE, 10000);

                }

            }
            $('#cadre' + $i).hide();


        })

    }

// Redirection du personnage vers batiment :

    function move_mairie() {

        $('#super_glo').hide();
        $('#global').show();

        $('#perso').removeClass("LToM");
        $('#perso').removeClass("METoM");
        $('#perso').removeClass("EMToM");
        $('#perso').removeClass("MDEToM");
        $('#perso').removeClass("dep_mairie");


        $('#perso').addClass("mairie_init");


    }





    function move_labo() {

        $('#super_glo').hide();
        $('#global').show();

        $('#perso').removeClass("MToL");
        $('#perso').removeClass("METoL");
        $('#perso').removeClass("EMToL");
        $('#perso').removeClass("MDEToL");
        $('#perso').removeClass("dep_labo");

        $('#perso').addClass("labo_init");

    }





    function move_media() {

        $('#super_glo').hide();
        $('#global').show();

        $('#perso').removeClass("MToME");
        $('#perso').removeClass("LToME");
        $('#perso').removeClass("EMToME");
        $('#perso').removeClass("MDEToME");
        $('#perso').removeClass("dep_mediatheque");


        $('#perso').addClass("mediatheque_init");

    }





    function move_ecomusee() {

        $('#super_glo').hide();
        $('#global').show();

        $('#perso').removeClass("MToEM");
        $('#perso').removeClass("LToEM");
        $('#perso').removeClass("METoEM");
        $('#perso').removeClass("MDEToEM");
        $('#perso').removeClass("dep_Ecomusée");


        $('#perso').addClass("ecomusee_init");

    }





    function move_MDE() {

        $('#super_glo').hide();
        $('#global').show();

        $('#perso').removeClass("MToMDE");
        $('#perso').removeClass("LToMDE");
        $('#perso').removeClass("METoMDE");
        $('#perso').removeClass("EMToMDE");
        $('#perso').removeClass("dep_MDE");


        $('#perso').addClass("mde_init");

}

    $('#bouton_dialogue').click(function () {

        $('#super_glo').show();
        $('#global').hide();
    })




