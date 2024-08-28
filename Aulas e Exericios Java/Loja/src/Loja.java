import java.util.ArrayList;
import java.util.List;

public class Loja {
    public List<Funcionario> funcionario;

    public Loja() {
        this.funcionario = new ArrayList<>();
    }

    public void aumento(Funcionario funcionario){
            funcionario.proficao.salario += funcionario.proficao.salario * 0.10;
    }

    public void exibirFuncionarios(){
        System.out.println("Funcionarios na Loja");
      for(Funcionario fun : funcionario){
          System.out.println("Nome : " + fun.nome);
          System.out.println("Matricula : " + fun.matricula);
          System.out.println("Cargo : " + fun.proficao.nomeProficao);
          System.out.println("Salario : " + fun.proficao.salario);
          System.out.println("-----------------");

      }
    }
}
