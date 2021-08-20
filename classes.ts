class Data {
    //public dia: number;
    //mes: number;
    //ano: number;

    //private e public altera o acesso a propriedade

    constructor(public dia: number, public mes: number, public ano: number = 1970) {
        //this.dia = dia;
        //this.mes = mes;
        //this.ano = ano;
    }
}

//public faz otypscript faz de forma automatica o preenchimento do this.dia/mes/ano.

const data = new Data(1, 1, 2020);
console.log(data.dia);


const data = new Data(1, 1);

class carro {

    private velocidadeAtual: number = 0;

    constructor(

        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }


    private alterarVelocidade(delta: number) {





    }

    acelerar() {

        this.alterarVelocida(5);

        frear()
        this.alterarVelocida(- 5);
    }

})
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.aceleracao();

// Herança
class Camaro extends Carro {

    constructor() {
        super('Chevrolet', 'Camaro,' 500);
    }
}

const camaro = new Camaro(;)