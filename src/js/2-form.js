const form = document.querySelector(".feedback-form")
const textarea = form.querySelector("textarea")
const input = form.querySelector("input")

form.addEventListener("submit",onSubmit)
textarea.addEventListener("input", onTextarea)
input.addEventListener("input", onInput)

populateTexterea();
populateInput();

function onSubmit(event) {
    event.preventDefault()
    form.reset()
    localStorage.clear()
}

function onTextarea(event) {
    const message = event.target.value;
    localStorage.setItem ("message", message)
}

function populateTexterea() {
    const loadMessage = localStorage.getItem("message")
    if (loadMessage) {
        textarea.value = loadMessage
    }
}

function onInput(event) {
    const email = event.target.value;
    localStorage.setItem ("email", email)
}
function populateInput() {
    const loadEmail = localStorage.getItem("email")
    console.log(loadEmail);
    if (loadEmail) {
        input.value = loadEmail
    }
}

