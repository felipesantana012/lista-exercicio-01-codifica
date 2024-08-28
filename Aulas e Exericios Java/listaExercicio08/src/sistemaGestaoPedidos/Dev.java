package sistemaGestaoPedidos;

public class Dev extends Funcionario{

    private int ticketsConcluidas;

    public Dev(String nome, String matricula, double salario, Cargo cargo, int ticketsConcluidas) {
        super(nome, matricula, salario, cargo);
        this.ticketsConcluidas = ticketsConcluidas;
        salarioFinal();
    }

    private void calcularSalarioDev(){
        if(this.ticketsConcluidas > 10){
            this.salario += ((bonus / 100) * salario) + ticketsConcluidas * 10;
        }else{
            this.salario += ((bonus / 100) * salario);
        }
    }

    @Override
    protected void salarioFinal() {
        calcularSalarioDev();
    }
}
