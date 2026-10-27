
import { dadosLivros } from "./dadosLivros.js";

export function realizarDevolucao(titulo) {
  const livroEncontrado = dadosLivros.find(
    (livro) =>
      livro.titulo.toLowerCase() === titulo.trim().toLowerCase()
  );

  if (livroEncontrado) {
    livroEncontrado.disponivel = true;
    console.log("Livro devolvido com sucesso!");
  } else {
    console.log("Livro não encontrado!");
  }
}
