document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('menu_mobile');

    burger.addEventListener('click', () => {
        const body = document.querySelector('body');
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        if(burger.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    $('#about_slider').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        items: 1
    })
});