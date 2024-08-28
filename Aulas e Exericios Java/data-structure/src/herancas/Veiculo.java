package herancas;

public class Veiculo {

    public String fabricante;
    public String modelo;
    public String tipo;
    public String anoFabricacao;
    private String chassi;

    public Veiculo(String fabricante, String modelo, String tipo, String anoFabricacao, String chassi) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.tipo = tipo;
        this.anoFabricacao = anoFabricacao;
        this.chassi = chassi;
    }

    void ligar (){
        System.out.println("Veiculo esta ligado");
    }
}
