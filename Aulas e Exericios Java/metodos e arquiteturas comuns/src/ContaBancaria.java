public class ContaBancaria {

    private double saldo;

    public void adicionarSaldo(double valor) {
        this.saldo += valor;
    }

    public double consutarSaldo() {
        return saldo;
    }
}
