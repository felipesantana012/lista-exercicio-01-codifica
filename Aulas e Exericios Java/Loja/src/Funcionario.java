public class Funcionario extends Usuario{

    public Proficao proficao;
    public String matricula;

    public Funcionario(String nome, String email, String senha, Endereco endereco, Proficao proficao, String matricula) {
        super(nome, email, senha, endereco);
        this.proficao = proficao;
        this.matricula = matricula;
    }

    @Override
    public void exibirInfo() {
        System.out.println("Funcionario{" +
                "proficao=" + proficao +
                ", matricula='" + matricula + '\'' +
                ", nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", endereco=" + endereco +
                '}');
    }


}
