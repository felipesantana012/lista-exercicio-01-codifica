package sistemaGestaoPedidos;

public class Gerente extends Funcionario{

    private int projetosGerenciados;

    public Gerente(String nome, String matricula, double salario, Cargo cargo,int projetosGerenciados) {
        super(nome, matricula, salario, cargo);
        this.projetosGerenciados = projetosGerenciados;
        salarioFinal();
    }

    private void calcularSalarioGerente(){
        if (projetosGerenciados > 2) {
            this.salario += ((bonus / 100) * salario) + projetosGerenciados * 100;
        } else {
            this.salario += ((bonus / 100) * salario);
        }
    }

    @Override
    protected void salarioFinal() {
        calcularSalarioGerente();
    }


}
