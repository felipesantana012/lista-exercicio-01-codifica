import lists.Catalogo;
import lists.Produto;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Catalogo catalogo = new Catalogo();

        catalogo.addProduto(new Produto(1,"Xbox", 1900.90));
        catalogo.addProduto(new Produto(2,"Play", 2100.00));
        catalogo.mostrarProdutos();



    }
}