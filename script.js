function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "sidebar") {
        x.className += " responsive";
    } else {
        x.className = "sidebar";
    }
}
