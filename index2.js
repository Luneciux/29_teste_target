const leitor = require('./leitor');
//5 questao


leitor.question('Inverter String  ', (valor) => {
    console.log(inverter(valor));
    leitor.close();
});

const inverter = (valor) => {
    let novoValor = "";
    for (let index = 1; index <= valor.length; index++) {
        novoValor = novoValor + valor[valor.length - index];
    }

    return novoValor;
}