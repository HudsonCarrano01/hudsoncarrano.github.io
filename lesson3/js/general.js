
let update = document.lastModified;
document.getElementById("lastupdate").innerHTML = update;

let hamburger = document.querySelector(".hamIcon");
hamburger.addEventListener("click",toggleClass);


function toggleClass(){
    let menu = document.querySelector(".mainMenu");
    menu.classList.toggle("toggleCls");
}