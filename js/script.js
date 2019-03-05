
//$('#start').hide();
$('#quest').hide();

$('#btStart').click(function ()
{

        $('#quest').show();
        $('#start').hide();

});

function random () {


        for (let $i = 0; $i <= 4; $i++) {


                $ ("#quest" + [$i]).click (function () {


                        if ($i == 0) {

                                document.location.href = '../html/quête_mairie.html';
                                $ ('#super_glo').show ();





                        }

                        if ($i == 1) {
                                document.location.href = '../html/quête_labo.html';
                                $ ('#super_glo').show ();

                        }

                        if ($i == 2) {
                                document.location.href = '../html/quête_mediatheque.html';
                                $ ('#super_glo').show ();


                        }

                        if ($i == 3) {
                                document.location.href = '../html/ecomusee_quete.html';
                                $ ('#super_glo').show ();


                        }

                        if ($i == 4) {
                                document.location.href = '../html/maison-europe_quete.html';
                                $ ('#super_glo').show ();



                        }
                })
        }
}





