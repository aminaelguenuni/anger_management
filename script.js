// get elements
const button = document.getElementById("angrybuttom");
const message = document.getElementById("message");

// when button is clicked
button.addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Any?format=JSON")
        .then(response => response.json())
        .then(data => {
            if (data.type === "single") {
                message.textContent = data.joke;
            } else {
                message.textContent = data.setup + " — " + data.delivery;
            }
        })
        .catch(() => {
            message.textContent = "Even the API is angry right now.";
        });
});
