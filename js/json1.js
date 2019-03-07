var RequestURL = "../quetes.php" ;


function ajaxRequest()
{


    RequestURL+="?id_interaction="+document.getElementById('id_bat').innerHTML;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var objQuete = this.responseText;

        }

        let quetes = JSON.parse(objQuete);
        console.log(quetes);

        $resume = document.getElementById ('resume0');


        $titre_map = document.createElement ('h2');
        $resume.appendChild ($titre_map);
        $titre_map.innerHTML = quetes[0].batiments;


        $list = document.createElement ('ul');
        $resume.appendChild ($list);

        for (let $i = 0; $i < quetes.length; $i++) {

            $titre_quete = document.createElement ('li');
            $list.appendChild ($titre_quete);
            $titre_quete.id = 'test';
            $titre_quete.innerHTML = quetes[$i].nom;


            $desc_quetes = document.createElement ('p');
            $titre_quete.appendChild ($desc_quetes);
            $desc_quetes.innerHTML = quetes[$i].descriptif;

        }

    };
    xhttp.open('GET', RequestURL) ;

    xhttp.responseType = 'text';
    xhttp.send();
};

ajaxRequest();
