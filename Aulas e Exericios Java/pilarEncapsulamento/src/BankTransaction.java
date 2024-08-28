public class BankTransaction implements Transaction {

    private final BankAccount account;
    private final TransactionType transactionType;
    private double amount;


    public BankTransaction(BankAccount account, double amount, TransactionType transactionType) {
        this.account = account;
        this.amount = amount;
        this.transactionType = transactionType;
        execute();
    }

    @Override
    public void execute() {
        switch (this.transactionType){
            case DEPOSIT -> this.account.deposit(this.amount);
            case WITHDRAW -> this.account.withdraw(this.amount);
        }
    }

    @Override
    public String getDetails() {
        return String.format("Transação do tipo: %s Com o valor de: %.2f Na conta: %s Saldo final %.2f",
                this.transactionType, this.amount, this.account.getAccountNumber(), this.account.getBalance());
    }
}
