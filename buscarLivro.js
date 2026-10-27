
import { dadosLivros } from "./dadosLivros.js";

export function buscarLivro(titulo) {
  const livroEncontrado = dadosLivros.find(
    (livro) =>
      livro.titulo.toLowerCase() === titulo.trim().toLowerCase()
  );

  if (livroEncontrado) {
    console.log("\n=== LIVRO ENCONTRADO ===");
    console.log(`Título: ${livroEncontrado.titulo.toUpperCase()}`);
    console.log(`Autor: ${livroEncontrado.autor}`);
    console.log(`Categoria: ${livroEncontrado.categoria}`);
    console.log(`Páginas: ${livroEncontrado.paginas}`);
    console.log(
      `Disponibilidade: ${
        livroEncontrado.disponivel ? "Disponível" : "Indisponível"
      }`
    );
  } else {
    console.log("Livro não encontrado!");
  }
}
