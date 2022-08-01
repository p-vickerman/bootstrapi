let button = document.querySelector('#button');
let img = document.querySelector('#image');

let button2 = document.querySelector('#button2');
 let input = document.querySelector('#input')

button.addEventListener('click', function(){
    console.log("working click");
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
      img.src = data.message;
    })
})

button2.addEventListener('click', function(){
    let city = input.value;
    let cityWeather = (`https://goweather.herokuapp.com/weather/${city}`);
    
    fetch(cityWeather)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
    temperature.innerHTML = `Current temperature: ${data.temperature}`;
    wind.innerHTML = `Current wind speed: ${data.wind}`;
    description.innerHTML = `Description: ${data.description}`;
    })
})