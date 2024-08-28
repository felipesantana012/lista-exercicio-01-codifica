//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        BankAccount bankAccount = new BankAccount("123456", 501.0);
//        BankTransaction bankTransaction = new BankTransaction(bankAccount, 1000,TransactionType.DEPOSIT);

        BankTransaction bankTransaction1 = new BankTransaction(bankAccount, 100, TransactionType.WITHDRAW);

        System.out.println(bankTransaction1.getDetails());
    }
}