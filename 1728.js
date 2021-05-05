var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do{
  const part1 = lines.shift().split("+") //pegar array na posição 1 (com dois numeros) e separar ele onde tem o sinal de igual
  let part2 = part1[1].split('=') // posição zero antes do sinal e igualdade - posição 1 depois do sinal de igualdade

  a = Number(part1[0].split('').reverse().join('')) //separa o número, inverte e junta novamente (Number - transforma em número de novo)
  b = Number(part2[0].split('').reverse().join('')) //segunda parte posição 0 
  c = Number(part2[1].split('').reverse().join('')) //segunda parte posição 1 
  
  if((a + b) === c){
    console.log('True')
  }
  else{
    console.log('False')
  }
}
while(lines[0] != "0+0=0")
console.log('True')