// Tableau poubelle vide :

var dechets = ["reste de ravioli", "couche culotte", "papier souillé", "reste alimentaire",
    "sachet en plastique", "gobelet plastique", "couverts plastique", "poussière", "journal", "magazine", "catalogue publicitaire",
    "flyer", "affiche en papier", "journaux programmes tv", "prospectus", "livre", "bouteille de vin", "pot de confiture",
    "bocal de conserve", "bouteille de vodka", "petit pot pour bébé", "biere", "bouteille de wiskhy", "bouteille d'huile",
    "bouteille de jus de fruits", "bouteille d'eau", "flacon de gel douche", "bidon de lessive", "boite de conserve", "canette de soda",
    "briquette de jus d'orange", "boite à gateaux"];


var trash_jaune = ["bouteille de jus de fruits", "bouteille d'eau", "flacon de gel douche", "bidon de lessive",
    "boite de conserve", "canette de soda", "briquette de jus d'orange", "boite à gateaux"];

var trash_verte = ["bouteille de vin", "pot de confiture", "bocal de conserve", "bouteille de vodka", "petit pot pour bébé",
    "biere", "bouteille de wiskhy", "bouteille d'huile"];

var trash_bleue = ["journal", "magazine", "catalogue publicitaire", "flyer", "affiche en papier",
    "journaux programmes tv", "prospectus", "livre"];

var trash_marron = ["reste de ravioli", "couche culotte", "papier souillé", "reste alimentaire",
    "sachet en plastique", "gobelet plastique", "couverts plastique", "poussière"];


// Déchet aléatoire:

var dechets_random = dechets[Math.floor(Math.random() * dechets.length)];

//  Dechet aléatoire dans la div : 

document.getElementById('dechet').innerHTML = dechets_random;

var score = 0;

// fonction reset :
function reset() {
    dechets_random = dechets[Math.floor(Math.random() * dechets.length)];
    document.getElementById('dechet').innerHTML = dechets_random;
    document.getElementById('true').innerHTML = '';
    document.getElementById('false').innerHTML = '';

}

// Fonction reprendre à 0 :

var goodAnswer = 0;

function ano() {
    if (score === 10) {
        alert('Sur vos 10 essais, vous avez eu' + ' ' + goodAnswer + ' ' + 'bonne(s) réponse(s)');
        document.location.reload(true);
    }
};


// fonction poubelle bleue :


document.getElementById('trash_b').addEventListener("click",
    function () {

        var test = 0;

        for (var i = 0; i < trash_bleue.length; i++) {

            if (dechets_random == trash_bleue[i]) {

                test = 1;
                goodAnswer = goodAnswer + 1;


            }
        }


        if (test == 1) {
            document.getElementById('true').innerHTML = dechets_random;
            document.getElementById('false').innerHTML = '';
            score = score + 1;
            console.log(score);
            setTimeout(reset, 2000);
            ano();
        }
        else {
            document.getElementById('false').innerHTML = dechets_random + ' ' + "ne va pas dans cette poubelle !";
            document.getElementById('true').innerHTML = '';
            score = score + 1;
            console.log(score);
            setTimeout(reset, 1000);
            ano();
        }

    }
);


// fonction poubelle marron :


document.getElementById('trash_br').addEventListener("click",
    function () {

        var test1 = 0;

        for (var z = 0; z < trash_marron.length; z++) {

            if (dechets_random == trash_marron[z]) {

                test1 = 1;
                goodAnswer = goodAnswer + 1;

            }
        }

        if (test1 == 1) {

            document.getElementById('true').innerHTML = dechets_random;
            document.getElementById('false').innerHTML = '';

            score = score + 1;
            console.log(score);
            setTimeout(reset, 2000);
            ano();
        }

        else {
            document.getElementById('false').innerHTML = dechets_random + ' ' + 'ne va pas dans cette poubelle !';
            document.getElementById('true').innerHTML = '';
            score = score + 1;
            console.log(score);
            setTimeout(reset, 1000);
            ano();
        }

    });


// Fonction pouvelle verte :

document.getElementById('trash_g').addEventListener("click",
    function () {

        var test2 = 0;

        for (var e = 0; e < trash_verte.length; e++) {
            if (dechets_random == trash_verte[e]) {

                test2 = 1;
                goodAnswer = goodAnswer + 1;

            }
        }

        if (test2 == 1) {
            document.getElementById('true').innerHTML = dechets_random;
            document.getElementById('false').innerHTML = '';

            score = score + 1;
            console.log(score);
            setTimeout(reset, 2000);
            ano();
        }

        else {
            document.getElementById('false').innerHTML = dechets_random + ' ' + 'ne va pas dans cette poubelle !';
            document.getElementById('true').innerHTML = '';
            score = score + 1;
            console.log(score);
            setTimeout(reset, 1000);
            ano();

        }

    });


// fonction poubelle jaune :


document.getElementById('trash_y').addEventListener("click",
    function () {

        test3 = 0;

        for (var r = 0; r < trash_jaune.length; r++) {
            if (dechets_random == trash_jaune[r]) {

                test3 = 1;
                goodAnswer = goodAnswer + 1;

            }
        }

        if (test3 == 1) {

            document.getElementById('true').innerHTML = dechets_random;
            document.getElementById('false').innerHTML = '';

            score = score + 1;
            console.log(score);
            setTimeout(reset, 2000);
            ano();
        }

        else {
            document.getElementById('false').innerHTML = dechets_random + ' ' + 'ne va pas dans cette poubelle !';
            document.getElementById('true').innerHTML = '';
            score = score + 1;
            console.log(score);
            setTimeout(reset, 1000);
            ano();
        }

    });

document.getElementById('btn_quit').addEventListener('click',function () {
    document.location.href= '../../php/index.php' ;
});




