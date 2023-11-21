let timestamp = document.querySelector("#timestamp")
let now = Date.now();
let form = document.querySelector("#form")

form.addEventListener("submit", (event) => {
    timestamp.value = now.toString();
});