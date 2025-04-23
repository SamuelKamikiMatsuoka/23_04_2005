

let numeroInicial = parseInt(prompt("coloque um numero inicial"));
let numeroFinal = parseInt(prompt("coloque um numero final"));

if (numeroInicial > numeroFinal) {
    while (numeroFinal <= numeroInicial){;
    {
        if (numeroFinal % 2 == 0) {
            console.log(`o seu numero ${numeroFinal} é impar!`);
        }
       
  numeroFinal++;  }
 } 
} else {
    while (numeroInicial <= numeroFinal){
        if (numeroInicial % 2 == 0) {
            console.log(`o seu numero ${numeroInicial} é par!`);
    
        }
     numeroInicial++;
    } 

}
