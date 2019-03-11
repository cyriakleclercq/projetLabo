
//$('#start').hide();
$('#quest').hide();

$('#btStart').click(function ()
{

        $('#quest').show();
        $('#start').hide();

});

function random () {


        for (let $i = 0; $i < 15; $i=$i+3) {


                $ ("#quest" + [$i]).click (function () {


                        if ($i == 0) {
                                document.location.href = '../html/map.php?id_bat=1';

                        }

                        if ($i == 3) {
                                document.location.href = '../html/map.php?id_bat=2';

                        }

                        if ($i == 6) {
                                document.location.href = '../html/map.php?id_bat=3';

                        }

                        if ($i == 9) {
                                document.location.href = '../html/map.php?id_bat=4';

                        }

                        if ($i == 12) {
                                document.location.href = '../html/map.php?id_bat=5';

                        }
                })
        }
}





