document.addEventListener('DOMContentLoaded', () => {

const pcNavLinks = document.querySelectorAll(
    '.header #header-inner nav a[href^="#"]'
);

let activeTimer;

pcNavLinks.forEach(link => {
    link.addEventListener('click', () => {

        clearTimeout(activeTimer);

        pcNavLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        link.classList.add('active');

        activeTimer = setTimeout(() => {
            link.classList.remove('active');
        }, 250);

    });
});

    const hamburger = document.querySelector('.hamburger-menu');
const wrapper = document.querySelector('.wrapper-hamburger');
const closeButton = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.sp-menu a');

function toggleMenu(isOpen) {
    wrapper.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute(
        'aria-label',
        isOpen ? 'メニューを閉じる' : 'メニューを開く'
    );

    document.body.style.overflow = isOpen ? 'hidden' : '';
}

hamburger.addEventListener('click', () => {
    const isOpen = wrapper.classList.contains('is-open');
    toggleMenu(!isOpen);
});

closeButton.addEventListener('click', () => {
    toggleMenu(false);
});

overlay.addEventListener('click', () => {
    toggleMenu(false);
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu(false);
    });
});

});

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        backToTop.classList.add('is-visible');
    } else {
        backToTop.classList.remove('is-visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});