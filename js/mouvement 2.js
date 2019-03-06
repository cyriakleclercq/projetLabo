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

/*
window.onload = function() {

    batiment1 = document.getElementById("cadre0");
    movMeId = document.getElementById("perso");
    movMeId.style.top = "135px";
    movMeId.style.left = "200px";

    document.onclick = coordinates;


    function coordinates(e) {
        if (e == null) {
            e = window.event;
        }

        var sender = (typeof (window.event) != "undefined") ? e.srcElement : e.target;

        if (sender.id == "perso") {
            pleft = parseInt(movMeId.style.left);
            ptop = parseInt(movMeId.style.top);
            xcoor = e.clientX;
            ycoor = e.clientY;
            document.onclick = moveImage;
            return false;
        }
        return false;
    }

    function moveImage(e) {
        if (e == null) {
            e = window.event;
        }
        movMeId.style.left = pleft + batiment1;
        movMeId.style.top = ptop + batiment1;
        return false;
    }

};
*/
