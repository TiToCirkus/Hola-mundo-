const button = document.getElementById('btn');

function changefoot(){
    document.getElementById('footer').style.fontSize = 'x-large'
    document.getElementById('footer__background').style.backgroundColor = 'blue'
}

button.addEventListener('click', changefoot)