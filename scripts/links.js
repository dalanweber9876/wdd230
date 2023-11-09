const baseURL = "https://dalanweber9876.github.io/wdd230/";
const linksURL = "https://dalanweber9876.github.io/wdd230/data/links.json";
const linksSection = document.querySelector("#linksSection")

async function GetLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons)
}

function displayLinks(weeks) {
    let count = 0
    
    weeks.forEach((week) => {
        let listItem = document.createElement("li")
        listItem.setAttribute("class", "leftalign")

        week.links.forEach((link) => {
            if (count > 0) {
                let span = document.createElement("span")
                span.innerHTML = " | "
                listItem.appendChild(span)
            }
            let newLink = document.createElement("a")
            

            newLink.setAttribute('href', link.url);
            newLink.setAttribute("class", "projects")
            newLink.textContent = link.title;
            listItem.appendChild(newLink);
            count += 1;
        })
        count = 0
        linksSection.appendChild(listItem)   
    })
}

GetLinks()