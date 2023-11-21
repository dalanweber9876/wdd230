let answer = document.querySelector(".windchill")
const windchillurl = "https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=bbd25f4da394239fb62bc33093cd4a09";

async function getWeather() {
    try{
        const response = await fetch(windchillurl);
        if (response.ok){
            const data = await response.json();
            getWindchill(data)
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
    }
}

function getWindchill(data){
    let temp = data.main.temp;
    let wspeed = data.wind.speed;
    // alert(`${temp} ${wspeed}`)
    if (temp <= 50 && wspeed > 3)
    {
        let newAnswer = (35.74 + (.6215 * temp) - (35.75 * (wspeed ** .16)) + (.4275 * temp * (wspeed ** .16)));
        let rounded = Math.round(newAnswer * 10) / 10;
        answer.innerHTML = `Windchill: ${rounded} ℉`;
    } else {
        answer.innerHTML = "Windchill: N/A";
    }
    
}
getWeather();