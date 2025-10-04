const botao = document.querySelector('#botao-dog');
const imagem = document.querySelector('#foto-dog');

function converterParaJSON(resposta) {
  return resposta.json();
}

function atualizarImagem(dados) {
  imagem.src = dados.message;  // URL da foto está em 'message'
}

function mostrarErro(erro) {
  console.log('Erro ao buscar foto:', erro);
}

function buscarFotoDog() {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(converterParaJSON)
}

