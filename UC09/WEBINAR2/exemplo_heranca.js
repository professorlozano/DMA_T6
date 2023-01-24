class Conta{
    constructor(){
        this.Saldo = 0;
    }
    get Saldo(){return this.saldo;}
    set Saldo(pSaldo){this.saldo = pSaldo;}
 }

 class Corrente extends Conta {
    constructor(pLimite){
        super();
        this.Limite = pLimite;
    }
    get Limite(){return this.limite;}
    set Limite(pLimite){this.limite = pLimite;}
 }

var objeto_corrente = new Corrente(300);
objeto_corrente.saldo = 1000;
console.log(objeto_corrente);