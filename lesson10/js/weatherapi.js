const mykey = '405d4b505720c13a42fdc37b8b076c13';
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID="+ mykey;

//let jsObject;
//fetch(apiURL)
 // .then((response) => response.json())
 // .then((jsObject) => {
 //   const weather = jsonObject['weather'];
 //   console.log(jsObject);
 // });

/*

 fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);

   document.getElementById('current-temp').textContent = jsObject.main.temp;
   const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
   const desc = jsObject.weather[0].description;  // note how we reference the weather array
   document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
   document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
   document.getElementById('icon').setAttribute('alt', desc);
 
 

 });
*/

 //https://bithacker.dev/fetch-weather-openweathermap-api-javascript
 //function weatherBalloon( cityID ) {
 // var key = '{yourkey}';
 // fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
 // .then(function(resp) { return resp.json() }) // Convert data to json
 // .then(function(data) {
 //   console.log(data);
 // })
 // .catch(function() {
    // catch any errors
 // });
//}

//window.onload = function() {
//  weatherBallon( 6167865 );
//}

/*
fetch("https://pokeapi.co/api/v1/pokemon?limit=20&offset=1")
.then(response => response.json())
.catch(error => console.error("Erro:" + error))
.then(response => {
    let list = document.getElementById('pokemons');
    let listItems = "";
    for (let obj in response.objects) {
        listItems += `<li>${response.objects[obj].name}</li>`;
    }
    list.innerHTML = listItems;
});
  
*/


  window.onload = function() {
    weatherInform( 5604473 );
//  weatherInform( 6167865 );

  }





  function weatherInform( cityID ) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + mykey)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then((jsObject) => {
      console.log(jsObject);

      document.getElementById('current-temp').textContent = jsObject.main.temp;

      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      const desc = jsObject.weather[0].description;  // note how we reference the weather array
      document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
      document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
      document.getElementById('icon').setAttribute('alt', desc);
    
   //})
   // .catch(function() {
   //   alert('Error - api')
    });
  }

