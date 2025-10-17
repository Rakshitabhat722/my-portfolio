// This script is optional for now, but it's good practice to have it.
// You can add features like a "scroll to top" button, animations on scroll,
// or handling the navigation for mobile view in the future.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded successfully!");

    // Example: Smooth scroll for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});