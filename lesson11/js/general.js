
// Data sumary 
var p_currently = '';
var p_high = 0;
var p_humidity = 0;
var p_windspeed = 0; 
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

// Function to use in nav menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}



function getEvents (cityID){

    let city;
    switch (cityID){
      case 5604473 : city = 'Preston';
                     break;
      case 5607916 : city = 'Soda Springs';
                     break;
      case 5585010 : city = 'Fish Haven';
                     break;
    }

    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(requestURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (jsonObject) {
            const towns = jsonObject['towns'];
            console.table(towns); 

        for (let i = 0; i < towns.length; i++ ) {
            if(towns[i].name == city){
    
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                h2.textContent = city + ' Events' ;
                card.appendChild(h2);
    
                if(towns[i].events != ''){
                    for (let k = 0; k < towns[i].events.length; k++ ) {
                        let event = document.createElement('p');
                        event.className = "pdados";
                        event.textContent = towns[i].events[k];
                        card.appendChild(event);
                    }    
                }
    
    
                document.querySelector('div.cardevent').appendChild(card);
            }
        }
        
    });
}

function weatherInform( cityID ) {
     
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + mykey)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    let C = jsObject.main.temp - 273;
    let temp = (1.8 * C) + 32;  
    let C_min = jsObject.main.temp_min - 273;
    let temp_min = (1.8 * C_min) + 32;  
    let C_max = jsObject.main.temp_max - 273;
    let temp_max = (1.8 * C_max) + 32;  

    let currently = jsObject.weather[0].description; 
    let C_wind = jsObject.wind.deg - 273;
    let windchill = (1.8 * C_wind) + 32;

    let humidity  = jsObject.main.humidity;
    let windspeed = jsObject.wind.speed;

    let wchill =  35.74 + (0.6215 * temp) - (35.75 * (windspeed ** 0.16)) + ((0.4275 * temp) * (windspeed ** 0.16));  

    document.getElementById('temp').textContent = temp.toFixed(1);
    document.getElementById('temp_min').textContent = temp_min.toFixed(1);
    document.getElementById('temp_max').textContent = temp_max.toFixed(1);
    document.getElementById('currently').textContent = currently;
    document.getElementById('windchill').textContent = wchill.toFixed(1);
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('windspeed').textContent = windspeed;

    fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityID+ '&appid=' + mykey )
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var i = 0;
        var k = 0;
        var a = [];
        var w = [];
        var wo = {weekday: 'short'};
        var date;

        while (i < 40 && k < 5) {
            var dtime = jsObject.list[i].dt_txt;
            if (dtime.includes('18:00:00')) {      
                a[k] = i;
                
                date = new Date(dtime);
                w[k] = date.toLocaleDateString('en-US', wo);

                k++
            };
            i++
        }    
            k=0;
            let cdd1 = jsObject.list[a[k]].main.temp - 273;
            let cdd2 = jsObject.list[a[k+1]].main.temp - 273;
            let cdd3 = jsObject.list[a[k+2]].main.temp - 273;
            let cdd4 = jsObject.list[a[k+3]].main.temp - 273;
            let cdd5 = jsObject.list[a[k+4]].main.temp - 273;
                    
            let d1 = w[k];
            let d2 = w[k+1];
            let d3 = w[k+2];
            let d4 = w[k+3];
            let d5 = w[k+4];


            let dd1 = (1.8 * cdd1) + 32;  
            let dd2 = (1.8 * cdd2) + 32;  
            let dd3 = (1.8 * cdd3) + 32;  
            let dd4 = (1.8 * cdd4) + 32;  
            let dd5 = (1.8 * cdd5) + 32;  
            
            const imgDirSrc = 'https://openweathermap.org/img/w/';
            
            let id1 = imgDirSrc + jsObject.list[a[k]].weather[0].icon + '.png'; 
            const d1desc = jsObject.list[a[k]].weather[0].description;  
            let id2 = imgDirSrc + jsObject.list[a[k+1]].weather[0].icon + '.png'; 
            const d2desc = jsObject.list[a[k+1]].weather[0].description;  
            let id3 = imgDirSrc + jsObject.list[a[k+2]].weather[0].icon + '.png'; 
            const d3desc = jsObject.list[a[k+2]].weather[0].description;  
            let id4 = imgDirSrc + jsObject.list[a[k+3]].weather[0].icon + '.png'; 
            const d4desc = jsObject.list[a[k+3]].weather[0].description;  
            let id5 = imgDirSrc + jsObject.list[a[k+4]].weather[0].icon + '.png'; 
            const d5desc = jsObject.list[a[k+4]].weather[0].description;  
        
            document.getElementById('id1').setAttribute('src', id1);
            document.getElementById('id1').setAttribute('alt', d1desc);
            document.getElementById('id2').setAttribute('src', id2);
            document.getElementById('id2').setAttribute('alt', d2desc);
            document.getElementById('id3').setAttribute('src', id3);
            document.getElementById('id3').setAttribute('alt', d3desc);
            document.getElementById('id4').setAttribute('src', id4);
            document.getElementById('id4').setAttribute('alt', d4desc);
            document.getElementById('id5').setAttribute('src', id5);
            document.getElementById('id5').setAttribute('alt', d5desc);
        
            document.getElementById('dd1').textContent = dd1.toFixed(0);
            document.getElementById('dd2').textContent = dd2.toFixed(0);
            document.getElementById('dd3').textContent = dd3.toFixed(0);
            document.getElementById('dd4').textContent = dd4.toFixed(0);
            document.getElementById('dd5').textContent = dd5.toFixed(0);
                    
            document.getElementById('d1').textContent = d1;
            document.getElementById('d2').textContent = d2;
            document.getElementById('d3').textContent = d3;
            document.getElementById('d4').textContent = d4;
            document.getElementById('d5').textContent = d5;
      });
    });
 }

