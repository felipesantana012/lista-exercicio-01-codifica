package herancas;

public class Carro extends Veiculo{

    public boolean travaEletrica;
    public int portas;


    public Carro(String fabricante, String modelo, String tipo, String anoFabricacao, String chassi, boolean travaEletrica, int portas) {
        super(fabricante, modelo, tipo, anoFabricacao, chassi);
        this.travaEletrica = travaEletrica;
        this.portas = portas;
    }


    void trocarMarchar(){
        System.out.println("Marcha trocada com sucesso.");

    }


}
