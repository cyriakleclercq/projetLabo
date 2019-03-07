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

        $quest = document.getElementById('quest');

        for(let $i = 0;$i < quetes.length; $i=$i+3)
        {

            $glo_quetes = document.createElement('div');
            $quest.appendChild($glo_quetes);
            $glo_quetes.className = 'glo_quetes';


            $titre = document.createElement('h2');
            $glo_quetes.appendChild($titre);
            $titre.id = 'quest'+ $i ;
            $titre.innerHTML = quetes[$i].batiments;

                $ul = document.createElement('ul');
                $ul.id = 'ul'+$i;
                $glo_quetes.appendChild($ul);

                for(let $j= $i; $j< $i+3; $j++) {
                    $li = document.createElement('li');
                    $ul.appendChild($li);
                    $li.innerHTML= quetes[$j].nom;
                }

        }


        random();

    };

    xhttp.open('GET', RequestURL) ;

    xhttp.responseType = 'text';
    xhttp.send();
}

ajaxRequest();

