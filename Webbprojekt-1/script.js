var changeDiv = function (name) {
    //Sparar elementet med id "name" i div
    var div = document.getElementById(name),
        menuItem = document.getElementById(name + "-menu"),
        hiddenMenu = document.getElementById("nav"),
        hiddenMenuList = document.getElementById("navList"),
        prog = document.getElementById("prog");

    //Om divs klass inte är "active", så göms den föregående diven, och den nya visas
    if (div.className !== "active") {
        var prev = document.getElementsByClassName("active")[0],
            prevMenuItem = document.getElementById(prev.id + "-menu");

        prev.style.display = "none";
        prev.classList.remove("active");
        prevMenuItem.style.color = "black";
        prevMenuItem.style.opacity = 0.54;

        div.classList.add("active");
        div.style.display = "inline-block";
        menuItem.style.color = "blue";
        menuItem.style.opacity = 1;
    }

    if (div.id === "ch2" || div.id === "ch4" || div.id === "ch5") {
        nav.style.display = "inline-block";
        prog.style.display = "block";

        var divIndex = [],
            longDiv = div.id.substring(2, 3);
        divIndex = document.getElementsByClassName(div.id + " anchor");
        hiddenMenuList.innerHTML = "";

        for(var i = 1; i <= divIndex.length; i++) {
            hiddenMenuList.innerHTML += '<li><a href="#' + String(longDiv) + String(i) + '">' + divIndex[i - 1].id + '</a></li><br>';
        }
    }

    else {
        hiddenMenu.style.display = "none";
        prog.style.display = "none";
    }

    scrolling = window.addEventListener("scroll", scrollPos);
};

var docHeight = function () {
    var body = document.body,
        html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight);
}

var scrollPos = function () {
    var prog = document.getElementById("prog"),
        max = docHeight() - window.innerHeight;

    prog.setAttribute("value", window.scrollY);
    prog.setAttribute("max", max);
}

var addEventList = function (i) {
    document.getElementById("ch" + i + "-menu").addEventListener("click", function () {
        changeDiv("ch" + i);
    });
};

for (var i = 0; i <= 6; i++) {
    addEventList(i);
}
