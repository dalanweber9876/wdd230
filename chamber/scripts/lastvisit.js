// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".lastvisit");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (lastVisit == 0) {
	visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else if ((Date.now() - lastVisit) <= 86400000){
	visitsDisplay.textContent = `Back so soon! Awesome!`;
} else if ((Date.now() - lastVisit) > 86400000 && (Date.now() - lastVisit) < 172800000){
	visitsDisplay.textContent = `You last visited 1 day ago.`;
} else {
	let milliseconds = Date.now() - lastVisit;
	let days = Math.round(milliseconds / 86400000);
	visitsDisplay.textContent = `You last visited ${days} days ago.`;
}

// 4️⃣ increment the number of visits by one.
lastVisit = Date.now()

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("lastVisit-ls", lastVisit);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.