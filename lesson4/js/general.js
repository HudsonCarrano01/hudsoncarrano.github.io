
let update = document.lastModified;
document.getElementById("lastupdate").innerHTML = update;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}