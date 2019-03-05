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

     for(let $i = 0; $i <= 4 ; $i++) {

         $ ("#quest" + [$i]).click (function () {

             if($i === 0) {

                 resume0()
             }

             if($i === 1) {

                 resume1();
             }

             })}


        function resume0() {


            $resume = document.getElementById ('resume0');
            $titre_map = document.createElement ('h2');
            $resume.appendChild ($titre_map);
            $titre_map.innerHTML = quetes[0].titre;


            $list = document.createElement ('ul');
            $titre_map.appendChild ($list);


            $titre_quete = document.createElement ('li');
            $list.appendChild ($titre_quete);
            $titre_quete.id = 'test';
            $titre_quete.innerHTML = quetes[0].nom;


            $desc_quetes = document.createElement ('p');
            $titre_quete.appendChild ($desc_quetes);
            $desc_quetes.innerHTML = quetes[0].descriptif;


        }



            function resume1() {
                $resume = document.getElementById ('resume1');

                $titre_map = document.createElement ('h2');
                $resume.appendChild ($titre_map);
                $titre_map.innerHTML = quetes[1].titre;


                $list = document.createElement ('ul');
                $titre_map.appendChild ($list);


                $titre_quete = document.createElement ('li');
                $list.appendChild ($titre_quete);
                $titre_quete.id = 'test';
                $titre_quete.innerHTML = quetes[1].nom;


                $desc_quetes = document.createElement ('p');
                $titre_quete.appendChild ($desc_quetes);
                $desc_quetes.innerHTML = quetes[1].descriptif;


            }




        random();
    };
        xhttp.open('GET', RequestURL) ;

        xhttp.responseType = 'text';
        xhttp.send();
};

    ajaxRequest();
