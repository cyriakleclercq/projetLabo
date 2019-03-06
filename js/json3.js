var RequestURL = "../quetes.php" ;


function ajaxRequest()
{

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var objQuete = this.responseText;

        }

        let quetes = JSON.parse(objQuete);
        console.log(quetes);



        $resume = document.getElementById ('resume3');

        $titre_map = document.createElement ('h2');
        $resume.appendChild ($titre_map);
        $titre_map.innerHTML = quetes[3].titre;


        $list = document.createElement ('ul');
        $resume.appendChild ($list);


        $titre_quete = document.createElement ('li');
        $list.appendChild ($titre_quete);
        $titre_quete.id = 'test';
        $titre_quete.innerHTML = quetes[3].nom;


        $desc_quetes = document.createElement ('p');
        $titre_quete.appendChild ($desc_quetes);
        $desc_quetes.innerHTML = quetes[3].descriptif;




        $titre_quete1 = document.createElement ('li');
        $list.appendChild ($titre_quete1);
        $titre_quete1.id = 'test1';
        $titre_quete1.innerHTML = quetes[11].nom;


        $desc_quetes1 = document.createElement ('p');
        $titre_quete1.appendChild ($desc_quetes1);
        $desc_quetes1.innerHTML = quetes[11].descriptif;



        $titre_quete2 = document.createElement ('li');
        $list.appendChild ($titre_quete2);
        $titre_quete2.id = 'test2';
        $titre_quete2.innerHTML = quetes[12].nom;


        $desc_quetes2 = document.createElement ('p');
        $titre_quete2.appendChild ($desc_quetes2);
        $desc_quetes2.innerHTML = quetes[12].descriptif;



    };
    xhttp.open('GET', RequestURL) ;

    xhttp.responseType = 'text';
    xhttp.send();
};

ajaxRequest();
