let nav_btn = document.getElementById('nav_links_btn');
let navbar = document.getElementById('navbar');

nav_btn.addEventListener('click', function(){
    navbar.classList.toggle('display-nav-links');
});