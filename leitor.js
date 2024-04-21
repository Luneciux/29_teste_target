const readline = require('readline');

//criando um leitor para facilitar de pegar os dados enquanto estiver executando
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = leitor;

