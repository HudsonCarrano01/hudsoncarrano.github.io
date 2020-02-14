

// Data sumary Preston City
var p_currently = 'Rainy';
var p_high = 54;
var p_humidity = 95;
var p_windspeed = 12; 
var p_windchill = windchill(p_high, p_windspeed);

document.getElementById("currently").innerHTML = p_currently;
document.getElementById("high").innerHTML      = p_high;
document.getElementById("humidity").innerHTML  = p_humidity;
document.getElementById("windspeed").innerHTML = p_windspeed;
document.getElementById("windchill").innerHTML = p_windchill; 



// Hide  banner  if is fryday show banner 
document.getElementById("banner").style.display = "none";
let dt = new Date();
let dsem = dt.getDay();
if(dsem == 5){
    document.getElementById("banner").style.display = "block";
}

// Change day of week in grid
let dw = ['Sun','Mon','Tue','Wed','Thu','Fri', 'Sat'];
let dd = dsem + 1;
if(dd > 6) dd=0;
document.getElementById("d1").innerHTML = dw[dd];
dd++;
if(dd > 6) dd=0;
document.getElementById("d2").innerHTML = dw[dd];
dd++;
if(dd > 6) dd=0;
document.getElementById("d3").innerHTML = dw[dd];
dd++;
if(dd > 6) dd=0;
document.getElementById("d4").innerHTML = dw[dd];
dd++;
if(dd > 6) dd=0;
document.getElementById("d5").innerHTML = dw[dd];


// Show last modified date
let update = document.lastModified;
document.getElementById("lastupdate").innerHTML = update;



// Function to use in nav menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}