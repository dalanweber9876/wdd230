const baseURL = "https://dalanweber9876.github.io/wdd230/";
const infoURL = "https://dalanweber9876.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector(".card")

async function GetInfo() {
    const response = await fetch(infoURL);
    const data = await response.json();
    displayCards(data.companies)
}

function displayCards(companies) {
    
    companies.forEach((company) => {
        let card = document.createElement("section")
        let logo = document.createElement("img")
        let name = document.createElement("p")
        let address = document.createElement("p")
        let number = document.createElement("p")
        let website = document.createElement("p")
        address.innerHTML = company.address
        number.innerHTML = company.phone
        website.innerHTML = company.website


        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `${company.name}'s logo`);
        logo.setAttribute('loading', "lazy");

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);

        cards.appendChild(card);   
    })
}

GetInfo()