public class UsaClasses {
    public static void main(String[] args) {
        PessoaFisica obj_pessoaFisica = new PessoaFisica();
        PessoaJuridica obj_pessoaJuridica = new PessoaJuridica();

        System.out.println("Imposto da pessoa fisica " + obj_pessoaFisica.calcularImposto(2000));
        System.out.println("Imposto da pessoa juridica " + obj_pessoaJuridica.calcularImposto(2000));

    }
}
