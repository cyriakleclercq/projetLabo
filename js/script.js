
$('#start').hide();
$('#quest').hide();
//$('#super_glo').hide();

$('#btStart').click(function ()
{

        $('#quest').show();
        $('#start').hide();

});

function random () {


        for (let $i = 0; $i <= 4; $i++) {

                $ ("#quest" + [$i]).click (function () {


                        if ($i == 0) {

                                $ ('#quest').hide ();
                                $ ('#start').hide ();
                                $ ('#super_glo').show ();

                        }

                        if ($i == 1) {
                                document.location.href = '../html/quête_labo.html';
                        }

                        if ($i == 2) {
                                document.location.href = '../html/quête_mediatheque.html';
                        }

                        if ($i == 3) {
                                document.location.href = '../html/ecomusee_quete.html';
                        }

                        if ($i == 4) {
                                document.location.href = '../html/maison-europe_quete.html';
                        }
                })
        }
}





