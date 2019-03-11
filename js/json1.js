var RequestURL = "../quetes.php" ;


function ajaxRequest1()
{


    RequestURL+="?id_interaction="+document.getElementById('id_interaction').innerHTML;
    $id_bat = $('#id_bat').html();
    $id_interaction = $('#id_interaction').html();


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var objQuete = this.responseText;

        }

        let quetes = JSON.parse(objQuete);

        console.log(quetes);
        console.log($id_bat);
        console.log($id_interaction);



        if($id_bat != $id_interaction) {

            document.getElementById('dialogue').innerHTML = quetes[0].presentations;

        } else {

            document.getElementById('dialogue').innerHTML = quetes[0].dialogues;
        }



       document.getElementById('avatar').style.backgroundImage = "url('../image/"+quetes[0].skin+"')";

       document.getElementById('global').style.backgroundImage = "url('../image/"+quetes[0].background+"')";

    };
    xhttp.open('GET', RequestURL) ;

    xhttp.responseType = 'text';
    xhttp.send();
};

ajaxRequest1();
