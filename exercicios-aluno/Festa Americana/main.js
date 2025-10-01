// Constante Para o campo 'item', constante para o campo 'Nome', constante para o Botão Adicionar Item. 
const insiraUmItem = document.getElementById('novo-item');
const insiraUmNome = document.getElementById('nome-pessoa');
const botaoAdicionarItem = document.getElementById('btn-adicionar')

// Adicionando Um Listener 
botaoAdicionarItem.addEventListener('click', funcaoClick)

function funcaoClick() {
  const valorDoItem = insiraUmItem.value.trim();
  const valorDoNome = insiraUmNome.value.trim();
  
  if (valorDoItem === '' || valorDoNome ==='') {
    alert('Por favor, preencha todos os campos!');
  } else {
    console.log(`O item "${valorDoItem}" foi adicionado por "${valorDoNome}"`);
    // Aqui você pode também limpar o campo, se quiser:
    // insiraUmItem.value = '';
  }
}


