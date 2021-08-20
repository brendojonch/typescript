"use strict";
//Bollean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = 'Brendo Jonch';
// Array 
var idade = [23, 28, 45];
var idades2 = [23, 28];
// Tuple
var jogadores;
jogadores = ['Brendo', 8, 'Ciclano'];
// Enum
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Pendente"] = "002";
    statusAprovacao["Rejeitado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
var statusDaAprovacao = statusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, 'Brendo', false];
var retornoDaAPI2 = {
// ......
};
// Void 
function printNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    //..
}
criar({
    propriedade: 1.,
});
//criar('Brendo') // Da errro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    returne;
    erro('Algo falhou');
}
// Union Types (mesmo parametro mais de um tipo)
var nota = 5; // pode ser feito com variavel
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Brendo',
        sobrenome: 'Jonch',
        dataNascimento: new Date()
    }, {
        nome: 'Fulano',
        sobrenome: 'Ciclano',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: nome,
    'Brendo': ,
    telefone1: '12345',
    telefone2: '12131231'
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
var input = document.getElementById('numero1');
var input = document.getElementById('numero1');
console.log(input.value);
