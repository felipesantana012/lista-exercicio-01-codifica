package heranca;

public class Developer extends  Employee{

    public Developer(String nome, double salario) {
        super(nome, salario += salario * 0.10);
    }

    @Override
    void toWork() {
        System.out.println("Estou Desenvolvendo");
    }
}
