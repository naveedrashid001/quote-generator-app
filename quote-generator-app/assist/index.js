var button = document.querySelector("button");
var card = document.querySelector(".card");

function loadQuote() {
    card.innerHTML = "Loading...";
    fetch("https://api.kanye.rest/", {
        method: "GET",
    }).then(function (res) {
        console.log("res", res);
        return res.json();
    }).then(function (data) {
        console.log("data", data);
        card.innerHTML = data.quote;
    }).catch(function (err) {
        console.log("error", err);
    });
    console.log("load quote end")
}

button.addEventListener("click", loadQuote);