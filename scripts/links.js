const baseURL = "https://dalanweber9876.github.io/wdd230/";
const linksURL = "https://dalanweber9876.github.io/wdd230/data/links.json";

async function GetLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data)

}

GetLinks();