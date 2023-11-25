const body = document.body;
let searchInput = body.querySelector('.searchInput');
let searchButton = body.querySelector('.searchButton');

function renderData(data){
    
    let countryInfo = document.createElement('div');
    countryInfo.className = 'countryInfo';
    body.appendChild(countryInfo);

    let countryName = document.createElement('div');
    countryName.className = 'countryName';
    countryName.innerText = data[0].name.common;
    countryInfo.appendChild(countryName);

    let countryPopulation = document.createElement('div');
    countryPopulation.className = 'countryPopulation';
    countryPopulation.innerText = "population: "+ data[0].population;
    countryInfo.appendChild(countryPopulation);

    let countryCapital = document.createElement('div');
    countryCapital.className = 'countryCapital';
    countryCapital.innerText = "capital: "+ data[0].capital;
    countryInfo.appendChild(countryCapital);
}

searchButton.addEventListener('click',()=>{
    let request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${searchInput.value}?fullText=true`);
    request.send();

    request.addEventListener('load', function(){
        let data = JSON.parse(this.responseText);
        renderData(data);
    })
})