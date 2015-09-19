var changeDiv = function (name) {
    //Sparar elementet med id "name" i div
    var div = document.getElementById(name);
    var menuItem = document.getElementById(name + "-menu");

    //Om divs klass inte är "active", så göms den föregående diven, och den nya visas
    if (div.className !== "active") {
        var prev = document.getElementsByClassName("active")[0];
        var prevMenuItem = document.getElementById(prev.id + "-menu");

        prev.style.display = "none";
        prev.classList.remove("active");
        prevMenuItem.style.color = "black";
        prevMenuItem.style.opacity = 0.54;

        div.classList.add("active");
        div.style.display = "inline-block";
        menuItem.style.color = "blue";
        menuItem.style.opacity = 1;
    }
};

var addEventList = function (i) {
    document.getElementById("ch" + i + "-menu").addEventListener("click", function () {
        changeDiv("ch" + i);
    });
};

for (var i = 0; i <= 6; i++) {
    addEventList(i);
}
