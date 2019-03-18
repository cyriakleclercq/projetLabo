function ajaxRequest0(params)
{

    var RequestURL = "../quetes.php" ;


    var id_interaction="",id_batiment="";

    if(params)
    {

            id_interaction = params.id_interaction;
            document.getElementById('id_interaction').innerHTML = id_interaction;

            id_batiment = params.id_batiment;
            document.getElementById('id_bat').innerHTML = id_batiment;
            $id_bat = id_batiment;




    }

    RequestURL+="?id_batiment="+id_batiment+"&id_interaction="+id_interaction;



    var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                var objQuete = this.responseText;

            }

            let quetes = JSON.parse (objQuete);
            console.log (quetes);

        if (params) {

            if (params.affichage == 'quetes') {


                $resume = document.getElementById ('resume0');


                $titre_map = document.createElement ('h2');
                $resume.appendChild ($titre_map);
                $titre_map.innerHTML = quetes[0].scenario;


                $list = document.createElement ('ul');
                $resume.appendChild ($list);

                for (let $i = 0; $i < quetes.length; $i++) {

                    $titre_quete = document.createElement ('li');
                    $list.appendChild ($titre_quete);
                    $titre_quete.id = 'title_quest'+$i;
                    $titre_quete.className = 'title_quest'+$i;
                    $titre_quete.innerHTML = quetes[$i].nom;


                    $desc_quetes = document.createElement ('p');
                    $titre_quete.appendChild ($desc_quetes);
                    $desc_quetes.innerHTML = quetes[$i].descriptif;

                }

            } else {

                var table = [];

                for (let i = 0; i < quetes.length; i++) {


                    if (document.getElementById('id_interaction').innerHTML == quetes[i].id_select) {

                        table.push(quetes[i].dialogues);

                    }
                }

                if (table != "") {

                    document.getElementById('dialogue').innerHTML = table[0];

                }
                else {
                        document.getElementById('dialogue').innerHTML = quetes[0].presentations;
                    }


                    document.getElementById('avatar').style.backgroundImage = "url('../image/" + quetes[0].skin + "')";

                    document.getElementById('dialogue_page').style.backgroundImage = "url('../image/" + quetes[0].background + "')";

            }

            table = [];

        }};

        xhttp.open('GET', RequestURL) ;

        xhttp.responseType = 'text';
        xhttp.send();
};

        ajaxRequest0({
            'id_batiment' : $('#id_bat').html(),
            'id_interaction' : $('#id_interaction').html(),
            'affichage' : 'quetes',


        });
