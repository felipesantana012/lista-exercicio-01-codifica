package heranca;

public abstract class Employee {

    protected String nome;
    protected double salario;

    public Employee(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract void toWork();

    public static void main(String[] args) {
        Manager manager = new Manager("Felipe", 1000);

        System.out.println(manager.salario);
    }
}
