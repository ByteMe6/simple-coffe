// script.js
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    const loginBtn = document.querySelector('.login-btn');
    const desktopNav = document.querySelector('.desktop-nav');
    const btnList = document.querySelectorAll('.btnList');

    // Burger Menu Toggle
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Search Toggle
    searchBtn.addEventListener('click', () => {
        searchInput.classList.toggle('active');
        loginBtn.classList.toggle('remove');
        desktopNav.classList.toggle('remove');
        loginBtn.classList.toggle('remoev');
        btnList.forEach(btn => {
            btn.classList.toggle('loong');
            // btn.classList.toggle('remoev');
        });
    });

    // Login Modal
    loginBtn.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.querySelector('.modal'));
        modal.show();
    });
});