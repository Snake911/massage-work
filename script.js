document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('menu_mobile');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    $('#about_slider').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        items: 1
    })
});