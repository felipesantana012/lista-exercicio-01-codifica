package polimorfismo.animal;

public class Dog extends Animal{
    @Override
    void emitSound() {
        System.out.println("Cachorro : AU AU AU");
    }
}
