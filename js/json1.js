var RequestURL = "../quetes.php" ;


function ajaxRequest()
{


    RequestURL+="?id_interaction="+document.getElementById('id_interaction').innerHTML;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var objQuete = this.responseText;

        }

        let quetes = JSON.parse(objQuete);
        console.log(quetes);

       document.getElementById('dialogue').innerHTML = quetes.dialogues;

       document.getElementById('avatar').src = quetes.skin;

       document.getElementById('global').src = quetes.background;

    };
    xhttp.open('GET', RequestURL) ;

    xhttp.responseType = 'text';
    xhttp.send();
};

ajaxRequest();
