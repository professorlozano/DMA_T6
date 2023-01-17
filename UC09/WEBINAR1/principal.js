class Livro{
    constructor (pNome, pPreco){
        this.nome = pNome;
        this.Preco = pPreco;
    }

    
    get Nome(){ return this.Nome;}
    set Nome(pNome){ this.nome = pNome;}
    get Preco(){ return this.Preco;}
    set Preco(pPreco){ this.preco = pPreco;}
    
}

/*
var obj_livro = new Livro('Livro de POO', 100);
console.log(obj_livro.nome);
console.log(obj_livro.preco);
*/

var lista = []
var obj_livro1 = new Livro("POO com JavaScript",200);
lista.push(obj_livro1);
var obj_livro2 = new Livro("POO com C#",180);
lista.push(obj_livro2);
console.log(lista[0]);
console.log(lista[1]);
