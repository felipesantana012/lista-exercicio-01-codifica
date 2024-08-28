package abstracao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Boleto extends PaymentMethod {

    private String barcode;
    private String expiredDate;

    public Boleto(String expiredDate, String barcode) {
        this.expiredDate = expiredDate;
        this.barcode = barcode;
    }

    @Override
    public void processPayment(double value) {
        if (value > 0) {
            if (validatePayment()) {
                System.out.println("Pagamento de " + value + " realizado com sucesso via Boleto.");
            } else {
                System.out.println("Falha ao realizar pagamento: Boleto inválido ou expirado.");
            }
        } else {
            System.out.println("O valor do pagamento deve ser maior que zero.");
        }
    }

    @Override
    public boolean validatePayment() {
        Date hoje = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");

        try {
            Date dataPassada = formatter.parse(this.expiredDate);

            if (hoje.after(dataPassada) || this.barcode.length() != 7) {
                return false;
            }
            return true;
        } catch (ParseException e) {
            System.out.println("Erro ao validar o pagamento: Data de expiração inválida.");
            return false;
        }
    }
}
