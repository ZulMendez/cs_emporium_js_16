// let body = document.querySelector('body');

let listNavbar = document.querySelectorAll('.nav-link');
let white = document.querySelector('#white');
let black = document.querySelector('#black');
let emporium1 = document.querySelector('#emporium1');
let titreCarte = document.querySelector('#titreCarte');
let cartes = document.querySelectorAll('#carte1')
let titreHot = document.querySelector('#hot');
let header = document.getElementById("myHeader");
let para = document.querySelectorAll('#listHot')
console.log(para);
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
    titreHot.style.color = "white"
    para.forEach(element => {
        element.style.color = "white"
    });
    header.style.color = "white"
    header.style.backgroundColor = "black"
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
    titreHot.style.color = "black"
    para.forEach(element => {
        element.style.color = "black"
    });
    header.style.backgroundColor = "white"
})

console.log(black);
console.log(white);

// navbar fixe 
let emporium2 = document.querySelector('#emporium2');
// renvoie la distance entre l'élément courant et le haut du nœud offsetParent.
let sticky = header.offsetTop;

console.log(header);
console.log(emporium1);
console.log(emporium2);

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    emporium2.style.display = "flex"
    emporium1.style.display = "none"
    modal.style = "z-index: 1000"
  } else {
    header.classList.remove("sticky");
    emporium2.style.display = "none"
    emporium1.style.display = "block"
  }
}
window.onscroll = function() {myFunction()};


// CAROUSEL

let item1 = document.querySelector('.item1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let item4 = document.querySelector('.item4')
let carrou = document.querySelector('.carrou')

item1.addEventListener('click', () => {
    carrou.style.transform = "translateX(0%)"
    carrou.style.transition = "2s"
})

item2.addEventListener('click', () => {
    carrou.style.transform = "translateX(-300px)"
    carrou.style.transition = "2s"
})

item3.addEventListener('click', () => {
    carrou.style.transform = "translateX(-600px)"
    carrou.style.transition = "2s"
})

item4.addEventListener('click', () => {
    carrou.style.transform = "translateX(-900px)"
    carrou.style.transition = "2s"
})