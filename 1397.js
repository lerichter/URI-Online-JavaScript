var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines[0] != "0"){
    const plays = lines.shift().split(" ");
    let dad = 0;
    let son = 0;
    for(let i = 0; i < plays; i++){
        const numbers = lines.shift().split(" ");
        const numbersInt = numbers.map(x => +x); //faz a variavel trocar de string para inteiro
        if(numbersInt[0] > numbersInt[1]) //se o numero da esquerda for maior que o da esquerda, pai ganha
            dad++;
        else if(numbersInt[0] == numbersInt[1]){  // não muda nada por que é igual
            continue;
        }
        else{ // se não cair no "esquerda maior" ou "são iguais", filho ganha
            son++;
        }
    }
    console.log(`${dad} ${son}`); //quantos pontos o pai fez, quantos pontos o filho fez
}

// outro modo de fazer:

// var input = require("fs").readFileSync("stdin", "utf8")
// var lines = input.split("\n")

// let N = Number(lines.shift())

// while (N != 0) {
//   let A = 0
//   let B = 0
//   let sumA = 0
//   let sumB = 0

//   for (let i = 0; i < N; i++) {
//     let R = lines.shift().split(" ").map((el) => Number(el))

//     A = R[0]
//     B = R[1]

//     if (A > B) {
//       sumA += 1
//     }
//     if (B > A) {
//       sumB += 1
//     }
//   }

//   console.log(sumA, sumB)

//   N = lines.shift()
// }
