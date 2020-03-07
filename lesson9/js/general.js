//window.onload = function() {

// Data sumary Preston City
var p_currently = 'Rainy';
var p_high = 54;
var p_humidity = 95;
var p_windspeed = 12; 
var p_windchill = windchill(p_high, p_windspeed);

const currwntly = document.getElementById("currently");
if (currwntly !== null) {
    document.getElementById("currently").innerHTML = p_currently;
    document.getElementById("high").innerHTML      = p_high;
    document.getElementById("humidity").innerHTML  = p_humidity;
    document.getElementById("windspeed").innerHTML = p_windspeed;
    document.getElementById("windchill").innerHTML = p_windchill; 

}
const banner = document.getElementById("banner");
if (banner !== null) {

    // Hide  banner  if is fryday show banner 
    document.getElementById("banner").style.display = "none";
    let dt = new Date();
    let dsem = dt.getDay();

    if(dsem == 5){
        document.getElementById("banner").style.display = "block";
    }
}

const d1 = document.getElementById("d1");
if (d1 !== null) {

}

// Show last modified date
//let update = document.lastModified;
//document.getElementById("lastupdate").innerHTML = update;

//}

// Function to use in nav menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}