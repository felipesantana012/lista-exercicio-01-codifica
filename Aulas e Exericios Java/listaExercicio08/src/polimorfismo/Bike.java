package polimorfismo;

public class Bike implements ITransport{
    @Override
    public void accelerate() {
        System.out.println("Estou pedalando a bicicleta");
    }

    @Override
    public void brake() {
        System.out.println("Estou freiando a bicicleta");
    }
}
