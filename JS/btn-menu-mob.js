let btnMenuMob = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menu-mob1')
let line2 = document.querySelector('.line-menu-mob2')
let menuMobile = document.querySelector('#menu-mobile')
let body = document.querySelector('body')

// Função para fechar o menu
function fecharMenu() {
  line1.classList.remove('ativo1')
  line2.classList.remove('ativo2')
  menuMobile.classList.remove('abrir')
  body.classList.remove('no-overflow')
}

// Abrir ou fechar o menu ao clicar no botão
btnMenuMob.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita que o clique no botão feche o menu
  line1.classList.toggle('ativo1')
  line2.classList.toggle('ativo2')
  menuMobile.classList.toggle('abrir')
  body.classList.toggle('no-overflow')
})

// Fechar o menu ao clicar em qualquer link do menu
document.querySelectorAll('.menu-mobile nav ul li a').forEach(link => {
  link.addEventListener("click", () => {
    fecharMenu();
  });
})

// Fechar o menu ao clicar fora dele
document.addEventListener("click", (e) => {
  if (!menuMobile.contains(e.target) && !btnMenuMob.contains(e.target)) {
    fecharMenu();
  }
})
