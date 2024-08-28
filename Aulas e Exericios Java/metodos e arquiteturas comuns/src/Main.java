//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

    Geometria geo = new Geometria();
    double areaRetangulo = geo.calcularAreaRetangulo(5,10);
    System.out.println(areaRetangulo);


    ContaBancaria conta = new ContaBancaria();
    conta.adicionarSaldo(500);
    System.out.println(conta.consutarSaldo());

   double resultado =  Geometria.multiplicar(10,10);
        System.out.println(resultado);

    }
}