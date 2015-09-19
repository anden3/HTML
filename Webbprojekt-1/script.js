var changeDiv = function (name) {
    //Sparar elementet med id "name" i div
    var div = document.getElementById(name);
    var menuItem = document.getElementById(name + "-menu");

    //Om divs klass inte är "active", så göms den föregående diven, och den nya visas
    if (div.className !== "active") {
        var prev = document.getElementsByClassName("active")[0];
        var prevMenuItem = document.getElementById(prev.id + "-menu");
        prev.style.display = "none";
        prev.className = "";
        prevMenuItem.style.color = "black";
        div.className = "active";
        div.style.display = "inline-block";
        menuItem.style.color = "blue";
    }
};
