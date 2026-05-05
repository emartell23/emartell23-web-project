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