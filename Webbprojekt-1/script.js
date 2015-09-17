var changeDiv = function(name) {
    var div = document.getElementById(name);

    if(div.className !== "active") {
        var prev = document.getElementsByClassName("active")[0];
        prev.style.display = "none";
        prev.className="";
        div.className = "active";
        div.style.display = "inline-block";
    }
}

var submitCode = function(name) {
    var input = document.getElementById(name + "In").value;
    var output = document.getElementById(name + "Out");
    if(name === 'html') {
        output.innerHTML = input;
    }
    else if(name === 'css') {
        output.innerHTML += "<style scoped> #cssOut " + input + "</style>";
    }
    else if(name === 'js') {
        output.innerHTML = "<p>" + eval(input) + "</p>";
    }
    else if(name === 'sql') {
        if(input === "SELECT 'Hello World!';") {
            output.innerHTML = "<p>Hello World!</p>";
        }
    }
}
