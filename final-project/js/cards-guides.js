//const requestURL = 'http://virtualgaragesale.com.br/adventureInfo.json';

/*
fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        const guides = jsonObject['activity'];
        console.table(guides); 
*/   
  
//    var guides = JSON.parse('activity');
      var guides = guide;  
    for (let i = 0; i < guides.length; i++ ) {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = guides[i].name ;
        card.appendChild(h2);

        let image = document.createElement('img');
        image.setAttribute('src', "./images/"+guides[i].image);
        image.setAttribute('alt', guides[i].name );
        image.className = 'img-city';        
        card.appendChild(image);

        let level = document.createElement('p');
        level.className = "pdados";
        level.textContent = guides[i].level;
        card.appendChild(level);

        let yearexp = document.createElement('p');
        yearexp.className = "pdados";
        yearexp.textContent = guides[i].yearsexp;
        card.appendChild(yearexp);

        let biography = document.createElement('p');
        biography.className = "pdados";
        biography.textContent = " "+ guides[i].biography;
        card.appendChild(biography);

        let email = document.createElement('p');
        email.className = "pdados";
        email.textContent = guides[i].email;
        card.appendChild(email);

        
       

        document.querySelector('div.cardsguides').appendChild(card);
        
    }

//});

