# API Solid Book Rental

A **API Solid Book Rental** é uma API REST desenvolvida para gerenciar o aluguel de livros. O projeto segue os princípios SOLID, garantindo uma arquitetura limpa, escalável e fácil de manter. Ele oferece funcionalidades completas de CRUD para usuários, categorias e livros, além de ser preparado para testes unitários e rodar em um ambiente Docker.

## 🚀 **Funcionalidades**

- **CRUD de Usuários**:
  - Cadastro, listagem, edição e exclusão de usuários.
- **CRUD de Categorias**:
  - Gerenciamento de categorias para organização dos livros.
- **CRUD de Livros**:
  - Cadastro, atualização, listagem e remoção de livros do catálogo.
- **Princípios SOLID**:
  - Utilização de boas práticas de design para garantir qualidade e manutenibilidade do código.

## 🛠️ **Tecnologias Utilizadas**

- **Linguagem**: TypeScript
- **Framework**: Express
- **Arquitetura**: Princípios SOLID
- **Testes**: Jest (testes unitários)
- **Containerização**: Docker (Docker Compose)

## 🧱 **Estrutura do Código**

- **Organização Modular**:
  - Segue o padrão de camadas (controllers, services, repositories).
  - Utiliza injeção de dependência para desacoplamento de classes.
- **Testes Automatizados**:
  - Cobertura para operações CRUD e regras de negócio utilizando Jest.
- **Docker**:
  - O projeto está pronto para ser executado em containers Docker, facilitando o setup do ambiente.

## 🚀 **Como Rodar o Projeto**

### Pré-requisitos

- **Docker**: Certifique-se de ter o Docker e Docker Compose instalados.

### Passos para Iniciar

1. Clone este repositório:
   ```bash
   git clone https://github.com/jeffaugg/Api-solid-book-rental.git
   cd Api-solid-book-rental
   ```

2. Construa e inicie os containers:
   ```bash
   docker-compose up --build
   ```

3. A API estará disponível em:
   ```
   http://localhost:3000
   ```

### Variáveis de Ambiente

Certifique-se de configurar um arquivo .env com as seguintes variáveis:
```
PORT=3000
DATABASE_URL=<URL_DO_BANCO_DE_DADOS>
```

### 🧪 Testes

Os testes unitários são escritos com Jest. Para executar os testes:

1. Acesse o container da API:
   ```bash
   docker exec -it <nome-do-container> sh
   ```

2. Rode os testes:
   ```bash
   npm test
   ```

### 📋 Endpoints da API

- Usuários
- Categorias
- Livros

### 🖥️ Demonstração

Você pode testar a API usando ferramentas como Postman ou Insomnia. Exemplos de requisições serão adicionados em breve.

### 🛡️ Licença

Este projeto está licenciado sob a MIT License.
