package entites;

import com.sun.tools.javac.Main;

public class Pessoa {

    String nome;
    String cpf;
    double altura;
    double peso;
    int idade;
    char genero;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String toString() {
        return "Pessoa{" +
                "nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", altura=" + altura +
                ", peso=" + peso +
                ", idade=" + idade +
                ", genero=" + genero +
                '}';
    }

    void caminha(){
        System.out.println("Estou caminhado");
    }

    void desenvolveSe(){
        System.out.println("Estou crescendo");
    }

    void estuda(){

    }

    public static void main(String[] args) {

        Pessoa pessoa1 = new Pessoa();
        pessoa1.nome = "felipe";
        System.out.println(pessoa1.toString());

        Vendedor vendedor = new Vendedor();

        vendedor.setNomeCompleto("Felipe Santana");
        vendedor.setEmail("felipe@gmail.com");
        vendedor.setSenha("123456");

        Produtos produto = new Produtos("Pizza",29.90,"Uma das melhores pizzas",false,true);
        vendedor.setProdutos(produto);

        System.out.println(vendedor.toString());
    }
}
