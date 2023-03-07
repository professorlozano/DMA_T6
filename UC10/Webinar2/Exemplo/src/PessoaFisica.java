public class PessoaFisica extends Pessoa{
    private String cpf;

    public double calcularImposto(double renda){
        double imposto;
        imposto = renda * 0.10;
        return imposto;
    }
}
