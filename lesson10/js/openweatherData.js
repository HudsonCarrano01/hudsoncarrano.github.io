const mykey = '405d4b505720c13a42fdc37b8b076c13';
//const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID="+ mykey;

  window.onload = function() {
    weatherInform( 5604473 );
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

    document.getElementById('temp').textContent = temp.toFixed(1);
    document.getElementById('temp_min').textContent = temp_min.toFixed(1);
    document.getElementById('temp_max').textContent = temp_max.toFixed(1);
    document.getElementById('currently').textContent = currently;
    document.getElementById('windchill').textContent = windchill.toFixed(1);
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
        
            document.getElementById('dd1').textContent = dd1.toFixed(1);
            document.getElementById('dd2').textContent = dd2.toFixed(1);
            document.getElementById('dd3').textContent = dd3.toFixed(1);
            document.getElementById('dd4').textContent = dd4.toFixed(1);
            document.getElementById('dd5').textContent = dd5.toFixed(1);
                    
            document.getElementById('d1').textContent = d1;
            document.getElementById('d2').textContent = d2;
            document.getElementById('d3').textContent = d3;
            document.getElementById('d4').textContent = d4;
            document.getElementById('d5').textContent = d5;

      });
    
    });
 }

