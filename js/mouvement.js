window.addEventListener(onclick,false);

function onclick() {

    var t = parseInt(document.getElementById('perso').style.top);
    if (t < 620) {
        t = t + 10;
        document.getElementById('perso').style.top = t + 'px';
    }

    else if (t)
    {
        var t = parseInt(document.getElementById('perso').style.top);
        if (t>5) {
            t = t - 10;
            document.getElementById('perso').style.top = t + 'px';
        }
    }

    else if (t) {
        var t = parseInt(document.getElementById('perso').style.left);
        if (t > 0) {
            t = t - 10;
            document.getElementById('perso').style.left = t + 'px';
        }

        else if (t) {
            var t = parseInt(document.getElementById('perso').style.left);
            if (t < 872) {
                t = t + 10;
                document.getElementById('perso1').style.left = t + 'px';
            }
        }

    }
}
