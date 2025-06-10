# Integrantes

David Lopes Bezerra de Oliveira - 2312130068

# BookTrackerReact

Aplicação React para gerenciamento de livros, com autenticação básica e integração com uma API REST simulada via JSON Server.

---

## Funcionalidades Principais

- Cadastro e login de usuários com autenticação simples.
- Cadastro de livros com título, autor, categoria, avaliação (rating) e resenha.
- Listagem dinâmica dos livros cadastrados, filtrada por usuário autenticado.
- Edição e exclusão de livros.
- Rotas protegidas para acesso a páginas restritas.
- Estado global da aplicação gerenciado via Context API.
- Integração com backend fake usando JSON Server para persistência dos dados.
- Estilização responsiva com CSS Modules para boa experiência em dispositivos variados.

---

## Tecnologias Utilizadas

- React (React Router, Context API)
- JSON Server (API REST simulada)
- CSS Modules
- JavaScript (ES6+)

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão recomendada >= 14)
- npm ou yarn instalado

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/DavidLBO/BookTrackerReact.git
   cd BookTrackerReact
   ```

2. Instale as dependências do projeto React:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Instale globalmente o JSON Server (se ainda não tiver):
   ```bash
   npm install -g json-server
   ```

4. Inicie o servidor JSON Server para simular a API REST:
   ```bash
   npm run start:api
   ```
   > O backend estará disponível em [http://localhost:3001](http://localhost:3001)

5. Em outro terminal, inicie a aplicação React:
   ```bash
   npm run preview
   # ou
   yarn preview
   ```

6. A aplicação abrirá automaticamente no navegador no localhost indicado.

---

## Estrutura de Pastas

- `/src` - Código fonte da aplicação React  
- `/src/components` - Componentes reutilizáveis  
- `/src/pages` - Páginas principais da aplicação  
- `/src/context` - Contextos para estado global  
- `/public` - Arquivos públicos e index.html  
- `db.json` - Banco de dados simulado pelo JSON Server

---

## Uso

- Crie uma conta no formulário de cadastro.
- Faça login com seu usuário criado.
- Navegue até a página de livros para adicionar ou deletar seus livros pessoais.
- Assegure que o JSON Server esteja rodando para persistência dos dados.
- Para esta aplicação o .env será disponibilizado em prol de facilitar o acesso do professor

---

## Contato

Para dúvidas ou contribuições, abra uma issue ou envie um pull request no repositório.

---

Obrigado por usar o BookTrackerReact!  
