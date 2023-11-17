const weather = document.querySelector("#weather");
const icon = document.querySelector("#weathericon")
const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=bbd25f4da394239fb62bc33093cd4a09";

async function getWeather() {
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            // console.log(data);
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
    

}

function displayWeather(data) {
    weather.innerHTML = `${Math.round(data.main.temp)}&deg;F - ${data.weather[0].description}`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.setAttribute("src", iconsrc)
    icon.setAttribute("alt", data.weather[0].main)
}

getWeather();