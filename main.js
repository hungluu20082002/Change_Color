const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'greend', 'blue', 'yellow', 'pink', 'purple'];

button.addEventListener('click', changeBackGround);

function changeBackGround() {
    const colorIndex = Math.floor(Math.random() * colors.length);
    body.style.background = colors[colorIndex];
}