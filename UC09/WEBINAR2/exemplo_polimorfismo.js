class Conta{
    constructor(){
        this.Saldo = 0;
    }
    get Saldo(){return this.saldo;}
    set Saldo(pSaldo){this.saldo = pSaldo;}

    imprimir(){
        return "Saldo: " + this.saldo;
    }
 }

 class Corrente extends Conta {
    constructor(pLimite){
        super();
        this.Limite = pLimite;
    }
    get Limite(){return this.limite;}
    set Limite(pLimite){this.limite = pLimite;}

    imprimir(){
        return super.imprimir() + "\nLimite: " + this.limite;
    }
 }

/*
 var objeto_conta = new Conta();
objeto_conta.saldo = 1000;
console.log(objeto_conta.imprimir());
*/

var objeto_corrente = new Corrente(300);
objeto_corrente.saldo = 3000;
console.log(objeto_corrente.imprimir());