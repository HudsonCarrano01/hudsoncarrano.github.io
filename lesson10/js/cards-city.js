const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.table(towns); 
   

    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');

        h2.textContent = towns[i].name ;

        card.appendChild(h2);

        let motto = document.createElement('p');
        motto.className = "motto";
        motto.textContent = towns[i].motto;
        card.appendChild(motto);

        let founded = document.createElement('span');
        founded.textContent = "Year Founded: ";
        card.appendChild(founded);

        let foundeddata = document.createElement('p');
        foundeddata.className = "pdados";
        foundeddata.textContent = " " + towns[i].yearFounded;
        card.appendChild(foundeddata);

        let population = document.createElement('span');
        population.textContent = "Population: ";
        card.appendChild(population);

        let populationdata = document.createElement('p');
        populationdata.className = "pdados";
        populationdata.textContent = " "+ towns[i].currentPopulation;
        card.appendChild(populationdata);

        let rainfall = document.createElement('span');
        rainfall.textContent = "Annual Rainfall: ";
        card.appendChild(rainfall);

        let rainfalldata = document.createElement('p');
        rainfalldata.className = "pdados";
        rainfalldata.textContent = " "+ towns[i].averageRainfall;
        card.appendChild(rainfalldata);

        
        let image = document.createElement('img');
        image.setAttribute('src', "./images/"+towns[i].photo);
        image.setAttribute('alt', towns[i].name );
        image.className = 'img-city';        
        card.appendChild(image);

        document.querySelector('div.cardscity').appendChild(card);
        
    }

});

