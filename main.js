const hamburger = document.querySelector('.hamburger-menu');
const navBtns = document.querySelector('.nav-btns');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling to document
    navBtns.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!navBtns.contains(e.target) && !hamburger.contains(e.target)) {
        navBtns.classList.remove('active');
    }
});
