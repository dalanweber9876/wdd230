const informationURL = "https://dalanweber9876.github.io/wdd230/chamber/data/members.json";
const companyspotlight = document.querySelector(".companyads")
const groupedads = document.querySelector("#groupedads")

async function GetInfo() {
    const companyresponse = await fetch(informationURL);
    const companydata = await companyresponse.json();
    CompanyCards(companydata.companies);
}

function CompanyCards(companies) {
    let companiesarray = [];
    let chosencompanies = [];



    companies.forEach((company) => {
        if (company.membership == "Silver" || company.membership == "Gold") {
            companiesarray.push(company);
        }
    })

    for (i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * companiesarray.length);
        chosencompanies.push(companiesarray[randomIndex]);
        companiesarray.splice(randomIndex,1);
    }

    chosencompanies.forEach((selection) => {
        let newsection = document.createElement("section")
        let newname = document.createElement("h3");
        let newaddress = document.createElement("p");
        let newnumber = document.createElement("p");
        let newwebsite = document.createElement("a")
        let newhours = document.createElement("p")

        newname.innerHTML = selection.name;
        newaddress.innerHTML = selection.address;
        newnumber.innerHTML = selection.phone;
        newwebsite.innerHTML = "Website"
        newhours.innerHTML = `Hours: ${selection.hours}`
        

        newwebsite.setAttribute("href", selection.website)
        newsection.setAttribute("class", "spotlightcard")

        newsection.appendChild(newname);
        newsection.appendChild(newaddress);
        newsection.appendChild(newnumber);
        newsection.appendChild(newwebsite);
        newsection.appendChild(newhours);

        groupedads.appendChild(newsection);
    })
    companyspotlight.appendChild(newsection);
}

GetInfo();