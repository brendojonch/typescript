//Bollean

const contaPaga: boolean = false;

// Number

const idade: number = 23;
const avaliacao: number = 4.5;

// String

const nome: string = 'Brendo Jonch'

// Array 
const idade: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 28];

// Tuple
let jogadores: [string, number, string];
jogadores = ['Brendo', 8, 'Ciclano'];

// Enum
enum statusAprovacao {
    Aprovado = '001'
    Pendente = '002'
    Rejeitado = '003'
}

const statusDaAprovacao: statusAprovacao = statusAprovacao.Aprovado

// Any
const retornoDaAPI: any[] = [123, 'Brendo', false];
const retornoDaAPI2: any = {
    // ......
};

// Void 
function printNaTela(msg: string) {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    //..
}
criar({
    propriedade: 1.,
})
//criar('Brendo') // Da errro

// Never
function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);

}

function falha() {
    returne erro('Algo falhou');
}

// Union Types (mesmo parametro mais de um tipo)
const nota: string | number = 5 // pode ser feito com variavel
function exibirNota(nota: number | string) { // pode ser feito com parametros
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Brendo',
    sobrenome: 'Jonch',
    dataNascimento: new Date()
}, {
    nome: 'Fulano',
    sobrenome: 'Ciclano',
    dataNascimento: new Date()

}];
function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionario: 'funcionario.nome);
    }

}
