function display_game() {

document.getElementById('title_story4').addEventListener('click',function () {

   document.getElementById('quest').style.display = 'none';
   document.getElementById('game').style.display = 'block';
   document.getElementById('game1').innerHTML = 'Apprendre à trier !';
   document.getElementById('game2').innerHTML = 'Jeu du memory : special heartstone';
   document.getElementById('game3').innerHTML = 'QCM : êtes-vous prêt ?!';

})}

var game_0 = document.getElementById('game1');
var game_1 = document.getElementById('game2');
var game_2 = document.getElementById('game3');


game_0.addEventListener('click', function () {

   document.location.href = '../game/Jeu dechetterie(jquery)/index.html';

});

game_1.addEventListener('click', function () {

   document.location.href = '../game/jeu_MEMORY-master/memory.html';

});

game_2.addEventListener('click', function () {

   document.location.href = '../game/qcm_choix_multiple-master/index.html';

});


