$perso = document.getElementById("perso");
$perso.style.top = "47.6%";
$perso.style.left = "52%";

$mairie = document.getElementById('global0');
$labo = document.getElementById('global1');
$mediatheque = document.getElementById('global2');
$ecomusee = document.getElementById('global3');
$maison_europe = document.getElementById('global4');





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


function move_labo() {

    document.location.href = '../html/dialogue.php';
    $mairie.visibility = hidden ();
    $mediatheque.visibility = hidden ();
    $ecomusee.visibility = hidden ();
    $maison_europe.visibility = hidden ();

}
setTimeout(move_labo,10000);



