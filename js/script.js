function openmenu() {
    var x = document.getElementById("navigation");

    if (x.className === "navigation") {
        x.className += " menujs";
        document.getElementById("nav-toggle").innerHTML = "&cross;";
    } 
    else {
        x.className = "navigation";
        document.getElementById("nav-toggle").innerHTML = "&#9776;";
    } 

}