const temperature = document.querySelector("#temperature");
const icon = document.querySelector("#weathericon");
const forecastInfo = document.querySelector("#forecastInfo")
const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=bbd25f4da394239fb62bc33093cd4a09";
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=43.82&lon=-111.79&units=imperial&appid=bbd25f4da394239fb62bc33093cd4a09"

async function getWeather() {
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
    

}

function displayWeather(data) {
    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;F - ${data.weather[0].description}`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.setAttribute("src", iconsrc)
    icon.setAttribute("alt", data.weather[0].main)
}

async function getForecast() {
    try{
        const response = await fetch(forecasturl);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayForecast(data)
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

function displayForecast(data) {
    var dateparts = data.list[0].dt_txt.split(" ")
    var date = dateparts[0]
    var highest = 0;
    var lowest = 10000;
    for (i = 0; i < 25; i++) {
        var parts = data.list[i].dt_txt.split(" ")
        if (parts[0] == date) {
            if (data.list[i].main.temp > highest) {
                highest = data.list[i].main.temp;
            } 
            if (data.list[i].main.temp < lowest) {
                lowest = data.list[i].main.temp;
            }
        } else {
            var pieces = date.split("-");
            var tr = document.createElement("tr");
            var forecastDate = document.createElement("td")
            forecastDate.innerHTML = `${pieces[1]}-${pieces[2]}`

            var max = document.createElement("td")
            max.innerHTML = Math.round(highest)

            var min = document.createElement("td")
            min.innerHTML = Math.round(lowest)

            tr.appendChild(forecastDate)
            tr.appendChild(max)
            tr.appendChild(min)

            forecastInfo.appendChild(tr)
            

            if (data.list[i].main.temp > highest) {
                highest = data.list[i].main.temp;
            } 
            if (data.list[i].main.temp < lowest) {
                lowest = data.list[i].main.temp;
            }

            highest = 0;
            lowest = 10000;
        }

        var date = parts[0]
        console.log(parts[0])
    }
}

getWeather();
getForecast();