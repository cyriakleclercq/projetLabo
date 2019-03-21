var RequestURL = "../php/requestSQL.php" ;
var title_story = document.getElementById('quest');

function ajaxRequest()
{

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var objQuete = this.responseText;

        }

        let quetes = JSON.parse(objQuete);
        console.log(quetes);

        title_story = document.getElementById('quest');

        for(let i = 0;i < quetes.length; i=i+3)
        {

            // Div pour regrouper et afficher scenarios + quetes

            var scenario_resume = document.createElement('div');
            title_story.appendChild(scenario_resume);
            scenario_resume.className = 'scenario_sum';


            // Div pour afficher chaque titre de scenario
            var title = document.createElement('h2');
            scenario_resume.appendChild(title);
            title.id = 'title_story'+ i ;
            title.innerHTML = quetes[i].scenario;

/*
                // Liste pour afficher chaque quête composant un scenario
                var ul = document.createElement('ul');
                ul.id = 'ul'+i;
                scenario_resume.appendChild(ul);

                for(let j= i; j< i+3; j++) {
                    var li = document.createElement('li');
                    ul.appendChild(li);
                    li.innerHTML= quetes[j].nom;
                    li.style.listStyle = 'none' ;
                }
*/
        }


        scene();

    };

    xhttp.open('GET', RequestURL) ;

    xhttp.responseType = 'text';
    xhttp.send();
}

ajaxRequest();

