package pck_principal;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Conexao {
    private String caminho = "jdbc:mysql://localhost:3306/comabem";
    private String usuario = "root";
    private String senha = "vip12345";
    public Connection conn;

    public void conexao(){
        try
        {
            conn= DriverManager.getConnection(caminho, usuario, senha);
            System.out.println("CONECTADO COM SUCESSO!!!");
        }
        catch(SQLException ex)
        {
            Logger.getLogger(Conexao.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println("ERRO DE CONEXAO!!!");
        }
    }

    public void desconecta(){
        try
        {
            conn.close();
            System.out.println("DESCONECTADO DO BANCO COM SUCESSO!!!");
        }
        catch(SQLException ex)
        {
            Logger.getLogger(Conexao.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println("ERRO AO FECHAR A CONEXAO!!!");
        }
    }

    /*
    public static void main(String[] args) { //psvm+tab cria o metodo main
        Conexao obj_conexao = new Conexao();
        obj_conexao.conexao();
    }
    */
}
