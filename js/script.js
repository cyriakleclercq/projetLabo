
$('#quest').hide();

$('#btStart').click(function ()
{

        $('#quest').show();
        $('#start').hide();

});
// Fonction qui gere le scenario
function scene () {


        for (let i = 0; i < 15; i=i+3) {

                // Affiche en fonction de i le scenario selectionné
                $ ("#title_story" + [i]).click (function () {


                        if (i == 0) {
                                document.location.href = '../php/map.php?id_story=1';

                        }

                        if (i == 3) {
                                document.location.href = '../php/map.php?id_story=2';

                        }

                        if (i == 6) {
                                document.location.href = '../php/map.php?id_story=3';

                        }

                        if (i == 9) {
                                document.location.href = '../php/map.php?id_story=4';

                        }

                        if (i == 12) {
                                document.location.href = '../php/map.php?id_story=5';

                        }
                })
        }
}

// Evenement sur click pour les pieces du l@bo
document.getElementById('btn_labo').addEventListener('click', function () {

        document.getElementById('avatar').style.display = 'none';
        document.getElementById('dialogue').style.display = 'none';
        document.getElementById('btn_labo').style.display = 'none';
        document.getElementById('labo_coworking').style.display = 'block';
        document.getElementById('labo_fablab').style.display = 'block';
        document.getElementById('labo_reunion').style.display = 'block';


});

// Evenement sur click pour les pieces du l@bo
document.getElementById('bouton_dialogue').addEventListener('click', function () {

        document.getElementById('avatar').style.display = 'block';
        document.getElementById('dialogue').style.display = 'block';
        document.getElementById('btn_labo').style.display = 'none';
        document.getElementById('labo_coworking').style.display = 'none';
        document.getElementById('labo_fablab').style.display = 'none';
        document.getElementById('labo_reunion').style.display = 'none';

});


function secret(){
    var kKeys = [];
    function Kpress(e){
        kKeys.push(e.keyCode);
        if (kKeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
            jQuery(this).unbind('keydown', Kpress);
            kExec();
        }
    }
    jQuery(document).keydown(Kpress);
}
function kExec(){

    document.getElementById('second_page').style.display ='none';
    document.getElementById('ko_co').style.display = 'block';
    document.body.style.backgroundColor = 'black';
    document.getElementById('txt_koco').style.display = 'block';
    document.getElementById('txt_koco').innerHTML = 'Bien numériquement';


}

secret();

