var quizz=[{question:"Qui désigne le prénom 'Zelda' dans le jeu du même nom ?" ,value:"La reine",rep1:"Le personnage Principal",rep2:"La reine"},


    {question:"Quelle est la couleur du cheval Blanc D'Henri IV",value:"Noir",rep1:"Blanc",rep2:"Noir"},


    {question:"Qui est le père de la musique électronique ?",value:"Jean-michel Jarr",rep1:"Jean-michel Jarre",rep2:"David Guetta"},


    {question:"Qui a gagné la coupe du monde de foot en 2018 ?",value:"la France",rep1:"La belgique",rep2:"La France"},


    {question:"Quel mode de jeux vidéos est en plein essort depuis un moment ?",value:"Battle Royale",rep1:"MOBA",rep2:"Battle Royale"},


    {question:"",value:"",rep1:"",rep2:""},


    {question:"",value:"",rep1:"",rep2:""},


    {question:"",value:"",rep1:"",rep2:""},


    {question:"",value:"",rep1:"",rep2:""},


    {question:"",value:"",rep1:"",rep2:""}];



$("#page1").show();

$("#page2").hide();

var scoreU=[];

var bon = [];

var mauvais = [];

var score=0;

var i= 0;

var c=0;

$('#question').text(quizz[0].question);

$('#reponse_1').text(quizz[0].rep1);

$('#reponse_2').text(quizz[0].rep2);

for (let s=1;s<=2;s++){

    $('#reponse_'+s).click(function () {

            scoreU.push($('#reponse_'+s).text()+"<br>");

        if (quizz[i].value===$('#reponse_'+s).text()){

            bon.push("<dd>" + quizz[i].question + "</dd>" + $('#reponse_'+s).text()+"<br>");

            score++;

        } else {

            mauvais.push("<dd>" + quizz[i].question + "<dd>" +"<ee>" + $('#reponse_'+s).text()+ "</ee>" + "<br>" + "<br>" + "<gg> la bonne réponse étant : </gg>" + "<ff>" + quizz[i].value + "</ff>" + "<br>");

        }


            if (c === 9){

                $("#page1").remove();

                $("#page2").slideDown(2000);

                $("#answer").text(score);

                $('#breponse').html("<br>"+bon);

                $('#mreponse').html("<br>"+mauvais);


            }

        if (i <= 10) {

        i++;

            $('#page1').hide();

            $('#page1').slideDown(1500);

            $('#question').html(quizz[i].question);

            $('#reponse_1').html(quizz[i].rep1);

            $('#reponse_2').html(quizz[i].rep2);

        c++;

        }

    }

    )}

    $("#replay").click(function () {

        location.reload();
    });
