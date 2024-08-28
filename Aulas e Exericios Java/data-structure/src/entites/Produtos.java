package entites;

public class Produtos {

    private String nome;
    private Double valor;
    private String descricao;
    private boolean promocaoDia;
    private boolean disponivel;

    public Produtos(String nome, Double valor, String descricao, boolean promocaoDia, boolean disponivel) {
        this.nome = nome;
        this.valor = valor;
        this.descricao = descricao;
        this.promocaoDia = promocaoDia;
        this.disponivel = disponivel;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public boolean isPromocaoDia() {
        return promocaoDia;
    }

    public void setPromocaoDia(boolean promocaoDia) {
        this.promocaoDia = promocaoDia;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }

    @Override
    public String toString() {
        return "Produtos{" +
                "nome='" + nome + '\'' +
                ", valor=" + valor +
                ", descricao='" + descricao + '\'' +
                ", promocaoDia=" + promocaoDia +
                ", disponivel=" + disponivel +
                '}';
    }
}
