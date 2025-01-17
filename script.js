// script.js
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    const loginBtn = document.querySelector('.login-btn');

    // Burger Menu Toggle
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Search Toggle
    searchBtn.addEventListener('click', () => {
        searchInput.classList.toggle('active');
    });

    // Login Modal
    loginBtn.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.querySelector('.modal'));
        modal.show();
    });
});