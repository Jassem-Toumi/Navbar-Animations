// Activating the nav menu and burger on small screens 
const NavMenu = () => {
    var BurgerMenu = document.querySelector('.burger');
    var ActiveMenu = document.querySelector('.nav-links-list');
    // var NavLinks = document.querySelectorAll('.nav-links');

    BurgerMenu.addEventListener('click', () => {
    BurgerMenu.classList.toggle('toggle');
    ActiveMenu.classList.toggle('active-menu');
    // NavLinks.classList.toggle('active-links');
});

}

NavMenu();
