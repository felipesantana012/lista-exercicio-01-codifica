package encapsulamento;

public class Product {

    private String name;
    private double price;
    private int stockQuantity;

    public Product(String name, double price, int stockQuantity) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price > 0) {
            this.price = price;
        }else {
            throw new IllegalArgumentException("O preco deve ser positivo.");
        }
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setAmount(int stockQuantity) {
        if (stockQuantity > 0) {
            this.stockQuantity = stockQuantity;
        }else {
            throw new IllegalArgumentException("A quantidade deve ser positivo.");
        }
    }

    public double applyDiscount(double percentage){
        if (percentage <=50){
            return this.price -= percentage * this.price / 100;
        }
        else {
            throw new IllegalArgumentException("A porcentagem não pode ser maior que 50");
        }

    }

    public static void main(String[] args) {

    Product product1 = new encapsulamento.Product("xbox", 2000, 2);
    product1.applyDiscount(50);
    System.out.println(product1.getPrice());

    }
}
