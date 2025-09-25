
let usoDiasDaSemana = [2.3, 2, 2.4, 5, 1.2, 0.5, 12] 
let diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];


// Determinar se o uso do dia é verde, amarelo ou vermelho
const indicadorDeUso = (numeroDeHoras) => {
    if ( numeroDeHoras <= 1 ) {
        return '🟢';
    } else if ( numeroDeHoras <= 3) {
        return '🟡';
    }
    else {
        return '🔴';
    }
}

console.log( indicadorDeUso(usoDiasDaSemana[0]));
console.log( indicadorDeUso(usoDiasDaSemana[1]));
console.log( indicadorDeUso(usoDiasDaSemana[2]));
console.log( indicadorDeUso(usoDiasDaSemana[3]));
console.log( indicadorDeUso(usoDiasDaSemana[4]));
console.log( indicadorDeUso(usoDiasDaSemana[5]));
console.log( indicadorDeUso(usoDiasDaSemana[6]));

for (let contador = 0; contador <= 6 ; contador ++ ) {
    let farol = indicadorDeUso(usoDiasDaSemana[contador]);
    let dia = diasDaSemana [contador];
    let horas = usoDiasDaSemana[contador];
    
  console.log(`${farol} 🗓️ ${dia} | ${horas} horas de uso`);

}




usoDiasDaSemana [0]







// console.log(typeof usoDiasDaSemana);
// console.log(typeof usoDiasdaSemana [0]); //number
// console.log(typeof indicadorDeUso); // function 