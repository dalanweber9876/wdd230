const modeButton = document.querySelector(".switch");
const main = document.querySelector("main");
const currentevents = document.querySelector(".currentevents")
const weathercard = document.querySelector(".weathercard")
const companyads = document.querySelector(".companyads")
const calltoaction = document.querySelector(".calltoaction")

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true) {
		main.style.background = "#000";
		main.style.color = "#fff";
        currentevents.style.background = "#505050"; 
        weathercard.style.background = "#505050"; 
        companyads.style.background = "#427c90";
        calltoaction.style.background = "#45726c";

	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        currentevents.style.background = "#c2c2c2"; 
        weathercard.style.background = "#c2c2c2"; 
        companyads.style.background = "#8FBCCC";
        calltoaction.style.background = "#70A9A1";
	}
  }
