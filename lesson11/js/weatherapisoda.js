const mykey = '405d4b505720c13a42fdc37b8b076c13';
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID="+ mykey;

  window.onload = function() {
    weatherInform( 5607916 );
  }

  function weatherInform( cityID ) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + mykey)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then((jsObject) => {
      console.log(jsObject);

    let C = jsObject.main.temp - 273;
    let F = (1.8 * C) + 32;  
      document.getElementById('current-temp').textContent = F;

      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      const desc = jsObject.weather[0].description;  // note how we reference the weather array
      document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
      document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
      document.getElementById('icon').setAttribute('alt', desc);
    
    });
  }

