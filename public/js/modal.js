// CONNEXION / SUBSCRIPTION

let connexion = document.querySelector('#modale1')
let inscription = document.querySelector('#modale2')
let btnConnexion = document.querySelector('.connexion')
let btnSubs = document.querySelector('.inscription')
let btnSign = document.querySelector('#boutConnex')
let modal = document.querySelector('#connexion')
let btnClose = document.querySelector('.fermer')

    // CONNEXION

btnConnexion.addEventListener('click', () => {
    if (connexion.classList.contains('d-none')) {
        connexion.classList.remove('d-none')
    }
    inscription.classList.add('d-none')
})
btnSign.addEventListener('click', () => {
    modal.style.display = "block"
})
btnClose.addEventListener('click', () => {
    modal.style.display = "none"
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
