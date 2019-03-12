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
                    setTimeout(move_mairie, 2000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LtoM");
                    setTimeout(move_mairie, 10000);


                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("MEtoM");
                    setTimeout(move_mairie, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMtoM");
                    setTimeout(move_mairie, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEtoM");
                    setTimeout(move_mairie, 10000);

                }

            }

            //labo

            if ($i == 1) {

                //depart intiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_labo");
                    setTimeout(move_labo, 10000);
                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MtoL");
                    setTimeout(move_labo, 10000);


                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("MEtoL");
                    setTimeout(move_labo, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMtoL");
                    setTimeout(move_labo, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEtoL");
                    setTimeout(move_labo, 10000);

                }

            }

            //mediatheque

            if ($i == 2) {

                //depart intiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_mediatheque");
                    setTimeout(move_media, 10000);

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MtoME");
                    setTimeout(move_media, 10000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LtoME");
                    setTimeout(move_media, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMtoME");
                    setTimeout(move_media, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEtoME");
                    setTimeout(move_media, 10000);

                }

            }

            //ecomusee

            if ($i == 3) {

                //depart intiale

                if ($ ("#perso").hasClass ("perso_init")) {

                    $ ('#perso').removeClass ("perso_init");
                    $ ('#perso').addClass ("dep_Ecomusée");
                    setTimeout (move_ecomusee, 10000);

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MtoEM");
                    setTimeout (move_ecomusee, 10000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LtoEM");
                    setTimeout (move_ecomusee, 10000);

                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("MEtoEM");
                    setTimeout (move_ecomusee, 10000);

                }

                //depart maison de l'europe

                else if ($("#perso").hasClass("mde_init")) {

                    $('#perso').removeClass("mde_init");
                    $('#perso').addClass("MDEtoEM");
                    setTimeout (move_ecomusee, 10000);

                }

            }

            //maison de l'europe

            if ($i == 4) {

                //depart intiale

                if ($ ("#perso").hasClass ("perso_init")) {

                    $ ('#perso').removeClass ("perso_init");
                    $ ('#perso').addClass ("dep_MDE");
                    setTimeout (move_MDE, 10000);

                }

                //depart mairie

                else if ($("#perso").hasClass("mairie_init")) {

                    $('#perso').removeClass("mairie_init");
                    $('#perso').addClass("MtoMDE");
                    setTimeout (move_MDE, 10000);

                }

                //depart labo

                else if ($("#perso").hasClass("labo_init")) {

                    $('#perso').removeClass("labo_init");
                    $('#perso').addClass("LtoMDE");
                    setTimeout (move_MDE, 10000);

                }

                //depart mediatheque

                else if ($("#perso").hasClass("mediatheque_init")) {

                    $('#perso').removeClass("mediatheque_init");
                    $('#perso').addClass("MEtoMDE");
                    setTimeout (move_MDE, 10000);

                }

                //depart ecomusee

                else if ($("#perso").hasClass("ecomusee_init")) {

                    $('#perso').removeClass("ecomusee_init");
                    $('#perso').addClass("EMtoMDE");
                    setTimeout (move_MDE, 10000);

                }

            }

        })

    }

// Redirection du personnage vers batiment :

    function move_mairie() {

        $('#super_glo').hide();
        $('#global').show();

        $('#perso').removeClass("LtoM");
        $('#perso').removeClass("MEtoM");
        $('#perso').removeClass("EMtoM");
        $('#perso').removeClass("MDEtoM");
        $('#perso').removeClass("dep_mairie");


        $('#perso').addClass("mairie_init");

        ajaxRequest0({'id_interaction' : 1} );

    }





    function move_labo() {

        $('#super_glo').hide();
        $('#global').show();

        $('#perso').removeClass("MtoL");
        $('#perso').removeClass("MEtoL");
        $('#perso').removeClass("EMtoL");
        $('#perso').removeClass("MDEtoL");
        $('#perso').removeClass("dep_labo");

        $('#perso').addClass("labo_init");


        ajaxRequest0({'id_interaction' : 2} );

    }





    function move_media() {

        $('#super_glo').hide();
        $('#global').show();

        $('#perso').removeClass("MtoME");
        $('#perso').removeClass("LtoME");
        $('#perso').removeClass("EMtoME");
        $('#perso').removeClass("MDEtoME");
        $('#perso').removeClass("dep_mediatheque");


        $('#perso').addClass("mediatheque_init");

        ajaxRequest0({'id_interaction' : 3} );

    }





    function move_ecomusee() {

        $('#super_glo').hide();
        $('#global').show();

        $('#perso').removeClass("MtoEM");
        $('#perso').removeClass("LtoEM");
        $('#perso').removeClass("MEtoEM");
        $('#perso').removeClass("MDEtoEM");
        $('#perso').removeClass("dep_Ecomusée");


        $('#perso').addClass("ecomusee_init");

        ajaxRequest0({'id_interaction' : 4} );

    }





    function move_MDE() {

        $('#super_glo').hide();
        $('#global').show();

        $('#perso').removeClass("MtoMDE");
        $('#perso').removeClass("LtoMDE");
        $('#perso').removeClass("MEtoMDE");
        $('#perso').removeClass("EMtoMDE");
        $('#perso').removeClass("dep_MDE");


        $('#perso').addClass("labo_init");

        ajaxRequest0({'id_interaction' : 5} );


}

    $('#bouton_dialogue').click(function () {

        $('#super_glo').show();
        $('#global').hide();
    })




