let tentativa = 3; //Contador sera iniciado com 5 pois na proposta é solicitado uma variavel para contar as tentativas
let numeroSecreto = Math.round(Math.random() * 10)
let leitura
let acerto = false

while (tentativa > 0) { //enquanto a tentativa for maior que 5 o programa do loop irá acontecer
    leitura = parseInt(prompt("Tente adivinhar um numero entre 1 e 10"));


    if (leitura == numeroSecreto) {
        alert("Parabens voce conseguiu");
        acerto = true
        break;
    } else if (leitura < numeroSecreto) {
        tentativa--; //ele so irá diminuir a tentativa se a condição do if for verdadeira
        alert(`O numero secreto é maior que seu chute, tente novamente ${tentativa} Tentativas Restantes`);
    } else {
        tentativa--;
        alert(`O numero secreto é menor que seu chute, tente novamente ${tentativa}Tentativas Restantes`);
    }

}
 if (!acerto){
alert(`QUE PENA PUTZ GRILLA O NUMERO ERA:  ${numeroSecreto} `);
 
 }