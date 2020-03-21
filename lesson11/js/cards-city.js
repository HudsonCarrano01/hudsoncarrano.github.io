const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.table(towns); 
   
    let city;
    let imgsrc;

    for (let i = 0; i < towns.length; i++ ) {
        city  = towns[i].name ;    
        if((city=='Preston')||(city=='Soda Springs')||(city=='Fish Haven')){
            
            if (city=='Preston'){
                imgsrc = "https://prestonchamber.org/wp-content/uploads/2020/01/preston-idaho-area-chamber-of-commerce-1024x512.jpg";
                bcity = "preston.html";
            }
            if (city=='Soda Springs'){
                imgsrc = "https://cms5.revize.com/revize/sodasprings/explore_boximage/explore_2.jpg";
                bcity = "sodasprings.html";
            }
            if (city=='Fish Haven'){
                imgsrc = "https://odis.homeaway.com/odis/destination/31f02617-b025-4f88-9e72-72a28e0b9abf.hw2.jpg";
                bcity = "fishhave.html";
            }
    
            let card = document.createElement('section');
            let h2 = document.createElement('h2');

            h2.textContent = towns[i].name ;

            card.appendChild(h2);

            let motto = document.createElement('p');
            motto.className = "motto";
            motto.textContent = towns[i].motto;
            card.appendChild(motto);


            let foundeddata = document.createElement('p');
            foundeddata.className = "pdados";
            foundeddata.textContent = "Year Founded:  " + towns[i].yearFounded;
            card.appendChild(foundeddata);


            let populationdata = document.createElement('p');
            populationdata.className = "pdados";
            populationdata.textContent = "Population: "+ towns[i].currentPopulation;
            card.appendChild(populationdata);


            let rainfalldata = document.createElement('p');
            rainfalldata.className = "pdados";
            rainfalldata.textContent = "Annual Rainfall: "+ towns[i].averageRainfall;
            card.appendChild(rainfalldata);
            
            let image = document.createElement('img');
            image.setAttribute('src', imgsrc );
            image.setAttribute('alt', towns[i].name );
            image.className = 'img-city';        
            card.appendChild(image);

            document.querySelector('div.cardscity').appendChild(card);
        }
    }

});

