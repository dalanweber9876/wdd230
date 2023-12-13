const reservation = document.querySelector("#reservationbody");
const walkin = document.querySelector("#walkinbody");
const infoURL = "https://dalanweber9876.github.io/wdd230/scoots/data/prices.json";

async function GetInfo() {
    const response = await fetch(infoURL);
    const data = await response.json();
}