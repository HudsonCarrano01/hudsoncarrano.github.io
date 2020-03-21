const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.table(towns); 
   

    for (let i = 0; i < towns.length; i++ ) {
        if(towns[i].name == 'Soda Springs'){

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = 'Events' ;
            card.appendChild(h2);

            if(towns[i].events != ''){
                for (let k = 0; k < towns[i].events.length; k++ ) {
                    let event = document.createElement('p');
                    event.className = "pdados";
                    event.textContent = towns[i].events[k];
                    card.appendChild(event);
                }    
            }


            document.querySelector('div.cardscity').appendChild(card);
        }
    }

});

