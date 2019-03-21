
$('#quest').hide();

$('#btStart').click(function ()
{

        $('#quest').show();
        $('#start').hide();

});
// Fonction qui gere le scenario
function scene () {


        for (let i = 0; i <= 4; i++) {

                // Affiche en fonction de i le scenario selectionné
                $ ("#title_story" + [i]).click (function () {


                        if (i == 0) {
                                document.location.href = '../php/map.php?id_story=1';

                        }

                        if (i == 1) {
                                document.location.href = '../php/map.php?id_story=2';

                        }

                        if (i == 2) {
                                document.location.href = '../php/map.php?id_story=3';

                        }

                        if (i == 3) {
                                document.location.href = '../php/map.php?id_story=4';

                        }

                        if (i == 4) {
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
    var audio_ko = document.getElementById('audio_ko');
    var src_ko = document.getElementById('src_ko');
    document.getElementById('second_page').style.display ='none';
    document.getElementById('ko_co').style.display = 'block';
    document.body.style.backgroundColor = 'black';
    src_ko.src = "../audio/Loyalty_Freak_Music_-_03_-_IM_ON_FIRE.mp3";
    audio_ko.load();
    audio_ko.play();
    var title0_ko = document.getElementById('title0_ko');
    var title1_ko = document.getElementById('title1_ko');
    title0_ko.innerHTML = "Bien joué , Profite du bonus !";
    title1_ko.innerHTML = "By Sakai";
    document.body.style.background = 'black';
    document.getElementById('btn_koco').addEventListener('click',function () {
        document.location.href=  "../php/index.php";
    })

}

secret();


document.body.style.backgroundImage = "url('../image/Background_map.jpg')";
