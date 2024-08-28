package entites;

public class Vendedor {

    private String email;
    private String senha;
    private String nomeCompleto;
    private Produtos produtos;

    public String getEmail() {
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }

    public Produtos getProdutos() {
        return produtos;
    }

    public void setProdutos(Produtos produtos) {
        this.produtos = produtos;
    }


    @Override
    public String toString() {
        return "Vendedor{" +
                "email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", nomeCompleto='" + nomeCompleto + '\'' +
                ", produtos=" + produtos +
                '}';
    }
}
