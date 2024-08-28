package abstracao;
public class CartaoCredito extends PaymentMethod {

    private String numberCard;
    private String name;
    private int expirationYear;
    private String code;
    private double limit;
    private int installment;

    public CartaoCredito(String numberCard, String name, String code, int expirationYear, double limit, int installment) {
        this.numberCard = numberCard;
        this.name = name;
        this.code = code;
        this.expirationYear = expirationYear;
        this.limit = limit;
        this.installment = installment;
    }

    @Override
    public void processPayment(double value) {
        if (validatePayment() && this.limit >= value && this.installment > 0) {
            double installmentValue = value / this.installment;
            System.out.println("Pagamento de " + value + " realizado com sucesso! Via cartão");
            System.out.println(this.installment + " x de " + installmentValue);
        } else {
            System.out.println("Falha ao realizar pagamento");
        }
    }

    @Override
    public boolean validatePayment() {
        return this.numberCard.length() == 16 &&
                this.code.length() == 3 &&
                !this.name.equals("") &&
                this.expirationYear >= 2024;
    }
}