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

        if (i == 1){

            $glo_quetes = document.createElement('div');
            $quest.appendChild($glo_quetes);
            $glo_quetes.className = 'glo_quetes';


            $titre = document.createElement('h2');
            $glo_quetes.appendChild($titre);
            $titre.id = $i[1] ;
            $titre.innerHTML = quetes[$i[1]].titre;


            $ul = document.createElement('ul');
            $glo_quetes.appendChild($ul);

            $desc_quetes0 = document.createElement('li');
            $ul.appendChild($desc_quetes0);
            $desc_quetes0.innerHTML = quetes[$i[1]].descriptif;

        }

        if (i == 2){

            $glo_quetes = document.createElement('div');
            $quest.appendChild($glo_quetes);
            $glo_quetes.className = 'glo_quetes';


            $titre = document.createElement('h2');
            $glo_quetes.appendChild($titre);
            $titre.id = $i[2] ;
            $titre.innerHTML = quetes[$i[2]].titre;


            $ul = document.createElement('ul');
            $glo_quetes.appendChild($ul);

            $desc_quetes0 = document.createElement('li');
            $ul.appendChild($desc_quetes0);
            $desc_quetes0.innerHTML = quetes[$i[2]].descriptif;

        }

        if (i == 3){

            $glo_quetes = document.createElement('div');
            $quest.appendChild($glo_quetes);
            $glo_quetes.className = 'glo_quetes';


            $titre = document.createElement('h2');
            $glo_quetes.appendChild($titre);
            $titre.id = $i[3] ;
            $titre.innerHTML = quetes[$i[3]].titre;


            $ul = document.createElement('ul');
            $glo_quetes.appendChild($ul);

            $desc_quetes0 = document.createElement('li');
            $ul.appendChild($desc_quetes0);
            $desc_quetes0.innerHTML = quetes[$i[3]].descriptif;

        }

        if (i == 4){

            $glo_quetes = document.createElement('div');
            $quest.appendChild($glo_quetes);
            $glo_quetes.className = 'glo_quetes';


            $titre = document.createElement('h2');
            $glo_quetes.appendChild($titre);
            $titre.id = $i[4] ;
            $titre.innerHTML = quetes[$i[4]].titre;


            $ul = document.createElement('ul');
            $glo_quetes.appendChild($ul);

            $desc_quetes0 = document.createElement('li');
            $ul.appendChild($desc_quetes0);
            $desc_quetes0.innerHTML = quetes[$i[4]].descriptif;

        }

        if (i == 5){

            $glo_quetes = document.createElement('div');
            $quest.appendChild($glo_quetes);
            $glo_quetes.className = 'glo_quetes';


            $titre = document.createElement('h2');
            $glo_quetes.appendChild($titre);
            $titre.id = $i[5] ;
            $titre.innerHTML = quetes[$i[5]].titre;


            $ul = document.createElement('ul');
            $glo_quetes.appendChild($ul);

            $desc_quetes0 = document.createElement('li');
            $ul.appendChild($desc_quetes0);
            $desc_quetes0.innerHTML = quetes[$i[5]].descriptif;

        }




    };
        xhttp.open('GET', RequestURL) ;

        xhttp.responseType = 'text';
        xhttp.send();
    }

    ajaxRequest();
