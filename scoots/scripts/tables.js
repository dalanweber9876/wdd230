const reservation = document.querySelector("#reservationbody");
const walkin = document.querySelector("#walkinbody");
const infoURL = "https://dalanweber9876.github.io/wdd230/scoots/data/prices.json";

async function GetInfo() {
    const response = await fetch(infoURL);
    const data = await response.json();
    PopulateReservations(data.rental);
    PopulateWalkins(data.rental);
}

function PopulateReservations(data)
{
    data.forEach(element => {
        let newrow = document.createElement("tr");
        let name = document.createElement("td");
        let maxperson = document.createElement("td");
        let halfday = document.createElement("td");
        let fullday = document.createElement("td");
        name.innerHTML = element.name;
        maxperson.innerHTML = element.maxperson;
        halfday.innerHTML = `$${element.reservation[0].halfday}`;
        fullday.innerHTML = `$${element.reservation[0].fullday}`;
        newrow.appendChild(name);
        newrow.appendChild(maxperson);
        newrow.appendChild(halfday);
        newrow.appendChild(fullday);

        reservation.appendChild(newrow);

    })

}

function PopulateWalkins(data)
{
    data.forEach(element => {
        let newrow = document.createElement("tr");
        let name = document.createElement("td");
        let maxperson = document.createElement("td");
        let halfday = document.createElement("td");
        let fullday = document.createElement("td");
        name.innerHTML = element.name;
        maxperson.innerHTML = element.maxperson;
        halfday.innerHTML = `$${element.walkin[0].halfday}`;
        fullday.innerHTML = `$${element.walkin[0].fullday}`;
        newrow.appendChild(name);
        newrow.appendChild(maxperson);
        newrow.appendChild(halfday);
        newrow.appendChild(fullday);

        walkin.appendChild(newrow)
    })
}

GetInfo();