let ocortico = document.getElementById('o-cortico');
console.log (ocortico);

let anchor = document.getElementsByTagName('a')
console.log (anchor);

let vidasSecas = document.querySelector('#vidas-secas')
console.log (vidasSecas);


let navListFooter = document.querySelector('.footer-links .nav-list')
console.log (navListFooter);


let navListHeader = document.querySelector('.header .nav-list')
console.log (navListHeader);

// Modificando Elementos
ocortico.style.color = 'red';

let paragrafo = ocortico.querySelector('p');
paragrafo.style.color ='red';

// Modificando classes
console.log ('vidasSecas.className', vidasSecas.className)

vidasSecas.className = 'card-livro fora-de-estoque'

// Modificando imagem de livro 

