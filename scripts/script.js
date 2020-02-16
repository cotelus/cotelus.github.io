function showBurguerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
    x.className += " responsive";
    } else {
    x.className = "navbar";
    }
}

function activeButtonNavbar(){
    var x = document.getElementById("myTopnav");
    var links = x.getElementsByTagName("A");

    for(let i = 0; i < links.length; i++){
        links[i].classList.remove("active");
    }

    event.target.classList.add("active");

}
