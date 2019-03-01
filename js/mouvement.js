var perso = document.querySelector('perso');
var posInitial = {x:0, y:0};
var pos = posInitial;
var posFinal = {x:200, y:100};

var dx = (posFinal.x - posInitial.x) / (posFinal.y - posInitial.y);
var dy = (posFinal.y - posInitial.y) / (posFinal.x - posInitial.x);

var interval = setInterval(function(){
    if(pos.x > posFinal.x || pos.y > posFinal.y)clearInterval(interval);
    pos.x+=dx; pos.y+=dy;
    perso.style.left = pos.x +'px';
    perso.style.top = pos.y + 'px';
}, 5);
