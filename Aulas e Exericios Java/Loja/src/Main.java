//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {


        Endereco endereco = new Endereco("doutor orlando cabral", "45", "Centro", "Jaboatao", "Pernambuco", "54080300");

        Proficao proficao = new Proficao("dev", 2000.0);
        Proficao proficao2 = new Proficao("QA", 2800.0);
        Proficao proficao3 = new Proficao("Gerente", 8500.0);

        Funcionario funcionario1 = new Funcionario("Felipe", "felipe@gmail.com","123456",endereco,proficao,"40028922");
        Funcionario funcionario2 = new Funcionario("Thiago", "thiago@gmail.com","888999",endereco,proficao2,"988756");
        Funcionario funcionario3 = new Funcionario("Sarah", "sarah@gmail.com","321",endereco,proficao3,"99933");

        funcionario1.login("felipe@gmail.com","123456");

        Loja loja = new Loja();

        loja.funcionario.add(funcionario1);
        loja.aumento(funcionario1);
        loja.funcionario.add(funcionario2);
        loja.funcionario.add(funcionario3);

        loja.exibirFuncionarios();

    }
}