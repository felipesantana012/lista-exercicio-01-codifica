package herancas;

public class Desenvolvedor extends Funcionario{

    String linguagem;

    public Desenvolvedor(String nome, String matricula, Double salario, String linguagem) {
        super(nome, matricula, salario);
        this.linguagem = linguagem;
    }
}
