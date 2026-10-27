
import { dadosLivros } from "./dadosLivros.js";

export function listarLivros() {
  console.log("\n=== LISTA DE LIVROS ===");

  dadosLivros.forEach((livro) => {
    console.log("-------------------------");
    console.log(`Título: ${livro.titulo.toUpperCase()}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log(`Páginas: ${livro.paginas}`);
    console.log(
      `Disponibilidade: ${livro.disponivel ? "Disponível" : "Indisponível"}`
    );
  });

  console.log("-------------------------");
}
