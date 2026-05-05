document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('greetingForm');
  const greeting = document.getElementById("greetingMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("username").value;
    const color = document.getElementById("color").value;

    greeting.textContent = `Welcome to my webpage, ${name}! Your favorite color is ${color}.`;
    greeting.style.color = color;
  });
});
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Optional: change button text
    if (document.body.classList.contains("dark-mode")) {
        darkToggle.textContent = "Light Mode";
    } else {
        darkToggle.textContent = "Dark Mode";
    }
});