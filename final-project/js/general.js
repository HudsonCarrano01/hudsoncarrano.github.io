window.onload = function() {
    let update = document.lastModified;
    document.getElementById("lastupdate").innerHTML = update;
}
// Function to use in nav menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

