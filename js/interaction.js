$perso = document.getElementById("perso");
$perso.style.top = "47.6%";
$perso.style.left = "52%";

$mairie = document.getElementById('global1');
$labo = document.getElementById('global2');
$mediatheque = document.getElementById('global3');
$ecomusee = document.getElementById('global4');
$maison_europe = document.getElementById('global5');





for(let $i =0; $i<=4; $i++) {

    $('#check'+$i).click(function () {

        if($i == 0) {
            $perso.style.top = '40%';
            $perso.style.left = '50.5%';
        }
        if($i == 1) {
            $perso.style.top = '80%';
            $perso.style.left = '49.7%';
        }

        if($i == 2) {
            $perso.style.top = '91.3%';
            $perso.style.left = '59.9%';
        }

        if($i == 3) {
            $perso.style.top = '56%';
            $perso.style.left = '23.3%';
        }

        if($i == 4) {
            $perso.style.top = '88.7%';
            $perso.style.left = '13%';
        }



    })

}
function move_mairie() {

    document.location.href = '../html/dialogue.php?id_interaction=1';

}
setTimeout(move_mairie, 2000);


//////////////////////////////


function move_labo() {

    document.location.href = '../html/dialogue.php?id_interaction=2';


}
setTimeout(move_labo,10000);


/////////////////////////////////


function move_media() {

    document.location.href = '../html/dialogue.php?id_interaction=3';


}
setTimeout(move_media,10000);



/////////////////////////////



function move_ecomusee() {

    document.location.href = '../html/dialogue.php?id_interaction=4';


}
setTimeout(move_ecomusee,10000);


/////////////////////////////



function move_MDE() {

    document.location.href = '../html/dialogue.php?id_interaction=5';


}
setTimeout(move_MDE,10000);

