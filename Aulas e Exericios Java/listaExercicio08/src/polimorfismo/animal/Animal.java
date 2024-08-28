package polimorfismo.animal;

public abstract class Animal {

     abstract void emitSound();

     public static void main(String[] args) {
          Dog dog = new Dog();
          Cat cat = new Cat();
          Cow cow = new Cow();
          Animal[] animal = {
                  dog,
                  cat,
                  cow
          };

          for (Animal a : animal){
               a.emitSound();
          }
     }
}
