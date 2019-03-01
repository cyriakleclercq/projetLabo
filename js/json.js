function ajaxRequest()
{

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            console.log(this.responseText);
            var objQuete = this.responseText;

        }

        let quetes = JSON.parse(objQuete);


        document.getElementById('').innerHTML = quetes;


    };


}

document.getElementById('btn').addEventListener("click", ajaxRequest);



