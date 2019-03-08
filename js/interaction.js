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


for(let $i =0; $i<=4; $i++) {

    $('#check'+$i).click(function () {

        if(alpha.top == 159 && alpha.left== 803 && $i==0) {

           // $('#perso').removeClass("perso_init");
            $('#perso').addClass("mairie");

            setTimeout(move_mairie, 2000);

        }
        if(alpha.top == 159 && alpha.left== 803 && $i == 1) {

           // $('#perso').removeClass("perso_init");
            $('#perso').addClass("labo");

            setTimeout(move_labo,10000);

        }

        if($i == 2) {
            setTimeout(move_media,10000);

        }

        if($i == 3) {
            setTimeout(move_ecomusee,10000);

        }

        if($i == 4) {
            setTimeout(move_MDE,10000);

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

