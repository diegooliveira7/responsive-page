const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});


//Função digitando na home

function actionLetter(element) {
    const arrText = element.innerHTML.split('');
    element.innerHTML = '';
    arrText.forEach((letter, i) => {
        setTimeout(()=> {
            element.innerHTML += letter;
        }, 75 * i);
    });
}

const title = document.querySelector('.text-h1');
actionLetter(title);


