var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do{
  const linhas = lines.shift().split(" ")
  const votos = lines.shift().split(" ")
  let sim = 0
  let nao = 0
  for (const i of votos) {
    if(i == 1)
      nao++
    else
      sim++
  }
  if(sim > nao)
    console.log('Y')
  else
    console.log('N')
} while(lines.length-1 != 0)