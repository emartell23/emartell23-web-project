document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission for this example
            const emailInput = document.getElementById('newsletter-email');
            if (emailInput.value.trim() !== '' && isValidEmail(emailInput.value.trim())) {
                alert(`Thank you for subscribing with the email: ${emailInput.value}`);
                newsletterForm.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }

    // Example of dynamic content update (can be expanded)
    const heroText = document.querySelector('.hero-text h2');
    if (heroText) {
        setTimeout(() => {
            heroText.textContent = "Driving Sustainable Change Through Technology";
        }, 3000);
    }
});