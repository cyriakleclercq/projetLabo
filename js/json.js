var RequestURL = "../quetes.php" ;
$quest = document.getElementById('quest');

function ajaxRequest()
{

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var objQuete = this.responseText;

        }

        let quetes = JSON.parse(objQuete);
        console.log(quetes);


        for(let $i = 0;$i < quetes.length; $i++)
        {

            $glo_quetes = document.createElement('div');
            $quest.appendChild($glo_quetes);
            $glo_quetes.className = 'glo_quetes';


            $titre = document.createElement('h2');
            $glo_quetes.appendChild($titre);
            $titre.id = 'quest'+ $i ;
            $titre.innerHTML = quetes[$i].titre;


            $ul = document.createElement('ul');
            $glo_quetes.appendChild($ul);


            $desc_quetes0 = document.createElement('li');
            $ul.appendChild($desc_quetes0);
            $desc_quetes0.innerHTML = quetes[$i].descriptif;

        }

        random();

    };

    xhttp.open('GET', RequestURL) ;

    xhttp.responseType = 'text';
    xhttp.send();
}

ajaxRequest();

