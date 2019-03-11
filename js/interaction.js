$perso = document.getElementById("perso");


$mairie = document.getElementById('global1');
$labo = document.getElementById('global2');
$mediatheque = document.getElementById('global3');
$ecomusee = document.getElementById('global4');
$maison_europe = document.getElementById('global5');

var alpha = Math.round($perso.getBoundingClientRect().top);
var beta = Math.round($perso.getBoundingClientRect().left);

console.log(alpha);
console.log(beta);


/*
let time = document.getElementById('perso');
let timeStyle = window.getComputedStyle(time);
timeStyle.getPropertyValue('animation-duration');
*/

function onload() {


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

    function move_mairie() {

        document.location.href = '../html/dialogue.php?id_interaction=1';

    }


//////////////////////////////


    function move_labo() {

        document.location.href = '../html/dialogue.php?id_interaction=2';


    }


/////////////////////////////////


    function move_media() {

        document.location.href = '../html/dialogue.php?id_interaction=3';


    }


/////////////////////////////


    function move_ecomusee() {

        document.location.href = '../html/dialogue.php?id_interaction=4';


    }


/////////////////////////////


    function move_MDE() {

        document.location.href = '../html/dialogue.php?id_interaction=5';


    }
}

$(document).ready(onload());

