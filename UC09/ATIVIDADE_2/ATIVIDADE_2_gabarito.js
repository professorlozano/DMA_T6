class Pessoa{
    constructor(pNome, pEndereco){
        this.Nome = pNome;
        this.Endereco = pEndereco;
    }
    get Nome() { return this.nome};
    set Nome(pNome){ this.nome = pNome};
    get Endereco() { return this.endereco};
    set Endereco(pEndereco){ this.endereco = pEndereco};

    toString(){
        return `Nome: ${this.nome} \nEndereço: ${this.endereco}`;
    }
}

class Fisica extends Pessoa{
    constructor(pNome, pEndereco, pCpf, pDtNascimento){
        super(pNome, pEndereco);
        this.Cpf = pCpf;
        this.DtNascimento = pDtNascimento;
    }
    get Cpf() { return this.cpf};
    set Cpf(pCpf){ this.cpf = pCpf};
    get DtNascimento() { return this.dtNascimento};
    set DtNascimento(pDtNascimento){ this.dtNascimento = pDtNascimento};

    toString(){
        let retorno = super.toString();
        retorno = retorno + `\nCpf: ${this.cpf} \nNascimento: ${this.dtNascimento}`;
        return retorno;
    }
}

class Juridica extends Pessoa{
    constructor(pNome, pEndereco, pCnpj, pRazaoSocial){
        super(pNome, pEndereco);
        this.Cnpj = pCnpj;
        this.RazaoSocial = pRazaoSocial;
    }
    get Cnpj() { return this.cnpj};
    set Cnpj(pCnpj){ this.cnpj = pCnpj};
    get RazaoSocial() { return this.razaoSocial};
    set RazaoSocial(pRazaoSocial){ this.razaoSocial = pRazaoSocial};

    toString(){
        let retorno = super.toString();
        retorno = retorno + `\nCnpj: ${this.cnpj} \nRazao Social: ${this.razaoSocial}`;
        return retorno;
    }
}

var pessoa = new Pessoa("Luiz","Helvetia 667");
console.log(pessoa.toString());

var fisica = new Fisica("João", "Avenida Sapopemba","314399876-12","18/05/1986");
console.log(fisica.toString());

var juridica = new Juridica("Mega Util", "Avenida Sapopemba","804890020001-12","XX Comercio de Utilidades Ltda");
console.log(juridica.toString());
