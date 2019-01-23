let fieldEl = document.getElementById("message")
let blueEl = document.querySelector("#blue")
let redEl = document.querySelector("#red")
let outputEl = document.getElementsByClassName("mirror__container")

fieldEl.addEventListener("keyup", function (event) {
    redEl.textContent = event.target.value
    blueEl.textContent = event.target.value
})

