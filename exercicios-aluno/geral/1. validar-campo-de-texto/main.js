// Criando constantes

const novoItem = document.getElementById('novo-item');
const botao = document.getElementById('botao');

// Adicionando Listenner

botao.addEventListener('click', validacao);

// Chamando uma função 

function validacao() {
    let itemInserido = novoItem.value;
    if (itemInserido == '') {
        alert('O campo não está preenchido');
    } else {
        alert('Campo preenchido');
    }
}

