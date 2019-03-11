$perso = document.getElementById("perso");
$id_bat = document.getElementById('id_bat').innerHTML;






// 'For' mouvements perso

    for (let $i = 0; $i <= 4; $i++) {

        $('#cadre' + $i).click(function () {

            alert($i);

            if ($i == 0) {


                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_mairie");
                    setTimeout(move_mairie, 2000);

                }


            }


            if ($i == 1) {


                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_labo");
                    setTimeout(move_labo, 10000);
                }


            }

            if ($i == 2) {

                if ($("#perso").hasClass("perso_init")) {

                    $('#perso').removeClass("perso_init");
                    $('#perso').addClass("dep_mediatheque");
                    setTimeout(move_media, 10000);

                }


            }

            if ($i == 3) {

                if ($ ("#perso").hasClass ("perso_init")) {

                    $ ('#perso').removeClass ("perso_init");
                    $ ('#perso').addClass ("dep_Ecomusée");
                    setTimeout (move_ecomusee, 10000);

                }
            }

            if ($i == 4) {
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


