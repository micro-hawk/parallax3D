let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');

function scrollingEffect () {
    let value = window.scrollY;
    text.style.top = 50 + value * -0.5 + '%';
}

window.addEventListener('scroll', scrollingEffect());