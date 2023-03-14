package pck_principal;

public class Principal {
    public static void main(String[] args) {
        DAO_Produtos obj_produtos = new DAO_Produtos();

        /*CONSULTAR PRODUTOS
        obj_produtos.consultar();
        */

        /* INSERIR PRODUTOS
        Produto novoProduto = new Produto(6, "Pera", 30.00, 5.0, 3);
        obj_produtos.inserir(novoProduto);
         */

        /*ALTERAR PRODUTOS
        Produto produtoAlterado = new Produto(6,"Pera alterada", 25.00, 5.0,3);
        obj_produtos.alterar(produtoAlterado);
         */

        /* EXCLUIR PRODUTOS
        obj_produtos.excluir(6);
         */

        DAO_Unidades obj_unidades = new DAO_Unidades();
        /* CONSULTAR UNIDADES
        obj_unidades.consultar();
         */

        /*INSERIR UNIDADES
        Unidade novaUnidade = new Unidade(6, "unidade");
        obj_unidades.inserir(novaUnidade);
        */

        /*
        Unidade unidadeAlterada = new Unidade(6, "unidade alterada");
        obj_unidades.alterar(unidadeAlterada);
         */

        obj_unidades.excluir(6);

    }
}
