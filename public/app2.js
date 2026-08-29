const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector("#search-Button");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const temp = document.querySelector(".temp");

// we cant have [] we need [] cuz we need information not just index


const data = {
    tehran: {temp : 21, humidity:13, country: "iran"},
     gorgan: {temp : 35, humidity:18, country: "iran"},
     mashhad: {temp : 40, humidity:9, country: "iran"},
     esfhan: {temp : 43, humidity:7, country: "iran"},
     shiraz: {temp : 24, humidity:12, country: "iran"},
     tabriz: {temp : 17, humidity:5, country: "iran"},
   rasht: {temp : 29, humidity:21, country: "iran"}        
}

function showcityweather() {
    const city = cityInput.value;
    const weather=data[city];

    if (weather) {
        cityElem.innerHTML = `${city.charAt(0).toUppercase()+ city.slice(1).toUppercase()}, ${weather.country}`;
        humidity.innerHTML= `Humidity: ${weather.humidity}%`;
        temp.innerHTML=weather.temp;


    }else {
        alert ("we don't have that city yet:(");
    }

    cityInput.value = "";
}

searchButton.addEventListener("click",showcityweather);

cityInput.addEventListener("keydown", function(e){
    if (e.key=== "Enter"){
        showcityweather();
    }
})