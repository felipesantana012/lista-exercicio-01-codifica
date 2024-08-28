public class Proficao {
    public String nomeProficao;
    public double salario;

    public Proficao(String nomeProficao, double salario) {
        this.nomeProficao = nomeProficao;
        this.salario = salario;
    }

    public void exibirProficao() {
        System.out.println( "Proficao{" +
                "nomeProficao='" + nomeProficao + '\'' +
                ", salario=" + salario +
                '}');
    }
}
