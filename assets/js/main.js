navbar_shows = true;

function getNavBarChildNum() {
    a = document.getElementById("navrow").childElementCount;
    a--; // disconsider menu button
    return a;
}

function toggleNavbar() {
    navbar = document.getElementById('navbar');

    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
        if (navbar_shows) {
            navchild_num = getNavBarChildNum();
            navbar.style.top = navchild_num * -2 + "em";
            navbar_shows = false;
        } else {
            navbar.style.top = "0";
            navbar_shows = true;
        }
    }
}

darkmode = false;

function setFavicon() {
    link = document.getElementById('dynamic-favicon');
    link.type = 'image/svg+xml';
    link.rel = 'shortcut icon';

    if (window.matchMedia && (window.matchMedia('(prefers-color-scheme: dark)').matches || window.matchMedia('(prefers-color-scheme: no-preference)').matches)) {
        link.href = 'favicon-dark.svg?';
        if (darkmode == false) {
            darkmode = true;
        }
    } else {
        link.href = 'favicon.svg?';
        darkmode = false
    }
}

window.addEventListener("load", function () {
    setFavicon();
    toggleNavbar();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);

var prevScrollpos = window.scrollY;
window.addEventListener("scroll", function () {
    navchild_num = getNavBarChildNum();
    navbar = document.getElementById("navbar");
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
            navbar.style.top = navchild_num * -2 + "em";
        } else {
            navbar.style.top = "0";
        }
    } else {
        if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
            navbar.style.top = "-15em";
        } else {
            navbar.style.top = "-2em";
        }
    }
    prevScrollpos = currentScrollPos;
});