package abstracao;

import java.util.Date;

public abstract class PaymentMethod {


    public abstract void processPayment(double value);
    public abstract boolean validatePayment();

    public static void main(String[] args) {
        CartaoCredito cartao = new CartaoCredito("1234567891234567","felipe santana", "123",2025,1000,2);
        cartao.processPayment(900);

        Boleto boleto = new Boleto("21/08/2024", "1234567");
        boleto.processPayment(80);

        Pix pix = new Pix("123");
        pix.processPayment(90);


    }
}
