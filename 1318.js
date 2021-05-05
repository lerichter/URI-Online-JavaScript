// const arr = [6, 1, 3, 6, 6, 4, 2, 3, 1, 2, "teste", "teste"];
// var novaArr = arr.filter((este, i) => arr.indexOf(este) === i);

// console.log(novaArr);

function StoreTickets (persons, arrayOfNumbers, ticketsNumbers) {
  if(persons <= 0) {
      return 0
  }
  arrayOfNumbers.push(ticketsNumbers.shift())
  StoreTickets(persons - 1, arrayOfNumbers, ticketsNumbers)
}

const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort()
  let results = []
  for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
          results.push(sorted_arr[i])
      }
  }
  return [...new Set(results)]
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines[0] != "0 0"){
  const ticketsAndPersons = lines.shift().split(" ");
  const ticketsNumbers = lines.shift().split(" ");

  const tickets = parseInt(ticketsAndPersons.shift())
  const persons = parseInt(ticketsAndPersons.shift())
  const arrayOfNumbers = []
  
  StoreTickets(persons, arrayOfNumbers, ticketsNumbers)
  const repeatedTickets = findDuplicates(arrayOfNumbers)
  console.log(repeatedTickets.length)
}

