// Select the elements we need
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

// Add an event listener to the mobile menu button
mobileMenu.addEventListener('click', () => {
    // Toggle the 'active' class on the nav menu
    navMenu.classList.toggle('active');

    // Toggle the 'is-active' class on the menu button for animation
    mobileMenu.classList.toggle('is-active');
});

// Optional: Close the menu when a link is clicked (useful for single-page navigation)
const navLinks = document.querySelectorAll('#nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('is-active');
    });
});
