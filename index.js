document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded"); // For debugging

    // Mobile menu toggle
    const mobileMenu = document.querySelector('#mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');

    if (mobileMenu && navbarMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navbarMenu.classList.toggle('active');
            console.log("Mobile menu toggled"); // Debug
        });
    } else {
        console.error("Mobile menu or navbar menu not found");
    }

    // Theme toggle
    const toggleButton = document.querySelector('.theme-toggle');
    const body = document.body;

    if (toggleButton) {
        if (localStorage.getItem('theme') === 'dark') {
            body.setAttribute('data-theme', 'dark');
            toggleButton.textContent = 'Toggle Light Mode';
        }

        toggleButton.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                toggleButton.textContent = 'Toggle Dark Mode';
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                toggleButton.textContent = 'Toggle Light Mode';
            }
            console.log("Theme toggled"); // Debug
        });
    } else {
        console.error("Theme toggle button not found");
    }
});
