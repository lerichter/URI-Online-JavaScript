var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do{
  const partidas = lines.shift().split(" ")
  let A = partidas[0], B = partidas[1], C = partidas[2]
  if(A === B && A === C){
    console.log('*')
  }
  else if(A !== B && A !== C){
    console.log('A')
  }
  else if(B !== C && B !== A){
    console.log('B')
  }
  else if(C !== A && C !== B){
    console.log('C')
  }
}

while(lines.length-1 != 0){  
}