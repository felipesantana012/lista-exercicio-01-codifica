package polimorfismo;

public class Car implements ITransport{
    @Override
    public void accelerate() {
        System.out.println("Carro esta acelerando");
    }

    @Override
    public void brake() {
        System.out.println("Carro esta freiando");
    }
}
