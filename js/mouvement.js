window.onload = function() {

    movMeId = document.getElementById("perso");
    movMeId.style.top = "80px";
    movMeId.style.left = "80px";

    document.onmousedown = coordinates;
    document.onmouseup = mouseup;

    function coordinates(e) {
        if (e == null) {
            e = window.event;
        }

        // sous IE e.srcElement définira l'élément cible alors que pour Firefox ce sera e.target
        // Ces deux propriétés renvoient l'élément HTML pour lequel s'est produit l'événement.

        var sender = (typeof (window.event) != "undefined") ? e.srcElement : e.target;

        if (sender.id == "perso") {
            mouseover = true;
            pleft = parseInt(movMeId.style.left);
            ptop = parseInt(movMeId.style.top);
            xcoor = e.clientX;
            ycoor = e.clientY;
            document.onmousemove = moveImage;
            return false;
        }
        return false;
    }

    function moveImage(e) {
        if (e == null) {
            e = window.event;
        }
        movMeId.style.left = pleft + e.clientX - xcoor + "px";
        movMeId.style.top = ptop + e.clientY - ycoor + "px";
        return false;
    }

    function mouseup(e) {
        document.onmousemove = null;
    }
};