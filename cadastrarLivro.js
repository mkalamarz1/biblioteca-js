
import promptSync from "prompt-sync";
import { dadosLivros } from "./dadosLivros.js";
import { Livro } from "./Livro.js";

const prompt = promptSync();

export function cadastrarLivro() {
  console.log("\n=== CADASTRAR LIVRO ===");

  const titulo = prompt("Título: ").trim();
  const autor = prompt("Autor: ").trim();
  const categoria = prompt("Categoria: ").trim();
  const paginas = Number(prompt("Número de páginas: "));

  if (!titulo || !autor || !categoria || !Number.isInteger(paginas) || paginas <= 0) {
    console.log("Dados inválidos. Tente novamente.");
    return;
  }

  const novoLivro = new Livro(
    titulo,
    autor,
    categoria,
    paginas,
    true
  );

  dadosLivros.push(novoLivro);

  console.log("Livro cadastrado com sucesso!");
}
