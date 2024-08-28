package sistemaGestaoPedidos;

import java.util.ArrayList;
import java.util.List;

public abstract class Funcionario {

    protected String nome;
    protected String matricula;
    protected double salario;
    protected Cargo cargo;
    protected double bonus;

    public Funcionario(String nome, String matricula, double salario, Cargo cargo) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
        this.cargo = cargo;
        setBonus();
    }

    private void setBonus(){
        switch (this.cargo){
            case GERENTE -> {
                this.bonus = 30;
            }
            case DEV -> {
                this.bonus = 20;
            }
            case ESTAGIRARIO -> {
                this.bonus = 10;
            }
        }
    }

    protected abstract void salarioFinal();

    public double getSalario() {
        return salario;
    }
}
