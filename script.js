const btn = document.querySelector('nav i');
const ul = document.querySelector('nav ul');
let ham_close_div = document.querySelector('#ham_close_div');

ham_close_div.addEventListener('click', function () {
    ham_close_div.classList.toggle('active3');
    ul.classList.toggle('openHam');
})