package polimorfismo;

public class Train implements ITransport{
    @Override
    public void accelerate() {
        System.out.println("Estou acelerando o trem");
    }

    @Override
    public void brake() {
        System.out.println("Estou freiando o trem");
    }
}
