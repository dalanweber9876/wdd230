let answer = document.querySelector(".windchill")
function getWindchill(){
    let temp = document.getElementById("temperature").value;
    let wspeed = document.getElementById("windspeed").value;
    // alert(`${temp} ${wspeed}`)
    if (temp <= 50 && wspeed > 3)
    {
        let newAnswer = (35.74 + (.6215 * temp) - (35.75 * (wspeed ** .16)) + (.4275 * temp * (wspeed ** .16)));
        let rounded = Math.round(newAnswer * 10) / 10;
        answer.innerHTML = `Windchill: ${rounded} ℉`;
    } else {
        answer.innerHTML = "N/A";
    }
    
}