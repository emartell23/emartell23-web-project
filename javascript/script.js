const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const interestInput = document.getElementById("interest");
const messageBox = document.getElementById("messageBox");


nameInput.addEventListener("input", updatePreview);
interestInput.addEventListener("input", updatePreview);

function updatePreview() {
    const name = nameInput.value;
    const interest = interestInput.value;

    if (name || interest) {
        messageBox.textContent = `Preview → Name: ${name} | Interest: ${interest}`;
    } else {
        messageBox.textContent = "";
    }
}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const interest = interestInput.value.trim();

    if (name === "" || interest === "") {
        messageBox.textContent = "Please fill out both fields.";
        messageBox.style.color = "red";
        return;
    }

    messageBox.style.color = "green";
    messageBox.textContent = `Hello ${name}! Nice to meet someone interested in ${interest}.`;
});
