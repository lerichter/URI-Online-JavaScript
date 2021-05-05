var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do{
    let cpf = lines.shift()
    cpf = cpf.replace(/[\s.-]*/igm, '')
    let numeroscpf = cpf.slice(0, 9)
    let digitoscpf = cpf.slice(9, 11)
    numeroscpf = numeroscpf.split('')
    digitoscpf = digitoscpf.split('')
    let b1 = digitoscpf[0]
    let b2 = digitoscpf[1]
    let p = 1 
    let q = 9
    let temp1 = 0
    let temp2 = 0
    
    for(let i = 0; i < numeroscpf.length; i++){
        
        temp1 += numeroscpf[i] * p
        p++
    } 
    if(temp1%11 == 10)
        temp1 = 0
    else
        temp1 = temp1%11    
    
    
    for(let i = 0; i < numeroscpf.length; i++){
        
        temp2 += numeroscpf[i] * q
        q--
    }
    if(temp2%11 == 10)
        temp2 = 0
    else
        temp2 = temp2%11    

    
    if(temp1 == b1 && temp2 == b2){
        console.log('CPF valido')
    }
    else{
       console.log('CPF invalido') 
    }
    
} while(lines.length-1 != 0)