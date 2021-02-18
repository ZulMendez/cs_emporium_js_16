// CONNEXION / SUBSCRIPTION
let body = document.querySelector('body')
let section = document.querySelector('#section1')
let connexion = document.querySelector('#modale1')
let inscription = document.querySelector('#modale2')
let btnConnexion = document.querySelector('.connexion')
let btnSubs = document.querySelector('.inscription')
let btnSign = document.querySelector('#boutConnex')
let modal = document.querySelector('#connexion')
let btnClose = document.querySelector('.fermer')
let div1 = document.querySelector('#div1')

    // CONNEXION

btnConnexion.addEventListener('click', () => {
    if (connexion.classList.contains('d-none')) {
        connexion.classList.remove('d-none')
    }
    inscription.classList.add('d-none')
})
btnSign.addEventListener('click', () => {
    modal.style.display = "block" 
    body.style.overflow = "hidden"
    div1.style= "width: 100%; height: 100%; background-color: rgba(0,0,0,.5); z-index: 999; position: fixed;"
    
})
btnClose.addEventListener('click', () => {
    modal.style.display = "none"
    body.style.overflow = null
    div1.style= "display:none"
})
btnSign.addEventListener('click', () => {
    if (connexion.classList.contains('d-none')) {
        connexion.classList.remove('d-none')
    }
    inscription.classList.add('d-none')
})
btnSubs.addEventListener('click', () => {
    if (inscription.classList.contains('d-none')) {
        inscription.classList.remove('d-none')
    }
    connexion.classList.add('d-none')
})
