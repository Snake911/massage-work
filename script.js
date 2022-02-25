document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('menu_mobile');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});