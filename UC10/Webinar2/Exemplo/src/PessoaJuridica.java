public class PessoaJuridica extends Pessoa{
    private String cnpj;

    public double calcularImposto(double renda){
        double imposto;
        imposto = renda *0.15;
        return imposto;
    }
}
