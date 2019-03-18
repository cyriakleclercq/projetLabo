var RequestURL = "../quetes.php" ;
var quest = document.getElementById('quest');

function ajaxRequest()
{

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var objQuete = this.responseText;

        }

        let quetes = JSON.parse(objQuete);
        console.log(quetes);

        quest = document.getElementById('quest');

        for(let i = 0;i < quetes.length; i=i+3)
        {

            var scenario_resume = document.createElement('div');
            quest.appendChild(scenario_resume);
            scenario_resume.className = 'scenario_sum';


            var title = document.createElement('h2');
            scenario_resume.appendChild(title);
            title.id = 'quest'+ i ;
            title.innerHTML = quetes[i].scenario;

                var ul = document.createElement('ul');
                ul.id = 'ul'+i;
                scenario_resume.appendChild(ul);

                for(let j= i; j< i+3; j++) {
                    var li = document.createElement('li');
                    ul.appendChild(li);
                    li.innerHTML= quetes[j].nom;
                    li.style.listStyle = 'none' ;
                }

        }


        scene();

    };

    xhttp.open('GET', RequestURL) ;

    xhttp.responseType = 'text';
    xhttp.send();
}

ajaxRequest();

