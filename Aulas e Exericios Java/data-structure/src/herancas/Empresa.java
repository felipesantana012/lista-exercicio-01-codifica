package herancas;

import java.util.ArrayList;
import java.util.List;

public class Empresa {

    public List<Funcionario> funcionario;

    public Empresa() {
        this.funcionario = new ArrayList<>();
    }

    public Double calcularSalario(){
        double total = 0;
        for (Funcionario funcionario1 : funcionario) {
            total += funcionario1.salario;
        }
      return total;
    }

    public static void main(String[] args) {
        Gerente gerente1 = new Gerente("Felipe","123456",2900.0,"Finaceiro");
        Desenvolvedor dev1 = new Desenvolvedor("thiago","222333",1800.90,"NodeJS");

        Empresa empresa = new Empresa();
        empresa.funcionario.add(gerente1);
        empresa.funcionario.add(dev1);
        System.out.println(empresa.calcularSalario());
    }
}
