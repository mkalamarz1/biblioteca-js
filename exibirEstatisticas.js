
import { dadosLivros } from "./dadosLivros.js";

export function exibirEstatisticas() {
  const totalLivros = dadosLivros.length;

  const livrosDisponiveis = dadosLivros.filter(
    (livro) => livro.disponivel
  ).length;

  const livrosIndisponiveis = totalLivros - livrosDisponiveis;

  const totalPaginas = dadosLivros.reduce(
    (total, livro) => total + livro.paginas,
    0
  );

  const mediaPaginas =
    totalLivros > 0 ? totalPaginas / totalLivros : 0;

  console.log("\n=== ESTATÍSTICAS DA BIBLIOTECA ===");
  console.log(`Total de livros: ${totalLivros}`);
  console.log(`Livros disponíveis: ${livrosDisponiveis}`);
  console.log(`Livros indisponíveis: ${livrosIndisponiveis}`);
  console.log(`Total de páginas: ${totalPaginas}`);
  console.log(`Média de páginas por livro: ${mediaPaginas.toFixed(2)}`);
}
