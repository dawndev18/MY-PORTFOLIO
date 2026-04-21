const btnNav = document.querySelector('.navbar-btn-mobile-view')
const navBra = document.querySelector('.navbar')

btnNav.addEventListener('click', function() {
    navBra.classList.toggle('open-nav');
});