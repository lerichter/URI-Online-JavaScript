const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

while(line[0] != "0"){
    const jogadas = lines.shift().split(" ");
    const numeros = lines.shift().split(" ");
    
    let maria = 0;
    let joao = 0;
    
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] == 0){
            maria += 1
        }
        else{
            joao += 1
        }
    }
    console.log(`Mary won ${maria} times and John won ${joao} times`)
}