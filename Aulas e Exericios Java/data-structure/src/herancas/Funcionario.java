package herancas;

abstract class Funcionario {

    String nome;
    String matricula;
    Double salario;

    public Funcionario(String nome, String matricula, Double salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }
}
