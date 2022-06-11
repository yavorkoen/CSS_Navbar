let burgerButton = document.getElementById('burger-button');
let xButton = document.getElementById('x-button');
burgerButton.addEventListener('click', burgerHandler);
xButton.addEventListener('click', xHandler)
function burgerHandler(e) {
    e.preventDefault()
    let navbar = document.querySelector('.navbar');
    navbar.style.maxHeight = '500px';
    navbar.style.transition = 'max-height 0.5s ease-in';
    burgerButton.style.display = 'none';
    xButton.style.display = 'block';
}
function xHandler(e) {
    e.preventDefault()
    let navbar = document.querySelector('.navbar');
    navbar.style.maxHeight = '0';
    // navbar.style.transition = 'max-height 0.5s ease-in';
    burgerButton.style.display = 'block';
    xButton.style.display = 'none';
}