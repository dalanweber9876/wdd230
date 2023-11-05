let form = document.getElementById("form");
let titleposition = document.getElementById("titleposition");
let pattern = /^[A-Za-z -]{7,}$/;
let message = document.querySelector("#formmessage")

form.addEventListener("submit", function (event) {
    if (!pattern.test(titleposition.value)) {
        message.innerHTML = "Please enter a valid title or position (at least 7 characters consisting of alphabetic characters, hyphens, or spaces).";
        event.preventDefault();
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});
