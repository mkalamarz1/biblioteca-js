
import promptSync from "prompt-sync";
import { listarLivros } from "./listarLivros.js";
import { buscarLivro } from "./buscarLivro.js";
import { listarDisponiveis } from "./listarDisponiveis.js";
import { cadastrarLivro } from "./cadastrarLivro.js";
import { realizarEmprestimo } from "./realizarEmprestimo.js";
import { realizarDevolucao } from "./realizarDevolucao.js";
import { exibirEstatisticas } from "./exibirEstatisticas.js";

const prompt = promptSync();

let opcao;

do {
  console.log("\n==============================");
  console.log("     SISTEMA DE BIBLIOTECA");
  console.log("==============================");
  console.log("1 - Listar livros");
  console.log("2 - Buscar livro");
  console.log("3 - Listar livros disponíveis");
  console.log("4 - Cadastrar livro");
  console.log("5 - Realizar empréstimo");
  console.log("6 - Realizar devolução");
  console.log("7 - Exibir estatísticas");
  console.log("0 - Sair");

  opcao = prompt("Escolha uma opção: ").trim();

  switch (opcao) {
    case "1":
      listarLivros();
      break;

    case "2": {
      const titulo = prompt("Digite o título do livro: ");
      buscarLivro(titulo);
      break;
    }

    case "3":
      listarDisponiveis();
      break;

    case "4":
      cadastrarLivro();
      break;

    case "5": {
      const titulo = prompt("Digite o título do livro para empréstimo: ");
      realizarEmprestimo(titulo);
      break;
    }

    case "6": {
      const titulo = prompt("Digite o título do livro para devolução: ");
      realizarDevolucao(titulo);
      break;
    }

    case "7":
      exibirEstatisticas();
      break;

    case "0":
      console.log("Sistema encerrado. Até logo!");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== "0");
