package herancas;

public class Gerente extends Funcionario{

    String area;

    public Gerente(String nome, String matricula, Double salario, String area) {
        super(nome, matricula, salario);
        this.area = area;
    }
}
