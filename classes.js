"use strict";
var Data = /** @class */ (function () {
    //public dia: number;
    //mes: number;
    //ano: number;
    //private e public altera o acesso a propriedade
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        //this.dia = dia;
        //this.mes = mes;
        //this.ano = ano;
    }
    return Data;
}());
//public faz otypscript faz de forma automatica o preenchimento do this.dia/mes/ano.
var data = new Data(1, 1, 2020);
console.log(data.dia);
var data = new Data(1, 1);
