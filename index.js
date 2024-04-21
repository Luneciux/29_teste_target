const leitor = require('./leitor');


//1 questao
let index = 13;
let soma = 0;
let k = 0;

while (k < index) {
    k = k + 1;
    soma = soma + k;
}

console.log(soma + '\n\n');


//2 questao
//na internet encontrei algumas paginas comentando que segundo a propriedade de Binet, um numero é de fibonacci se (5*n^2 + 4) ou (5*n^2 – 4) retornarem um quadrado perfeito
//fiz um teste pros 10 primeiros valores e parece ser veridico

leitor.question('Digite um numero para verificar se o mesmo está na Fibonacci  ', (valor) => {
    console.log(estaNaSequencia(valor));
    leitor.close();
});

const estaNaSequencia = (valor) => {
    return (quadradoPerfeito(5*(valor*valor) + 4)  ||  quadradoPerfeito(5*(valor*valor) - 4)) ? true : false;
}

const quadradoPerfeito = (valor) => {
    let raiz = parseInt(Math.sqrt(valor));
    return Math.pow(raiz, 2) == valor ? true : false;
}


//3 questao


// a) 1, 3, 5, 7, ___ (+2 entre cada iteracao) (9)

// b) 2, 4, 8, 16, 32, 64, ____ (*2 entre cada iteracao) (128)

// c) 0, 1, 4, 9, 16, 25, 36, ____ (indices ao quadrado) (49)

// d) 4, 16, 36, 64, ____ (quadrado de numeros pares) (1, 2x2, 3, 4x4, 5, 6x6, 7, 8x8, 9, 10x10) (100)

// e) 1, 1, 2, 3, 5, 8, ____ (soma do atual com o anterior) (13)

// f) 2, 10, 12, 16, 17, 18, 19, ____ (numeros com a letra D) (200)


//4 questao
// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está,
// mas pode ligar e desligar os interruptores quantas vezes quiser. 
//Seu objetivo é descobrir qual interruptor controla qual lâmpada.
// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

//liga 1 interruptor, ve de qual lampada é
//liga o 2, ve de qual lampada, é
//o terceiro voce descobre por inferencia


//5 questao

leitor.question('Inverter String  ', (valor) => {
    console.log(inverter(valor));
    leitor.close();
});

const inverter = (valor) => {
    let novoValor = [];
    for (let index = 0; index < valor.length; index++) {
        novoValor[index] = valor[valor.length - index];
    }

    return novoValor;
}