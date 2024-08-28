package abstracao;

public class Pix extends PaymentMethod{

    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void processPayment(double value) {
        if (validatePayment()) {
            System.out.println("Pagamento de R$" + value + " realizado com sucesso via Pix.");
        } else {
            System.out.println("Chave Pix inválida. Pagamento não processado.");
        }
    }

    @Override
    public boolean validatePayment() {
        return chavePix.length() > 0;
    }
}
