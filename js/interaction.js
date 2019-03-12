$perso = document.getElementById("perso");
$id_bat = document.getElementById('id_bat').innerHTML;






// 'For' mouvements perso

    for (let $i = 0; $i <= 4; $i++) {

        $('#cadre' + $i).click(function () {

            alert($i);

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

            if ($i == 1) {

                //depart intiale

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_labo");
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


            }

            //ecomusee

            if ($i == 3) {

                //depart intiale

                if ($ ("#perso").hasClass ("perso_init")) {

                    $ ('#perso').removeClass ("perso_init");
                    $ ('#perso').addClass ("dep_Ecomusée");
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
            }

        })

    }

// Redirection du personnage vers batiment :

    function move_mairie() {

        $('#super_glo').hide();
        $('#global').show();

      // document.getElementById('super_glo').style.display = 'none';
        //document.getElementById('global').style.display = 'block';

        ajaxRequest0({'id_interaction' : 1} );

    }





    function move_labo() {

        $('#super_glo').hide();
        $('#global').show();

       // document.getElementById('super_glo').style.display = 'none';
       // document.getElementById('global').style.display = 'block';

        ajaxRequest0({'id_interaction' : 2} );

    }





    function move_media() {

        $('#super_glo').hide();
        $('#global').show();

      //  document.getElementById('super_glo').style.display = 'none';
      //  document.getElementById('global').style.display = 'block';

        ajaxRequest0({'id_interaction' : 3} );

    }





    function move_ecomusee() {

        $('#super_glo').hide();
        $('#global').show();

      //  document.getElementById('super_glo').style.display = 'none';
      //  document.getElementById('global').style.display = 'block';

        ajaxRequest0({'id_interaction' : 4} );

    }





    function move_MDE() {

        $('#super_glo').hide();
        $('#global').show();
      //  document.getElementById('super_glo').style.display = 'none';
      //  document.getElementById('global').style.display = 'block';

        ajaxRequest0({'id_interaction' : 5} );


}


