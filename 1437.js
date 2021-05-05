var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines[0] != "0"){
  const partidas = lines.shift().split(" ")
  const direcoes = lines.shift().split("") //não tem espaço em branco pra pegar letra por letra
  
  const posicoes = ['N', 'L', 'S', 'O'] // 0, 1, 2 e 3
  let parada = posicoes[0] //seta parada inicialmente em N que é 0
  let p = 0 // seta o p como parada para não utilizar o i 
  
  for(let i = 0; i < partidas; i++){
    if(direcoes[i] === 'D' && parada === 'O'){ //se tiver em O e for para a direita 
      p = 0
      parada = posicoes[p]
    }
    else if(direcoes[i] === 'E' && parada === 'N'){ // se tive na posicao N e for pra esquerda 
      p = 3 //seta o p 
      parada = posicoes[p]
    }
    else if(direcoes[i] === 'D'){ //simplesmente olhar, se é pra direita ou pra esquerda //se for pra direita 
      p++ 
      parada = posicoes[p]
    }
    else if (direcoes[i] === 'E') {//simplesmente olhar, se é pra direita ou pra esquerda //se for pra esquerda 
      p--
      parada = posicoes[p]
    }
  }
  console.log(parada)
}