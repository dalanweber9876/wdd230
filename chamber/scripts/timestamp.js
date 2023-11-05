let timestamp = document.querySelector("#timestamp")
let now = Date.now();

form.addEventListener("submit", (event) => {
    timestamp.value = now.toString();
});