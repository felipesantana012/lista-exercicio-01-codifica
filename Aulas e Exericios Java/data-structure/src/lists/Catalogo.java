package lists;

import java.util.ArrayList;
import java.util.List;

public class Catalogo {

  private List<Produto> produto;

  public Catalogo(){
      this.produto = new ArrayList<>();
  }

  public void addProduto(Produto produto){
      this.produto.add(produto);
  }

    public void mostrarProdutos(){
        this.produto.forEach(prod -> {
            System.out.println("ID : " + prod.getId());
            System.out.println("Nome : " + prod.getNome());
            System.out.println("Preco : " + prod.getPreco());
            System.out.println();
        });
   }
}
