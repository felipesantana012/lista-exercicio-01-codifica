package sistemaGestaoPedidos;

public class Estagiario extends Funcionario{

    private int ticketsConcluidas;
    private int periodoFacudade;

    public Estagiario(String nome, String matricula, double salario, Cargo cargo, int ticketsConcluidas, int periodoFacudade) {
        super(nome, matricula, salario, cargo);
        this.ticketsConcluidas = ticketsConcluidas;
        this.periodoFacudade = periodoFacudade;
        salarioFinal();
    }

    private void calcularSalarioEstagiario(){
        if(this.ticketsConcluidas > 5){
            this.salario += ((bonus / 100) * salario) + ticketsConcluidas * periodoFacudade;
        }else{
            this.salario += ((bonus / 100) * salario);
        }
    }

    @Override
    protected void salarioFinal() {
        calcularSalarioEstagiario();
    }
}
