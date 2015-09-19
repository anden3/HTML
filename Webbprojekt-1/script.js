var changeDiv = function (name) {
    //Sparar flera element till variabler.
    var div = document.getElementById(name),
        menuItem = document.getElementById(name + "-menu"),
        hiddenMenu = document.getElementById("nav"),
        hiddenMenuList = document.getElementById("navList"),
        prog = document.getElementById("prog");

    //Om divs klass inte är "active", så göms den föregående diven, och den nya visas.
    if (div.className !== "active") {
        var prev = document.getElementsByClassName("active")[0],
            prevMenuItem = document.getElementById(prev.id + "-menu");

        //De gamla objekten återställs.
        prev.style.display = "none";
        prev.classList.remove("active");
        prevMenuItem.style.color = "black";
        prevMenuItem.style.opacity = 0.54;

        //Och de nya objekten aktiveras.
        div.classList.add("active");
        div.style.display = "inline-block";
        menuItem.style.color = "blue";
        menuItem.style.opacity = 1;
    }

    //Detta ser till att undermenyn och framstegsmätaren bara visas när de behövs.
    if (div.id === "ch2" || div.id === "ch4" || div.id === "ch5") {
        nav.style.display = "inline-block";
        prog.style.display = "block";

        //Detta gör en lista över alla underrubriker i en div.
        var divIndex = [],
            longDiv = div.id.substring(2, 3);
        divIndex = document.getElementsByClassName(div.id + " anchor");
        hiddenMenuList.innerHTML = "";

        //Detta lägger till underrubrikerna till undermenyn.
        for (var i = 1; i <= divIndex.length; i++) {
            hiddenMenuList.innerHTML += '<li><a href="#' + String(longDiv) + String(i) + '">' + divIndex[i - 1].id + '</a></li><br>';
        }
    } else {
        //Om inte undermenyn och framstegsmätaren behövs, så göms dem.
        hiddenMenu.style.display = "none";
        prog.style.display = "none";
    }

    //Denna lyssnar efter skrollhändelser, och kallar funktionen för att uppdatera framstegsmätaren.
    scrolling = window.addEventListener("scroll", scrollPos);
};

var docHeight = function () {
    //Denna funktion ger tillbaka längden på dokumentet i pixlar.
    var body = document.body,
        html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
}

var scrollPos = function () {
    //Denna funktion uppdaterar framstegsmätaren.
    var prog = document.getElementById("prog"),
        max = docHeight() - window.innerHeight;

    prog.setAttribute("value", window.scrollY);
    prog.setAttribute("max", max);
}

var addEventList = function (i) {
    //Denna funktion lägger till händelselyssnare för varje menyknapp.
    document.getElementById("ch" + i + "-menu").addEventListener("click", function () {
        changeDiv("ch" + i);
    });
};

//Denna loop kallar funktionen ovan flera gånger, en gång för varje knapp.
for (var i = 0; i <= 6; i++) {
    addEventList(i);
}
