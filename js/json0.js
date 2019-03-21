var table2 = [];
var source = document.getElementById('src_ko');
var lecteur = document.getElementById('audio_ko');

// Fonction permettant de voir si 1 batiment est visité
function push(param) {

    table2.push(param);
}




function ajaxRequest0(params)
{

    var RequestURL = "../php/requestSQL.php" ;


    var id_event="",id_story="";

    if(params)
    {
            // parametre de la fonction 'AjaxRequest0' pour recuperer id_event(numero batiment) et id_story(numero scenario)
            id_event = params.id_event;
            document.getElementById('id_event').innerHTML = id_event;

            id_story = params.id_story;
            document.getElementById('id_story').innerHTML = id_story;
            var id_story = id_story;




    }

    RequestURL+="?id_story="+id_story+"&id_event="+id_event;



    var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                var objQuete = this.responseText;

            }

            let quetes = JSON.parse (objQuete);

            console.log(quetes);


        if (params) {

            // condition qui permets d'afficher le resume du scenario a droite de la map
            if (params.affichage == 'quetes') {

                source.src = '../audio/map.mp3';
                lecteur.load();
                lecteur.play();


                var summary = document.getElementById ('summary');

                // Regroupe les titres du scenario
                var title_scenario = document.createElement ('h2');
                summary.appendChild (title_scenario);
                title_scenario.innerHTML = quetes[0].scenario;

                // Liste des quêtes et leurs descriptifs
                var list = document.createElement ('ul');
                summary.appendChild (list);

                for (let i = 0; i < quetes.length; i++) {

                    // Noms des quêtes afficher en liste non ordonnée ( ul )
                    var quest = document.createElement ('li');
                    list.appendChild (quest);
                    quest.id = 'quest'+i;
                    quest.className = 'quest_n'+i;
                    quest.innerHTML = quetes[i].nom;

                    // Descriptif des quêtes
                    var description = document.createElement ('p');
                    quest.appendChild (description);
                    description.innerHTML = quetes[i].descriptif;

                }

              // condition qui affiche "l'interieur" d'un batiment
            } else {



                var table = [];

                for (let i = 0; i < quetes.length; i++) {

                    // Verifie si les 3 batiments d'un scenario on était visités
                    if (document.getElementById('id_event').innerHTML == quetes[i].id_select) {

                        table.push(quetes[i].dialogues);


                        if (table2.indexOf(quetes[i].dialogues) === -1) {

                            push(quetes[i].dialogues);

                        }

                    }

                    console.log(table2);


                    // affichage de la page credits
                    document.getElementById('bouton_dialogue').addEventListener("click", function () {

                        if (table2.length === 3) {
                            document.getElementById('second_page').style.display = "none";
                            document.getElementById('credits').style.display = "block";
                            document.body.style.backgroundImage = "url('../image/Wall_end.jpg')";
                            document.body.style.backgroundSize = 'cover';
                        }

                    })

                }
                    // Fonction affichage des descriptions des pieces du l@bo
                document.getElementById('btn_labo').addEventListener('click',function () {

                    for(let i = 0; i<quetes.length; i++) {

                        document.getElementById('title_labo-room'+i).innerHTML = quetes[i].titre;
                        document.getElementById('text_labo-room'+i).innerHTML = quetes[i].descriptif;

                    }

                });
                // Condition pour afficher une presentation d'un batiment
                if (table != "") {

                    document.getElementById('dialogue').innerHTML = table[0];

                }
                else {
                        document.getElementById('dialogue').innerHTML = quetes[0].presentations;
                    }

                    // Affiche l'avatar + l'image de fond du batiment
                    document.getElementById('avatar').style.backgroundImage = "url('../image/" + quetes[0].skin + "')";

                    document.getElementById('dialogue_page').style.backgroundImage = "url('../image/" + quetes[0].background + "')";

            }


        }};

        xhttp.open('GET', RequestURL) ;

        xhttp.responseType = 'text';
        xhttp.send();
};

        ajaxRequest0({
            'id_story' : document.getElementById('id_story').innerHTML,
            'id_event' : document.getElementById('id_event').innerHTML,
            'affichage' : 'quetes',
            'musique_map' : '../audio/Loyalty_Freak_Music_-_03_-_IM_ON_FIRE.mp3',

        });
