# Auth API (NestJS + Prisma + JWT)

## 📋 Sobre o Projeto

Este projeto é uma API RESTful robusta desenvolvida para gerenciar autenticação e autorização de usuários. Construída com **NestJS**, ela segue uma arquitetura modular e escalável, ideal para aplicações Enterprise.

O objetivo principal é fornecer um serviço de identidade seguro, implementando as melhores práticas de segurança, como hash de senhas e tokens JWT (JSON Web Tokens).

## 🚀 Tecnologias Utilizadas

*   **NestJS**: Framework Node.js progressivo para construção de aplicações server-side eficientes e escaláveis.
*   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
*   **Prisma ORM**: ORM moderno para Node.js e TypeScript.
*   **PostgreSQL**: Banco de dados relacional.
*   **Passport & JWT**: Estratégias de autenticação.
*   **Jest**: Framework de testes.

## 🏛️ Arquitetura e Design

O projeto segue a arquitetura modular do NestJS, separando responsabilidades em:

*   **Controllers**: Gerenciam as requisições HTTP.
*   **Services**: Contêm a regra de negócio.
*   **Modules**: Organizam o código em domínios coesos (ex: `AuthModule`, `UserModule`).
*   **Guards & Decorators**: Utilizados para proteger rotas e validar permissões de acesso.

## 🛠️ Instalação e Execução

### Pré-requisitos

*   Node.js (v18+)
*   Docker (opcional, para o banco de dados)

### Passos

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/Willianson5522/auth-api.git
    cd auth-api
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente**
    Crie um arquivo `.env` na raiz do projeto e configure a URL do banco de dados:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
    JWT_SECRET="sua_chave_secreta"
    ```

4.  **Execute as migrações do Prisma**
    ```bash
    npx prisma migrate dev
    ```

5.  **Inicie o servidor**
    ```bash
    # Desenvolvimento
    npm run start:dev

    # Produção
    npm run start:prod
    ```

## 🧪 Testes

O projeto inclui testes unitários e e2e configurados com Jest.

```bash
# Testes unitários
npm run test

# Cobertura de testes
npm run test:cov
```
