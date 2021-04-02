 "use strict";

let drpMenu = document.querySelector('.table-bottom')
let Menus   = document.querySelector('.drpmenu')

drpMenu.addEventListener('click', () => {
    drpMenu.classList.toggle('active')
    Menus.classList.toggle('active')
})
