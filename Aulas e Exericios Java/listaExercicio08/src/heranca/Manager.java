package heranca;

public class Manager extends Employee{

    public Manager(String nome, double salario) {
        super(nome, salario += salario * 0.20);
    }

    @Override
    void toWork() {
        System.out.println("Estou Gerenciando!");
    }
}
