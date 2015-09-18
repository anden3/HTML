var changeDiv = function(name) {
    //Sparar elementet med id "name" i div
    var div = document.getElementById(name);

    //Om divs klass inte är "active", så göms den föregående diven, och den nya visas
    if(div.className !== "active") {
        var prev = document.getElementsByClassName("active")[0];
        prev.style.display = "none";
        prev.className="";
        div.className = "active";
        div.style.display = "inline-block";
    }
}

var submitCode = function(name) {
    //För att spara en massa utrymme, så sparas input och output som "namn + "In/Out"". T.ex. om namn = "html", så är input = "htmlIn"
    var input = document.getElementById(name + "In").value;
    var output = document.getElementById(name + "Out");
    if(name === 'html') {
        //Detta lägger bara input inuti diven
        output.innerHTML = input;
    }
    else if(name === 'css') {
        //Detta lägger input inuti en style-tag i diven
        output.innerHTML += "<style scoped> #cssOut " + input + "</style>";
    }
    else if(name === 'js') {
        //Detta lägger input inuti en p-tag och en eval() funktion.
        output.innerHTML = "<p>" + eval(input) + "</p>";
    }
    else if(name === 'sql') {
        //Detta kollar om input är det som skulle behövas för att få tillbaka "Hello World!"; om det är, så visas "Hello World!" inuti en p-tag.
        if(input === "SELECT 'Hello World!';") {
            output.innerHTML = "<p>Hello World!</p>";
        }
    }
}
