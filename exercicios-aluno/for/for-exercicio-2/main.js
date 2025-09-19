let peso = 0;
let pesoTotal = 0;

for (let cont = 1; cont < 11; cont = cont + 1) {
    peso = prompt('insira o peso da pessoa número ' + cont);
    pesoTotal = pesoTotal + Number(peso);
    console.log(pesoTotal);
    
}

// continuação da resolução está no github do professor