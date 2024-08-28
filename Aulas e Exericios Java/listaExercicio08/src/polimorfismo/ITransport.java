package polimorfismo;

public interface ITransport {

    void accelerate();
    void brake();

    public static void main(String[] args) {

        ITransport[] transport = {
                new Car(),
                new Bike(),
                new Train()
        };

        for (ITransport t : transport){
            t.accelerate();
            t.brake();
        }
    }
}
