var table2 = [];

function push(param) {

    table2.push(param);
}




function ajaxRequest0(params)
{

    var RequestURL = "../php/requestSQL.php" ;


    var id_event="",id_story="";

    if(params)
    {

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

            if (params.affichage == 'quetes') {


                var summary = document.getElementById ('summary');


                var title_scenario = document.createElement ('h2');
                summary.appendChild (title_scenario);
                title_scenario.innerHTML = quetes[0].scenario;


                var list = document.createElement ('ul');
                summary.appendChild (list);

                for (let i = 0; i < quetes.length; i++) {

                    var quest = document.createElement ('li');
                    list.appendChild (quest);
                    quest.id = 'quest'+i;
                    quest.className = 'quest_n'+i;
                    quest.innerHTML = quetes[i].nom;


                    var description = document.createElement ('p');
                    quest.appendChild (description);
                    description.innerHTML = quetes[i].descriptif;

                }

            } else {

                var table = [];

                for (let i = 0; i < quetes.length; i++) {


                    if (document.getElementById('id_event').innerHTML == quetes[i].id_select) {

                        table.push(quetes[i].dialogues);


                        if (table2.indexOf(quetes[i].dialogues) === -1) {

                            push(quetes[i].dialogues);

                        }

                    }

                    console.log(table2);

                    document.getElementById('bouton_dialogue').addEventListener("click", function () {

                        if (table2.length === 3) {
                            document.getElementById('second_page').style.display = "none";
                            document.getElementById('credits').style.display = "block";
                        }

                    })

                }

                document.getElementById('btn_labo').addEventListener('click',function () {

                    for(let i = 0; i<quetes.length; i++) {

                        document.getElementById('title_labo-room'+i).innerHTML = quetes[i].titre;
                        document.getElementById('text_labo-room'+i).innerHTML = quetes[i].descriptif;

                    }

                });

                if (table != "") {

                    document.getElementById('dialogue').innerHTML = table[0];

                }
                else {
                        document.getElementById('dialogue').innerHTML = quetes[0].presentations;
                    }


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


        });
