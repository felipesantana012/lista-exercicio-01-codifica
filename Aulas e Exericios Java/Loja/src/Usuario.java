public abstract class Usuario {

    public String nome;
    public String email;
    public String senha;
    public Endereco endereco;

    public Usuario(String nome, String email, String senha, Endereco endereco) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
    }

    public void login(String email, String senha){
        if (email.equals(this.email) && senha.equals(this.senha)){
            System.out.println("Usuario logado com sucesso");
            System.out.println("Bem vindo " + this.nome);
        }else{
            System.out.println("Emial ou senha invalidos.");
        }
    }

   public abstract void exibirInfo();
}
