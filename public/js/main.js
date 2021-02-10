let body = document.querySelector('body');

let listNavbar = document.querySelectorAll('.nav-link');
let white = document.querySelector('#white');
let black = document.querySelector('#black');
let emporium1 = document.querySelector('#emporium1');
let titreCarte = document.querySelector('#titreCarte');
let cartes = document.querySelectorAll('#carte1')
let titreFashion = document.querySelector('#fashion');

// DARK MODE
black.addEventListener('click', () => {
    document.body.style.backgroundColor = "black";
    emporium1.style.color = "white";
    listNavbar.forEach(element => {
        element.style.color = "white"
    });
    titreCarte.style.color = "white";
    cartes.forEach(element => {
        element.style.color = "white"
    });
    titreFashion.style.color = "white"
})

// WHITE MODE 
white.addEventListener('click', () => {
    document.body.style.backgroundColor = "white";
    emporium1.style.color = "black";
    listNavbar.forEach(element => {
        element.style.color = "black"
    });
    titreCarte.style.color = "black";
    cartes.forEach(element => {
        element.style.color = "black"
    });
    titreFashion.style.color = "black"
})

// MODAL
let modal = document.querySelector('.modal');
let formulaire = document.querySelector('.formulaire');
let ferme = document.querySelector('')
