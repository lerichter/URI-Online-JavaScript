const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const p1 = parseInt(lines.shift());
const c1 = parseInt(lines.shift());
const p2 = parseInt(lines.shift());
const c2 = parseInt(lines.shift());

const t1 = p1 * c1;
const t2 = p2 * c2;

const balance = t1 - t2;

if(balance < 0){
  console.log(1);
}
else if(balance > 0){
  console.log(-1);
}
else{
 console.log(0);
}

let info = lines
  .shift()
  .split(" ")
  .map((el) => Number(el))

 

// let P1 = info[0]
// let C1 = info[1]
// let P2 = info[2]
// let C2 = info[3]

// if (P1 * C1 == P2 * C2) {
//   console.log("0")
// } else if (P1 * C1 < P2 * C2) {
//   console.log("1")
// } else {
//   console.log("-1")
// }