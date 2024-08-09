import { urlUser } from "./urls.js";

export const authenticateUser = async (email, senha) => {
  const response = await fetch(urlUser, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Falha na autenticação");
  }

  const data = await response.json();
  const user = data.find(
    (user) => user.email === email && user.senha === senha
  );
  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  return user;
};
