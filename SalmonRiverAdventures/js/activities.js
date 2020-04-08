//const requestURL = 'http://virtualgaragesale.com.br/adventureInfo.json';

/*
fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        const activities = jsonObject['activity'];
        console.table(activities); 
*/   
  
//    var activities = JSON.parse('activity');
      var activities = activity;  
    for (let i = 0; i < activities.length; i++ ) {

        let card = document.createElement('article');
        let h2 = document.createElement('h2');
        h2.textContent = activities[i].title ;
        card.appendChild(h2);

        let image = document.createElement('img');
        image.setAttribute('src', "./images/"+activities[i].imageurl);
        image.setAttribute('alt', activities[i].title );
        image.className = 'article-img';        
        card.appendChild(image);

        let message = document.createElement('p');
        message.className = "msg";
        message.textContent = activities[i].message1;
        card.appendChild(message);

        let price = document.createElement('p');
        price.className = "price";
        price.textContent = activities[i].price;
        card.appendChild(price);


        let subtitle = document.createElement('p');
        subtitle.className = "msg";
        subtitle.textContent = activities[i].subtitle;
        card.appendChild(subtitle);

        let description = document.createElement('p');
        description.className = "pdados";
        description.textContent = " "+ activities[i].description;
        card.appendChild(description);

        let hr = document.createElement('hr');
        card.appendChild(hr);

        document.querySelector('div.activities').appendChild(card);
        
    }

//});

