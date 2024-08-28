package sistemaGestaoPedidos;

import java.util.ArrayList;
import java.util.List;

public class Empresa {

    private List<Funcionario> funcionario;
    private double despesa;

    public Empresa(){
        this.funcionario = new ArrayList<>();
    }

    public void addFuncionario(Funcionario funcionario){
        if (funcionario != null){
            this.funcionario.add(funcionario);
        }
    }
    public List<Funcionario> getFuncionarios() {
        return new ArrayList<>(this.funcionario);
    }

    public double getDespesa(){
        this.despesa =
                getFuncionarios().
                stream().map(Funcionario::getSalario).
                reduce((double) 0,Double::sum);
                return this.despesa;
    }

    // Função personalizada para formatar e imprimir informações
    public void listarFuncionarios() {
        funcionario.stream()
                .forEach(this::imprimirFuncionario);
    }

    private void imprimirFuncionario(Funcionario f) {
        String info = String.format("Nome: %s, Matrícula: %s, Salário: %.2f, Cargo: %s, Bonus: %.0f ",
                f.nome, f.matricula, f.salario, f.cargo, f.bonus);
        System.out.println(info);
    }


    public static void main(String[] args) {

        Gerente gerente = new Gerente("Felipe","123",2000,Cargo.GERENTE,3);


        Dev dev = new Dev("thiago","3214",1500,Cargo.DEV,11);


        Estagiario estagiario = new Estagiario("Sarah", "4488", 1000,Cargo.ESTAGIRARIO, 6,2);



        Empresa empresa = new Empresa();
        empresa.addFuncionario(gerente);
        empresa.addFuncionario(dev);
        empresa.addFuncionario(estagiario);

        System.out.println("Valor total salario dos funcionarios : " + empresa.getDespesa());

        empresa.listarFuncionarios();

    }
}
