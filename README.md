# Sistema de Gerenciamento de Biblioteca

## Sobre o projeto

Sistema de gerenciamento de biblioteca desenvolvido em JavaScript com Node.js como atividade avaliativa do curso SCTEC. A aplicação permite consultar livros, controlar a disponibilidade, realizar empréstimos e devoluções e gerar estatísticas do acervo.

## Objetivo

Praticar os principais conceitos de JavaScript estudados no Módulo 01, incluindo lógica de programação, tipos de dados, condicionais, operadores, laços de repetição, funções, arrays, objetos, classes, módulos e controle de versão com Git e GitHub.

## Funcionalidades

- Listar todos os livros cadastrados.
- Buscar um livro pelo título.
- Listar livros disponíveis.
- Cadastrar novos livros.
- Realizar empréstimos.
- Registrar devoluções.
- Exibir estatísticas da biblioteca.

## Tecnologias utilizadas

- JavaScript
- Node.js
- prompt-sync
- Git e GitHub

## Como executar

1. Instale o Node.js.
2. Clone o repositório e abra a pasta do projeto no terminal.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o sistema:

   ```bash
   npm start
   ```

## Estrutura do projeto

- `index.js`: menu principal do sistema.
- `Livro.js`: classe que representa um livro.
- `dadosLivros.js`: array com os dados iniciais dos livros.
- `listarLivros.js`: lista todos os livros.
- `buscarLivro.js`: busca livros pelo título.
- `listarDisponiveis.js`: lista os livros disponíveis.
- `cadastrarLivro.js`: cadastra novos livros.
- `realizarEmprestimo.js`: realiza empréstimos.
- `realizarDevolucao.js`: registra devoluções.
- `exibirEstatisticas.js`: apresenta as estatísticas do acervo.
- `package.json`: configura o projeto e o comando de execução.
- `README.md`: documentação do projeto.

## Observação

Os novos livros cadastrados e as alterações de disponibilidade ficam em memória e são reiniciados quando o programa é encerrado.

## Autoria

Desenvolvido por Márcia Figueiró Kalamarz como atividade avaliativa do SCTEC.
