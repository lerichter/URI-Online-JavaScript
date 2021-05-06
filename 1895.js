var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do{
    const leitura = lines.shift().split(" ") // pega primeira linha do código .. 3 valores separaods por espaço - 1o valor é qtd de cartas .. 2o valor é a carta que fica na mesa .. 3o valor é o limite 
    const numCartas = leitura[0] // numero de cartas - recebe primeiro valor de leitura 
    let cartaMesa = leitura[1] // cartaMesa 0- leitura na posição 1
    let limite = leitura[2] // referente ao limite e aceite do jogo (diferença da mesa para a carta na mão)
    const pilhaCartas = [] // para colocar as cartas que vamos receber do baralho
    const pontos = [] //para distribuir pontuação entre Alive e Bob
    let alice = 0 // para dizer pontuação do jogador
    let bob = 0
    let jogadaAlice = 0 //marcadores para saber onde eu começo a ler o array de pontos para alice - indice 0 pq Alice joga sempre em par
    let jogadaBob = 1 //marcadores para saber onde eu começo a ler o array de pontos para bob - indice 0 pq Bob joga sempre em impar
    
    for(let i = 0; i < numCartas-1; i++){ //verifica i em 0 e vai até numero de cartas menos 1 pq já tem 1 carta na mesa --- a pontuação não conta 11 cartas, pq 1 ta na mesa 
        pontos[i] = 0 //pq não tem pontuação ainda (ng marcou) ___ evita problema de compilação
    }
    let diff = 0
    for(let i = 0; i < numCartas-1; i++){ //numero cartas -1 pq já tem uma carta na mesa // preencher o array com todas as cartas que precisa ler
        pilhaCartas.push(Number(lines.shift().split(" "))) //puxa a linha e pega o valor e transforma em number
    }

    for(let i = 0; i < pilhaCartas.length; i++){ //sistema de pontuaçai di jogo --- vai percorrer de i até a ultima carta no baralho
        diff = Math.abs(cartaMesa - pilhaCartas[i]) //Math.abs pega o valor absoluto (ignora o sinal de menos no numero)
        if(diff <= limite){
            pontos[i] = Math.abs( cartaMesa - pilhaCartas[i])
            cartaMesa = pilhaCartas[i]
        }
    }
    while(jogadaAlice < pontos.length){
        if(pontos[jogadaAlice] != 0)
            alice += pontos[jogadaAlice] //alice começou em zero .. ela ganha zero + pontos da carta
        jogadaAlice += 2 //sempre jogada par, pq começa em 0
    }
     while(jogadaBob < pontos.length){
        if(pontos[jogadaBob] != 0)
            bob += pontos[jogadaBob]
        jogadaBob += 2 //sempre jogada impar, pq começa em 1
    }
    
    console.log(alice, bob) //qdo percorre todos os arrays, Alice e Bob já tem pontuação definida
} while(lines.length-1 != 0)